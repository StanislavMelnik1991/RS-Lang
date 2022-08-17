import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Footer: NextPage = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className='team'>
          team
        </div>
        <div className='school'>
          <a
            href="https://rs.school/js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Powered by RSSchool{'2022'}</span>
            <span className={styles.logo}>
              <Image src="/rs_school_js.svg" alt="RSSchool Logo" width={100} height={50} />
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
