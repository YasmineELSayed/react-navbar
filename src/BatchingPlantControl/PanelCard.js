import React, { useState } from 'react';
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
                                <tr>
                                    <td>BE10/50010002</td>
                                    <td>10/21/2023</td>
                                     <td>BE10/50010002</td>
                                    <td>BE</td>
                                    <td>2.4100</td>
                                    <td>CUM</td>
                                    <td>2.4100</td>
                                    <td>CUM</td>
                                    <td>Box Grider</td>
                                    <td>10</td>
                                    <td>False</td>
                                    <td>True</td>
                                    
                                </tr>
                                <tr>
                                    
                                    <td>BE10/50010005</td>
                                    <td>10/21/2023</td>
                                    <td>BE10/50010005</td>
                                    <td>BE</td>
                                    <td>2.1400</td>
                                    <td>CUM</td>
                                    <td>1.0000</td>
                                    <td>CUM</td>
                                    <td>Unapproved Concrete</td>
                                    <td>10</td>
                                    <td>false</td>
                                    <td>false</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyTable