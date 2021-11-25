//Libraries
import React from 'react';


const Counter = ({initialCount, counter, setCount, removeProduct, zeroingOutCounter}) => {
    return (
        <div>
          <span>
            {counter.count > initialCount ? counter.count : counter.count = initialCount}
          </span>
            <button type="button" onClick={() => setCount(counter.id, 'increment')}>+</button>
            <button
                type="button"
                onClick={() => setCount(counter.id, 'decrement')}
            >
                -
            </button>
            <button type="button" onClick={() => removeProduct(counter.id)}>del</button>
            <button type="button" onClick={() => zeroingOutCounter(counter.id)}>Zeroing out</button>
        </div>
    );
};

export default Counter;
