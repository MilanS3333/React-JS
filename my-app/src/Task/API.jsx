import React, { useState, useLayoutEffect, useEffect } from 'react';
import './API.css'

function API(props) {

    const [data, setdata] = useState({})
    const [table, settable] = useState()
    const [Loader, setLoader] = useState(<div className='preloader'>
        <div className='pre'></div>
    </div>)

    useLayoutEffect(() => {
        setTimeout(() => {
            setLoader('')
        }, 2000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            settable(<thead>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </thead>)
            fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((RES) => {
                // console.log(RES);
                setdata(RES);
            }).catch((ERROR) => {
                console.log(ERROR);
            })
        }, 2000)
    }, [])

    return (
        <div>
            <div className="countainer" style={{ background: '#333' }}>
                {Loader}
                <table className='table table-dark'>
                    {table}
                    {Object.entries(data).map((item, i) => {
                        return <tbody>
                            <td>{item[1].id}</td>
                            <td>{item[1].title}</td>
                            <td>{item[1].body}</td>
                        </tbody>
                    })}
                </table>
            </div>
        </div>
    );
}

export default API;