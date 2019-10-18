import React from 'react';
import ImageMain from '../assets/images/medical.png';
import { Form, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import '../assets/styles/Main.css';
const  Main = () => {
  return (
    <section>
      <div className="row">
        <div className="col-6">
            <img src={ImageMain} alt="Main" width="100%" height="100%"/>
        </div>
        <div className="col-6">
            <div className="row space">
                <div className="col-8 text-center ">
                    <h3>Agende su Cita</h3>
                </div>
                <div className="col-4">
                <FontAwesomeIcon icon={faHeart} size="3x" color="red"/>
                </div>
            </div>
        
            <div className="row">
            <Form className="form-signin">
            <Form.Row>
            <Col>
            <Form.Group controlId="formInputSpeciality">
                <Form.Label>Especialidad</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                <Form.Group controlId="formInputCity">
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Control placeholder="" />
                </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                <Form.Group as={Col} controlId="formSelectClinic">
                    <Form.Label>Centro de Atención</Form.Label>
                    <Form.Control as="select">
                        <option value="0">Seleccione</option>
                        <option value="1">Centro Clinico del Country</option>
                        <option value="2">Centro Clinico Marly</option>
                    </Form.Control>
                </Form.Group>
                </Col>
            </Form.Row>
            <Button variant="btn btn-lg btn-dark btn-block" type="submit">
                Buscar
            </Button>
            
            
            </Form>
            
            </div>
        </div>
      </div>
  </section>
  );
}

export default Main;