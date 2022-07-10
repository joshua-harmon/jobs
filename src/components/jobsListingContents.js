/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
import {React, useState} from "react";
import Data from "../data.json";
import AllJobs from "./allJobs.js";

const AllJobsFiles = () => {
  const [jobName, setJobName] = useState(Data);

//   const handleSearch = (event) => {
//     const searched = event.target.value.toLowerCase();
//           const filteredSearch = Data.filter((obj) => {
//             if((obj["name"].toLowerCase().includes(searched)) || (obj["capital"].toLowerCase().includes(searched))) {
//                 return obj;
//             }
//         })
//         setCountryName(filteredSearch)
//     }

  return (
    <div>
      <AllJobs data = {jobName} />
    </div>
  );
};
export default AllJobsFiles;
