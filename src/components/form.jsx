 // import React, { useState } from "react";
// import "./form.scss";
 
//  const Form = () => {
//    const initialValues = {
//      titleInput: "",
//      firstLocation: "",
//      secondLocation: "",
//      occupationInput: "",
//      workInput: "",
//      facilityInput: "",
//      circleInput: "",
//      freeWordField: "",
//      check: "",
//    }; 

//    const [formValues, setFormValues] = useState(initialValues);
//    const [formErrors, setFormErrors] = useState({});
//    const [preview, setPreview] = useState("");
//    const [checkLength, setCheckLength] = useState([]);

//    const toBase64 = (file) =>
//      new Promise((resolve, reject) => {
//        const reader = new FileReader();
//        reader.readAsDataURL(file);
//        reader.onload = () => resolve(reader.result);
//        reader.onerror = (error) => reject(error);
//      });
 
//    const handleChange = async (e) => {
//      const { name, value, type, files, checked } = e.target;
 
//      if (type === "checkbox") {
//        let data = checkLength;
//        if (checked) {
//          data.push(name);
//          setCheckLength(data);
//        } else {
//          data.pop();
//          setCheckLength(data);
//        }
//      }
 
//      if (name === "file") {
//        setPreview(await toBase64(files[0]));
//      }
 
//      let errors = formErrors;
//      delete errors[name];
//      setFormErrors(errors);
 
//      if (value === "") {
//       //  errors[name] = `Please enter ${name}`;
//       errors[name] = "Please enter ";

//      } else if (name === "titleInput" && !value.match(/^[A-Za-z]+$/)) {
//          errors[name] = "Numbers are not allowed";
//      }
    
//      setFormValues({ ...formValues, [name]: value });
 
//      if (name === "circleInput" && value.length > 3) {
//        errors[name] = "Only 3 numbers are allowed";
//      }
//      if (name === "freeWordField" && value.length > 20) {
//        errors[name] = "Only 20 characters are allowed";
//      }
//      if (name === "check" && checkLength.length < 3) {
//        errors[name] = "Select atleast 3 checkboxes";
//      }

      
//      if (name === "firstLocation" && value && formValues.secondLocation === ""){
//       errors.secondLocation = "Please choose second one"
//      }

//      if (name === "secondLocation" && value && formValues.firstLocation === ""){
//       errors.firstLocation = "Please choose first one"
//      }

//    };

   
//    const handleSubmit = (e) => {
//      e.preventDefault();
//      setFormErrors(validate(formValues));
//    };
   
//    const validate = (values) => {
//      const errors = {};
     
//      if (values.titleInput === "") {
//        errors.titleInput = "Please enter";
//      } 
//      else if (!values.titleInput.match(/^[A-Za-z]+$/)) {
//        errors.titleInput = "Numbers are not allowed";
//      }

//      if(values.firstLocation === "") {
//       errors.firstLocation  = "Please choose first one"
//      } else if (values.secondLocation === ""){
//       errors.secondLocation  = "Please choose second one"
//       errors.firstLocation = ""
//      }              

       
//      if (values.occupationInput === "") {
//        errors.occupationInput = "Please choose one";
//      }
//      if (values.workInput === "") {
//        errors.workInput = "Please choose one";
//      }
//      if (values.facilityInput === "") {
//        errors.facilityInput = "Please choose one";
//      }
//      if (values.circleInput === "") {
//        errors.circleInput = "Please enter";
//      }
//      if (values.circleInput.length > 3) {
//        errors.circleInput = "Only 3 numbers are allowed";
//      }
//      if (values.freeWordField === "") {
//        errors.freeWordField = "Please enter";
//      }
//      if (values.freeWordField.length > 20) {
//        errors.freeWordField = "Only 20 characters are allowed";
//      }
//      if (checkLength.length < 1) {
//        errors.check = "Select atleast 3 checkboxes";
//      }
      
