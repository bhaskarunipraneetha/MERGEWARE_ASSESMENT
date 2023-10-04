import React, { useState } from 'react';

function RegistrationPage() {
  // Define state to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'borrower', // Default role is "borrower"
  });

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to submit the registration data
    console.log('Registration data:', formData);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email input field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role selection dropdown */}
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="admin">Admin</option>
            <option value="borrower">Borrower</option>
            <option value="lender">Lender</option>
          </select>
        </div>

        {/* Submit button */}
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
