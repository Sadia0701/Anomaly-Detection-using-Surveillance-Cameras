import React, { useState, useEffect } from "react";
import "../styles/ModuleSelection.css";
import "../styles//ExecutionResult.css";
import logo from "../assets/logo.png";
import backgroundImage from '../assets/background-image.jpg'
import { useLocation } from 'react-router-dom';


import Navbar from "./Navbar";
import Navbar_LogOut from "./Navbar_LogOut";

import Footer from "./Footer";
import { Link } from "react-router-dom";

const ExecutionResult = (props) => {
  const [resultText, setResultText] = useState("");
  //const [result,setResult]=useState("");

  const handleAnotherCombo = () => {
    // Logic for handling "Another combo" button click
    setResultText("");
  };

  const handleExit = () => {
    // Logic for handling "Exit" button click (navigate to logout page)
    setResultText("");
  };
  const location = useLocation();
  const {
    ds,
    featureExtractor,
    dataProcessor,
    model,
    evaluationMetricSelection,
    result,
  } = location.state;


  

const [dp,setDp]=useState("");

  useEffect(() => {
    // Set dp based on dataSelection
    if (dataProcessor === 'option1') {
      setDp("Gaussian");
    } else if (dataProcessor === 'option2') {
      setDp("Median");
    } else if (dataProcessor === 'option3') {
      setDp("Mean");
    } else if (dataProcessor === 'option4') {
      setDp("Pixel Intensity");
    }

}, [dataProcessor]);


const [f,setF]=useState("");

useEffect(() => {
  // Set dp based on dataSelection
  if (featureExtractor === 'option1') {
    setF("SIFT");
  } else if (featureExtractor === 'option2') {
    setF("SURF");
  } else if (featureExtractor === 'option3') {
    setF("HOG");
  } else if (featureExtractor === 'option4') {
    setF("Pixel Intensity");
  }

}, [featureExtractor]);

const [m,setM]=useState("");

useEffect(() => {
  // Set dp based on dataSelection
  if (model === 'option1') {
    setM("LR");
  } else if (model === 'option2') {
    setM("SVM");
  } else if (model === 'option3') {
    setM("RFC");
  } 
  else if (model === 'option4') {
    setM("MNB");
  }
  else if (model === 'option4') {
    setM("DTC");
  }

}, [model]);

const [e,setE]=useState("");

useEffect(() => {
  // Set dp based on dataSelection
  if (evaluationMetricSelection === 'option1') {
    setE("Accuracy");
  } else if (evaluationMetricSelection === 'option2') {
    setE("Precision");
  } else if (evaluationMetricSelection === 'option3') {
    setE("Recall");
  } else if (evaluationMetricSelection === 'option4') {
    setE("AUC of ROC");
  }

}, [evaluationMetricSelection]);
  

 
  
  

  return (
<div>
  <Navbar_LogOut/>
    <div className="container mx-auto py-8 mb-24">
      
      <div className="bg-gray-100 shadow-md rounded-md overflow-hidden">
        <div className="table-container">
          <table className="w-full border-collapse">
            <thead className="bg-blue-500">
              <tr>
                <th className="p-4 text-left">Modules</th>
                <th className="p-4 text-left">Selected Choices</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <th className="p-4 text-left">Dataset</th>
                <td className="p-4">{ds}</td>
              </tr>
              <tr>
                <th className="p-4 text-left">Data Processor</th>
                <td className="p-4">{dp}</td>
                
              </tr>
              <tr>
                <th className="p-4 text-left">Feature Extractor</th>
                <td className="p-4">{f}</td>
              </tr>
              <tr>
                <th className="p-4 text-left">ML Model</th>
                <td className="p-4">{m}</td>
              </tr>
              <tr>
                <th className="p-4 text-left">Evaluation Metric</th>
                <td className="p-4">{e}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="result-container">
          <table className="w-full border-collapse">
            <thead className="bg-blue-500">
              <tr>
                <th className="p-4 text-left">RESULT</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-4 text-green-600 font-semibold">
            
                {JSON.stringify(result)}
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <div className="flex justify-center  mb-8 mt-6">
        <Link to="/homepage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">
            Try Another Combination
          </button>
        </Link>

        <Link
          to={{
            pathname: "/compareresults",
            state: {
              ds,
              dp,
              f,
              m,
              e,
              result
            },
          }}
        >
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-auto">
            View Multiple Combinations 
          </button>
        </Link>
      </div>
      </div>
      <Footer/>
    </div>
  </div>
  );
};

export default ExecutionResult;