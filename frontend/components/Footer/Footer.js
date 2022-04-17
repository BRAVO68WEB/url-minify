import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from '../../styles/Footer.module.css'
const Footer = () => {
  return (
        <div className={styles.footer}>
        <div>
        This project is OpenSource under MIT license
        <br/>
        Made with <span className={styles.icon}><FavoriteIcon/></span> by <a href='https://github.com/BRAVO68WEB' target='_blank'> @bravo68web </a> and team
        </div>
        </div>
    )
}

export default Footer