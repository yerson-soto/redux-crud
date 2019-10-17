import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
                <h2><Link to="/" className="text-light">CRUD - React, Redux, Router</Link></h2>
                <div className="boton">
                    <Link to="/products/new" className="btn btn-danger nuevo-post">
                        <i className="fas fa-plus"></i> Nuevo producto
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Header;

