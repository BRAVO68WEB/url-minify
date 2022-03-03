import * as React from 'react'
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
  AppBar,
} from '@mui/material'

import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import NotFound from '@pages/404'
import styles from '../../styles/Features.module.css'

export default function Index() {
  return (
    <Box className={styles.container}>
      <Box className={styles.heading}>
        <h1> SHORTEN, SHARE AND ANALYZE</h1>
        <br />
      </Box>

      <Box className={styles.featuresContainer}>
        <Box className={styles.feature}>
          <a className="Link" href="NotFound">
            <RemoveRedEyeIcon className={styles.icons} />
            <h4>VIEW COUNTER</h4>
          </a>
        </Box>

        <Box className={styles.feature}>
          <a className="Link" href="NotFound">
            <QrCodeScannerIcon className={styles.icons} />
            <h4>QR CODE</h4>
          </a>
        </Box>

        <Box className={styles.feature}>
          <a className="Link" href="NotFound">
            <RocketLaunchIcon className={styles.icons} />
            <h4>ROBUST API</h4>
          </a>
        </Box>
      </Box>
    </Box>
  )
}
