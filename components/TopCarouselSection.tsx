"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const TopCarouselSection = () => {
  return (
    <div>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full h-[500px]">
              <Image
                src="/caraIKS_1.jpg"
                alt="Hero"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[500px]">
              <Image
                src="/caraIKS_2.jpg"
                alt="Hero"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[500px]">
              <Image
                src="/caraIKS_3.jpg"
                alt="Hero"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[500px]">
              <Image
                src="/caraIKS_4.jpg"
                alt="Hero"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </div>
  );
};
