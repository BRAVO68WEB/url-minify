import React from 'react';
import HomeSectionStyle from "./HomeSection.style";

function HomeSection(props) {
    return (
        <HomeSectionStyle>
            <div className="content">
                <h1 className="title">
                    URL Minify
                </h1>
                <input type="text"/>
            </div>
        </HomeSectionStyle>
    );
}

export default HomeSection;