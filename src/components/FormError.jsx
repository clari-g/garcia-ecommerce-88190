import { useEffect, useState } from 'react'

export const FormError = ({type}) => {
  const [msg, setMsg] = useState('');

  useEffect(()=>{
    switch (type) {
      case 'required':
        setMsg('Completa este campo');
        break;
      case 'minLength':
        setMsg('El campo es demasiado corto');
        break;
      case 'maxLength':
        setMsg('El campo es demasiado largo');
        break;
      case 'validate':
        setMsg('El email debe coincidir');
        break;
    
      default:
        setMsg('');
        break;
    }
  },[type])  

  return (
    <p className='text-danger' style={{position: 'absolute', fontSize: 'small'}}>{msg}</p>
  )
}