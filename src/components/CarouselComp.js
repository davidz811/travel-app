import React, { useEffect, useState } from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import image1 from '../assets/borabora.jpg';
import image2 from '../assets/borabora2.jpg';
import image3 from '../assets/maldives2.jpg';
import image4 from '../assets/maldives3.jpg';


const CarouselComp = () => {
    const carouselImages = [image1, image2, image3, image4];


    const [index, setIndex] = useState(0);
    const carouselLength = carouselImages.length;


    const handleNext = () => {
        setIndex((index+1) % carouselLength);
    }

    const handlePrev = () => {  
        if (index > 0) {
            setIndex(index -1);
        }
    }

    return (
        <div name='views' className='max-w-[1240px] h-full w-full mx-auto relative flex justify-center items-center'>
            <img 
                src={carouselImages[index]}
                alt={`Index ${index}`}
            />
                    <BsArrowLeftSquareFill
                            onClick={handlePrev}
                            className={index === 0 ? 'disabled' : 'text-3xl text-white cursor-pointer absolute top-[50%] left-5'}
                            >
                        Prev
                    </BsArrowLeftSquareFill>
                    <BsArrowRightSquareFill 
                        onClick={handleNext}
                        className={'text-3xl text-white absolute top-[50%] right-5 cursor-pointer'}
                        >
                        Next
                    </BsArrowRightSquareFill>          
        </div>
    )
}

export default CarouselComp