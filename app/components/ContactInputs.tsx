"use client"

import React, { useState } from 'react';
import InputField from './InputField';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
}

const PersonalInfoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: ''
  });

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 lg:grid gap-4 lg:grid-cols-2">
      <InputField
        label="First Name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange('fullName')}
        required
      />
       <InputField
        label="Last Name"
        type="text"
        value={formData.phone}
        onChange={handleInputChange('phone')}
        required
      />
      <InputField
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleInputChange('email')}
        required
      />
      
     
    </form>
  );
};

export default PersonalInfoForm;