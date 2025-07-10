export const productos=[
    // {
    //     id:'01',
    //     name:'FENDER 310202506 Squier Telecaster Affinity Negra',
    //     description:'Guitarra eléctrica de cuerpo solido formato Telecaster con diapasón de Laurel.',
    //     stock:50,
    //     price:560,
    //     category:'instrumentos',
    //     img:'https://i.imgur.com/kd3lSq4.png'
    // },
    {
        //id:'02',
        name:'POWER JBP0901PLA Batería 5 cuerpos',
        description:'Batería completa de 5 cuerpos. Bombo de 22 pulgadas con 8 tensores. Toms de 12 y 13 pulgadas con 5 tensores. Tom de pie de 16 pulgadas con 6 tensores. Redoblante de 14 x 5,5 pulgadas. Soportes y herrajes con terminación en color negro. Cuerpos con ajuste doble tensión.',
        stock:50,
        price:900,
        category:'instrumentos',
        img:'https://i.imgur.com/639Y3eY.png'
    },
    {
        //id:'03',
        name:'ERNIE BALL 2721 Encordado para Guitarra Eléctrica',
        description:'Diseñadas para ofrecer la máxima salida y claridad, las Ernie Ball Cobalt Slinky incorporan los últimos avances tecnológicos. El cobalto se caracteriza por ofrecer un amplio rango dinámico, unos harmónicos increíbles, graves envolventes y agudos muy claros.',
        stock:10,
        price:29,
        category:'accesorios',
        img:'https://i.imgur.com/CelS7Lu.jpeg'
    },
    {
        //id:'04',
        name:'THUNDER DF002 Soporte de Teclado',
        description:'Soporte de teclado tipo tijera de metal. Altura Min 64cm -Max 98cm.Soporta hasta 40 Kg. Color Negro',
        stock:15,
        price:45,
        category:'accesorios',
        img:'https://i.imgur.com/svAV7Ds.jpeg'
    },
    {
        //id:'05',
        name:'FENDER CHAMPION40 Amplificador para Guitarra',
        description:'El Amplificador Fender Champion Series 40 es el compañero perfecto para los guitarristas que buscan un sonido potente y versátil en un diseño compacto y elegante. Con sus 40W de potencia RMS, este amplificador combo te ofrece la fuerza necesaria para ensayos y presentaciones en vivo, mientras que su color negro/plata le da un toque de estilo a tu equipo.',
        stock:5,
        price:837,
        category:'audio',
        img:'https://i.imgur.com/6POyIg0.jpeg'
    },
    {
        //id:'06',
        name:'YAMAHA MG16XU Consola 16 Canales',
        description:'Consolas Analógicas con USB y Efectos 16 canales: 10 mic + 16 line input (8 mono + 4 stereos) 1 bus stereo. 4 AUX. 4 buses de grupo.',
        stock:3,
        price:1263,
        category:'audio',
        img:'https://i.imgur.com/N1HeLPt.jpeg'
    },
    {
        //id:'07',
        name:'LEXSEN 2H2 Doble Micrófono Inalámbrico',
        description:'El par de micrófonos inalámbricos UHF Lexsen 2H2 es ideal para animaciones, conferencias, iglesias, eventos en vivo, karaoke. Cuenta con la fidelidad de la transmisión por UHF que te libera de la conexión por cables sin perder calidad.',
        stock:12,
        price:130,
        category:'audio',
        img:'https://i.imgur.com/8Erztnk.jpeg'
    },
    {
        //id:'08',
        name:'Correa Basso NY01 NYLON NEGRA SINTETICO 5CM',
        description:'Correa sintética negra. Tiene 5 cm de ancho y un forro sintético para no absorber el sudor y doble terminación para mayor durabilidad y seguridad en el instrumento. Longitud ajustable entre 0,85 y 1,50 metros.',
        stock:25,
        price:8,
        category:'accesorios',
        img:'https://i.imgur.com/5EWFOjw.jpeg'
    },
    {
        //id:'09',
        name:'CASIO CTK3500 Teclado 61 Teclas Sensitivo',
        description:'Sumérgete en el mundo de la música con el teclado musical Casio CTK-3500, un instrumento de alta calidad y versatilidad que te permitirá explorar tu creatividad y mejorar tus habilidades. Con sus 61 teclas sensibles al tacto, podrás disfrutar de una experiencia de interpretación más realista y expresiva, adaptándose a tu estilo de tocar.',
        stock:20,
        price:390,
        category:'instrumentos',
        img:'https://i.imgur.com/bjRqHDu.jpeg'
    },
];

export const getProducts = () =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                resolve(productos)
            }
        },2000)
    })
};

export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let product= productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },2000)
    })
};