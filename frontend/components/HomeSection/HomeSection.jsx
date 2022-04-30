import React, { useState } from 'react'
import HomeSectionStyle from './HomeSection.style'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Axios from 'helpers/Axios'
import { Alert, Button, Collapse, IconButton } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import QRCode from 'qrcode'
import { signup } from '@pages/signup'
import styles from '../../styles/HomeSection.module.css'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    action: {
      disabledBackground: '#222831',
      disabled: 'white'
    }
  }
})

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
      staggerChildren: 0.27
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
  const [open, setOpen] = useState(false)
  const [disabled, setdisabled] = useState(false)


  const setMinfy = async () => {
    if (props.longUrl === '') {
      props.setShowQrCode(false)
      setOpen(false)
      toast.error("Please enter a valid URL !!");
    }
    else {
      setdisabled(true)
      let res
      try {
        res = await Axios.post(`/minify/add`, {
          originalUrl: props.longUrl,
        })
      } catch (err) {
        console.error(err)
        return
      }
      toast.success("Successfully shortened your URL !!")
      const data = await res.data
      console.log(`Data: ${data}`);

      props.setShortUrl(data.minifiedUrl)
      minifiedUrl = data.minifiedUrl
      if (minifiedUrl) {
        generateQR()
      }
      setOpen(true)
    }
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

  const handlecopy = async () => {
    navigator.clipboard.writeText(props.shortUrl)
    toast.success("URL copied to clipboard !!")
  }

  const handleResponse = async () => {
    setOpen(false)
    props.setLongUrl('')
    setdisabled(false)
  }

  const text1 = "Url";
  const text2 = "MiniFy";




  return (
    <HomeSectionStyle>
      <div className="content">
        <motion.span style={{ display: 'flex' }} variants={list} initial="hidden" animate="visible">
          {text1.split("").map((Letter, id) => (
            <motion.span variants={effect} className={styles.head} key={id}>
              <motion.h1 className={styles.letter} variants={spanVariants} initial="visible" whileHover="hover">{Letter}</motion.h1>
            </motion.span>
          ))}
          &nbsp;&nbsp;&nbsp;&nbsp;
          {text2.split("").map((Letter, id) => (
            <motion.span variants={effect} className={styles.head} key={id}>
              <motion.h1 className={styles.letter} variants={spanVariants} initial="visible" whileHover="hover">{Letter}</motion.h1>
            </motion.span>
          ))}
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
          <ThemeProvider theme={theme}><Button
            variant={'contained'}
            disabled={disabled}
            className={styles.btn}
            component={motion.div}
            whileHover={{ scale: 1.15 }}
            id="minify"
            onClick={setMinfy}
          >
            {disabled ? 'MINIFIED' : 'MINIFY'}
          </Button></ThemeProvider>
        </motion.div>

        <div className={styles.info} style={{ marginBottom: '40px', color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>
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
          props.showQrCode && open ? (
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { ease: 'easeInOut', duration: 0.7 } }} style={QR}>
              <Image
                src={props.qrData}
                placeholder="blur"
                blurDataURL
                width={150}
                height={150}
              />
            </motion.div>
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
              sx={{ padding: '5px 0 0 0' }}
              onClick={() => {
                setOpen(false)
                setdisabled(false)
              }}
            >
              <CloseIcon sx={{ marginRight: '10px', '&:hover': { color: 'red', background: '#D1D1D1' } }} />
            </IconButton>
          }
          sx={{ mb: 2, fontWeight: 'bold', color: 'black' }}
        >
          Your Shortened URL: {props.shortUrl}{' '}
          <IconButton
            onClick={handlecopy}
            sx={{ marginLeft: '15px', padding: 0, '&:hover': { color: 'blue' } }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Alert>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            component={motion.div}
            whileHover={{ scale: 1.1, transition: { ease: 'easeOut' } }}
            whileTap={{ scale: 0.8, transition: { ease: 'easeOut' } }}
            sx={{ background: '#D82148', boxShadow: 'inset 0 -5px 0 0 #470D21', marginTop: '10px', gap: '5px', textTransform: 'none', borderRadius: '20px', padding: '10px 25px 13px', '&:hover': { background: '#F90716', boxShadow: 'inset 0 -5px 0 0 #470D21' } }}
            onClick={handleResponse}><ReplayIcon />Have another URL?</Button>
        </div>
      </Collapse>
      <Toaster position="bottom-right" toastOptions={{ duration: 2500, style: { padding: '5px 10px', borderRadius: '30px', fontWeight: 'bold', fontSize: '14px' } }} />
    </HomeSectionStyle>

  )
}

export default HomeSection
