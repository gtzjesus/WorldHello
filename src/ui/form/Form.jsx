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
  height: 41vh;
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

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-large) 0;
  gap: var(--gap-large);
`;

const Img = styled.img`
  max-height: 64px;
  max-width: 64px;
  margin: 0 auto;
`;

const Delivered = styled.span`
  font-size: var(--font-xsmall);
`;

const ModalNav = styled.div`
  // Logic for arranging children
  display: flex;
  // Code logic for aligning vertically
  align-items: center;
  // Code logic for aligning horizontally
  justify-content: space-between;

  // UI
  // Code logic for title element
  font-size: var(--font-small);
  letter-spacing: var(--spacing-subtitle);
  // Code logic shadow beneath text (more visibility)
  /* text-shadow: var(--text-shadow-font); */
  text-transform: uppercase;

  // Code logic for margin from form in modal
  margin-bottom: var(--margin-form);
  padding: var(--padding-modal-nav);
`;

const Close = styled.img`
  cursor: pointer;
`;

const ModalTitle = styled.span`
  font-size: var(--font-xxsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Form({ closeModal }) {
  // ------------------------------
  // const variables
  // ------------------------------
  // This section sets all variables needed to implement form submission
  // Create variable to keep track of form submission satus
  const [isSubmittionComplete, setSubmissionComplete] = useState(false);
  // Create some variables to track the visibility of the modals
  const [isModal1Open, setModal1Open] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  // Create variable to keep track of the loading state while submitting form
  const [isLoading, setLoading] = useState(false);
  // Creating errors state (used for validation)
  const [errors, setErrors] = useState({});

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

  // ------------------------------
  // Handler functions
  // ------------------------------
  // This section includes functions used to perform different tasks

  // Handle the input changes in the form
  const handleInputChange = (event) => {
    // Create variable to keep track of form submission satus
    const { name, value } = event.target;
    // Code logic to set the data from the inputs
    setFormData({ ...formData, [name]: value });
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
    }, 2500);

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

  // ------------------------------
  // Modal functions
  // ------------------------------
  // This section includes functions used to perform different tasks
  const openModal1 = () => {
    setModal1Open(true);
    setModal2Open(false);
  };

  const openModal2 = () => {
    setModal2Open(true);
    setModal1Open(false);
  };

  const closeModal1 = () => {
    setModal1Open(false);
  };

  const closeModal2 = () => {
    setModal2Open(false);
  };

  return (
    <>
      {!isSubmittionComplete && !isLoading ? (
        <ModalNav>
          <ModalTitle>Send a message</ModalTitle>
          <Close onClick={closeModal} src="/icons/close.png" />
        </ModalNav>
      ) : (
        ''
      )}

      {isLoading ? (
        // SPINNER MODAL
        <StyledForm>
          <Spinner />
        </StyledForm>
      ) : isSubmittionComplete ? (
        // 2ND MODAL
        <>
          <ModalNav>
            <ModalTitle></ModalTitle>
            <Close onClick={closeModal} src="/icons/close.png" />
          </ModalNav>
          <StyledForm>
            <DeliveryContainer>
              <Img src="/icons/email-sent.png"></Img>
              <Delivered>
                Successfully sent the email; we will reach out to you shortly.
              </Delivered>
              <Delivered>Thank you for your time.</Delivered>
            </DeliveryContainer>
          </StyledForm>
        </>
      ) : (
        // 1ST MODAL
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
