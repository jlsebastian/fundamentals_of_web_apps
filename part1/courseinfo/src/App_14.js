import React from 'react'
const Header = (props) => {
    return(<h1>{props.course}</h1>)
}



const Part = (props) => {
    return(
    <p>
        {props.name} {props.exercise}
    </p>)
    }

const Content = (propPart) => {
  // console.log('props:'+ (propPart.parts[0]))
  return (
     <div>
          <Part name={propPart.parts[0].name} exercise={propPart.parts[0].exercises} />
          <Part name={propPart.parts[1].name} exercise={propPart.parts[1].exercises} />
          <Part name={propPart.parts[2].name} exercise={propPart.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
    return(<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>)
}



const App_14 = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log('parts'+parts[0].name)
  return (
    <div>
        <h1> Part1-1.4</h1>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App_14
