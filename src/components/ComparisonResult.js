import React, { useEffect, useState } from "react";
import "../styles/ModuleSelection.css";
import "../styles/ComparisonResult.css";
import LogoutButton from "../LogoutButton";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/background-image.jpg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Graph from "./Graph";
import Navbar_LogOut from "./Navbar_LogOut";
import html2canvas from 'html2canvas';



const ComparisonResult = ({ setLoginUser }) => {
  const location = useLocation();
  const {
    ds,
    f,
    dp,
    m,
    e,
    result,
  } = location.state;

  //const [dataLoaded, setDataLoaded] = useState(false);

    // Check if the browser session is new
  const isNewSession = sessionStorage.getItem("isNewSession") === null;


  // Clear local storage when the component mounts and the session is new
  useEffect(() => {
    if (isNewSession) {
      localStorage.removeItem("tableData");
      sessionStorage.setItem("isNewSession", "false");
    }

    const storedData = JSON.parse(localStorage.getItem("tableData")) || [];
    setTableData(storedData);
  }, [isNewSession]);

  // Retrieve data from local storage on component mount
  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("tableData"));
  //   if (storedData) {
  //     setTableData(storedData);
  //   } else {
  //     // If there is no data in local storage, set an empty array
  //     setTableData([]);
  //   }
  //   // Set dataLoaded to true after the initial data is processed
  //   setDataLoaded(true);
  // }, []);

  // // Initialize state to store the data
  //   {
  //     dataset: "UCSD",
  //     dataProcessor: "Guassian",
  //     featureExtractor: "SIFT",
  //     model: "Random Forest",
  //     evaluationMetric: "Any",
  //     remarks: "Best",
  //   },
  //   {
  //     dataset: "Avenue",
  //     dataProcessor: "Median",
  //     featureExtractor: "SURF",
  //     model: "Sparse Dictionary",
  //     evaluationMetric: "Any",
  //     remarks: "Average",
  //   },
  //   {
  //     dataset: "PED2",
  //     dataProcessor: "Mean",
  //     featureExtractor: "HOG",
  //     model: "Sparse Dictionary",
  //     evaluationMetric: "Any",
  //     remarks: "Worst",
  //   },
  // ]);

  const [tableData, setTableData] = useState([]);

  // Function to update the table data
  const updateTableData = () => {
    const newData = {
      dataset: ds,
      dataProcessor: dp,
      featureExtractor: f ,
      model: m ,
      evaluationMetric: e ,
      result: result,
    };

    // Update the state with the new data
    setTableData((prevData) => {
      const newDataArray = [...prevData, newData];
      localStorage.setItem("tableData", JSON.stringify(newDataArray));
      return newDataArray;
    });

    // Update local storage with the new data
    //localStorage.setItem("tableData", JSON.stringify([...tableData, newData]));
  };

  useEffect(() => {
    // Call the function to update data whenever the state changes
    updateTableData();
  }, [
    ds ,
    f ,
    dp ,
    m ,
    e ,
    result,
  ]);

  const handleDownload = () => {
    //const screenshotContainer = document.getElementById('screenshot-container');

    html2canvas(document.getElementById('capture-container')).then((canvas) => {
      const dataURL = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      a.href = dataURL;
      a.download = 'screenshot.png';
      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);
    }); };

  return (
    <>
      
     <div>
      <Navbar_LogOut/>
        
      <div style={{justifyContent: 'center'}}>
        <div style={{ display: 'flex' ,justifyContent: 'center'}}>



{/* ------------------- divs for images and headings ------------------- */}

        <div style={{ position: 'relative', maxWidth: '20%', margin: '10px' }}>
    <img src={process.env.PUBLIC_URL + '/graph.jpg'} alt="Example" style={{ maxWidth: '100%' }} />
  </div>
      
  <div style={{ position: 'relative', maxWidth: '20%', margin: '10px' }}>
    <img src={process.env.PUBLIC_URL + '/graph.jpg'} alt="Example" title="Image 1" style={{ maxWidth: '100%' }} />
  </div>

  <div style={{ position: 'relative', maxWidth: '20%', margin: '10px' }}>
    <img src={process.env.PUBLIC_URL + '/graph.jpg'} alt="Example" title="Image 1" style={{ maxWidth: '100%' }} />
  </div>

  <div style={{ position: 'relative', maxWidth: '20%', margin: '10px' }}>
    <img src={process.env.PUBLIC_URL + '/graph.jpg'} alt="Example" title="Image 1" style={{ maxWidth: '100%' }} />
  </div>
  
{/* -------------------ending divs for images and headings ------------------- */}

       </div>
        <div class="grid grid-row-2 gap-4">
        
          <div class="grid grid-cols-1 gap-4">
            
            <div>
            <div id="capture-container">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1 className="text-2xl font-bold my-4">Multiple Combination Analysis</h1>
              </div>
              <div style = {{marginBottom: '20px'}}> 
              {/* <div id="capture-container"> */}
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2" >Dataset</th>
                      <th className="px-4 py-2">Data Processor</th>
                      <th className="px-4 py-2">Feature Extractor</th>
                      <th className="px-4 py-2">ML Model</th>
                      <th className="px-4 py-2">Evaluation Metric</th>
                      <th className="px-4 py-2">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((result, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{result.dataset}</td>
                        <td className="border px-4 py-2">
                          {result.dataProcessor}
                        </td>
                        <td className="border px-4 py-2">
                          {result.featureExtractor}
                        </td>
                        <td className="border px-4 py-2">{result.model}</td>
                        <td className="border px-4 py-2">
                          {result.evaluationMetric}
                        </td>
                        <td className="border px-4 py-2">{result.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
               </div>
                </div>

                <div style = {{ 
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '130vh'
   }}>
      <div style= {{textAlign:'center'}}>

      <img
        src={process.env.PUBLIC_URL + '/formulas.png'}
        style={{ maxWidth: '40%', height: 'auto', flex: '1', marginTop:'70px',marginLeft: '350px' }}
      />
      <img
        src={process.env.PUBLIC_URL + '/auc.png'}
        style={{ maxWidth: '35%', height: 'auto', flex: '1', marginLeft: '360px' }}
      />
      <img
        src={process.env.PUBLIC_URL + '/AUC_of_ROC.png'}
        style={{ maxWidth: '60%', height: 'auto', flex: '1' , marginLeft: '200px', marginBottom:'100px'}}
      />
</div>

    </div>
                

                <div className="flex justify-center  mb-8 mt-6">
        <Link to="/homepage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">
            Try Another Combination
          </button>
        </Link>
        </div>
             
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
     
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  

      </div>
      </div>
    </>
  );
};

export default ComparisonResult;
