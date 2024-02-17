import { useState } from 'react'

const Button = (props) => (
<button onClick={props.handleClick}>
  {props.text}
</button>

)


const getRandomInt = (max) => {
  console.log('max', max)
  return Math.floor(Math.random() * max);
}

const DisplayAnecdoteMostVotes = ({anecdotes, max, votes}) => {
  return (
    <>
      {anecdotes[votes.indexOf(max)]} <br />
      has {max} votes
    </>
  )
}

  

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //const votes = Array(9).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(9).fill(0))

  const handleClickSelected = () => {
    setSelected(getRandomInt(anecdotes.length-1))
  }

  const handleClickVote = () => {
    const updatedVote = [...votes]
    updatedVote[selected] += 1
    setVote(updatedVote)
    console.log(updatedVote)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} <br />
        has {votes[selected]} votes <br  />
        <Button handleClick={handleClickSelected} text='next anecdote' />
        <Button handleClick={handleClickVote} text='vote'/>
      </p>

      <h1>Anecdote with most votes</h1>
      <p>
        <DisplayAnecdoteMostVotes max = {Math.max(...votes)} anecdotes = {anecdotes} votes={votes}/>
      </p>
    </div>
  )
}

export default App