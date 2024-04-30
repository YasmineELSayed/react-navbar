import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faSearch, faEye, faEyeSlash, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faDownload, faFilter, faListDots, faHandDots, faEllipsis, faEllipsisVertical, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './PanelCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Sharing/SearchBar.css';
 
function MyTable() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [tableVisible, setTableVisible] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

 
    const apilink = 'https://77.92.189.102/iit_vertical_precast/api/v1/BaqSvc/IIT_BatchingPlanner';
    const username = 'manager';
    const password = 'manager';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);
 
    const fetchData = async () => {
        const username = 'manager'; // Replace with your username
        const password = 'manager'; // Replace with your password
        const apilink = 'https://77.92.189.102/iit_vertical_precast/api/v1/BaqSvc/IIT_BatchingPlanner'; // Adjust the URL as needed

        try {
            const response = await fetch(apilink, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(username + ":" + password)
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Check if data is an object and contains the 'value' property which is an array
            if (typeof data === 'object' && data !== null && Array.isArray(data.value)) {
                setData(data.value);
            } else {
                console.error('API response does not contain the expected array in the "value" property:', data);
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []); // Fetch data on component mount

    const renderTableRows = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = data.slice(startIndex, endIndex);

        return currentItems.map((item, index) => (
       
<tr key={index}>
<td>{item.JobMtl_JobNum}</td>
<td>{item.JobHead_PartNum}</td>
<td>{item.PartLot_LotNum}</td>
<td>{item.ElementNumber}</td>
<td>{item.Part_PartNum}</td>
<td>{item.JobHead_ProdQty}</td>
<td>{item.JobMtl_QtyPer}</td>
<td>{item.JobHead_IUM}</td>
<td>{item.JobMtl_RequiredQty}</td>
<td>{item.JobMtl_MtlSeq}</td>
<td>{item.JobHead_JobReleased}</td>
<td>{item.JobHead_BatchingPlant_c}</td>
</tr>
        ));
    };
 
    const goToNextPage = () => {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

  // Search Toggle
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
}

// Toggle table visibility
const toggleTableVisibility = () => {
    setTableVisible(!tableVisible);
}
  
    return (
<div className='card rebartable'>
<div className="card-header">
<button type="button" className="toggle-table-icon" onClick={toggleTableVisibility}>
<FontAwesomeIcon icon={tableVisible ? faArrowDown : faArrowUp} />
</button>
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
                    {/* Add buttons for various actions here */}
      
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

            {tableVisible && (
             <div className="card-body">
            <div className="table-responsive">
           <table className="table table-bordered">
           <thead className='table-primary'>
           <tr className='bg-primary text-white'>
            <th>Job Number</th>
          <th>Part Number</th>
          <th>Lot Number</th>
         <th>Part Lot Project</th>
        <th>Part Description</th>
       <th>Production Quantity</th>
      <th>Quantity Per</th>
      <th>Item Unit of Measure</th>
    <th>Required Quantity</th>
    <th>Material Sequence</th>
   <th>Job Released</th>
  <th>Batching Plant</th>
  </tr>
</thead>
<tbody>
  {renderTableRows()}
</tbody>
</table>
</div>
<div className="pagination">
                        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button onClick={goToNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        </div>
</div>
    
    )}
</div>
    );
}
 
export default MyTable;