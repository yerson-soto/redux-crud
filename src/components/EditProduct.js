import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { showProduct, editProduct } from '../actions/productsActions';

class EditProduct extends Component {

    state = {
        name: '',
        price: '',
        error: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.showProduct(id);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.product !== undefined) {
            const { nombre, precio } = nextProps.product;
            return {
                name: nombre,
                price: precio
            }
        }
        return null;
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

        //tomar el id
        const idProduct = this.props.match.params.id;

        //crear el nuevo objeto
        const productiInfo = {
            id: idProduct,
            nombre: this.state.name,
            precio: this.state.price
        }
      
        this.props.editProduct(productiInfo);

        //redireccionar
        this.props.history.push('/');

    }
  
    render() { 
        const { name, price, error } = this.state;
        return (  
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Editar Producto</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input defaultValue={name} type="text" name="name" onChange={this.handleChange} className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input defaultValue={price} type="number" name="price" onChange={this.handleChange} min="0" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Actualizar</button>
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

const mapStateToProps = state => ({
    product: state.products.product
})
 
export default connect(mapStateToProps, {showProduct, editProduct})(EditProduct);