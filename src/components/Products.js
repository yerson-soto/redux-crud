import React, { Component, Fragment } from 'react';
import Product from './Product';

//Redux
import { connect } from 'react-redux';
import { showProducts } from '../actions/productsActions';

class Products extends Component {

    componentDidMount() {
        this.props.showProducts();
    }

    render() { 
        const { products } = this.props;
        return (  
            <Fragment>
                <h2 className="text-center my-5">Listado de Productos</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul>
                            {products.map(product => (
                                <Product 
                                    key={product.id}
                                    info={product}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products
})
 
export default connect( mapStateToProps, {showProducts} ) (Products);