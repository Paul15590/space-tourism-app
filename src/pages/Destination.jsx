import mars from '../assets/destination/image-mars.png';
import moon from '../assets/destination/image-moon.png';
import titan from '../assets/destination/image-titan.png';
import europa from '../assets/destination/image-europa.png';
import data from '../data.json';
import { useState } from 'react';

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
        <section className="destination-section">
            <div>
                <h1 className='pick-destination'> <span>01 </span> PICK YOUR DESTINATION</h1>
            </div>
  
            <div className='flex'>
                <div className='image'>
                    <img src={imageMap[selectedPlanet.name]} alt={selectedPlanet.name} />
                </div>
                <div className='destination-data'>
                    <div className='flex-gap'>
                        {data.destinations.map((planet)=>(
                            <p key={planet.name} onClick={()=> handlePlanetClick(planet.name)}><a href="#"> {planet.name} </a></p>
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
        </section>
    )
}

export default Destination;