import React from 'react';

const  Header = () => {
  return (
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">MyDate</h5>
          <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="/#">Conocenos</a>
            <a class="p-2 text-dark" href="/#">Planes</a>
            <a class="p-2 text-dark" href="/#">Contacto</a>
            <a class="p-2 text-dark" href="/#">Soporte</a>
          </nav>
            <a class="btn btn-outline-primary" href="/#">Inicie Sesión</a>
      </div>
  </header>
  );
}

export default Header;