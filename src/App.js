// React uses something called virtual dom
// Virtual dom is a js object -->
// const VirtualDom = {
//   key: value,
//   key: value
// }
// updating the virtual dom is easier than updating the real one
// react only updates the section of the page where the change was made
// ReactJs is a component based frontend library
// component is a small piece of ui interface
// Split the ui into small components like sidebar, searchbar and movies
// There are 2 components
/**
 * Functional and class based components:
 * Class component:
 * import React, {Component} from 'react'
 * class Example extends Component{
 *    render(){  //describes what should be displayed and how should ui look like
 *      return <div> Hello World! </div>
 *    }
 * }
 * functional components:
 * import React from 'react' // in the newer versions not needed
 * const Example = () =>{
 *    return <div> Hello World! </div>
 *  }
 * 
 * JSX --> used in React to describe what the user interface should look like
 * comes with the full power of javascript
 * 
 * npx create-react-app my-first-react-project
 * npm start will run the application
 * 
 * In the html document we just have a single element div with the id of root
 * All of our react components are gonna be injected inside that div element
 * 
 */

// import './App.css';

// //Creating a component
// // builtin props object
// const Person = (props) =>{
//   return(
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h3>Age: {props.age}</h3>
//     </>
//   )
// }

// const App = ()=> {

//   return (
//     <div className="App">
//       {/* Props allow you to pass dynamic data through react components. 
//         Arguments that you pass into react components , shorter way of showing properties
//       */}
//       <Person name = {'John'} lastName = {'Doe'} age={25}/>    
//       <Person name = "Jane" lastName = 'Dogy' age = {2+2}/>    
//       <Person />    
//       <Person />    
//       <Person />    
//       {/* all the code is imported */}
      
//       <h2>2+2 is {2+2}</h2>
     
      
//     </div>
//   );
// }

// React state is a plain javascript object used by React
import {useState, useEffect} from 'react'
import './App.css'

const App = () =>{
  const [counter, setCounter] = useState();  //this is called as a hood, 2nd element is the setter function for the first element
  useEffect(()=>{     //this code runs as soon as the page loads
    alert("Reload")
    //counter = 100; //breaks the most imp rule of react, never modify the state manually
    setCounter(100)
  }, [])

  return(
    <div className='App'>
      <button onClick={()=> setCounter((prevCount)=> prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((nextCount)=> nextCount + 1)}>-</button>
    </div>
  );
}


export default App;
