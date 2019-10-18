import React from 'react';

const  Header = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-bold">EasyDate</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="/#">Conocenos</a>
            <a className="p-2 text-dark" href="/#">Planes</a>
            <a className="p-2 text-dark" href="/#">Contacto</a>
            <a className="p-2 text-dark" href="/#">Soporte</a>
          </nav>
            <a className="btn btn-outline-primary" href="/#">Inicie Sesión</a>
      </div>
  </header>
  );
}

export default Header;