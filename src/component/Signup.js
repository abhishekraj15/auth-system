import React, { useState } from 'react'
import './../index.css'

export default function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validateForm = () => {
        const newErrors = {
          name: '',
          email: '',
          password: '',
        };
    
        // Validate name
        if (formData.name.trim() === '') {
          newErrors.name = 'Name is required';
        }
    
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
    
        // Validate password
        if (formData.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters long';
        }
    
        setErrors(newErrors);
    
        // If there are no errors, the form is valid
        return Object.values(newErrors).every((error) => error === '');
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate the form before submitting
        if (validateForm()) {
          // Perform signup logic here
          console.log(formData.name);
          console.log(formData.email);
          console.log(formData.password);
          console.log('Form is valid. Submitting...');
        } else {
          console.log('Form is invalid. Please fix errors.');
        }
      };
    return (
        <div className='signup'>
            <div className='signup1'>
                <p id='welcome'>Welcome Back!</p>
                <div className='text'>
                    <p>To keep connected with us please login with your personal info</p>
                </div>
                <div>
                    <button className='btn'>SIGN IN</button>
                </div>
            </div>
            <div className='signup2'>
                <p className='text1'>Create Account</p>
                <div className='icons'>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-google-plus-g"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
                <p className='text2'>or use your email for registraton</p>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <i className="fa-regular fa-user"></i>
                        <input type="text" placeholder='Name' id="name" name="name" required value={formData.name} onChange={handleChange}
                        /><br />
                        {errors.name && <p className="error">{errors.name}</p>}
                        <i className="fa-regular fa-envelope" style={{ top: "29%" }}></i>
                        <input type="email" placeholder='Email' id="email" name="email" required value={formData.email} onChange={handleChange} /><br />
                        {errors.email && <p className="error">{errors.email}</p>}
                        <i className="fa-solid fa-lock" style={{ top: "50%" }}></i>
                        <input type="password" placeholder='Password' id="password" name="password" required value={formData.password} onChange={handleChange} /><br />
                        {errors.password && <p className="error">{errors.password}</p>}
                        <button className='btn' style={{ backgroundColor: "#6ACE40", border: 'none', marginLeft: "27%" }} type='submit'>SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
