import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const HowItWorks = function (): React.ReactElement {
  return (
    <Container sx={{ pt: 5, pb: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        How it works
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 600, marginInline: 'auto' }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        nesciunt dolorum nam facere dolor aliqui
      </Typography>
      <Box
        data-aos="zoom-in"
        data-aos-once="true"
        sx={{
          boxShadow: (theme): string => theme.shadows[6],
          maxWidth: 720,
          marginInline: 'auto',
          mt: 5
        }}
      >
        <video
          controls
          muted
          style={{ display: 'block' }}
          width="100%"
          disablePictureInPicture
          height="100%"
          src="/videos/how-it-works.mov"
        />
      </Box>
    </Container>
  )
}

export default HowItWorks
