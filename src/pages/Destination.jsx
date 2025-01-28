import mars from '../assets/destination/image-mars.png';
import moon from '../assets/destination/image-moon.png';
import titan from '../assets/destination/image-titan.png';
import europa from '../assets/destination/image-europa.png';
import data from '../data.json';
import { useState } from 'react';
import { motion } from 'framer-motion';

const imageMap = {
    Moon: moon,
    Mars: mars,
    Titan:titan,
    Europa:europa
  };

const Destination = () => {

  const [selectedPlanet, setSelectedPlanet] = useState(data.destinations[0]); 

  const handlePlanetClick = (planetName) => {
    const planet = data.destinations.find((d) => d.name === planetName);
    setSelectedPlanet(planet);
  };

    return (
        <motion.section 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ duration:1}}
            className="destination-section">
            <div>
                <motion.h1 
                    initial={{x:"-100%"}}
                    animate={{x:0}}
                    transition={{delay:1}}
                    className='pick-destination'> <span>01 </span> PICK YOUR DESTINATION</motion.h1>
            </div>
  
            <div className='flex'>
                <div className='image'>
                <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    key={selectedPlanet.name}
                    src={imageMap[selectedPlanet.name]} 
                    alt={selectedPlanet.name} />
                </div>

                <div className='destination-data'>
                    <div className='flex-gap'>
                        {data.destinations.map((planet)=>(
                            <p
                            className={`${
                                selectedPlanet.name === planet.name ? 'active' : ''
                            }`}
                             key={planet.name}
                              onClick={()=>handlePlanetClick(planet.name)}>
                            <a href="#"> {planet.name} </a></p>
                        ))}
                    </div>
                    <h1>{selectedPlanet.name}</h1>

                    <div className='description'>
                        <p> {selectedPlanet.description} </p>
                        <hr />
                    </div>


                    <div className='flex-gap'>
                        <div>
                            <p>AVG.DISTANCE</p>
                            <h3>{selectedPlanet.distance}</h3>
                        </div>
                        <div>
                            <p>Est.TRAVEL TIME</p>
                            <h3>{selectedPlanet.travel}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Destination;