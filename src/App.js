import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const NUM_COL = 4;

const ME_BLOCK = {
  imagePath: 'assets/images/me2.jpg',
  href: 'https://github.com/gbattra',
  header: 'Greg Attra',
  subheader: 'Me!',
  description: '',
  skills: 'Deep Learning Engineer, System Architect, Software Engineer, Data Scientist'
}

const PROJECTS = [
  {
    imagePath: 'assets/images/VAE.png',
    href: 'https://github.com/gbattra/MNIST_VAE',
    header: 'MNIST VAE',
    subheader: 'A VAE to generate MNIST samples / Tensorflow',
    description: '',
    skills: 'Python, Tensorflow, CNN, VAE'
  },
  {
    imagePath: 'assets/images/GANs.png',
    href: 'https://github.com/gbattra/GANsProject',
    header: 'MNIST GANs',
    subheader: 'A first attempt at a GANs model using Tensorflow',
    description: '',
    skills: 'Python, Tensorflow, CNN, GANs'
  },
  {
    imagePath: 'assets/images/ML.jpg',
    href: 'https://github.com/gbattra/ML_Framework',
    header: 'ML Framework',
    subheader: 'A machine learning framework hacked together with Numpy',
    description: '',
    skills: 'Python, Numpy, Linear & Logistic Regression'
  },
  {
    imagePath: 'assets/images/SML.png',
    href: 'https://github.com/gbattra/machine_learning',
    header: 'Stanford Machine Learning Projects',
    subheader: 'Projects completed for the Stanford Machine Learning MOOC',
    description: '',
    skills: 'Matlab, NN, SVM, KMeans, PCA'
  },
  {
    imagePath: 'assets/images/Generator.png',
    href: 'https://github.com/gbattra/Generator_ML_Framework',
    header: 'Generator ML Framework',
    subheader: 'POC for Generative AI algorithm',
    description: '',
    skills: 'Python, Numpy, OOP, Linear Algebra'
  },
  {
    imagePath: 'assets/images/Portfolio.png',
    href: 'https://github.com/gbattra/portfolio',
    header: 'Portfolio Website',
    subheader: 'Light React app for this very Portfolio webpage',
    description: '',
    skills: 'Javascript, React, HTML/CSS, Semantic UI'
  },
  {
    imagePath: 'assets/images/PaintMe.jpg',
    href: 'https://github.com/gbattra/paint-me-v2',
    header: 'Paint Me',
    subheader: 'NST-based webapp for generating AI art',
    description: '',
    skills: 'Python, Tensorflow, NST, Django, Flask, Pub/Sub, GCP'
  },
  {
    imagePath: 'assets/images/Unity.png',
    href: 'https://github.com/gbattra/HexDodge',
    header: 'HexDodge',
    subheader: 'iOS game built in Unity',
    description: '',
    skills: 'Unity, C#, Linear Algebra, 3D Graphics'
  },
  {
    imagePath: 'assets/images/Streetview.png',
    href: 'https://github.com/gbattra/StreetviewHouseNumberDetector',
    header: 'Street View House Number Detector',
    subheader: 'CNN for street-view house number detection and classification',
    description: '',
    skills: 'Unity, C#, Linear Algebra, 3D Graphics'
  },
  {
    imagePath: 'assets/images/NN.png',
    href: 'https://github.com/gbattra/NeuralNetwork',
    header: 'Simple Neural Network',
    subheader: '3 layer neural network to predict presence and type of Arrhythmia in patients',
    description: '',
    skills: 'Python, Numpy, Pandas, Matplotlib'
  },
  {
    imagePath: 'assets/images/LogisticRegression.png',
    href: 'https://github.com/gbattra/LogisticRegression',
    header: 'Simple Logisitc Regression',
    subheader: 'A logistic regression model to classify types of cancer and skin conditions',
    description: '',
    skills: 'Python, Numpy, Pandas, Matplotlib'
  },
  {
    imagePath: 'assets/images/LinearRegression.png',
    href: 'https://github.com/gbattra/LinearRegression',
    header: 'Simple Linear Regression',
    subheader: 'A linear regression model for bike rentalss',
    description: '',
    skills: 'Python, Numpy, Pandas, Matplotlib'
  }
]

function PROJECTS_ROWS() {
  var rows = [];
  var row = [];

  PROJECTS.sort(() =>{
    return .5 - Math.random();
  }).unshift(ME_BLOCK);

  PROJECTS.map((project, i) => {
    row.push(project);
    if (row.length === NUM_COL || i == PROJECTS.length - 1) {
      rows.push(row);
      row = []
    }
  })

  return rows;
}

function App() {
  return (
    <div className="App">
      <Grid
        relaxed
        padded
        columns='equal'
        verticalAlign='middle'>
        {PROJECTS_ROWS().map((row, i) => {
          return (
            <Grid.Row columns={NUM_COL} key={i}>
              {row.map((project, j) => {
                return (
                  <Grid.Column key={j}>
                    <Card link href={project.href}>
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
                  </Grid.Column>
                )
              })}
            </Grid.Row>
          )
        })}
      </Grid>
    </div>
  );
}

export default App;
