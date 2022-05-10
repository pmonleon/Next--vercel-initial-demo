import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({ text, url }) => {

    const { asPath } = useRouter()

  return (
      <Link href={ url }>
            <a style={ asPath === url ? style : null }>{ text }</a>
      </Link> 
  )
}
