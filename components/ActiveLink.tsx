import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties, FC } from 'react'

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props {
    text: string,
    url: string
}

export const ActiveLink: FC<Props> = ({ text, url }) => {

    const { asPath } = useRouter()

  return (
      <Link href={ url }>
            <a style={ asPath === url ? style : undefined }>{ text }</a>
      </Link> 
  )
}
