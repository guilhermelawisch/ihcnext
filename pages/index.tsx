import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../src/components/header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dualidade | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>

        <section className={styles.section}>
          <div className={styles.about}>
            <div className={styles.proposito}>
              <h3 className={styles.h3}>Próposito</h3>
              <p className={styles.p}>Nosso principal objetivo de suprir as necessidades tanto das empresas quanto dos colaboradores, sejam eles alunos, equipes, entre outros tipos de assistentes, no ramo da tecnologia. Através da prestação de serviços desses colaboradores, nosso projeto irá mudar a forma como as empresas escolhem seus trabalhadores.</p>
            </div>
            <div>
              <img src="./estudante-removebg.png" alt=""/>
            </div>
          </div>
          <div className={styles.buttons}>
            <div>
              <Link href="/empresa">
                <a className={styles.clickMe}>Empresa</a>
              </Link>
            </div>
            <div>
              <Link href="/estudante">
                <a className={styles.clickMe}>Estudante</a>
              </Link>
            </div>
          </div>
        </section>

        <footer>

        </footer>
      </main>
    </div>
  )
}

export default Home
