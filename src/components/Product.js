import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

//Redux
import { connect } from 'react-redux';
import { deleteProduct } from '../actions/productsActions';

class Product extends Component {

    render() {  
        const { id, nombre, precio } = this.props.info;

        return (  
            <li className="list-group-item">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                        <p className="text-dark m-0">
                            {nombre}
                        </p>
                        <span className="badge badge-warning text-dark">{precio}</span>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end acciones">
                        <Link to={`products/edit/${id}`} className="btn btn-primary mr-2" rel="noopener noreferrer">Editar</Link> 
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={() => this.props.deleteProduct(id)}
                        >
                            Borrar
                        </button>
                    </div>
                </div>
            </li>
        );
    }
}

 
export default connect(null, {deleteProduct} ) (Product);