import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const NUM_COL = 4;

const ME_BLOCK = {
  imagePath: 'assets/images/me.jpg',
  href: 'https://github.com/gbattra',
  header: 'Greg Attra',
  subheader: 'Me!',
  description: '',
  skills: 'Deep Learning Engineer, Systems Architect, Software Engineer, Data Scientist'
}

const PROJECTS = [
  ME_BLOCK,
  {
    header: 'Paint Me',
    subheader: 'NST-based webapp for generating AI art',
    imagePath: 'assets/images/PaintMe.jpg',
    href: 'https://github.com/gbattra/paint-me-v2',
    description: '',
    skills: 'Python, Tensorflow, NST, Django, Flask, Pub/Sub, GCP'
  },
  {
    header: 'MNIST VAE',
    subheader: 'A VAE to generate MNIST samples / Tensorflow',
    imagePath: 'assets/images/Generator.png',
    href: 'https://github.com/gbattra/MNIST_VAE',
    description: '',
    skills: 'Python, Tensorflow, CNN, VAE'
  },
  {
    header: 'MNIST GANs',
    subheader: 'A first attempt at a GANs model using Tensorflow',
    imagePath: 'assets/images/GANs.png',
    href: 'https://github.com/gbattra/GANsProject',
    description: '',
    skills: 'Python, Tensorflow, CNN, GANs'
  },
  {
    header: 'ML Framework',
    subheader: 'A machine learning framework hacked together with Numpy',
    imagePath: 'assets/images/ML.jpg',
    href: 'https://github.com/gbattra/ML_Framework',
    description: '',
    skills: 'Python, Numpy, Linear & Logistic Regression'
  },
  {
    header: 'Stanford Machine Learning Projects',
    subheader: 'Projects completed for the Stanford Machine Learning MOOC',
    imagePath: 'assets/images/SML.png',
    href: 'https://github.com/gbattra/machine_learning',
    description: '',
    skills: 'Matlab, NN, SVM, KMeans, PCA'
  },
  {
    header: 'Generator ML Framework',
    subheader: 'POC for Generative AI algorithm',
    imagePath: 'assets/images/spongebob.png',
    href: 'https://github.com/gbattra/Generator_ML_Framework',
    description: '',
    skills: 'Python, Numpy, OOP, Linear Algebra'
  },
  {
    header: 'Street View House Number Detector',
    subheader: 'CNN for street-view house number detection and classification',
    imagePath: 'assets/images/Streetview.png',
    href: 'https://github.com/gbattra/StreetviewHouseNumberDetector',
    description: '',
    skills: 'Unity, C#, Linear Algebra, 3D Graphics'
  },
  {
    header: 'Simple Neural Network',
    subheader: '3 layer neural network to predict presence and type of Arrhythmia in patients',
    imagePath: 'assets/images/NN.png',
    href: 'https://github.com/gbattra/NeuralNetwork',
    description: '',
    skills: 'Python, Numpy, Pandas, Matplotlib'
  },
  {
    header: 'Simple Logisitc Regression',
    subheader: 'A logistic regression model to classify types of cancer and skin conditions',
    imagePath: 'assets/images/LogisticRegression.png',
    href: 'https://github.com/gbattra/LogisticRegression',
    description: '',
    skills: 'Python, Numpy, Pandas, Matplotlib'
  },
  {
    header: 'Simple Linear Regression',
    subheader: 'A linear regression model for bike rentalss',
    imagePath: 'assets/images/LinearRegression.png',
    href: 'https://github.com/gbattra/LinearRegression',
    description: '',
    skills: 'Python, Numpy, Pandas, Matplotlib'
  },
  {
    header: 'CircleDodge',
    subheader: 'A PhaserJS game where you dodge circles',
    imagePath: 'assets/images/phaser.png',
    href: 'https://github.com/gnwgames/CircleDodge',
    description: '',
    skills: 'Javascript, PhaserJS, Game AI'
  },
  {
    header: 'Baxer',
    subheader: 'React frontend for a music sharing application',
    imagePath: 'assets/images/react.png',
    href: 'https://github.com/gbattra/baxer_client',
    description: '',
    skills: 'Javascript, React, HTML/CSS, Semantic UI'
  },
  {
    header: 'Roketyr',
    subheader: 'Ruby on Rails backend for a music sharing application',
    imagePath: 'assets/images/rails.png',
    href: 'https://github.com/gbattra/rocketyr-api',
    description: '',
    skills: 'Ruby, Rails, rSpec, MVC, OOP'
  },
  {
    header: 'HexDodge',
    subheader: 'iOS game built in Unity',
    imagePath: 'assets/images/hexdoge.jpg',
    href: 'https://github.com/gbattra/HexDodge',
    description: '',
    skills: 'Unity, C#, Linear Algebra, 3D Graphics'
  },
  {
    header: 'Kill the Virus',
    subheader: 'WebGL game built in Unity',
    imagePath: 'assets/images/ktv.jpg',
    href: 'https://mooninteractive.itch.io/kill-the-virus',
    description: 'Dodge the asteroids, kill the virus.',
    skills: 'Unity, C#, Linear Algebra, 3D Graphics'
  }
]

function App() {
  return (
    <div className="App">
      <Grid
        centered
        relaxed
        padded
        columns='equal'
        verticalAlign='middle'>
        {PROJECTS.map((project, i) => {
          return (
            <Card raised link href={project.href} style={{"margin":"20px"}}>
              <Image src={project.imagePath} wrapped ui={false} />
              <Card.Content textAlign={'left'}>
                <Card.Header>{project.header}</Card.Header>
                <Card.Meta>
                  <span className='date'>{project.subheader}</span>
                </Card.Meta>
                <Card.Description>
                  {project.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign={'left'}>
                <a>
                  {project.skills}
                </a>
              </Card.Content>
            </Card>
          )
        })}
      </Grid>
    </div>
  );
}

export default App;