//      return errors;
//    };
 
//    return (
//      <div className="main-container">
//        <div className="container">
//          <form onSubmit={handleSubmit}>
//            <h4 className="main-heading">Create a new recruitment</h4>
//            <h4 className=" main-title">Recruitment title</h4>
//            <input
//              className="main-input"
//              type="text"
//              name="titleInput"
//              value={formValues.titleInput}
//              onBlur={(e) => {
//                if (e.target.value === "") {
//                  setFormErrors({ ...formErrors, titleInput: "Please enter" });
//                }
//              }}
//              onChange={handleChange}
//            />
//            <p className="input-message">
//              Example: [Regular staff] Long-term care work at a nursing home for the elderly!
//            </p>
//            <p className="validation-error">{formErrors.titleInput}</p>
//            <div>
//              <h4 className=" main-title">Work location</h4>
//              <select
//                className="location-details"
//                onChange={handleChange}
//                name="firstLocation"
//                value={formValues.firstLocation}
//                onBlur={(e) => {
//                  if (e.target.value === "") {
//                  setFormErrors({
//                    ...formErrors,
//                    firstLocation: "please choose one first location",
//                  });
//                  }
//                }}
//              >
//                <option value="" disabled>---</option>
//                <option>Aomori Prefecture</option>
//                <option>Saab</option>
//                <option>VW</option>
//                <option>Audi</option>
//              </select>
//              <select
//                className="location-details"
//                onChange={handleChange}
//                name="secondLocation"
//                value={formValues.secondLocation}
//                onBlur={(e) => {
//                  if (e.target.value === "") {
//                    setFormErrors({
//                      ...formErrors,
//                      secondLocation: "please choose one second location",
//                    });
//                  }
//                }}
//              >
//                <option value="" disabled>---</option>
//                <option>Aomori City</option>
//                <option>Saab</option>
//                <option>VW</option>
//                <option>Audi</option>
//              </select>
//              <p className="input-message">
//                If you have multiple work locations, please set the location of
//                the facility
//              </p>
//            </div>
//            <p className="validation-error">{formErrors.firstLocation}</p>
//            <p className="validation-error">{formErrors.secondLocation}</p>
//            <div>
//              <h4 className=" main-title">Occupation</h4>
//              <select
//                className="select-Option"
//                onChange={handleChange}
//                name="occupationInput"
//                value={formValues.occupationInput}
//                onBlur={(e) => {
//                  if (e.target.value === "") {
//                    setFormErrors({
//                      ...formErrors,
//                      occupationInput: "please  choose one ",
//                    });
//                  }
//                }}
//              >
//                <option value="" disabled>---</option>
//                <option>pursuit</option>
//                <option>business</option>
//                <option>emloyment</option>
//                <option>work</option>
//              </select>
//            </div>
//            <p className="validation-error">{formErrors.occupationInput}</p>
//            <div>
//              <h4 className=" main-title">Work style</h4>
//              <select
//                className="select-Option"
//                onChange={handleChange}
//                name="workInput"
//                value={formValues.workInput}
//                onBlur={(e) => {
//                  if (e.target.value === "") {
//                    setFormErrors({
//                      ...formErrors,
//                      workInput: "please  choose one",
//                    });
//                  }
//                }}
//              >
//                <option value="" disabled>---</option>
//                <option>pursuit</option>
//                <option>business</option>
//                <option>emloyment</option>
//                <option>work</option>
//              </select>
//            </div>
//            <p className="validation-error">{formErrors.workInput}</p>
//            <h4 className=" main-title">Facility form</h4>
//            <select
//              className="select-Option"
//              onChange={handleChange}
//              name="facilityInput"
//              value={formValues.facilityInput}
//              onBlur={(e) => {
//                if (e.target.value === "") {
//                  setFormErrors({
//                    ...formErrors,
//                    facilityInput: "please choose one",
//                  });
//                }
//              }}
//            >
//              <option value="" disabled>---</option>
//              <option>pursuit</option>
//              <option>business</option>
//              <option>emloyment</option>
//              <option>work</option>
//            </select>
//            <p className="validation-error">{formErrors.facilityInput}</p>  
//            <h3 className=" main-title">Hourly wage / annual income</h3>
//            <div className="income-details">
//              <input type="radio" name="action" defaultChecked />
//              <div className="income-inputs">
//                <div>Hourly</div>
//                <div>wage</div>
//              </div>
//            </div>
//            <div className="income-details">
//              <input type="radio" name="action" />
//              <div className="income-inputs">
//                <div>Monthly</div>
//                <div>salary</div>
//              </div>
//            </div>
//            <div className="income-details">
//              <input type="radio" name="action" />
//              <div className="income-inputs">
//                <div>annual</div>
//                <div>income</div>
//              </div>
//            </div>
//            <div className="income-details">
//              <input
//                className="input-Cicle"
//                type="number"
//                name="circleInput"
//                value={formValues.circleInput}
//                onChange={handleChange}
//                onBlur={(e) => {
//                  if (e.target.value === "") {
//                    setFormErrors({ ...formErrors, circleInput: "Please enter" }); 
//                  }
//                }}
//              />
//            </div>
//            <p className="text">Circle~</p>
//            <p className="validation-error">{formErrors.circleInput}</p>
//            <div className="second-section">
//              <h3 className="work-title">Ease of work</h3>
//              <span className="note">Multiple selections possible</span>
//            </div>
//            <div className="multiple-checkboxes">
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Day shift only</label>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Night shift full-time</label>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Reduced working hours possible</label>
//              <span className="checkboxes">
//                <input type="checkbox" name="check" onChange={handleChange} />
//                <label className="labels">No on-call</label>
//              </span>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Complete with social insurance</label>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Bonous 4 months or more</label>
//              <span className="checkboxes">
//                <input type="checkbox" name="check" onChange={handleChange} />
//                <label className="labels">Private car commuting OK</label>
//              </span>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Station Chicka</label>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">There is a housing allowance</label>
//              <span className="checkboxes">
//                <input type="checkbox" name="check" onChange={handleChange} />
//                <label className="labels">
//                  Less overtime (within 10 hours a month)
//                </label>
//              </span>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Enhanced training</label>
//              <span className="checkboxes">
//                <input type="checkbox" name="check" onChange={handleChange} />
//                <label className="labels">Saturdays, Sundays, and holidays</label>
//              </span>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Bank allowed</label>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">There is a nursery</label>
 
