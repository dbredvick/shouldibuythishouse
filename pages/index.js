import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Should I Buy This House
        </Typography>
      </Box>
      <TextField
        id="outlined-zillow"
        label="Zillow Link"
        margin="normal"
        variant="outlined"
        helperText="Copy and paste your link from Zillow and press Enter"
        fullWidth
      />
    </Container>
  );
}