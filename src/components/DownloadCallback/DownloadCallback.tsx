import React from 'react'
import { Box, Container, Typography } from '@mui/material'

import DownloadButton from '../DownloadButton/DownloadButton'

const DownloadCallback = (): React.ReactElement => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main'
      }}
    >
      <Container sx={{ pt: 5, pb: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Available to everyone for free
        </Typography>
        <Box display="flex" justifyContent="center" mt={4}>
          <DownloadButton />
        </Box>
      </Container>
    </Box>
  )
}

export default DownloadCallback
