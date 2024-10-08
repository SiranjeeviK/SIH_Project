import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles/BasicInfo.css'; // Importing the CSS file

const BasicInfo = () => {
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    gender: '',
    relationName: '',
    relationType: '',
    category: '',
    registeredState: '',
    registeredMandi: '',
    farmName: '',
    surveyNumber: '',
    farmSize: '',
    location: '',
    address1: '',
    address2: '',
    aadhaarNumber: '',
    otp: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log(formData);
    // Navigate to the next page (e.g., EmailVerification)
    navigate('/email-verification');
  };

  const handleSkip = () => {
    navigate('/bank-details'); // Navigate to BankDetails page on skip
  };

  const sendOtp = () => {
    alert("OTP has been sent to your aadhar number");
    // Logic to send OTP
    // console.log('Sending OTP to:', formData.aadhaarNumber);
  };

  return (
    <div className="basic-info-form">
      <div className="progress-bar">
        <div className="stage active">1</div>
        <div className="stage active">2</div>
        <div className="stage active">3</div>
        <div className="stage">4</div>
        <div className="stage">5</div>
      </div>
      <h2>Enter Your Basic Details</h2>
      <p>Tell us more about your farming business.</p>
      <div className="container">
      <form onSubmit={handleSubmit}>
        {/* Title */}
   
        <div className="form-group">
          <label>Title</label>
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Relation Name */}
        <div className="form-group">
          <label>Relation Name</label>
          <input
            type="text"
            name="relationName"
            placeholder="Enter Relation Name"
            value={formData.relationName}
            onChange={handleChange}
          />
        </div>

        {/* Relation Type */}
        <div className="form-group">
          <label>Relation Type</label>
          <select name="relationType" value={formData.relationType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Son of">Son of</option>
            <option value="Daughter of">Daughter of</option>
            <option value="Wife of">Wife of</option>
            <option value="Husband of">Husband of</option>
          </select>
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Individual Farmer">Individual Farmer</option>
            <option value="Collaborate">Collaborate</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Registered State */}
        <div className="form-group">
          <label>Registered State</label>
          <input
            type="text"
            name="registeredState"
            placeholder="Enter Registered State"
            value={formData.registeredState}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Registered City</label>
          <input
            type="text"
            name="registeredCity"
            placeholder="Enter Registered City"
            value={formData.registeredCity}
            onChange={handleChange}
            required
          />
        </div>

        {/* Registered Mandi */}
        <div className="form-group">
          <label>Registered Mandi</label>
          <input
            type="text"
            name="registeredMandi"
            placeholder="Enter Registered Mandi"
            value={formData.registeredMandi}
            onChange={handleChange}
            required
          />
        </div>

        {/* Farm Name */}
        <div className="form-group">
          <label>Farm Name</label>
          <input
            type="text"
            name="farmName"
            placeholder="Enter Farm Name"
            value={formData.farmName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Survey Number */}
        <div className="form-group">
          <label>Survey Number</label>
          <input
            type="text"
            name="surveyNumber"
            placeholder="Enter Survey Number"
            value={formData.surveyNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Farm Size */}
        <div className="form-group">
          <label>Farm Size (in acres)</label>
          <input
            type="text"
            name="farmSize"
            placeholder="Enter the size of your farm"
            value={formData.farmSize}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label>Location</label>
          <div className="map-placeholder">
            {/* Placeholder for Google Maps component */}
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112018.69167307879!2d77.0136652178762!3d28.67216872665934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b03665eb%3A0xb24247b98b9d5de2!2sMinistry%20of%20Agriculture%20%26%20Farmers%20Welfare!5e0!3m2!1sen!2sin!4v1727166422192!5m2!1sen!2sin"
      title="Google Map of India"
      width="600" 
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
          </div>
        
        </div>

        {/* Address Line 1 */}
        <div className="form-group">
          <label>Address Line 1</label>
          <input
            type="text"
            name="address1"
            placeholder="Enter Address Line 1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address Line 2 */}
        <div className="form-group">
          <label>Address Line 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Enter Address Line 2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        {/* Aadhaar Number */}
        <div className="form-group">
          <label>Aadhaar Number</label>
          <input
            type="text"
            name="aadhaarNumber"
            placeholder="Enter Aadhaar Number"
            value={formData.aadhaarNumber}
            onChange={handleChange}
            required
          />
          <button type="button" className="send-otp" onClick={sendOtp}>Send OTP</button>
        </div>

        {/* OTP Verification */}
        <div className="form-group">
          <label>OTP (One Time Password)</label>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="form-actions">
          <button type="submit" className="next-btn">Next</button>
          <button type="button" className="skip-btn" onClick={handleSkip}>Skip for Now</button>
        </div>
       
      </form>
    </div>
    </div>
  
  );
};

export default BasicInfo;
