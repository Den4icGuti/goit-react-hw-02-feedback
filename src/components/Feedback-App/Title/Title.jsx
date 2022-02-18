import PropTypes from 'prop-types';
import styles from '../styles/Feedback.module.css'

const Title = ({ title }) => { 
  return (
    <h2 className={styles.titleText}>{title}</h2>
)
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title;