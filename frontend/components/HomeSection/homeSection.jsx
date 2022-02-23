import React, {useState} from "react";
import HomeSectionStyle from "./HomeSection.style";
import Link from "next/link";
import Axios from "helpers/Axios";
import {Alert, Button, Collapse, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QRCode from 'qrcode'
import NotFound from "@pages/404";

const head = {
  fontSize: "5.5rem",
  fontWeight: "bold",
  color:"white",
  marginBottom: "30px",
};
const box = {
  fontSize: "1.5em",
  borderRadius: "50px",
  padding: "1em",
  width: "500px",
  height: "50px",
  outline:"none !important",
  border:"none !important",
  marginBottom:"15px"
};
const btn = {
  fontWeight: "bold",
  position: "absolute",
  alignItems: "center",
  right: "0px",
  marginRight: "5px",
  marginTop: "4.5px",
  marginBottom: "3px",
  height: "40px",
  width: "100px",
  borderRadius: "50px",
};
const searchBox = {
  position: "relative",
};
function HomeSection(props) {
  const [disabled,setDisabled] = useState(false)
  const [open, setOpen] = React.useState(false);

  const setMinfy = async () => {
    setOpen(false)
    setDisabled(true);
    let res;
    try {
      res = await Axios.post(`/minify/add`, {
        originalUrl: props.longUrl,
      });
    } catch (err) {
      console.error(err);
      return;
    }

    const data = await res.data;
    props.setShortUrl(data.minifiedUrl);
    await navigator.clipboard.writeText(data.minifiedUrl);
    setOpen(true)
    setDisabled(false)
  };

  return (
    <HomeSectionStyle>
      <div className="content">
        <h1 style={head} className="title">
          URL MINIFY
        </h1>

        <div style={searchBox}>
          <input
            style={box}
            placeholder="Enter the url to be minified......"
            value={props.longUrl}
            onChange={(e) => {
              props.setLongUrl(e.target.value);
            }}
          />
          <a href = "NotFound"> 
          <Button variant={"contained"} disabled={disabled} style={btn} id="minify" onClick={setMinfy}>
            MINIFY
          </Button>
          </a>
        </div>
        <div style={{marginBottom:"40px",color:"#fff"}}>
          <h3>
            Need more advanced features? |{" "}
            <Link href="/signup"><span style={{textDecoration:"underline"}}>Create an account</span></Link>
          </h3>
        </div>
      </div>
      <Collapse in={open}>
        <Alert
            action={
              <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
        >
          Your Shortened URL: {props.shortUrl} <IconButton onClick={() => navigator.clipboard.writeText(props.shortUrl)} style={{marginLeft:"15px",padding:0}}><ContentCopyIcon /></IconButton>
        </Alert>
      </Collapse>
    </HomeSectionStyle>
  );
}

export default HomeSection;
