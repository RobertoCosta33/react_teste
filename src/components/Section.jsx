import React from "react";
import brakefast2 from '../images/cafe2.jpg';
import brakefast3 from '../images/cafe3.jpg';
import lunch2 from '../images/almoco2.jpg';
import lunch3 from '../images/almoco3.jpg';
import dinner2 from '../images/janta2.jpg';
import dinner3 from '../images/janta3.jpg';

export const Section = ({imageBrakefast, setImageBrakefast, imageLunch, setImageLunch, imageDinner, setImageDinner}) => {

    const brakefastChange = () => {
        setImageBrakefast(brakefast2);
    }

    const lunchChange = () => {
        setImageLunch(lunch2);
    }

    const dinnerChange = () => {
        setImageDinner(dinner2);
    }

    return (
        <>
        <section className='brakefast'>

            <article>
                <img src={imageBrakefast} alt="Café da manhã" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore incidunt blanditiis dolorem nesciunt quas nemo.</p>
                <button onClick={brakefastChange} type="submit">Próximo prato</button>
            </article>

        </section>
        <section className='lunch'>
            <article>
                <img src={imageLunch} alt="Almoço" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore incidunt blanditiis dolorem nesciunt quas nemo.</p>
                <button onClick={lunchChange} type="submit">Próximo prato</button>
            </article>

        </section>
        <section className='dinner'>
            <article>
                <img src={imageDinner} alt="Jantar" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore incidunt blanditiis dolorem nesciunt quas nemo.</p>
                <button onClick={dinnerChange} type="submit">Próximo prato</button>
            </article>

        </section>
        </>
    );
}