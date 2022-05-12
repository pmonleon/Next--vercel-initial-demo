import React, {  ReactNode } from 'react';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';



const AboutPage = () => {
  return (
      <>
       
            <h1 className={'title'}>
              About Page
            </h1>
            <h1 className={'title'}>
              Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
              Editar{' '}
              <code className={'code'}>pages/about.js</code>
            </p>
        
      </>   
  )
}

AboutPage.getLayout = function getLayout( page: ReactNode | JSX.Element[]) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default AboutPage

