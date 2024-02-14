const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  )
}

const App = () => {
  /* Vanha tapa muutjilla
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  */
  
  //Oliot muuttujina
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
      <Header course = {course}/>
      <Content part1 = {part1.name} exercises1 = {part1.exercises} 
                part2 = {part2.name} exercises2 = {part2.exercises}
                part3 = {part3.name} exercises3 = {part3.exercises} />
      <Total ex1 = {part1.exercises} ex2 = {part2.exercises} ex3 = {part3.exercises} />
    
      
    </div>
  )
}

export default App

