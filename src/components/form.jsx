import React, { useState } from 'react';
import './form.scss';

const Form = () => {
    const initialValues = {
        titleInput: "Voluptatum est alique",
        firstLocation: "---",
        secondLocation: "---",
        occupationInput: "---",
        workInput: "---",
        facilityInput: "---"
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value ,type} = e.target;
        let errors=formErrors
        delete errors[name]
        setFormErrors(errors) 

        if(type === "text"){
            let result= /^[A-Za-z\s]*$/.test(value)
            if(!result){
                errors[name]="Please enter"
            }
        }
        if(value === ""  || value === "---"){
            errors[name]="Please enter"
        }
        
        if(!(type === "text")  || (type === "text" && /^[A-Za-z\s]*$/.test(value)))
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    };
    const validate = (values) => {
        const errors = {};

        if (values.titleInput === "") {
            errors.titleInput = "Please enter";
        }
        if (values.firstLocation === "---") {
            errors.firstLocation = "Please choose one";
        }
        if (values.secondLocation === "---") {
            errors.secondLocation = "Please choose one";
        }
        if (values.occupationInput === "---") {
            errors.occupationInput = "Please choose one";
        }
        if (values.workInput === "---") {
            errors.workInput = "Please choose one";
        }
        if (values.facilityInput === "---") {
            errors.facilityInput = "Please choose one";
        }
        return errors;
    };

    return (
        <div className="main-container">
            <div className="container">                 
                <form onSubmit={handleSubmit} >
                    <h4 className="main-heading">Create a new recruitment</h4>
                        <h4 className=' main-title'>Recruitment title</h4>
                        <input
                            className='main-input'
                            type="text"
                            name='titleInput'
                            value={formValues.titleInput} 
                            onChange={handleChange}
                        />
                        <p className='input-message'>Example: [Regular staff] Long-term care work at a nursing home for the elderly!</p>
                    <p className='validation-error'>{formErrors.titleInput}</p>
                    <div>
                        <h4 className=' main-title'>Work location</h4>
                        <select
                            className='location-details'
                            onChange={handleChange}
                            name="firstLocation"
                            value={formValues.firstLocation}
                        >
                            <option disabled>---</option>
                            <option>Aomori Prefecture</option>
                            <option>Saab</option>
                            <option>VW</option>
                            <option>Audi</option>
                        </select>
                        <select
                            className='location-details'
                            onChange={handleChange}
                            name="secondLocation"
                            value={formValues.secondLocation}
                        >
                            <option  disabled >---</option>
                            <option>Aomori City</option>
                            <option>Saab</option>
                            <option>VW</option>
                            <option>Audi</option>
                        </select>
                        <p className='input-message'>If you have multiple work locations, please set the location of the facility</p>
                    </div>
                    <p className='validation-error'>{formErrors.firstLocation}</p>
                    <p className='validation-error'>{formErrors.secondLocation}</p>
                    <div>
                        <h4 className=' main-title'>Occupation</h4>
                        <select
                            className='select-Option'
                            onChange={handleChange}
                            name="occupationInput"
                            value={formValues.occupationInput}
                        >
                            <option disabled>---</option>
                            <option>pursuit</option>
                            <option>business</option>
                            <option>emloyment</option>
                            <option>work</option>
                        </select>
                    </div>
                    <p className='validation-error'>{formErrors.occupationInput}</p>
                    <div>
                        <h4 className=' main-title'>Work style</h4>
                        <select
                            className='select-Option'
                            onChange={handleChange}
                            name="workInput"
                            value={formValues.workInput}
                        >
                            <option  disabled>---</option>
                            <option>pursuit</option>
                            <option>business</option>
                            <option>emloyment</option>
                            <option>work</option>
                        </select>
                    </div>
                    <p className='validation-error'>{formErrors.workInput}</p>
                        <h4 className=' main-title'>Facility form</h4>
                        <select
                            className='select-Option'
                            onChange={handleChange}
                            name="facilityInput"
                            value={formValues.facilityInput}
                        >
                            <option disabled>---</option>
                            <option>pursuit</option>
                            <option>business</option>
                            <option>emloyment</option>
                            <option>work</option>
                        </select>
                    <p className='validation-error'>{formErrors.facilityInput}</p>
                        <h3 className=' main-title'>Hourly wage / annual income</h3>
                        <div className='income-details'>
                            <input type="radio" name='action' />
                            <div className='income-inputs'>
                                <div>Hourly</div>
                                <div>wage</div>
                            </div>
                        </div>
                        <div className='income-details'>
                            <input type="radio" name='action' />
                            <div className='income-inputs'>
                                <div>Monthly</div>
                                <div>salary</div>
                            </div>
                        </div>
                        <div className='income-details'>
                            <input type="radio" name='action' />
                            <div className='income-inputs'>
                                <div>annual</div>
                                <div>income</div>
                            </div>
                        </div>
                        <div className='income-details'>
                            <input className='input-Cicle' type="number" defaultValue='274' />
                        </div>
                        <p className='text'>Circle~</p>
                    <div className='second-section'>
                        <h3 className='work-title'>Ease of work</h3>
                        <span className='note'>Multiple selections possible</span>
                    </div>
                    <div className='multiple-checkboxes'>
                            <input type="checkbox" />
                            <label className='labels'>Day shift only</label>
                            <input type="checkbox" />
                            <label className='labels'>Night shift full-time</label>
                            <input type="checkbox" />
                            <label className='labels'>Reduced working hours possible</label>
                        <span className='checkboxes'>
                            <input type="checkbox" />
                            <label className='labels'>No on-call</label>
                        </span>
                            <input type="checkbox" />
                            <label className='labels'>Complete with social insurance</label>
                            <input type="checkbox" />
                            <label className='labels'>Bonous 4 months or more</label>
                        <span className='checkboxes'>
                            <input type="checkbox" />
                            <label className='labels'>Private car  commuting OK</label>
                        </span>
                            <input type="checkbox" />
                            <label className='labels'>Station Chicka</label>
                            <input type="checkbox" />
                            <label className='labels'>There is a housing allowance</label>
                        <span className='checkboxes'>
                            <input type="checkbox" />
                            <label className='labels'>Less overtime (within 10 hours a month)</label>
                        </span>
                            <input type="checkbox" />
                            <label className='labels'>Enhanced training</label>
                        <span className='checkboxes'>
                            <input type="checkbox" />
                            <label className='labels'>Saturdays, Sundays, and holidays</label>
                        </span>
                            <input type="checkbox" />
                            <label className='labels'>Bank allowed</label>
                            <input type="checkbox" />
                            <label className='labels'>There is a nursery</label>
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
                            <input type="checkbox" />
                            <label className='labels'>Men welcome</label>
                            <input type="checkbox" />
                            <label className='labels'>With bonous</label>
                        <span className='checkboxes'>
                            <input type="checkbox" />
                            <label className='labels'>Welcome to reduced working hours</label>
                        </span>
                    </div>
                    <div>
                        <h3>Free word(up to 20)</h3>
                        <textarea type="text" className='main-para' maxLength="20" />
                    </div>
                    <h3>Cover image</h3>
                    <div className='image-section'>
                        <input type="file" />
                        <h4 className='final-title'>Click or drag and drop </h4>
                        <div className='final-titles'>Upload file</div>
                        <p>Recommended size: horizontal 1600px, vertical 548px up to 2MB</p>
                    </div>
                    <button type="submit" className='submit-button'>Submit</button>
                </form>
                </div>
            </div>
    );
}

export default Form;