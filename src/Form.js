import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can handle the form submission, e.g., send data to an API
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto'
  };

  const formGroupStyle = {
    marginBottom: '15px'
  };

  const labelStyle = {
    marginBottom: '5px'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px'
  };

  const textareaStyle = {
    padding: '10px',
    fontSize: '16px',
    height: '100px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formGroupStyle}>
        <label htmlFor="name" style={labelStyle}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="email" style={labelStyle}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="message" style={labelStyle}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default Form;
