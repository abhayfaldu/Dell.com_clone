import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const Carousel = ({data}) => {
    const slides = [
      {
        img: data[0],
      },
      {
        img: data[1],
      },
      {
        img: data[2],
      },
      {
        img: data[3],
      },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
    const carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    };
    const SLIDES_INTERVAL_TIME = 3000;
    const ANIMATION_DIRECTION = "right";
    useEffect(() => {
      const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
      };
  
      const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
      };
  
      const automatedSlide = setInterval(() => {
        ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
      }, SLIDES_INTERVAL_TIME);
      return () => clearInterval(automatedSlide);
    }, [slidesCount]);
    return (
      <Flex
        w="200px"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}

        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden">
          <Flex pos="relative" h="100px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                  whiteSpace="nowrap"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  objectFit={"contain"}
                  backgroundSize="cover"
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    );
  };

export default Carousel