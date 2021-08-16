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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
  <>
    <div>
       <h1> Part1-1.1</h1>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>

    <div>
        <h1> Part1-1.2</h1>
      <Header course={course} />
      <Content2 part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
    </>
  )

}

export default App