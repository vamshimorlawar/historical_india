import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import indianFlag from "@/public/indian_flag.jpg";
import fountain from "@/public/fountain_indian_flag_colors.jpg";
import camel from "@/public/camel.jpg";


const CarouselSection = () => {
  const images = [indianFlag, fountain, camel];
  return (
    <div>
      <Carousel className="max-w-screen-sm mx-auto my-20">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader>Gallery</CardHeader>
                  {/* <CardTitle>Gallery</CardTitle> */}
                  <CardContent className=" relative flex items-center justify-center aspect-square">
                    <Image
                      src={images[index]}
                      alt="Flag"
                      fill
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex"/>
        <CarouselNext className="hidden md:flex"/>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