//              <span className="checkboxes">
//                <input type="checkbox" name="check" onChange={handleChange} />
//                <label className="labels">There is a dormitory</label>
//              </span>
//              <span className="checkboxes">
//                <input type="checkbox" name="check" onChange={handleChange} />
//                <label className="labels">Placement criteria 7:1</label>
//              </span>
//              <span className="checkboxes">
//                <input type="checkbox" name="check" onChange={handleChange} />
//                <label className="labels">
//                  There is an electronic medical record
//                </label>
//              </span>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">Men welcome</label>
//              <input type="checkbox" name="check" onChange={handleChange} />
//              <label className="labels">With bonous</label>
//              <span className="checkboxes">
//                <input type="checkbox" name="check" onChange={handleChange} />
//                <label className="labels">Welcome to reduced working hours</label>
//              </span>
//              <p className="validation-error">{formErrors.check}</p>
//            </div>
//            <h3>Free word(up to 20)</h3>
//            <textarea
//              type="text"
//              className="main-para"
//              name="freeWordField"
//              value={formValues.freeWordField}
//              onChange={handleChange}
//              onBlur={(e) => {
//                if (e.target.value === "") {
//                  setFormErrors({
//                    ...formErrors,
//                    freeWordField: "Please enter",
//                  });
//                }
//              }}
//            />
//            <p className="validation-error">{formErrors.freeWordField}</p>
//            <h3>Cover image</h3>
//            {preview ? (
//              <img src={preview} alt="" className="image-preview" />
//            ) : (
//              <div className="image-section">
//                <input type="file" onChange={handleChange} name="file" />
//                <h4 className="drag-title">Click or drag and drop </h4>
//                <h4 className="Upload-titles">Upload file</h4>
//                <p>
//                  Recommended size: horizontal 1600px, vertical 548px up to 2MB
//                </p>
//              </div>
//            )}
//            <button type="submit" className="submit-button">
//              Submit
//            </button>
//          </form>
//        </div>
//      </div>
//    );
//  };
 
