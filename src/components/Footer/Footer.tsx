import React from 'react'
import { Box, Container, Link, Typography } from '@mui/material'

const currentYear = new Date().getFullYear()

const Footer = (): React.ReactElement => {
  return (
    <Box pt={5} pb={5} textAlign="center">
      <Container>
        <Typography>
          {' '}
          &#169; {currentYear}{' '}
          <Link
            target="_blank"
            underline="hover"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/victordelafouchardiere/"
          >
            Victor de la Fouchardiere
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
