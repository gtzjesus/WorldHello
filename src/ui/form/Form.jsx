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
  padding: 0 var(--padding-small);
  font-size: var(--font-form);
`;

const FormGroup = styled.div`
  margin-bottom: var(--margin-form);
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HorizontalGroup = styled.div`
  gap: var(--gap-form);
`;

const Label = styled.label`
  float: left;
`;

const Input = styled.input`
  max-width: fit-content;
  padding: var(--padding-small);
  border: none;
  border: 1px solid #ccc;
  float: left;
`;

const Error = styled.p`
  color: red;
  margin-top: 4px;
`;

const Select = styled.select`
  max-width: 100%;
  padding: var(--padding-small);
  border: none;
  border: 1px solid #ccc;
  float: left;
  // IOS feature UI for select
  -webkit-appearance: none;
`;

const Option = styled.option``;

const Asterik = styled.span`
  color: var(--color-purple);
  font-size: var(--font-form);
`;

const FormButton = styled.div`
  float: right;
  margin: var(--margin-small) 0 var(--margin-small) 0;
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
        <FormRow>
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
        </FormRow>
        {errors.name && <Error>{errors.name}</Error>}
      </FormGroup>
      <HorizontalGroup>
        <FormGroup>
          <FormRow>
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
          </FormRow>
          {errors.email && <Error>{errors.email}</Error>}
        </FormGroup>
        <FormGroup>
          <FormRow>
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
          </FormRow>
          {errors.phone && <Error>{errors.phone}</Error>}
        </FormGroup>
      </HorizontalGroup>
      <HorizontalGroup>
        <FormGroup>
          <FormRow>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </FormRow>
          {errors.companyName && <Error>{errors.companyName}</Error>}
        </FormGroup>
        <FormGroup>
          <FormRow>
            <Label htmlFor="website">Website URL</Label>
            <Input
              type="text"
              id="website"
              name="website"
              placeholder="Enter Website URL (Link)"
              value={formData.website}
              onChange={handleInputChange}
            />
          </FormRow>
          {errors.website && <Error>{errors.website}</Error>}
        </FormGroup>
      </HorizontalGroup>
      <FormGroup>
        <FormRow>
          <Label htmlFor="howCanWeHelp">How can we help you?</Label>
          <Input
            type="text"
            id="howCanWeHelp"
            name="howCanWeHelp"
            placeholder="Need a New Website?"
            value={formData.howCanWeHelp}
            onChange={handleInputChange}
          />
        </FormRow>
        {errors.howCanWeHelp && <Error>{errors.howCanWeHelp}</Error>}
      </FormGroup>

      <FormGroup>
        <FormRow>
          <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
          <Select
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleInputChange}
          >
            <Option value="googleSearch">Google Search</Option>
            <Option value="socialMedia">Social Media</Option>
            <Option value="friend">Friend</Option>
            <Option value="ad">Ad</Option>
            <Option value="other">Other</Option>
          </Select>
        </FormRow>
      </FormGroup>
      <FormButton>
        <FormRow>
          <Button>Submit Message</Button>
        </FormRow>
      </FormButton>
    </StyledForm>
  );
}

// Export reusable form component
export default Form;
