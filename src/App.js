import React from 'react';
import './App.css';

const App = () => <PersonList />

const PersonList=() => {

  const People = [
    {
      img: 'biach',
      name: 'Biach Aerill',
      job: 'Digital Marketing',
      desc: "Indonesian, Single, 24 years old, Bachelor of Communication, 3 years of work experience as Marketing Communication and Content Writer"
    },
    {
      img : 'david',
      name: 'David Andrianus Hutapea',
      job: 'Senior Software Engineer',
      desc: 'Indonesian, Single, 29 years old, Bachelor of Physics, 6 years work experience in multiple industry as IT guy, have a good understanding on design pattern, SDLC and algorithm.'
    },
    {
      img : 'tomson',
      name: 'Thompson Nainggolan',
      job: 'Senior Developer',
      desc: 'Indonesian, Single 29 years old, Bachelor of Science, 3 years work experience in game industry, 1 year work experience banking and 2 years work experience in manufacturing industries'
    },
  ];

  return (
    <section>
      <Person personData={People[0]}/>
      <Person personData={People[1]}/>
      <Person personData={People[2]}/>
    </section>
  )
}

const Person = (props) => {
  const {img,name,job,desc} = props.personData;
  const imgsrc = `http://8elements.net/img/photo/${img}.jpg`;

  return (
    <div className='person'> 
      <img src={imgsrc} alt=''/>
      {/* <img src={imgsrc} alt='' /> */}
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <h4>{desc}</h4>
      </div>
    </div>
  )
}

export default App;
