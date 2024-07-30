
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@material-tailwind/react';


const images = [
    
    {
        id:1,
        img:"/main.png"
    },
    {
        id:2,
        img:"https://media.istockphoto.com/id/1034294984/vector/black-golden-balloons-background7.jpg?s=2048x2048&w=is&k=20&c=caTL4miHeXXhljZ6EeKnJO-lTZ8pBTM51Pqeue8xufM="
    },
    {
        id:3,
        img:"https://media.istockphoto.com/id/1188850408/vector/black-friday-banner.jpg?s=2048x2048&w=is&k=20&c=8TPWGkOtNAuVoRMwQgN3i6C-K8dgy0eyheTV6lU_W34="
    }
]

export default function SwipperMainBar() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <div >
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
       
       {images.map((item) => {
        return(
            <SwiperSlide className="rounded-lg" key={item.id}>
            <div className="relative  ">
               <div className="h-[300px] rounded-lg">
               <img className="w-full h-full z-0 object-cover rounded-lg" src={ item.img } alt="" />
               </div>
                <div className="p-10 font-semibold absolute z-20 w-full h-full rounded-md text-white top-0 ">
                    <h2 className=" text-3xl leading-[50px]">
                        Must expected secret NFT <br></br>  assortment is live...
                    </h2>
                    
                    <div className="mt-3 ">
                        <div className="flex gap-6 text-xl">
                            <h4>
                                25k <span className="font-light">Artwork</span>
                            </h4>
                            <h4>
                                78k <span className="font-light">Auction</span>
                            </h4>
                            <h4>
                                16k <span className="font-light">Artist</span>
                            </h4>
                        </div>

                        <Button className="capitalize mt-5 text-lg font-extralight bg-[#d90368] w-[165px] h-[48px]" > Explore now</Button>
                    </div>
                </div>

            </div>
        </SwiperSlide>
        )
       })}
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}
