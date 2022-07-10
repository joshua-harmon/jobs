/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import logos from '../bg-header-desktop.svg';
// import images from '../images';


const AllJobs = (props) => {
const data = props.data;
return (
    <div className = "allJobs">
        <div className = "header">
         <img src = {logos} className = "header-img" />
        </div>
        {data.map((obj, index) => {
            // const logo = obj.company.toLowerCase();
            // console.log(logo);
            // const image = { logo }.svg;
            // console.log(image);
            // const logo = require(obj["logo"])
            return (
            <div className = "oneJob" key = {index}>
                {console.log(obj.logo)}
                <div className = "main1">
                    <div>
                    {/* <img src = {images} className = "" /> */}
                    {/* <img src = {logo} className = "" /> */}
                        <img src = { require("" + obj["logo"]) } alt = "logo" className = "compLogo"></img>
                    </div>
                    <div>
                        <div className = "class1">
                            <span className = "comName">{obj["company"]}</span>
                            {obj["new"] && <span className = "new">NEW!</span>}
                            {obj["featured"] && <span className = "featured">FEATURED</span>}
                        </div>
                        <div>
                            <p>{obj["position"]}</p>
                        </div>
                        <div className = "class2">
                            <span className = "star">{obj["postedAt"]}</span>
                            <span className = "star">{obj["contract"]}</span>
                            <span className = "star">{obj["location"]}</span>
                        </div>
                    </div>
                </div>
                    <div className = "class3">
                        <span className = "star">{obj["role"]}</span>
                        <span className = "star">{obj["level"]}</span>
                        <span className = "star">{obj["...languages"]}</span>
                        <span className = "star">{obj["...tools"]}</span>
                    </div>
            </div>
            )
        })}
    </div>
)
}

export default AllJobs;