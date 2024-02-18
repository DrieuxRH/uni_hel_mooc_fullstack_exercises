const Course = ({course}) => {
  return (
    <>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts= {course.parts} />
    </>
  )
}

const Header = ({name}) => <h1>{name}</h1>

const Total = ({ parts }) => {
  console.log(parts)
  
  let sum = 0;
  parts.forEach((part) => sum += part.exercises);
  console.log(sum)
  return (
    <p><b>Total of exercises {sum}</b></p>
  )
  
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({parts}) => {
  console.log('content parts: ', parts)
  return(
    parts.map(part => 
      <Part part={part} key={part.id}/>
    )
  )
}

/* Part rendering, every part added manually
const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>
*/
  const App = () => {
    const course = {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
        <Course course={course} />
      </div>
    )
  }
  
export default App