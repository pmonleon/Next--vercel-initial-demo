import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'

const Pricing = () => {
  return (
    <MainLayout>
            <h1 className={'title'}>
                Pricing Page
            </h1>
            <h1 className={'title'}>
              Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
              Editar{' '}
              <code className={'code'}>pages/pricing.js</code>
            </p>
      </MainLayout>
  )
}

export default Pricing