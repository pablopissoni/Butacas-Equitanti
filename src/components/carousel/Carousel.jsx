import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import butaca from '../../../public/images/sillones-lateral-1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import './carousel.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  return (
    <div className='carousel-container'>

    <Swiper
      // install Swiper modules
      className='carousel'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        // Configuración para dispositivos móviles con ancho máximo de 700px
        700: {
          slidesPerView: 2,
          spaceBetween: 300,
        },
        // Configuración para tabletas con ancho máximo de 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 400,
        },
        // Configuración para pantallas más grandes
        1200: {
          slidesPerView: 3,
          spaceBetween: 200,
        },
      }}
    >
      <SwiperSlide>
        <img className="carousel-img" src='../../../public/images/sillones-lateral-1.jpg' alt="sillones laterales" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="carousel-img" src='../../../public/images/sillones-lateral-2.jpg' alt="sillones laterales" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="carousel-img" src='../../../public/images/sillones-frontal-1.jpg' alt="sillones frontales" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="carousel-img" src='../../../public/images/sillones-frontal-2.jpg' alt="sillones frontales" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="carousel-img" src='../../../public/images/butacas.jpg' alt="butacas rojas" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="carousel-img" src='../../../public/images/cojines.jpg' alt="cojines" />
      </SwiperSlide>
      ...
    </Swiper>

    </div>
  );
};

export default Carousel;