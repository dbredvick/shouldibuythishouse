import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from '@material-ui/core';
export default function Index() {
  function getSteps() {
    return ['Enter home information', 'Add financial information', 'Finalize and share'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<><TextField
          id="outlined-link"
          label="Link"
          margin="normal"
          variant="outlined"
          helperText="Paste a link to the house listing if you have one."
          fullWidth
        />
          <TextField
            id="outlined-city"
            label="City"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-state"
            label="State"
            margin="normal"
            variant="outlined"
            fullWidth
          /></>);
      case 1:
        return <><TextField
          id="outlined-cost"
          label="Home cost"
          margin="normal"
          variant="outlined"
          helperText="What's the total cost of your home?"
          fullWidth
        />
          <TextField
            id="outlined-downpayment"
            label="Down payment"
            margin="normal"
            variant="outlined"
            helperText="Amount you are putting down. This does not include closing costs."
            fullWidth
          />
          <TextField
            id="outlined-taxes"
            label="Taxes"
            margin="normal"
            variant="outlined"
            helperText="Enter your best guess at local property taxes."
            fullWidth
          /></>;
      case 2:
        return `More info to come here.`;
      default:
        return 'Unknown step';
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Should I Buy This House?
        </Typography>
      </Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>



    </Container>
  );
}