import * as React from 'react'
import { Box } from '@mui/material'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import styles from '../../styles/Features.module.css'
import { motion } from 'framer-motion'

export default function Index() {
  return (
    <Box className={styles.container}>
      <Box className={styles.heading}>
        <h1> SHORTEN, SHARE & ANALYSE</h1>
        <br />
      </Box>

      <Box className={styles.featuresContainer}>
        <Box component={motion.div} whileHover={{ scale: 1.4, transition: { ease: 'easeInOut' } }} className={styles.feature}>
          <a href="NotFound">
            <RemoveRedEyeIcon className={styles.icons} />
            <h4>VIEW COUNTER</h4>
          </a>
        </Box>

        <Box component={motion.div} whileHover={{ scale: 1.4, transition: { ease: 'easeInOut' } }} className={styles.feature}>
          <a href="NotFound">
            <QrCodeScannerIcon className={styles.icons} />
            <h4>QR CODE</h4>
          </a>
        </Box>

        <Box component={motion.div} whileHover={{ scale: 1.4, transition: { ease: 'easeInOut' } }} className={styles.feature}>
          <a href="NotFound">
            <RocketLaunchIcon className={styles.icons} />
            <h4>ROBUST API</h4>
          </a>
        </Box>
      </Box>
    </Box>
  )
}
