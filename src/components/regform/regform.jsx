import React, { useState } from 'react';
import './regform.css'; // Import the CSS file

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    admissionNo: '',
    yearOfAdmission: '',
    name: '',
    mobileNo: '',
    department: '',
    boardingPoint: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="registration-container">
      <h1 className="form-header">Student Registration</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="admissionNo">Admission No</label>
            <input
              type="text"
              id="admissionNo"
              name="admissionNo"
              value={formData.admissionNo}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter Admission No"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="yearOfAdmission">Year of Admission</label>
            <select
              id="yearOfAdmission"
              name="yearOfAdmission"
              value={formData.yearOfAdmission}
              onChange={handleChange}
              className="form-select"
            >
              <option className='options' value="">Select Year OF Admission</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your Full Name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobileNo">Mobile No</label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter Your Mobile No"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select Your Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Inforrmation Technology">Electronics and Communication</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Inforrmation Technology">Inforrmation Technology</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="boardingPoint">Boarding Point</label>
            <select
              id="boardingPoint"
              name="boardingPoint"
              value={formData.boardingPoint}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select Your Boarding Point</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Mannarkkad">Mannarkkad</option>
              <option value="Cherpulassery">Cherpulassery</option>
              <option value="Ottappalam">Ottappalam</option>
              <option value="West Gate">Shornur</option>
            </select>
          </div>
        </div>
        
        <div className="button-container">
          <button type="submit" className="submit-button">
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;