// ------------------------------
// File: Form.js
// ------------------------------
// Description: React component the form to Contact WorldHello.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../buttons/Button';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #3da40d 94%, #0000) top/10px 10px
      no-repeat,
    conic-gradient(#0000 30%, #0069b6);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

const StyledForm = styled.form`
  padding: 0 var(--padding-small);
  font-size: var(--font-form);
  color: var(--color-black);
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
  // Create variable to keep track of form submission satus
  const [isSubmittionComplete, setSubmissionComplete] = useState(false);
  // Create variable to keep track of the loading state while submitting form
  const [isLoading, setLoading] = useState(false);
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

    // // Log formData for debugging
    // console.log('formData:', formData);
  };

  // Handle the form submittion
  // Example using fetch in React
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Start the loading state
    setLoading(true);

    // Simulate asynchronous form submission ()
    setTimeout(() => {
      // Code logic for submittion of form

      // Update the state to indicate that submission is complete
      setSubmissionComplete(true);

      // Stop the loading state
      setLoading(false);
    }, 2000);

    try {
      const response = await fetch('http://localhost:3001/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Update the state to indicate that submission is complete
        setSubmissionComplete(true);
        console.log('Email sent successfully');
        // Optionally, reset the form or show a success message to the user
      } else {
        console.error('Error sending email');
        // Handle the error (e.g., display an error message to the user)
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isSubmittionComplete ? (
        <StyledForm>hello world</StyledForm>
      ) : (
        <StyledForm action="http://localhost:3001/api/sendEmail" method="post">
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
              <Button type="submit" onClick={handleSubmit}>
                Submit Message
              </Button>
            </FormRow>
          </FormButton>
        </StyledForm>
      )}
    </>
  );
}

// Export reusable form component
export default Form;
