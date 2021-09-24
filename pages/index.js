// utilidad para cambiar todo aquello que queda envuelto por el tag <head></head>
// todo lo relacionado con SEO

// _document ( es el nivel más alto de nuestra app y permite añadir props al html por ejemplo)
// _app
// pages
// components

import Link from 'next/link' // solo para añdir el anchor y el useRouter es el objeto completo para hacer rutas programáticas (aparte que te da toda la información sobre la ruta actual. El link es solo para navegación). El useRouter también te permite ver los parámteros de la url, cambiar la url cuando el usuario abre un modal, etc...
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <AppLayout>
        <section>
          <img src="/favicon.ico" alt="Logo"/>
          <h1 className={styles.title}>
            <a href="https://nextjs.org">devter</a>
          </h1>
          <h2>Talk about development with developers 🧑🏽‍💻</h2>
          <div>
            <Button> Log in with Github <GitHub width={30} height={30} fill='black' /></Button>
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
          img {
            width: 120px;
          }

          div {
            margin-top: 16px;
          }

          section {
            display: grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }

          h1 {
            font-size: 24px;
            color: ${colors.primary};
            font-weight: 700;
            margin-bottom: 1.2rem;
          }

          h2 {
            font-size: 18px;
            margin: 0;
            color: ${colors.black};
            font-weight: 400;
          }
        `}
      </style>
      
      {/* es global cuando el componente está montado, y cuando viajamos a otra página este componente se desmonta.
      Estamos diciendo que sean globales cuando el componente está montado. Para que sean globales --> Layout */}
      {/* <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          
          a {
            color: inherit;
            text-decoration: none;
          }
          
          * {
            box-sizing: border-box;
          }
          
        `}
      </style> */}

    </div>
  )
}
