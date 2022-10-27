import styles from '../styles/About.module.scss'

function About() {
  return (
      <div className={styles.highlightscss}>
        <h1>About Page</h1>
        <h2>About Page Subtitle</h2>
        <button className='btn btn-primary'>Primary</button>
        <button className='btn btn-success'>Success</button>
      </div>
  )
}

export default About
