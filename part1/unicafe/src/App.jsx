import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({counter}) => <div>{counter}</div>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}:</td>
      <td> {props.value} </td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total){
    return (
      <table>
        <tbody>
          <StatisticLine text='Good' value={props.good}/>
          <StatisticLine text='Neutral' value={props.neutral}/>
          <StatisticLine text='Bad' value={props.bad}/>
          <StatisticLine text='Total' value={props.total} /> 
          <StatisticLine text='Average' value={(props.good + props.bad * -1)/props.total} />
          <StatisticLine text='Positive' value={(props.good / props.total) * 100 + ' %'} />
        </tbody>
      </table>
    )
  }

  return (<>No feedback given</>)
 
}

const App = () => {
  
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    console.log('Good')
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)
  }
  
  const handleClickNeutral = () => {
    console.log('Neutral')
    const updateNeutral = neutral +1
    setNeutral(updateNeutral)
    setTotal(updateNeutral + good + bad)
  }
  
  const handleClickBad = () => {
    console.log('Bad')
    const updateBad = bad +1
    setBad(updateBad)
    setTotal(updateBad + neutral +good)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />
      <h1>Statistics</h1>
      <Statistics total={total} good= {good} bad={bad} neutral={neutral} /> 
    </div>
  )
}

export default App