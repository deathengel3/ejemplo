import React, {useEffect, useState} from "react";

const Formulario2 = () => {
    const [values, setValues] = useState([]);
    useEffect( () => {
        async function fetchData() {
         await fetch("https://localhost:5001/weatherforecast")
            .then(result => result.json())
            .then(result => setValues(result))
            .catch(err => console.log('Ocurrió un error: ', err.message));
        }
        fetchData();
    }, [setValues]);
    return (
        <div>
            {
                values.map((item, index) => <h1 key={index}>{item.date}</h1>)
            }
            <button
                onClick={ () =>
                    setValues([])
                }>
                Limpiar lista
            </button>
        </div>
    );
};

export default Formulario2;
