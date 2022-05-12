import React, { FC, ReactNode } from 'react'

export const DarkLayout:FC<{ children?: ReactNode }> = ({ children } ) => {
  return (
    <div
    style={{
       backgroundColor: "rgba(0,0,0,0.3)",
       padding: "10px",
       borderRadius: "5px"
    }}
    >
        <h3>Drak Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}
