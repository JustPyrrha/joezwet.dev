import React from "react";
import styles from "./app.module.scss"

const App: React.FC = () => {

  return (
    <div className={styles.root}>
      <h1>Joe van der Zwet</h1>
      <h4>Site in development</h4>

      <div className={styles.footer}>
        <p>Copyright &copy; {new Date().getFullYear()} Joe van der Zwet</p>
      </div>
    </div>
  )
}

export default App;