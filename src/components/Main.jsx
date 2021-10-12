import React, { useState } from "react";
import { Section } from "./Section";
import brakefast1 from '../images/cafe1.jpg';
import lunch1 from '../images/almoco1.jpg';
import dinner1 from '../images/janta1.jpg';

export const Main = () => {

    const [imageBrakefast, setImageBrakefast] = useState(brakefast1);
    const [imageLunch, setImageLunch] = useState(lunch1);
    const [imageDinner, setImageDinner] = useState(dinner1);

    return (
        <main className='main'>
            <Section 
                imageBrakefast={ imageBrakefast } setImageBrakefast={ setImageBrakefast } imageLunch={imageLunch} setImageLunch={setImageLunch}
                imageDinner={imageDinner} setImageDinner={setImageDinner}
            />
        </main>
    );
}