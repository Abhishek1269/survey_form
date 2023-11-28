import React, { Component } from 'react';
import Details from "./Details";
import Question from "./Question";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyC5DoriN3y1F82lyY5ot0fy3dZs2fG0Bvw",
  authDomain: "survey-261d5.firebaseapp.com",
  databaseURL: "https://survey-261d5-default-rtdb.firebaseio.com",
  projectId: "survey-261d5",
  storageBucket: "survey-261d5.appspot.com",
  messagingSenderId: "809514631401",
  appId: "1:809514631401:web:f107eb317dac68d9ee7078"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
class Container extends Component {
constructor(props) {
  super(props);
  this.state = {
    id: uuidv4(),
     name: null,
     email: null,
     questions: {
      q1: null,
      q2: null,
      q3: null,
     },

     isSubmitted: false,
  };
}

detailsSubmitHandler = (event) => {
  const name = event.target.name.value;
  const email = event.target.email.value;
  this.setState({name, email});

  event.preventDefault();
};

questionSubmitHandler = (event) => {
  const questions = {};
  questions.q1 = event.target.q1.value;
  questions.q2 = event.target.q2.value;
  questions.q3 = event.target.q3.value;
  const isSubmitted = true;
  this.setState({questions, isSubmitted});
  event.preventDefault();
  const database = firebase.database();
  database.ref("survey/"+this.state.id).set({
    name: this.state.name,
    email: this.state.email,
    questions: this.state.questions,
  });
};
  render() {
    return (
      <>
      <div class="container-fluid">
        <div class="container card mt-2">
            <h1 class= "text-center text-primary"> Tech Survey</h1>
        </div>
      </div>
      {this.state.isSubmitted ? (
        <div className='card text-center mt-5'>
          <h1>Thank You</h1>
        </div>
      ) : this.state.name === null && this.state.email === null ? <Details submit={this.detailsSubmitHandler}></Details> :
       <Question submit={this.questionSubmitHandler}></Question>}
      </>
    )
  }
}

export default Container
