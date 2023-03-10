import React from 'react';

function Counter(props) {
    const [counter, setstate] = React.useState(0)

    const AddRemove = (value) => {
        setstate(counter + value)
    }

    return (
        <div>
            <div className="container">
                <div className="card m-auto mt-5 text-center" style={{ width: '18rem' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fw-bold">Counter</li>
                        <li className="list-group-item">{counter}</li>
                        <li className="list-group-item"><button className='btn btn-primary me-4' onClick={() => AddRemove(1)}>Plus</button><button className='btn btn-success' onClick={() => setstate(0)}>Reset</button><button className='btn btn-primary ms-4' onClick={() => AddRemove(-1)}>Minus</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Counter;