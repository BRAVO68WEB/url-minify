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
const head = {
  fontFamily: "'Montserrat Alternates', sans-serif;",
  fontSize: '4.5rem',
  color: '#11468F',
  marginBottom: '30px',
  textShadow: '1px 1px 1px white'
}
const box = {
  fontFamily: "'Open Sans', sans-serif;",
  fontSize: '1.3em',
  fontWeight: 'bold',
  borderRadius: '50px',
  padding: '1em',
  width: '500px',
  height: '50px',
  outline: 'none !important',
  border: 'none !important',
  marginBottom: '15px',
}
const btn = {
  fontWeight: 'bold',
  position: 'absolute',
  alignItems: 'center',
  right: '0px',
  marginRight: '5px',
  marginTop: '4.5px',
  marginBottom: '3px',
  height: '40px',
  width: '100px',
  borderRadius: '50px',
}
const searchBox = {
  position: 'relative',
}

function HomeSection(props) {
  let qrCode
  let minifiedUrl
  const [disabled, setDisabled] = useState(false)
  const [open, setOpen] = React.useState(false)
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
        <motion.span className="title" variants={list} initial="hidden" animate="visible">
          <div className="title">
            {text1.split("").map((Letter, id) => (
              <motion.div variants={effect}>
                <span style={head} key={id}>
                  <motion.h1 variants={spanVariants} initial="visible" whileHover="hover">{Letter}</motion.h1>
                </span></motion.div>
            ))}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="title">
            {text2.split("").map((Letter, id) => (
              <motion.div variants={effect}><span style={head} key={id}>
                <motion.h1 variants={spanVariants} initial="visible" whileHover="hover">{Letter}</motion.h1>
              </span></motion.div>
            ))}
          </div>
        </motion.span>
        <motion.div initial={{ x: '-100vw', opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 3, type: 'spring', stiffness: 150 } }} style={searchBox}>
          <input
            style={box}
            placeholder="Enter the url to be minified......"
            value={props.longUrl}
            onChange={(e) => {
              props.setLongUrl(e.target.value)
            }}
          />
          <Button
            variant={'contained'}
            disabled={disabled}
            style={btn}
            component={motion.div}
            whileHover={{ scale: 1.3 }}
            id="minify"
            onClick={setMinfy}
          >
            MINIFY
          </Button>
        </motion.div>
        <div style={{ marginBottom: '40px', color: 'black', fontWeight: 'bold', fontSize: '1rem' }}>
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
