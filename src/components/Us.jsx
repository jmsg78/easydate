import React from 'react';
import '../assets/styles/Us.css';
import pictureVideo from '../assets/images/video.png';


const  Us = () => {
  return (
    <section>
        <div class="containerUs">
            <div class="us">
                <div class="col text-center">
                    <h1>Conócenos</h1>
                    <img src={pictureVideo} alt="Video Us" />
                </div>
            </div>
        </div>
  </section>
  );
}

export default Us;