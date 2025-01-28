import techImage1 from '../assets/technology/image-launch-vehicle-portrait.jpg';
import techImage2 from '../assets/technology/image-spaceport-portrait.jpg';
import techImage3 from '../assets/technology/image-space-capsule-portrait.jpg';
import data from '../data.json';
import { useState } from 'react';
import { motion } from 'framer-motion';

const imageMap = {
    "Launch vehicle":techImage1,
    "Spaceport":techImage2,
    "Space capsule":techImage3
}

const Tech = () => {
    const [techIndex,setTechIndex] = useState(0);

    const handleClick = (index) => {
        setTechIndex(index);
    }
    
    const techData = data.technology[techIndex];

    return (
        <motion.section 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ duration:1}}
            className="tech-section">

            <motion.h1 
                initial={{x:"-100%"}}
                animate={{x:0}}
                transition={{delay:1}}
                className='heading'> <span>03 </span> SPACE LAUNCH 101</motion.h1>

            <div className="div-flex">
                <div className='flex'>
                 <div>
                    {data.technology.map(( _, index) => (
                            <div 
                                className={`${techIndex === index ? "active": ""}`}
                                key={index}
                                onClick={() => handleClick(index)}
                            > {index + 1}</div>
                            ))}
                    </div>

                    <div>
                        <p>The terminology... </p>
                        <h1>{techData.name.toLocaleUpperCase()}</h1>
                        <p> {techData.description}</p>
                    </div>
                </div>

                <div className='image'>
                    <motion.img 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        key={techData.name}
                        src={imageMap[techData.name]}
                        alt={techData.name} />
                </div>
            </div>
        </motion.section>
    )
}

export default Tech;