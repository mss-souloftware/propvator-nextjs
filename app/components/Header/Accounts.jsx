import Link from 'next/link'
import React from 'react'
import styles from './Accounts.module.css';

export default function Accounts() {
  return (
    <div className={styles.accounts}>
        <Link href="/">Login</Link>
        <Link href="/">Sign-up</Link>
    </div>
  )
}
