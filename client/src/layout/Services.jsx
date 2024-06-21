import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ChemicalIcon, AddIcon, UpIcon } from '../assets/Svg';
import { Button } from "@/components/ui/button";
import Aos from 'aos';

const Work = () => {
    const [showMore, setShowMore] = useState(false);
    const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 900 });
    const projectsRef = useRef(null);

    Aos.init({});

    const cards = [
        {
            title: 'App Development',
            description: 'Building robust, scalable mobile applications tailored to your business needs, ensuring seamless performance and user-friendly interfaces.',
        },
        {
            title: 'Web Development',
            description: 'Creating dynamic and responsive websites using the latest web technologies to provide optimal viewing experiences across devices.',
        },
        {
            title: 'Responsive Design',
            description: 'Designing visually appealing, adaptive interfaces that offer consistent and enjoyable user experiences on all screen sizes.',
        },
        {
            title: 'UI/UX Design',
            description: 'Crafting intuitive and engaging user interfaces with a focus on enhancing user satisfaction through effective usability and aesthetics.',
        },
    ];


    const visibleCards = showMore ? cards : cards.slice(0, 3);

    const handleShowMore = () => {
        setShowMore(!showMore);
        if (showMore && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <animated.section id="services" style={springProps} ref={projectsRef} >
            <div className="mx-auto" >
                <h2 className='text-4xl md:text-6xl my-8 text-center font-bold'>
                    What I <span className='text-title-rgba'>Do</span>
                </h2>
                <div className="flex flex-wrap justify-center  gap-8"  data-aos="fade-up" 
                            data-aos-duration="2000">
                    {visibleCards.map((card, index) => (
                        <div
                            key={index}
                            className="download-cv bg-gray-100 p-6 rounded-lg transition-transform transform hover:scale-105  w-[320px] md:w-[350px] min-h-[400px] flex flex-col"
                           
                        >
                            <div className='chemical-icon bg-[#E3EDF7] h-16 w-16 rounded-lg p-2 border-inherit'>
                                <ChemicalIcon className='h-full w-full' />
                            </div>
                            <h3 className="text-2xl font-bold my-5">{card.title}</h3>
                            <p className="text-sm mb-4">{card.description}</p>
                            <Button className='download-cv w-32 bg-gray-100 text-black text-xs font-bold rounded-sm flex items-center mt-auto'>
                                Read More <AddIcon className='ml-2 w-4 h-4' />
                            </Button>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-10'>
                    <Button
                        onClick={handleShowMore}
                        className='download-cv bg-gray-100 text-black text-xs font-bold rounded-sm flex items-center'
                    >
                        {showMore ? 'Show Less' : 'Load More'}
                        {showMore ? <UpIcon className='ml-2 w-4 h-4' /> : <AddIcon className='ml-2 w-4 h-4' />}
                    </Button>
                </div>
            </div>
        </animated.section>
    );
};

export default Work;
