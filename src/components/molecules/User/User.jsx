import React from 'react'
import UserIcon from '../../atoms/UserIcon/UserIcon'
import UserName from '../../atoms/UserName/UserName'
import style from "./User.module.css"

const User = () => {
  return (
    <main className={style.user}>
        <UserName/>
        <UserIcon/>
    </main>
  )
}

export default User