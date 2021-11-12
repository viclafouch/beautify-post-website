import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import GoogleChromeIcon from '@components/GoogleChrome/GoogleChrome'
import { EXTENSION_URL } from '@shared/constants/extension'

const DownloadCallback = function (): React.ReactElement {
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Container sx={{ pt: 5, pb: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Only available on Google Chrome
        </Typography>
        <Typography variant="body1" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            color="primary"
            variant="contained"
            component="a"
            href={EXTENSION_URL}
            startIcon={<GoogleChromeIcon width={40} height={40} />}
            size="large"
          >
            <Typography component="span" variant="body2">
              Download on the Chrome Web Store
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default DownloadCallback
