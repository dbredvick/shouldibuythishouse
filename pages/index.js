import React from 'react';
import {
  Box,
  Container,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Should I Buy This House?
        </Typography>
      </Box>
      <TextField
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
      />
      <TextField
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
      />
    </Container>
  );
}