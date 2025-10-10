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
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Full Name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange('fullName')}
        required
      />
      
      <InputField
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleInputChange('email')}
        required
      />
      
      <InputField
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange('phone')}
        required
      />
      
      <InputField
        label="Date of Birth"
        type="date"
        value={formData.dob}
        onChange={handleInputChange('dob')}
        required
      />
      
      <InputField
        label="Gender"
        type="select"
        value={formData.gender}
        onChange={handleInputChange('gender')}
        options={['Male', 'Female', 'Other']}
        required
      />
      
      <div className='flex gap-4'>
        <button className="rounded-md bg-[#F2F2F2] w-[25%] xl:w-[13%] py-2">Back</button>
          <button className="rounded-md bg-[#0747A1] w-[25%] xl:w-[13%] py-2 text-white">Next</button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;