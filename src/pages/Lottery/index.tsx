import React from 'react'
import style from './style.module.css'

export default function Lottery() {
  return (
    <>
      <div className={style.container}>
        <h1>Lottery</h1>
        <a href="/lottery" style={{paddingRight:'100px'}}>Lottery</a>
        <a href="/vote">vote</a>
      </div>
    </>
  )
}
