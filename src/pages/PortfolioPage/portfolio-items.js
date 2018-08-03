import React from 'react';

export default [{
  name: 'AugRes',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        AugRes
      </div>
      <div className='portfolio-item__desc'>
        An intuitive reservation system using ARKit. Worked on the Google maps API integration
        with the Swift based AR app.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-google"></i>
        <i className="fab fa-apple"></i>
      </div>
      <div className='portfolio-item__links'>
        
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/tamersherif/augres">GitHub</a>
      </div>
    </div>
  )
}, {
  name: 'Lily-Bot-MD',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Lily Bot MD
      </div>
      <div className='portfolio-item__desc'>
        MS Bot based chatbot to classify diabetic retinopathy in retinal image scans using Tensorflow.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-microsoft"></i>
        <i className="fab fa-python"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/lily-md-ai">Devpost</a>
      </div>
    </div>
  )
}, {
  name: 'Disease-Classifier',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Disease Classifier
      </div>
      <div className='portfolio-item__desc'>
        Designed a web application using Django REST, Postgres, React and Tensorflow to upload, classify an image for a disease and display the results.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-python"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='portfolio-item__links'>
        <a rel="noopener noreferrer" href="/">Heroku</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TamerSherif/diseaseClassifier">GitHub</a>
      </div>
    </div>

  )
},
{
  name: 'SSD-Video-Detection',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      SSD Video Detection
      </div>
      <div className='portfolio-item__desc'>
        Contributed to Single Shot Detectors by creating a video detection script using numpy, OpenCV and Caffe.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-python"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TamerSherif/caffe/tree/ssd">GitHub</a>
      </div>
    </div>

  )
},
{
  name: 'TSFiddle',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      TSFiddle
      </div>
      <div className='portfolio-item__desc'>
      Developed a JavaScript based code processor (inspired by JSfiddle) that can run HTML, CSS and JavaScript and display the resulting page.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://tsfiddle.herokuapp.com/index.html">Heroku</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TamerSherif/tsfiddle.github.io">GitHub</a>
      </div>
    </div>

  )
}]