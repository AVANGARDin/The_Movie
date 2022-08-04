import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Box p={12} color={'white'}>
      <Box>Sorry, we couldn't find that page</Box>
      <Link to="/">
        <Button>Main Page</Button>
      </Link>
    </Box>
  );
}
