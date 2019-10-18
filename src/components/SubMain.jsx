import React from 'react';
import '../assets/styles/SubMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedkit, faChartLine, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const  SubMain = () => {
  return (
    <section>
        <div class="containerSubMain">
            <div class="row align-items-center subMain">
                <div class="col text-center">
                <FontAwesomeIcon icon={faCalendarCheck} size="3x" color="white"/>
                <h4 className="h4-subMain">Citas Médicas</h4>
                <p className="p-subMain">lorem ipsum dolorlorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
                </div>
                <div class="col text-center">
                <FontAwesomeIcon icon={faMedkit} size="3x" color="white"/>
                <h4 className="h4-subMain">Doctores</h4>
                <p className="p-subMain">lorem ipsum dolorlorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
                </div>
                <div class="col text-center">
                <FontAwesomeIcon icon={faChartLine} size="3x" color="white"/>
                <h4 className="h4-subMain">>Estadísticas</h4>
                <p className="p-subMain">lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
                </div>
            </div>
        </div>
  </section>
  );
}

export default SubMain;