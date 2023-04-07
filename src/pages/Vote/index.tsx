import React from 'react'
import style from './style.module.css'

export default function Vote() {
  return (
    <>
      <div className={style.container}>
        <h1>Vote</h1>
        <a href="/lottery" style={{paddingRight:'100px'}}>Lottery</a>
        <a href="/vote">vote</a>
      </div>
    </>
  )
}
