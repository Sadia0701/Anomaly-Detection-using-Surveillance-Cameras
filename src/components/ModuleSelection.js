import React, { useState, useRef ,useEffect} from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background-image.jpg";
import DropdownMenu from "./DropDownComponent";
import Footer from "./Footer";
import Navbar_LogOut from "./Navbar_LogOut";

const ModuleSelection = ({ setLoginUser, isLoggedIn, setIsLoggedIn }) => {

  const [selectedFolderA, setSelectedFolderA] = useState(null);
  const [selectedFolderN, setSelectedFolderN] = useState(null);
  const [responseA, setResponseA] = useState('');
  const [responseN, setResponseN] = useState('');
  
  const fileInputRef = useRef(null);
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedTechnique, setSelectedTechnique] = useState("");

  const [inputValueTitle, setInputValueTitle] = useState('');
  const [ds,setDs]=useState("");
  const [dsoption,setDsoption]=useState("");

  const handleInputChangeTitle = (event) => {
    setInputValueTitle(event.target.value);
    setDsoption(event.target.value);

    if (inputValueTitle === 'UCSD') {

      setDs("UCSD");
      
    } else if (inputValueTitle === 'PED') {
      setDs("PED");
    } else if (inputValueTitle === 'Avenue') {
      setDs("Avenue");
    } 
  
  };

  const handleFolderChangeA = (event) => {
    setSelectedFolderA(event.target.files[0]);
  };

  const handleFolderChangeN = (event) => {
    setSelectedFolderN(event.target.files[0]);
  };

  const handleUploadA = async () => {
    try {
      const formData = new FormData();
      formData.append('folder', selectedFolderA);

      const response = await fetch('http://127.0.0.1:5000/api/data', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setResponseA('Folder upload successful');
        console.log('Folder upload successful');
        // Handle any additional logic or update state as needed
      } else {
        console.error('Folder upload failed');
      }
    } catch (error) {
      console.error('Error uploading folder:', error);
    }
  };

  const handleUploadN = async () => {
    try {
      const formData = new FormData();
      formData.append('folder', selectedFolderN);

      const response = await fetch('http://127.0.0.1:5000/api/data', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setResponseN('Folder upload successful');
        console.log('Folder upload successful');
        // Handle any additional logic or update state as needed
      } else {
        console.error('Folder upload failed');
      }
    } catch (error) {
      console.error('Error uploading folder:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/title', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputValueTitle }),
      });

      const title = await res.json();
      console.log(title)
      
    } catch (error) {
      console.error('Error:', error);
    }
  };




  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleNext = () => {
    if (selectedDataset) {
      // Dataset is valid, proceed to the next module
      // ...
    } else {
      setErrorMessage("Please select a valid dataset.");
    }
  };

  const [dataSelection, setDataSelection] = useState("");
  const [featureExtractor, setFeatureExtractor] = useState("");
  const [dataProcessor, setDataProcessor] = useState("");
  const [model, setModel] = useState("");
  const [evaluationMetricSelection, setEvaluationMetricSelection] =
    useState("");




    const [selectedOption_DP, setSelectedOption_DP] = useState('');
    const [selectedOption_FE, setSelectedOption_FE] = useState('');
  const [selectedOption_M, setSelectedOption_M] = useState('');
  const [selectedOption_E, setSelectedOption_E] = useState('');

    const [chosen, setChosen] = useState('');
    const [combos, setCombos] = useState([]);
  
    const handleSelectionChange_DP = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption_DP(selectedValue);
  
      console.log(selectedOption_DP);
      
      if (selectedValue === 'option1') {
        handleOption1();
      } else if (selectedValue === 'option2') {
        handleOption2();
      } else if (selectedValue === 'option3') {
        handleOption3();
      } else if (selectedValue === 'option4') {
        handleOption4();
      }
    };
  

    const handleSelectionChange_FE = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption_FE(selectedValue);
  
      
      if (selectedValue === 'option1') {
        handleOption1();
      } else if (selectedValue === 'option2') {
        handleOption2();
      } else if (selectedValue === 'option3') {
        handleOption3();
      } else if (selectedValue === 'option4') {
        handleOption4();
      }
    };
  
     // For Model
  
    const handleSelectionChange_M = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption_M(selectedValue);
  
      if (selectedValue === 'option1') {
        handleOption1();
      } else if (selectedValue === 'option2') {
        handleOption2();
      } else if (selectedValue === 'option3') {
        handleOption3();
      } else if (selectedValue === 'option4') {
        handleOption4();
      }
      else if (selectedValue === 'option5') {
        handleOption5();
      }
      else if (selectedValue === 'option6') {
        handleOption6();
      }
    };
  
     // For Evaluation Metric
  
    const handleSelectionChange_E = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption_E(selectedValue);
  
  
      if (selectedValue === 'option1') {
        handleOption1();
      } else if (selectedValue === 'option2') {
        handleOption2();
      } else if (selectedValue === 'option3') {
        handleOption3();
      } else if (selectedValue === 'option4') {
        handleOption4();
      }
    };

    const handleOption1 = () => {
      
      setChosen(1)
    };
  
    const handleOption2 = () => {
       
      setChosen(2)
    };
  
    const handleOption3 = () => {
       
      setChosen(3)
    };
  
    const handleOption4 = () => {
       
      setChosen(4)
    };
  
    const handleOption5 = () => {
       
      setChosen(5)
    };
  
    const handleOption6 = () => {
       
      setChosen(6)
    };

    const handleSubmit2 = async () => {
      const ch = chosen
      setCombos((arr)=>[...arr,ch])
    }

    const handleresult = (combo_result) => {
       
      setResult(combo_result);
    };

 

    const [result,setResult]=useState(null);

    // useEffect(() => {  
    //   setResult(null);
    // }, []);

    const handleSubmit3 = async () => {
      console.log(combos)
  
      try {
        const response = await fetch('http://localhost:5000/api/combos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputArray: combos }),
        });
        setResult(null);   
        // Displaying the result after running a whole combo!!! :)
        const combo_result = await response.json();

        if (typeof combo_result === 'object' && combo_result !== null) {
          const resultValues = Object.values(combo_result);
    
          //console.log('Result values:', resultValues);
          console.log(combo_result);
    
          // Set the resultValues array to your state or wherever you need it
          setResult(resultValues);
        } else {
          console.log('Invalid combo_result structure, expected an object.');
        }
      
    
  
      } catch (error) {
        console.error('Error:', error);
      }
    
  
      setCombos([]) //emptying the combos array for future!
    }


    //const [dsoption,setDsoption]=useState("");
    // const [ds,setDs]=useState("");

    const datasetChange = (event) => {
      const selectedValue = event.target.value;
      //setDsoption(selectedValue);
  
      
      if (selectedValue === 'UCSD') {

        setDs("UCSD");
        
      } else if (selectedValue === 'PED') {
        setDs("PED");
      } else if (selectedValue === 'Avenue') {
        setDs("Avenue");
      } 
  
  };
  
  
    const headingStyle = {
      color: '#3498db', 
    fontFamily: 'Arial, sans-serif',
    fontSize: '3em',
    margin: 20,
    padding: '0px',
    textAlign: 'center',
    fontWeight: 'bold',
    };
  

    return (
      <div>
        <Navbar_LogOut/>
      <div>
        <br/>
         <h1 style={headingStyle}>Lets Generate a Combination!</h1>
        <br/>
        <div className="grid modules-container p-8 rounded-2xl shadow-2xl bg-gradient-to-r from-sky-500 from-10%  to-rose-500 to-90% overflow-hidden" style={{ marginTop: 0, marginLeft: 200, marginRight: 200 }}>
        {/* <div class="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-red-500 from-10%  to-indigo-500 to-90%"> */}
<br/>
<br/>
          <div className="grid grid-cols-1 grid-rows-1 gap-4" >
        
    
          
          
            <p><label><b>DataSet Title</b></label></p>
            <input
              type="text"
              value={inputValueTitle}
              onChange={handleInputChangeTitle}
              placeholder="Dataset Title"
              className="col-span-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />


{/* <div className="col-span-2">
  
              <p><label><b>Data Selection</b></label></p>
              <select
                value={dsoption}
                onChange={datasetChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                
                <option value="">Select an option</option>
                <option value="UCSD">UCSD</option>
                <option value="PED">PED</option>
                <option value="Avenue">Avenue</option>
                
              </select>
            </div> */}
    
            <div className="col-span-2">
              <h1><b>Upload Anomalous Data</b></h1>
              <input type="file" directory="" webkitdirectory="" onChange={handleFolderChangeA} />
              <button onClick={handleUploadA} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">Upload</button>
              <p>{responseA}</p>
            </div>
    
            <div className="col-span-2">
              <h1><b>Upload Normal Data</b></h1>
              <input type="file" directory="" webkitdirectory="" onChange={handleFolderChangeN} />
              <button onClick={handleUploadN}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">Upload</button>
              <p>{responseN}</p>
            </div>
    
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">Submit</button>
    
            <div className="col-span-2">
              <p><label><b>Data Processor</b></label></p>
              <select
                value = {selectedOption_DP}
                onChange = {handleSelectionChange_DP}
                className = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                
                <option value="">Select an option</option>
                <option value="option1">Gaussian</option>
                <option value="option2">Median</option>
                <option value="option3">Mean</option>
                <option value="option4">Pixel Intensity</option>
              </select>
            </div>
    
           
            <button onClick={handleSubmit2} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">Send</button>
    
            <div className="col-span-2">
              <p ><label><b>Feature Extractor</b></label></p>
              <select
                value={selectedOption_FE}
                onChange={handleSelectionChange_FE}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="option1">SIFT</option>
                <option value="option2">SURF</option>
                <option value="option3">HOG</option>
                <option value="option4">Pixel Intensity</option>
              </select>
            </div>
    
            <button onClick={handleSubmit2} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">Send</button>
    
            <div className="col-span-2">
              <p><b><label>ML Model</label></b></p>
              <select
                value={selectedOption_M}
                onChange={handleSelectionChange_M}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="option1">LR</option>
                <option value="option2">SVM</option>
                <option value="option3">RFC</option>
                <option value="option4">KNN</option>
                <option value="option5">MNB</option>
                <option value="option6">DTC</option>
              </select>
            </div>
    
            <button onClick={handleSubmit2} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">Send</button>
    
            <div className="col-span-2">
              <p><label><b>Evaluation Metric</b></label></p>
              <select
                value={selectedOption_E}
                onChange={handleSelectionChange_E}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="option1">Accuracy</option>
                <option value="option2">Precision</option>
                <option value="option3">Recall</option>
                <option value="option4">AUC of ROC</option>
              </select>

              <h1 className="text-white">{result}</h1>
            </div>
    
            <button onClick={handleSubmit2} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">Send</button>
            <p></p>
            
            <button onClick={handleSubmit3} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">Submit</button>
    
            <div >
              <Link
                to={{
                  pathname: "/results",
                  state: {
                    ds:inputValueTitle,
                    featureExtractor:selectedOption_FE,
                    dataProcessor:selectedOption_DP,
                    model:selectedOption_M,
                    evaluationMetricSelection:selectedOption_E,
                    result
                  },
                }}
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto"
              >
                View Combination !
              </Link>
            </div>


          </div>
        </div>
        
      </div>
       {/* <Footer/> */}
       </div>
    );
    
};


export default ModuleSelection;
