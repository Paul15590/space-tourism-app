import imageAnsari from '../assets/crew/image-anousheh-ansari.png';
import imageDouglas from '../assets/crew/image-douglas-hurley.png';
import imageMark from '../assets/crew/image-mark-shuttleworth.png';
import imageVictor from '../assets/crew/image-victor-glover.png';
import data from '../data.json';
import { useState } from 'react';

const imageMap = {
    "Anousheh Ansari": imageAnsari,
    "Douglas Hurley": imageDouglas,
    "Mark Shuttleworth": imageMark,
    "Victor Glover": imageVictor,
}

const Crew = () => {
    const [crewIndex, setCrewIndex] = useState(0); 

    const handleCrewClick = (index) => {
        setCrewIndex(index); 
    };

    const crewData = data.crew[crewIndex];
      
    return (
        <section className="crew-section">
            <h1 className='heading'><span>02</span> MEET YOUR CREW</h1>

            <div className="div-flex">
                <div className='info'>
                   <div className='info-div'>
                        <h1>FLIGHT ENGINEER </h1>
                        <h1>{crewData.name}</h1>
                        <p> {crewData.bio} </p>
                   </div>

                    <div className='radio-box'>
                        {data.crew.map(( _, index) => (
                            <div
                                key={index}
                                onClick={() => handleCrewClick(index)}
                            ></div>
                            ))}
                    </div>
                </div>

                <div className='image'>
                    <img src={imageMap[crewData.name]} alt={crewData.name}/>
                </div>
            </div>
        </section>
    )
}

export default Crew;