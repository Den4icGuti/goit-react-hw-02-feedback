
import PropTypes from "prop-types";
import { number } from "prop-types";
import styles from '../styles/Feedback.module.css';

const FeedbackOptions = ({ listState, onHandle }) => { 
  return (
    <ul className={styles.listButton}>
      {listState.map(list =>
        <li className={styles.item} key={list}>
          <button type="button" className={styles.btnGroup} onClick={() => onHandle(list)}>{list}</button>
       </li>)}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  list: PropTypes.arrayOf(number)
}

export default FeedbackOptions;