import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from '@material-ui/core';
export default function Index() {
  function getSteps() {
    return ['Enter home details', 'Add financial details', 'Contact info'];
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
          type="number"
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
        </>;
      case 2:
        return <>
          <TextField
            id="outlined-email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            helperText="We will email you once the report is ready."
            fullWidth
          /></>;
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
          Should I Buy This House? 🏡💸
        </Typography>
        <Typography variant="subtitle1">
          That's a great question! Enter your info below and let's find out. We will email you when we have your calculation finalized.
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
      {activeStep === 3 && (<Typography variant="body1">Results are on the way! Watch your email 👀  </Typography>)}


    </Container>
  );
}