import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

export const MainLayout: FC<{ children?: ReactNode }> = ({ children } ) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Francisco Monleon</title>
            <meta name="description" content="Home Page" />
            <meta name='keywords' content='Francisco Monleon app NextJs' />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>

            {children}
          
          </main>
    
    
        </div>
      )
}
