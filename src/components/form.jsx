import React from 'react';
import './form.scss'

const Form = () => {
    return (
        <div className="main-container">
            <div className="container">
                <h4 className="main-heading">Create a new recruitment</h4>
                <div>
                    <h4 className=' main-title'>Recruitment title</h4>
                    <input className='main-input' type="text" />
                    <p className='input-message'>Example: [Regular staff] Long-term care work at a nursing home for the elderly!</p>
                </div>
                <div>
                    <h4 className=' main-title'>Work location</h4>
                    <select className='location-details' >
                        <option selected >Aomori Prefecture</option>
                        <option >Saab</option>
                        <option >VW</option>
                        <option >Audi</option>
                    </select>
                    <select className='location-details' >
                        <option selected >Aomori City</option>
                        <option >Saab</option>
                        <option >VW</option>
                        <option >Audi</option>
                    </select>
                    <p className='input-message'>If you have multiple work locations, please set the location of the facility</p>
                </div>
                <div>
                    <h4 className=' main-title'>Occupation</h4>
                    <select className='select-Option'>
                        <option selected>---</option>
                        <option >pursuit</option>
                        <option >business</option>
                        <option >emloyment</option>
                        <option >work</option>
                    </select>
                </div>
                <div>
                    <h4 className=' main-title'>Work style</h4>
                    <select className='select-Option'>
                        <option selected>---</option>
                        <option >pursuit</option>
                        <option >business</option>
                        <option >emloyment</option>
                        <option >work</option>
                    </select>
                </div>
                <div>
                    <h4 className=' main-title'>Facility form</h4>
                    <select className='select-Option'>
                        <option selected>---</option>
                        <option >pursuit</option>
                        <option >business</option>
                        <option >emloyment</option>
                        <option >work</option>
                    </select>
                </div>

                <div>
                    <h3 className=' main-title'>Hourly wage / annual income</h3>
                    <div className='income-details'>
                        <input type="radio" />
                        <div className='income-inputs'>
                            <div>Hourly</div>
                            <div>wage</div>
                        </div>
                    </div>
                    <div className='income-details'>
                        <input type="radio" />
                        <div className='income-inputs'>
                            <div>Monthly</div>
                            <div>salary</div>
                        </div>
                    </div>
                    <div className='income-details'>
                        <input type="radio" />
                        <div className='income-inputs'>
                            <div>annual</div>
                            <div>income</div>
                        </div>

                    </div>
                    <div className='income-details'>
                        <input className='input-Cicle' type="text" />
                    </div>
                    <p className='text'>Circle~</p>
                </div>
                <p className='alert-message'>Please choose one</p>
                <div className='second-section'>
                    <h3 className='work-title'>Ease of work</h3>
                    <span className='note'>Multiple selections possible</span>
                </div>
                <div className='multiple-checkboxes'>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Day shift only</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Night shift full-time</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Reduced working hours possible</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>No on-call</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Complete with social insurance</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Bonous 4 months or more</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Private car  commuting OK</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Station Chicka</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>There is a housing allowance</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Less overtime (within 10 hours a month)</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Enhanced training</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Saturdays, Sundays, and holidays</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Bank allowed</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>There is a nursery</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>There is a dormitory</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Placement criteria 7:1</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>There is an electronic medical record</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Men welcome</label>
                    </span>
                    <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>With bonous</label>
                    </span> <span className='checkboxes'>
                        <input type="checkbox" />
                        <label className='labels'>Welcome to reduced working hours</label>
                    </span>
                </div>
                <div>
                    <h3>Free word(up to 20)</h3>
                    <textarea type="text" className='main-para' />
                </div>
                <h3>Cover image</h3>
                <div className='image-section'>
                    <input type="file" />
                    <h4 className='final-title'>Click or drag and drop </h4>
                    <div className='final-titles'>Upload file</div>
                    <p>Recommended size: horizontal 1600px, vertical 548px up to 2MB</p>
                </div>
            </div>
        </div>
    );
}

export default Form;