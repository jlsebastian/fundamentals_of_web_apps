import React from 'react'
const Header = (props) => {
    return(<h1>{props.course}</h1>)
}

const Content = (props) => {
    return(<p>
        {props.part} {props.exercise}
    </p>)
    }

const Part = (props) => {
    return(<p>
        {props.name} {props.exercise}
    </p>)
    }

const Content2 = (props) => {
  return (
    <div>
      <Part name={props.part1} exercise={props.exercises1} />
      <Part name={props.part2} exercise={props.exercises2} />
      <Part name={props.part3} exercise={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
    return(<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>)
}



const App_13 = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
        <h1> Part1-1.3</h1>
      <Header course={course} />
      <Content2 part1={part1.name} part2={part2.name} part3={part3.name}
       exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App_13
