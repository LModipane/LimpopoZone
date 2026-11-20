"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type Props = {
   slides: string[];
};

const SlideShow = ({ slides }: Props) => {
   return (
      <Carousel plugins={[Autoplay({ delay: 3000 })]}>
         <CarouselContent>
            {slides.map((slide, index) => (
               <CarouselItem key={index} className="w-full h-150">
                  <div className="relative w-full h-full">
                     <Image src={slide} alt={`Slide ${index + 1}`} fill className="object-fit object-center" />
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   );
};

export default SlideShow;
