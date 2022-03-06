import React, { useState } from 'react'
import HomeSectionStyle from './HomeSection.style'
import Link from 'next/link'
import Image from 'next/image'
import Axios from 'helpers/Axios'
import { Alert, Button, Collapse, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import QRCode from 'qrcode'
import NotFound from '@pages/404'
import styles from '../../styles/HomeSection.module.css'

const QR = {
  marginTop: '1.8em',
}

function HomeSection(props) {
  let qrCode
  let minifiedUrl
  const [disabled, setDisabled] = useState(false)
  const [open, setOpen] = useState(false)


  const setMinfy = async () => {
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

  return (
    <HomeSectionStyle>
      <div className="content">
        <h1 className={styles.title}>URL MINIFY</h1>

        <div className={styles.searchBox}>
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
            id="minify"
            onClick={setMinfy}
          >
            MINIFY
          </Button>
        </div>

        <div className={styles.info}>
          <h3>
            Need more advanced features? |{' '}
            <Link href="/signup">
              <span style={{ textDecoration: 'underline' }}>
                Create an account
              </span>
            </Link>
          </h3>
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
