import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function Myapp(){
  return(
    
      <div>
      
      <div class="header">
      <h1>Related Posts</h1>
      <div class="navbar">
      <a href="#" className="act">Home</a><br/>
      <a href="#" className="link">about us</a><br/>
      <a href="#"className="contact">contact</a><br/>
      <a href="#" class="right">Search</a> <br/>
      </div>
      </div>
      
      <br/>
      <br/>
  
      
      <div className='container'>
      <Card 
        img="img/ML.jpg"
        title="Machine Learning"
        heading="Machine Learning (A-Z™: Hands-On Python & R In Data Science)"
        description="Interested in the field of Machine Learning? Then this course is for you!
        "
        link="https://www.udemy.com/course/machinelearning/"
      />

      <Card 
        img="img/Ds.jpg"
        title="Data Science"
        heading="Python for Data Science and Machine Learning Bootcamp (Data Science)"
        description="Are you ready to start your path to becoming a Data Scientist! machine learning algorithms!"
        link="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"

      />


      <Card 
        img="img/python.jpg"
        title="Python Course Series"
        heading="Learn Python like a Professional Start from the basics(python) "
        description="Become a Python Programmer and learn one of employer's most requested skills of 2022!"
        link="https://www.udemy.com/course/complete-python-bootcamp/"

      />

      <Card 
        img="img/node.png"
        title="Node Course Series"
        heading="The Complete Node.js Developer Course (3rd Edition)"
        description="Have you tried to learn Node before? You start a new course, and the instructor has you installing!!!"
        link="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"

      />

      <Card 
        img="img/REACT.png"
        title="React Course Series"
        heading="React - The Complete Guide (incl Hooks, React Router, Redux)"
        description="This course is the most up-to-date, comprehensive and bestselling React course on Udemy!"
        link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"

      />
      </div>
      <div className="footer">
      <p>I Hope You Enjoy these courses and their article.</p>
      <h3>@2022 Sudha Kashyap</h3>
  </div>
     </div>
  )
}

function Card(props){
  return(
    <div className='card'>
      <div className='card-body'>
        <img src={props.img} class="card-img"/>
        
      <div className='card-content'>
        <h3 className='card-title'>{props.title}</h3>
        <h3 className='card-heading'>{props.heading}</h3>
        <p className='card-description'>{props.description}</p>
      </div>

      </div>
      
      <a className="show" href={props.link}><button className='button'>Watch Now</button></a>
      <br/>
      <br/>
      </div>
      
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Myapp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
