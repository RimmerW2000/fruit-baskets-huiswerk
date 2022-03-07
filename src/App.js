import React from 'react';
import './App.css';
import Fruit from "./components/Fruit";
import {findByDisplayValue} from "@testing-library/react";

function App() {
    funtion reset(){setStrawberry(0);
        setBanana(0);
        setAppel(0);
        setKiwi(0) }


    const [strawberry, setStrawberry] = React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [appel, setAppel] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);


    // const handleFruit = () => {
    //     setCount(prevCount => prevCount -1);
    // };
    //
    // const handleFruits = () => {
    //     setCount(prevCount => prevCount +1);
    // };


  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <Fruit
        count={strawberry}
        setCount={setStrawberry}
        fruitName="🍓 Aardbeien"
        />

        <Fruit
            count={banana}
            setCount={setBanana}
            fruitName="🍌 Banenen"
        />

        <Fruit
            count={appel}
            setCount={setAppel}
            fruitName="🍏 Appels"
        />

        <Fruit
            count={kiwi}
            setCount={setKiwi}
            fruitName="🥝 Kiwi"
        />
       <button
       type="button"
       onClick={reset}
       >
        <h1>RESET</h1>
       </button>

        <div>
            <h1>Contact Formulier</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Voornaam</p>
                        <input type="text"/>
                            <p>Achternaam</p>
                            <input type="text"/>
                                <p>leeftijd</p>
                                <input type="number"/>
                        <p>Postcode</p>
                        <input type="text"/>

                        <p>Bezorgfrequentie</p>
                        <input type=""/>

                        <p>Opmerkingen</p>
                                

                    </label>
                </fieldset>
            </form>
        </div>
    </>


  );
}

export default App;
