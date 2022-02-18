import React, { Component } from "react";
import FeedbackOptions from "./Feedback-App/Feedback/FeddbackOption";
import Title from "./Feedback-App/Title/Title";
import Notification from "./Feedback-App/Notifaction/Notification";
import Statistics from "./Feedback-App/Statistics/Statistics";
import styles from '../components/Feedback-App/styles/Feedback.module.css'

class App extends Component { 

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
 
  
  onHendleIncrement = (options) => { 
  this.setState(prevState => { 
    return {[options]:prevState[options] + 1}
  })
  }

  
  onTotalCount = () => { 
    return  Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }
  
 

  countPositiveFeedbackPercentage = () => { 
    if (this.onTotalCount() === 0) { 
      return 0;
    }
    return  Math.round( 100 / (this.onTotalCount() / this.state.good))
  }

  render() { 
    const state = Object.keys(this.state)
    // console.log(state);
    const { good, neutral, bad } = this.state;
      
    return (
      <div className={styles.box}>
        <Title title={'Please leave feedback'}/>
        <FeedbackOptions onHandle={this.onHendleIncrement} listState={state}/>
        <Title title={'Statistics'}/>
        {this.onTotalCount() > 0 ?
          <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={this.onTotalCount}
          positivePercentage={this.countPositiveFeedbackPercentage} /> : <Notification message="There is no feedback" />}
       </div>
     )
  }
}

export default App;