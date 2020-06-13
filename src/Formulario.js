import React from "react";

class Formulario extends React.Component {
    state = {
      values: []
    };
    componentDidMount() {
        this.datos();
    }

    datos = async () => {
        await fetch('https://localhost:5001/weatherforecast')
            .then(datos => datos.json())
            .then(datos => {
                console.log(datos);
                this.setState({values: datos});
            })
            .catch(err => console.log(err));
    }
    render()
    {
        return (
            <div>
                {
                    this.state.values.map((item, index) => (
                        <h1 key={index}>{item.date}</h1>
                    ))
                }
                <button
                    onClick={ () =>
                        this.setState({values: []})
                    }
                >
                    Limpiar lista
                </button>
            </div>
        );
    }
}

export default Formulario;
