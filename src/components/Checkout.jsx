import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp, writeBatch, doc } from 'firebase/firestore';
import { db } from '../service/firebase';
import { useForm } from "react-hook-form"
import { Container, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FormError } from './FormError';
import Swal from 'sweetalert2';
import '../css/CartView.scss';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const {cart, cartTotal, clear, localStock} = useContext(CartContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 3000
  })

  useEffect(()=>{
    if (!cart.length) navigate('/');
  },[]);

  const onSubmit = async (data) => {
    Toast.fire({
      icon: 'info',
      title: 'Enviando orden...',
    })

    setLoading(true);

    let order = {
      comprador: {
        name: data.name,
        lastname: data.lastname,
        address: data.address,
        email: data.email
      },
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp()
    };

    const ventas = collection(db, "orders");

    const batch = writeBatch(db);
    
    cart.forEach(prod => {
      const itemRef = doc(db, "products", prod.id);
      batch.update(itemRef, {stock: localStock(prod)});
    });

    try {
      const res = await addDoc(ventas, order);
      await batch.commit();

      setOrderId(res.id);
      clear();
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
      });
      setLoading(false);
    }
  }

  const validateEmail = (value) => {
    return value === getValues('email');
  }

  return (
    <>
    { orderId
      ? <Container fluid="md" className="cartContainer">
          <div className="titleWrapper">
            <h2>¡Orden enviada!</h2>
          </div>
          <div className='text-center'>
            <br />
            <h4>Información de tu compra</h4>
            <h4>Orden ID: {orderId}</h4>
            <br />
            <Button variant="primary" size='lg' as={Link} to={'/'}>Volver al Inicio</Button>
          </div>
        </Container>

      : <Container fluid="md" className="cartContainer">
          <div className="titleWrapper">
            <h3>Complete sus datos</h3>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='formContent'>
              <Form.Group className="mb-4" controlId="formGroupName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" {...register("name", { required: true, minLength: 2 })}
                isInvalid={errors?.name}/>
                
                <FormError type={errors?.name?.type} />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formGroupLastname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido" {...register("lastname", { required: true, minLength: 2 })}
                  isInvalid={errors?.lastname}/>

                <FormError type={errors?.lastname?.type} />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formGroupAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Dirección" {...register("address", { required: true, minLength: 5, maxLength: 40 })}
                isInvalid={errors?.address}/>

                <FormError type={errors?.address?.type} />
              </Form.Group>
            
              <Form.Group className="mb-4" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" {...register("email", { required: true })}
                isInvalid={errors?.email}/>
                
                <FormError type={errors?.email?.type} />
              </Form.Group>
              
              <Form.Group className="mb-4" controlId="formGroupEmailRepeat">
                <Form.Control type="email" placeholder="Repita su email" {...register("emailRepeat", { required: true, validate: validateEmail })}
                isInvalid={errors?.emailRepeat}/>

                <FormError type={errors?.emailRepeat?.type} />
              </Form.Group>
            </div>

            <div className="cartActions">
              <Button variant="danger" size='lg' as={Link} to='/cart' disabled={loading}>Volver</Button>
              <Button variant="primary" size='lg' type='submit' disabled={loading}>Enviar</Button>
            </div>
          </Form>
        </Container>
    }    
    </>
  )
}

export default Checkout