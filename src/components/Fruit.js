import React from "react";

function Fruit ({count, setCount, fruitName}) {

// const [count, setCount] = React.useState(0);

const handleFruit = () => {
    setCount( count -1);
};

const handleFruits = () => {
    setCount(count +1);
};


return (
            <div>
                <h2> {fruitName} {count}</h2>
                <button
                    onClick={handleFruit}
                    disabled={count === 0}
                >
                    -
                </button>

                <button onClick={handleFruits}>+</button>
            </div>
    )
}

export default Fruit;