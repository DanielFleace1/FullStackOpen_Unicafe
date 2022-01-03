import React, { useState } from 'react'

// Button Component
const Button = ({text,handleClick}) => {
  return(
    <button onClick = {handleClick}>{text}</button>
  )
}
// Statistics Heading Component. Displays correct heading based on if feedback has been recieved yet. 
const StatisticsHeading =  ({length}) => {
  if(length > 0){
    return(<h2>statistics</h2>)
  }
  else {
    return(
      <div>
        <h2>statistics</h2>
        <br />
        <div>No feedback given</div>
      </div>
    )
  }
}

// Statistics Line Component - diplays each Statistics Line.
const StatisticsLine = ({length,value,text}) => {
  if(length>0 && text !== 'positive response : ' ){    
    return(
      
      <tbody>
      <tr>
        <td>{text}</td><td>{value}</td>
      </tr>
      </tbody>
    
    )
  }
  else if(length>0 && text === 'positive response : ' ){
    return(
      <tbody>
        <tr>
          <td>{text}</td><td>{value}%</td>
        </tr>
      </tbody>
    )
  }
  else return(<tbody></tbody>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const goodClick = () => {
      setGood(good+1);
  }
  const neutralClick = () => {
    setNeutral(neutral+1);
  }
  const badClick = () => {
    setBad(bad+1);
  }
  return (
    <div>
      <h1> give feedback </h1>
      <Button text = 'good' handleClick = {goodClick}  />
      <Button text = 'neutral' handleClick = {neutralClick}  />
      <Button text = 'bad' handleClick = {badClick}  />
      <br />
      <StatisticsHeading length= {good+bad+neutral}/>
      <br />
      <table>
      <StatisticsLine length = {good + bad + neutral} value = {good} text = 'good: '  />
      <StatisticsLine length = {good + bad + neutral} value = {neutral} text = 'neutral: '  />
      <StatisticsLine length = {good + bad + neutral} value = {bad} text = 'bad : '  />
      <StatisticsLine length = {good + bad + neutral} value = {good+bad+neutral} text = 'all : '  />
      <StatisticsLine length = {good + bad + neutral} value = {(good-bad)/(good + bad + neutral)} text = 'Average Score : '  />
      <StatisticsLine length = {good + bad + neutral} value = {(good/(good + bad + neutral)*100)} text = 'positive response : '  />
     </table>
  </div>
  )
}

export default App