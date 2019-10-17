import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { addProduct } from '../actions/productsActions';

class AddProduct extends Component {

    state = {
        name: '',
        price: '',
        error: false
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        //destructuring al state
        const { name, price } = this.state;

        if (name === '' || /\s+$/.test(name) || price === '' || /\s+$/.test(price) ) {
            this.setState({
                error: true
            });
            return;
        }

        this.setState({
            error: false
        });

        //crear el nuevo objeto
        const productiInfo = {
            nombre: this.state.name,
            precio: this.state.price
        }

        this.props.addProduct(productiInfo);

        //redireccionar
        this.props.history.push('/');

    }
  
    render() { 
        const error = this.state.error;
        return (  
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input type="text" name="name" onChange={this.handleChange} className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input type="number" name="price" onChange={this.handleChange} min="0" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>

                            {error ? 
                                <div className="font-weight-bold alert alert-danger text-center mt-4">
                                    Todos los campos son obligatorios
                                </div> :
                                null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default connect(null, {addProduct} )(AddProduct);