// ------------------------------
// File: Form.js
// ------------------------------
// Description: React component the form to Contact WorldHello.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import { useState } from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledForm = styled.form`
  color: var(--color-black);
`;

const HorizontalGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Error = styled.p`
  color: red;
  margin-top: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Option = styled.option``;

const Asterik = styled.span`
  color: var(--color-purple);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Form() {
  // Code logic for creating a state for our input data, an object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
    howCanWeHelp: '',
    howDidYouHear: 'default',
  });

  // Creating errors state (used for validation)
  const [errors, setErrors] = useState({});

  // Handle the input changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle the form submittion
  const handleSubmit = (event) => {
    // Code logic to prevent web app from refreshing on submit
    event.preventDefault();

    const newErrors = {};

    // Code logic for performing validation
    if (!formData.name) {
      newErrors.name = 'First name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    // Code logic for submittion with validation
    if (Object.keys(newErrors).length === 0) {
      // Enters here, the form is valid for submittion
      console.log('Form submitted', formData);
    } else {
      // Code logic for updating the state with errors
      setErrors(newErrors);
    }
  };

  return (
    <StyledForm>
      <FormGroup>
        <Label htmlFor="name">
          First and Last Name<Asterik>*</Asterik>
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <Error>{errors.name}</Error>}
      </FormGroup>

      <HorizontalGroup>
        <FormGroup>
          <Label htmlFor="email">
            Email Address<Asterik>*</Asterik>
          </Label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <Error>{errors.email}</Error>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">
            Phone Number<Asterik>*</Asterik>
          </Label>
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <Error>{errors.phone}</Error>}
        </FormGroup>
      </HorizontalGroup>
      <HorizontalGroup>
        <FormGroup>
          <Label htmlFor="companyName">
            Company Name<Asterik>(optional)</Asterik>
          </Label>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Enter Company Name"
            value={formData.companyName}
            onChange={handleInputChange}
          />
          {errors.companyName && <Error>{errors.companyName}</Error>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="website">
            Website URL<Asterik>(optional)</Asterik>
          </Label>
          <Input
            type="text"
            id="website"
            name="website"
            placeholder="Enter Website URL (Link)"
            value={formData.website}
            onChange={handleInputChange}
          />
          {errors.website && <Error>{errors.website}</Error>}
        </FormGroup>
      </HorizontalGroup>

      <FormGroup>
        <Label htmlFor="howCanWeHelp">
          Let us know how we can help you or your business
        </Label>
        <Input
          type="text"
          id="howCanWeHelp"
          name="howCanWeHelp"
          placeholder="Enter Website URL (Link)"
          value={formData.howCanWeHelp}
          onChange={handleInputChange}
        />
        {errors.howCanWeHelp && <Error>{errors.howCanWeHelp}</Error>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
        <Select
          id="howDidYouHear"
          name="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={handleInputChange}
        >
          <Option value="default" disabled>
            Select an option
          </Option>
          <Option value="socialMedia">Social Media</Option>
          <Option value="friend">Friend</Option>
          <Option value="ad">Ad</Option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Button>Submit Message</Button>
      </FormGroup>
    </StyledForm>
  );
}

// Export reusable form component
export default Form;
