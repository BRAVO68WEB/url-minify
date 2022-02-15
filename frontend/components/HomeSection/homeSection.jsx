import React from "react";
import HomeSectionStyle from "./HomeSection.style";
import Link from "next/link";
import Image from 'next/image'
import Axios from "helpers/Axios";
import QRCode from 'qrcode'

const QR = {
    marginTop: '1.8em'
}

const head = {
  fontSize: "5rem",
  fontWeight: "bold",
  marginBottom: "30px",
};
const box = {
  fontSize: "1.5em",
  borderRadius: "50px",
  padding: "1em",
  width: "500px",
  height: "50px",
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
  var qrCode;
  var minifiedUrl;
  const setMinfy = async () => {
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
    minifiedUrl = data.minifiedUrl;
    navigator.clipboard.writeText(props.shortUrl);
    if(minifiedUrl){
        generateQR();
    }
  };


  // Generate QRCODE for the generated link
  const generateQR = async () => {
    try {
        qrCode = await QRCode.toDataURL(minifiedUrl);
        props.setQrData(qrCode);
        props.setShowQrCode(true);
    } catch (err) {
      console.error(err)
    }
  }

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
          <button style={btn} id="minify" onClick={setMinfy}>
            MINIFY
          </button>
        </div>
        <div>
          <h3>
            Need more advanced features? |{" "}
            <Link href="/signup">Create an account</Link>
          </h3>
        </div>
        {   // show QR code if a url is generated 
            props.showQrCode ? 
            <div style={QR}>
                <Image src={props.qrData} placeholder="blur" blurDataURL width={150} height={150}/> 
            </div> 
            : ""
        }
      </div>
    </HomeSectionStyle>
  );
}

export default HomeSection;
