import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PropTypes from "prop-types";
import { CopyOutlined } from '@ant-design/icons';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import './Addjob.css';
const emails = ["username@gmail.com", "user02@gmail.com"];
function SimpleDialog(props) {
    const [show, setshow] = React.useState(false);
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} className="w-100">
            {" "}
            <div className="px-4 py-2 foradddialogbox">
                <List
                    sx={{
                        pt: 0,
                    }}
                >
                    {" "}
                    <ListItem>
                        {" "}
                        <form className=" w-100">

                            <div className="w-100">
                                <label htmlFor="Position" className="foraddinput">
                                    Position Title
                                </label>
                                <input type="text" placeholder='“Need a cardiologist”' className=' px-2 py-2 mt-1 rounded-1 w-100' id='Position' />



                            </div>
                            <div className="w-100 mt-3">
                                <label htmlFor="Location" className="foraddinput">
                                    Job Location
                                </label>
                                <input type="text" placeholder='Add a job location (e.g Washington, DC)' className=' px-2 py-2 mt-1 rounded-1 w-100' id='Location' />



                            </div>
                            <div className="w-100 mt-3">
                                <label htmlFor="JobDuration" className="foraddinput">
                                    Job Duration
                                </label>
                                <input type="text" placeholder='Time period of the job (e.g 2 weeks)' className=' px-2 py-2 mt-1 rounded-1 w-100' id='JobDuration' />



                            </div>
                            {/* ,#HourlyRate */}
                            <div className="w-100 mt-3">
                                <label htmlFor="HourlyRate" className="foraddinput">
                                    Hourly Rate
                                </label>
                                <input type="text" placeholder='Set the amount you offer to pay per hour' className=' px-2 py-2 mt-1 rounded-1 w-100' id='HourlyRate' />



                            </div>
                            <div className="w-100 mt-3">
                                <label htmlFor="Hoursweek" className="foraddinput">
                                    Hours / week
                                </label>
                                <input type="text" placeholder='Example “72” hours' className=' px-2 py-2 mt-1 rounded-1 w-100' id='Hoursweek' />



                            </div>

                            <div className="w-100 mt-3">
                                <label className="foraddinput">
                                    Shift <p className='my-1 fontfamily color progSelect'>(Select wether it will be a morning or a evening shift)</p>
                                </label>
                                <div className="form-check mt-1">
                                    <input className="form-check-input" type="radio" checked name="flexRadioDefault" id="Morning" />
                                    <label className=" foraddinput" htmlFor="Morning" >
                                        Morning shift
                                    </label>
                                </div>
                                <div className="form-check mt-1">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="Evening" />
                                    <label className="form-check-label foraddinput" htmlFor="Evening">
                                        Evening shift
                                    </label>
                                </div>
                            </div>
                            {/* Data */}
                           <div className='d-flex w-100 mt-3'>
                           <input placeholder='Start Data'  value='Start' className='py-2 me-4' id='Start' type="date"/>
                           <input placeholder='End Data'  value='Start' className='py-2 ms-2' id='End' type="date"/>
                           </div>

                            <div className="w-100 mt-3">
                                <label htmlFor="Description" className="form-label">Description</label>
                                <textarea className="form-control myTextArea" id="Description" rows="3"></textarea>
                            </div>

                            <div className="w-100 mt-3">
                                <button className='Save py-2 me-2 px-3 rounded fontfamily'>Save as draft</button>
                                <button className='Preview  py-2  w-50 bgcolor rounded text-white border-0 fontfamily'>Preview</button>
                            </div>



                            {" "}
                        </form>
                    </ListItem>
                    <ListItem
                        autoFocus
                        button
                        onClick={() => handleListItemClick("addAccount")}
                    ></ListItem>{" "}
                </List>{" "}
            </div>
        </Dialog >
        // hello
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

function Addjob() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    //
    //
    //
    return (
        <>

            <div>
                <div className="position-relative" onClick={handleClickOpen}>
                    {/* <button type="" className="foraddnewbtn w-50">  Addd New  </button> */}
                    {/* <img className="forfiltericon" src={Filtericon} alt="" /> */}
                    <span className="addicon ">
                        <button onClick={handleClickOpen} className='bgcolor jobbtn text-white fontfamily border-0 rounded-1 px-4  py-2'>Add a Job</button>

                    </span>
                </div>
                <SimpleDialog
                    className=""
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                />{" "}
            </div>
        </>
    )
}

export default Addjob