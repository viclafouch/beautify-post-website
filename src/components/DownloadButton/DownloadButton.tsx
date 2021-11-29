import React from 'react'
import { Box, Button, ButtonProps, Typography } from '@mui/material'

type DownloadButtonProps = ButtonProps<'a'> & {
  label?: string
}

const DownloadButton = (props: DownloadButtonProps): React.ReactElement => {
  const { label, ...rest } = props
  return (
    <Button
      color="primary"
      component="a"
      href="/download"
      variant="contained"
      startIcon={
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            alignItems: 'center',
            marginTop: 1,
            marginBottom: 1
          }}
        >
          <img
            src="/images/chrome-logo.png"
            width="20"
            height="20"
            alt="Google Chrome"
          />
        </Box>
      }
      size="large"
      {...rest}
    >
      <Typography component="span" variant="body2">
        {label}
      </Typography>
    </Button>
  )
}

DownloadButton.defaultProps = {
  label: 'Download on the Chrome Web Store'
}

export default DownloadButton
