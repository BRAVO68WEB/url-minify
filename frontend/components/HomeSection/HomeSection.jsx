import React, { useState } from 'react'
import HomeSectionStyle from './HomeSection.style'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Axios from 'helpers/Axios'
import { Alert, Button, Collapse, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import QRCode from 'qrcode'
import { signup } from '@pages/signup'
import NotFound from '@pages/404'
import styles from '../../styles/HomeSection.module.css'

const spanVariants = {
  visible: { y: 0, scaleY: 1 },
  hover: {
    y: [-1, -2, -2.8, 0.9, 0],
    scaleY: [1, 1.3, 0.8, 1.2, 1],
    color: '#4A1C40'
  }
}
const list = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
}

const effect = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: [-1, -1.9, -2.7, 1],
    scaleY: [1, 1.3, 0.8, 1]
  }
}

const QR = {
  marginTop: '1.8em',
}

function HomeSection(props) {
  let qrCode
  let minifiedUrl
  const [disabled, setDisabled] = useState(false)
  const [open, setOpen] = useState(false)


  const setMinfy = async () => {
    props.setLongUrl('')
    setOpen(false)
    setDisabled(true)
    let res
    try {
      res = await Axios.post(`/minify/add`, {
        originalUrl: props.longUrl,
      })
    } catch (err) {
      console.error(err)
      return
    }

    const data = await res.data
    console.log(`Data: ${data}`);

    props.setShortUrl(data.minifiedUrl)
    minifiedUrl = data.minifiedUrl
    navigator.clipboard.writeText(props.shortUrl)
    if (minifiedUrl) {
      generateQR()
    }
    await navigator.clipboard.writeText(data.minifiedUrl)
    setOpen(true)
    setDisabled(false)
  }

  // Generate QRCODE for the generated link
  const generateQR = async () => {
    try {
      qrCode = await QRCode.toDataURL(minifiedUrl)
      props.setQrData(qrCode)
      props.setShowQrCode(true)
    } catch (err) {
      console.error(err)
    }
  }

  const text1 = "Url";
  const text2 = "MiniFy";


  return (
    <HomeSectionStyle>
      <div className="content">
        <motion.span style={{ display: 'flex' }} variants={list} initial="hidden" animate="visible">
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            {text1.split("").map((Letter, id) => (
              <motion.div variants={effect}>
                <span className={styles.head} key={id}>
                  <motion.h1 className={styles.letter} variants={spanVariants} initial="visible" whileHover="hover">{Letter}</motion.h1>
                </span></motion.div>
            ))}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div style={{ display: 'flex' }}>
            {text2.split("").map((Letter, id) => (
              <motion.div variants={effect}><span className={styles.head} key={id}>
                <motion.h1 className={styles.letter} variants={spanVariants} initial="visible" whileHover="hover">{Letter}</motion.h1>
              </span></motion.div>
            ))}
          </div>
        </motion.span>
        <motion.div initial={{ x: '-100vw', opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 3, type: 'spring', stiffness: 150 } }} className={styles.searchBox}>

          <input
            className={styles.search}
            placeholder="Enter the url to be minified......"
            value={props.longUrl}
            onChange={(e) => {
              props.setLongUrl(e.target.value)
            }}
          />
          <Button
            variant={'contained'}
            disabled={disabled}
            className={styles.btn}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
            id="minify"
            onClick={setMinfy}
          >
            MINIFY
          </Button>
        </motion.div>

        <div className={styles.info} style={{ marginBottom: '40px', color: 'black', fontWeight: 'bold', fontSize: '1rem' }}>
          <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 3.4, duration: 0.4 } }}>
            Need more advanced features? |{' '}
            <Link href="/signup">
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }} >
                <a href={signup}>Create an account</a>
              </span>
            </Link>
          </motion.h3>
        </div>

        {
          // show QR code if a url is generated
          props.showQrCode ? (
            <div style={QR}>
              <Image
                src={props.qrData}
                placeholder="blur"
                blurDataURL
                width={150}
                height={150}
              />
            </div>
          ) : (
            ''
          )
        }
      </div>

      <Collapse in={open}>
        <Alert
          className={styles.showUrl}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Your Shortened URL: {props.shortUrl}{' '}
          <IconButton
            onClick={() => navigator.clipboard.writeText(props.shortUrl)}
            style={{ marginLeft: '15px', padding: 0 }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Alert>
      </Collapse>
    </HomeSectionStyle>
  )
}

export default HomeSection
