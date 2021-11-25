//Libraries
import React, {useState} from 'react';
//components
import Counter from "./Counter";

const initialCount = 0

const MainCounter = () => {
    const [counters, setCounters] = useState([]);

    const addCounter = () => {
        const newCounter = {
            id: Math.random().toString(36).substr(2, 9),
            count: initialCount,
        };
        const addInCountOne = counters.map(addOne => {
            if (addOne.count === initialCount) {
                return {
                    ...addOne,
                    count: addOne.count,
                };
            }
            if (addOne.count % 2 === initialCount) {
                return {
                    ...addOne,
                    count: addOne.count + 1,
                };
            }
            return addOne;
        });
        setCounters([...addInCountOne, newCounter]);
    };


    const setCount = (id, direction) => {
        setCounters(prevState => {
            return counters.map(counter =>
                counter.id === id
                    ? {
                        ...counter,
                        count:
                            direction === 'increment'
                                ? (counter.count + 1)
                                : (counter.count - 1),
                    }
                    : counter,
            );
        });
    };

    const removeProduct = id => {
        const filteredCounters = counters.filter(counter => counter.id !== id)
        const formattedCounters = filteredCounters.map(counter => {
            if (counter.count === initialCount) {
                return counter;
            }

            if (counter.count % 2 !== initialCount) {
                return {
                    ...counter,
                    count: counter.count - 1,
                };
            }

            return counter;
        });
        setCounters(formattedCounters);
    };

    const zeroingOutCounter = (id) => {
        const zeroingCounter = counters.map(count => {
            if (count.id === id) {
                return {
                    ...count,
                    count: initialCount,
                };
            }
            return count;
        });
        setCounters([...zeroingCounter]);
    }


    const totalCount = counters.reduce(
        (accumulator, currentCounter) => accumulator + currentCounter.count,
        0,
    );
    const differentCounts = counters.length;

    return (
        <div className="App">
            Total Count <div> {totalCount <= initialCount ? initialCount : totalCount} </div>
            Different Counts <div> {differentCounts} </div>
            <button type="button" onClick={() => setCounters([])}>Reset</button>
            <button type="button" onClick={addCounter}>Add Count</button>
            {counters.map(counter => (
                <Counter
                    key={counter.id}
                    counter={counter}
                    setCount={setCount}
                    removeProduct={removeProduct}
                    zeroingOutCounter={zeroingOutCounter}
                    initialCount={initialCount}
                />
            ))}
        </div>
    );
};

export default MainCounter;
