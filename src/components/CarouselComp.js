import React, { useEffect, useState } from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const CarouselComp = () => {
    const carouselImages = [
        {
            url: 'http://localhost:3000/static/media/maldives.6912181c1b1fc6c5fa6f.jpg'
        },

        {
            url: 'http://localhost:3000/static/media/borabora2.726ded1de37915f83c71.jpg'
        },

        {
            url: 'http://localhost:3000/static/media/maldives2.ee088b6ef17100d7f85f.jpg'
        },
        {
            url: 'http://localhost:3000/static/media/borabora.e6c4841f299365fdfa10.jpg'
        }
    ]

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
                src={carouselImages[index].url}
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