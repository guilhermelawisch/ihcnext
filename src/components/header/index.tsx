import styles from "../../../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.headerOutside}>
        <div className={styles.header}>
          <div>
            <h1>Dualidade</h1>
          </div>
          <div className={styles.headerRight}>
            <div>
              <a href="#">
                <h2>Como Funciona</h2>
              </a>
            </div>
            <div>
              <a href="#">
                <h2>Entrar</h2>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header