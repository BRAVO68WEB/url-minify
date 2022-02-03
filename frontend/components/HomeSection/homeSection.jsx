import { borderRadius, padding } from '@mui/system';
import React from 'react';
import { render } from 'react-dom';
import HomeSectionStyle from "./HomeSection.style";


const head={
    fontSize:'5rem',
    fontWeight:'bold',
    marginBottom:'30px'
};
const box={
    fontSize:'1.5em',
    borderRadius:'50px',
    padding:'1em',
    width: '500px',
    height:'50px'
};
const btn={
    fontWeight:'bold',
    position:'absolute',
    alignItems: 'center',
    right: '0px',
    marginRight:'5px',
    marginTop:'4.5px',
    marginBottom:'3px',
    height: '40px',
    width:  '100px',
    borderRadius: '50px'

};
const searchBox={
    position: 'relative',
   
};
function HomeSection(props) {
    
    
    return (
        <HomeSectionStyle>
            <div className="content">
                <h1 style={head} className="title">
                    URL MINIFY
                </h1>
    
        <div style={searchBox}>
           <input style={box}placeholder="Enter the url to be minified......"/>
          <button style={btn} id="minify">MINIFY</button>
        </div>
        <div>
            <h3>Need more advanced features? | <a href="">Create an account</a></h3>
        </div>
       </div>
        </HomeSectionStyle>
    );
}


export default HomeSection;