//  export default Form;

import React, { useState } from "react";
import "./form.scss";
 
 const Form = () => {
   const initialValues = {
     titleInput: "",
     firstLocation: "",
     secondLocation: "",
     occupationInput: "",
     workInput: "",
     facilityInput: "",
     circleInput: "",
     freeWordField: "",
     check: "",
   }; 

   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [preview, setPreview] = useState("");
   const [checkLength, setCheckLength] = useState([]);

   const toBase64 = (file) =>
     new Promise((resolve, reject) => {
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = () => resolve(reader.result);
       reader.onerror = (error) => reject(error);
     });
 
   const handleChange = async (e) => {
     const { name, value, type, files, checked } = e.target;
 
     if (type === "checkbox") {
       let data = checkLength;
       if (checked) {
         data.push(name);
         setCheckLength(data);
       } else {
         data.pop();
         setCheckLength(data);
       }
     }
 
     if (name === "file") {
       setPreview(await toBase64(files[0]));
     }
 
     let errors = formErrors;
     delete errors[name];
     setFormErrors(errors);
 
     if (value === "") {
      //  errors[name] = `Please enter ${name}`;
      errors[name] = "Please enter ";

     } else if (name === "titleInput" && !value.match(/^[A-Za-z]+$/)) {
         errors[name] = "Numbers are not allowed";
     }
    
     setFormValues({ ...formValues, [name]: value });
 
     if (name === "circleInput" && value.length > 3) {
       errors[name] = "Only 3 numbers are allowed";
     }
     if (name === "freeWordField" && value.length > 20) {
       errors[name] = "Only 20 characters are allowed";
     }
     if (name === "check" && checkLength.length < 3) {
       errors[name] = "Select atleast 3 checkboxes";
     }

      
     if (name === "firstLocation" && value && formValues.secondLocation === ""){
      errors.secondLocation = "Please choose second one"
     }

     if (name === "secondLocation" && value && formValues.firstLocation === ""){
      errors.firstLocation = "Please choose first one"
     }

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
     else if (!values.titleInput.match(/^[A-Za-z]+$/)) {
       errors.titleInput = "Numbers are not allowed";
     }

     if(values.firstLocation === "") {
      errors.firstLocation  = "Please choose first one"
     } else if (values.secondLocation === ""){
      errors.secondLocation  = "Please choose second one"
      errors.firstLocation = ""
     }              

       
     if (values.occupationInput === "") {
       errors.occupationInput = "Please choose one";
     }
     if (values.workInput === "") {
       errors.workInput = "Please choose one";
     }
     if (values.facilityInput === "") {
       errors.facilityInput = "Please choose one";
     }
     if (values.circleInput === "") {
       errors.circleInput = "Please enter";
     }
     if (values.circleInput.length > 3) {
       errors.circleInput = "Only 3 numbers are allowed";
     }
     if (values.freeWordField === "") {
       errors.freeWordField = "Please enter";
     }
     if (values.freeWordField.length > 20) {
       errors.freeWordField = "Only 20 characters are allowed";
     }
     if (checkLength.length < 1) {
       errors.check = "Select atleast 3 checkboxes";
     }
      
     return errors;
   };
 
   return (
     <div className="main-container">
       <div className="container">
         <form onSubmit={handleSubmit}>
           <h4 className="main-heading">Create a new recruitment</h4>
           <h4 className=" main-title">Recruitment title</h4>
           <input
             className="main-input"
             type="text"
             name="titleInput"
             value={formValues.titleInput}
             onBlur={(e) => {
               if (e.target.value === "") {
                 setFormErrors({ ...formErrors, titleInput: "Please enter" });
               }
             }}
             onChange={handleChange}
           />
           <p className="input-message">
             Example: [Regular staff] Long-term care work at a nursing home for the elderly!
           </p>
           <p className="validation-error">{formErrors.titleInput}</p>
           <div>
             <h4 className=" main-title">Work location</h4>
             <select
               className="location-details"
               onChange={handleChange}
               name="firstLocation"
               value={formValues.firstLocation}
               onBlur={(e) => {
                 if (e.target.value === "") {
                 setFormErrors({
                   ...formErrors,
                   firstLocation: "please choose one first location",
                 });
                 }
               }}
             >
               <option value="" disabled>---</option>
               <option>Aomori Prefecture</option>
               <option>Saab</option>
               <option>VW</option>
               <option>Audi</option>
             </select>
             <select
               className="location-details"
               onChange={handleChange}
               name="secondLocation"
               value={formValues.secondLocation}
               onBlur={(e) => {
                 if (e.target.value === "") {
                   setFormErrors({
                     ...formErrors,
                     secondLocation: "please choose one second location",
                   });
                 }
               }}
             >
               <option value="" disabled>---</option>
               <option>Aomori City</option>
               <option>Saab</option>
               <option>VW</option>
               <option>Audi</option>
             </select>
             <p className="input-message">
               If you have multiple work locations, please set the location of
               the facility
             </p>
           </div>
           <p className="validation-error">{formErrors.firstLocation}</p>
           <p className="validation-error">{formErrors.secondLocation}</p>
           <div>
             <h4 className=" main-title">Occupation</h4>
             <select
               className="select-Option"
               onChange={handleChange}
               name="occupationInput"
               value={formValues.occupationInput}
               onBlur={(e) => {
                 if (e.target.value === "") {
                   setFormErrors({
                     ...formErrors,
                     occupationInput: "please  choose one ",
                   });
                 }
               }}
             >
               <option value="" disabled>---</option>
               <option>pursuit</option>
               <option>business</option>
               <option>emloyment</option>
               <option>work</option>
             </select>
           </div>
           <p className="validation-error">{formErrors.occupationInput}</p>
           <div>
             <h4 className=" main-title">Work style</h4>
             <select
               className="select-Option"
               onChange={handleChange}
               name="workInput"
               value={formValues.workInput}
               onBlur={(e) => {
                 if (e.target.value === "") {
                   setFormErrors({
                     ...formErrors,
                     workInput: "please  choose one",
                   });
                 }
               }}
             >
               <option value="" disabled>---</option>
               <option>pursuit</option>
               <option>business</option>
               <option>emloyment</option>
               <option>work</option>
             </select>
           </div>
           <p className="validation-error">{formErrors.workInput}</p>
           <h4 className=" main-title">Facility form</h4>
           <select
             className="select-Option"
             onChange={handleChange}
             name="facilityInput"
             value={formValues.facilityInput}
             onBlur={(e) => {
               if (e.target.value === "") {
                 setFormErrors({
                   ...formErrors,
                   facilityInput: "please choose one",
                 });
               }
             }}
           >
             <option value="" disabled>---</option>
             <option>pursuit</option>
             <option>business</option>
             <option>emloyment</option>
             <option>work</option>
           </select>
           <p className="validation-error">{formErrors.facilityInput}</p>  
           <h3 className=" main-title">Hourly wage / annual income</h3>
           <div className="income-details">
             <input type="radio" name="action" defaultChecked />
             <div className="income-inputs">
               <div>Hourly</div>
               <div>wage</div>
             </div>
           </div>
           <div className="income-details">
             <input type="radio" name="action" />
             <div className="income-inputs">
               <div>Monthly</div>
               <div>salary</div>
             </div>
           </div>
           <div className="income-details">
             <input type="radio" name="action" />
             <div className="income-inputs">
               <div>annual</div>
               <div>income</div>
             </div>
           </div>
           <div className="income-details">
             <input
               className="input-Cicle"
               type="number"
               name="circleInput"
               value={formValues.circleInput}
               onChange={handleChange}
               onBlur={(e) => {
                 if (e.target.value === "") {
                   setFormErrors({ ...formErrors, circleInput: "Please enter" }); 
                 }
               }}
             />
           </div>
           <p className="text">Circle~</p>
           <p className="validation-error">{formErrors.circleInput}</p>
           <div className="second-section">
             <h3 className="work-title">Ease of work</h3>
             <span className="note">Multiple selections possible</span>
           </div>
           <div className="multiple-checkboxes">
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Day shift only</label>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Night shift full-time</label>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Reduced working hours possible</label>
             <span className="checkboxes">
               <input type="checkbox" name="check" onChange={handleChange} />
               <label className="labels">No on-call</label>
             </span>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Complete with social insurance</label>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Bonous 4 months or more</label>
             <span className="checkboxes">
               <input type="checkbox" name="check" onChange={handleChange} />
               <label className="labels">Private car commuting OK</label>
             </span>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Station Chicka</label>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">There is a housing allowance</label>
             <span className="checkboxes">
               <input type="checkbox" name="check" onChange={handleChange} />
               <label className="labels">
                 Less overtime (within 10 hours a month)
               </label>
             </span>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Enhanced training</label>
             <span className="checkboxes">
               <input type="checkbox" name="check" onChange={handleChange} />
               <label className="labels">Saturdays, Sundays, and holidays</label>
             </span>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Bank allowed</label>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">There is a nursery</label>
 
             <span className="checkboxes">
               <input type="checkbox" name="check" onChange={handleChange} />
               <label className="labels">There is a dormitory</label>
             </span>
             <span className="checkboxes">
               <input type="checkbox" name="check" onChange={handleChange} />
               <label className="labels">Placement criteria 7:1</label>
             </span>
             <span className="checkboxes">
               <input type="checkbox" name="check" onChange={handleChange} />
               <label className="labels">
                 There is an electronic medical record
               </label>
             </span>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">Men welcome</label>
             <input type="checkbox" name="check" onChange={handleChange} />
             <label className="labels">With bonous</label>
             <span className="checkboxes">
               <input type="checkbox" name="check" onChange={handleChange} />
               <label className="labels">Welcome to reduced working hours</label>
             </span>
             <p className="validation-error">{formErrors.check}</p>
           </div>
           <h3>Free word(up to 20)</h3>
           <textarea
             type="text"
             className="main-para"
             name="freeWordField"
             value={formValues.freeWordField}
             onChange={handleChange}
             onBlur={(e) => {
               if (e.target.value === "") {
                 setFormErrors({
                   ...formErrors,
                   freeWordField: "Please enter",
                 });
               }
             }}
           />
           <p className="validation-error">{formErrors.freeWordField}</p>
           <h3>Cover image</h3>
           {preview ? (
             <img src={preview} alt="" className="image-preview" />
           ) : (
             <div className="image-section">
               <input type="file" onChange={handleChange} name="file" />
               <h4 className="drag-title">Click or drag and drop </h4>
               <h4 className="Upload-titles">Upload file</h4>
               <p>
                 Recommended size: horizontal 1600px, vertical 548px up to 2MB
               </p>
             </div>
           )}
           <button type="submit" className="submit-button">
             Submit
           </button>
         </form>
       </div>
     </div>
   );
 };
 
 export default Form;