
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSave, faSearch, faEye, faEyeSlash, faArrowUp, faArrowDown, faDownload, faFilter, faListDots, faHandDots, faEllipsis, faEllipsisVertical, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './PanelCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Sharing/SearchBar.css'

function MyTable() {

    // Search-bar
  
    const [searchOpen, setSearchOpen] = useState(false);
    // Table visibility
    const [tableVisible, setTableVisible] = useState(true);
    // API


        const [data, setData] = useState([]);
        const[item,setItem]=useState([])
       
        const [error, setError] = useState(null);
        const[loading,setLoading]= useState(null);

        const axiosInstance = axios.create({
            timeout: 5000,
            headers: {
              'X-Content-Type-Options': 'nosniff', // Add default X-Content-Type-Options header
            },
          });


        const apilink = 'https://77.92.189.102/iit_vertical_precast/api/v1/BaqSvc/IIT_BatchingPlanner';

        const Username = 'manager';
        const Password= 'manager';
        const basicAuth = 'Basic ' + btoa(Username + ':' + Password);
        

      
        useEffect(() => {
          const fetchData = async () => {
            try {
                setLoading(false);

                const response = await axiosInstance.get(apilink, {
                  
                    headers: {
                      Authorization: basicAuth,
                    }
                });

        
              if (!response.ok) {
                console.log(response.status);
                console.log(response.data.value);
                throw new Error('Failed to fetch data');
              }
              const jsonData = await response.json();
              setData(jsonData);
          
              
            } catch (error) {
              setError(error);
              setLoading(false);
            }
          };
      
          fetchData();
        }, [apilink, basicAuth]);
      
       









    // Search Toggle
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    }

    // Toggle table visibility
    const toggleTableVisibility = () => {
        setTableVisible(!tableVisible);
    }



// Define the function outside of the JSX
const renderTableRows = () => {
    // Safely check if data is an array before mapping
       if (!Array.isArray(data) || data.length === 0) {
        return (
<tr>
<td colSpan="12">No data available</td> {/* Display message if no data */}
</tr>
        );
    } {
        return null; // Or some fallback UI
        
    }
   
    return data.map((item, index) => (
        
        <tr key={index}>
            <td>{item.JobMtl_JobNum}</td>
            <td>{item.JobHead_PartNum}</td>
            <td>{item.PartLot_LotNum}</td>
            <td>{item.ElementNumber}r</td>
            <td>{item.Part_PartNum}</td>
            <td>{item.JobHead_ProdQty}</td>
            <td>{item.JobMtl_QtyPer}</td>
            <td>{item.JobHead_IUM}</td>
            <td>{item.JobMtl_RequiredQty}</td>
            <td>{item.JobMtl_MtlSeq} </td>
            <td>{item.JobHead_JobReleased}</td>
            <td>{item.JobHead_BatchingPlant_c}</td>
        </tr>
    ));
};





    return (
        <div className='card rebartable'>
            <div className="card-header">
                
                <button type="button" className="toggle-table-icon" onClick={toggleTableVisibility}>
                    <FontAwesomeIcon icon={tableVisible ? faArrowDown : faArrowUp} />
                </button>
                
                {/* <Tooltip
                    anchorSelect=".toggle-table-icon"
                    content={tableVisible ? "Hide Table" : "Show Table"}
                    place='bottom'
                /> */}
                <h2 className='panel-title'>Batching Plant Control</h2>
                <div className='Element-id-container'>
            
               <select
                 className="Options"
                  type="text"
                  name="optionlist"
                 onChange={(e) => console.log(e.target.value)}
                            >
                 <option value="" selected disabled></option>
                   <option>Option1</option>
                   <option>Option2</option>
                   <option>option3</option>
                   <option>option4</option>
                   <option>option5</option>
                           
                 </select>

                </div>

                <div className='ctrl-btns'>

                    
                    {/* Existing buttons */}
                    

                    <button className="btn" id='Filter'>
                   <FontAwesomeIcon icon={faFilter} />
                    </button>
                    <Tooltip
                        anchorSelect="#filter"
                        content="filter"
                        place='bottom'
                    />

                    <button className="btn" id='download'>
                        <FontAwesomeIcon icon={faDownload} />
                    </button>
                    <Tooltip
                        anchorSelect="#download"
                        content="download"
                        place='bottom'
                    />

                
                    <button className="btn" id='save'>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                    <Tooltip
                        anchorSelect="#save"
                        content="Save"
                        place='bottom'
                    />
                    <button type="button" className="search-icon" onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <Tooltip
                        anchorSelect=".search-icon"
                        content="Advanced Search"
                        place='bottom'
                    />
                 <button className="btn" id='refresh'>
                   <FontAwesomeIcon icon={faRefresh} />
                    </button>
                    <Tooltip
                        anchorSelect="#refresh"
                        content="refresh"
                        place='bottom'
                    />
                    
                   <button className="btn" id='3dots'>
                   <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                    <Tooltip
                        anchorSelect="#ellipsisVertical"
                        content="ellipsisVertical"
                        place='bottom'
                    />

                    {/* New button to toggle table visibility */}

                    {/* Existing search div */}
                    <div className={`main-search-bar ${searchOpen ? 'open' : ''}`} id="searchBar">
                        {/* Search form */}
                        <form className="search-filter">
                            <h3 className="search-title">Search Filter <FontAwesomeIcon icon={faSearch} /></h3>
                            <input type="text" placeholder="Part Num" name="filter1" />
                            <input type="text" placeholder="Project" name="filter2" />
                           
                            {/* combobox */}
                            <select
                                className="wbs-combo"
                                type="text"
                                name="optionlist"
                                onChange={(e) => console.log(e.target.value)}
                            >
                                <option value="" selected disabled>WBS</option>
                                <option>WBS 1</option>
                                <option>WBS 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                                <option>option 5</option>
                            </select>
                            <input type="text" placeholder="From EstimatedCasting Date" name="filter3" />
                            <input type="text" placeholder="To EstimatedCasting Date" name="filter3" />
                            <input type="text" placeholder="Selected Value" name="filter3" />
                            <button type="submit">Search</button>
                            <button type="reset" onClick={toggleSearch}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Conditionally render the table */}
            {tableVisible && (
                <div className="card-body">
                    <div class="table-responsive-md">
    
                        <table className="table table-bordered">
                            {/* Table content */}
                            <thead className='table-primary'>
                                <tr className='bg-primary text-white'>
                                    <th>Job Number </th>
                                    <th>Planned Casting Date</th>
                                    <th>Element Number</th>
                                    <th>Part Number</th>
                                    <th>Prod Qty</th>
                                    <th>UOM</th>
                                    <th> Batched Qty</th>
                                    <th>Mtl UOM</th>
                                    <th>Concrete Mix</th>
                                    <th>Mtl</th>
                                    <th>Released</th>
                                    <th>Selected</th>
                                 
                                </tr>
                            </thead>
                            <tbody>
                       
                            {renderTableRows()}
                      
                               
                            </tbody>
                       
                        </table>
                    
                        
                    </div>
                        
                </div>
            )}
        
        
        
        </div>
        
    );
  
}

export default MyTable
