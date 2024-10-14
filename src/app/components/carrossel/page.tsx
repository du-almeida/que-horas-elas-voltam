// components/ImageCarousel.jsx
import { Image } from '@nextui-org/react';
import React from 'react';


const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = 
    // '/img/imagem1.jpg'
//     '/img/imagem2.jpg',
//     '/img/imagem3.jpg',
    '/img/imagem4.jpg'
//   ];

  return (
   <div className=" imgHome">
     <img src={images} alt="Descrição da imagem"/>
   </div>
    // <Slider {...settings}>
    //   {images.map((src, index) => (
    //     <div key={index}>
    //       <img src={src} alt={`Imagem ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
    //     </div>
    //   ))}
    // </Slider>
  );
};

export default ImageCarousel;

