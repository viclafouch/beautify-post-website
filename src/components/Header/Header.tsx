import React from 'react'
import Link from 'next/link'
import {
  AppBar,
  Box,
  Button,
  Container,
  Link as MuiLink,
  Toolbar,
  Typography
} from '@mui/material'
import HideOnScroll from '@components/HideOnScroll/HideOnScroll'

const Header = function (): React.ReactElement {
  return (
    <Box>
      <HideOnScroll>
        <AppBar color="inherit">
          <Container maxWidth="lg">
            <Toolbar>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Link href="/">
                  <MuiLink
                    underline="none"
                    display="flex"
                    href="/"
                    color="inherit"
                    alignItems="center"
                    sx={{ cursor: 'pointer' }}
                  >
                    <img
                      src="/images/logo.png"
                      alt="Linkedin Formatter Logo"
                      width="32"
                      height="32"
                    />
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        display: { xs: 'none', lg: 'block' },
                        paddingLeft: 1,
                        lineHeight: 'normal'
                      }}
                    >
                      Linkedin Formatter
                    </Typography>
                  </MuiLink>
                </Link>
                <Button
                  component="a"
                  href="/download"
                  color="inherit"
                  variant="text"
                  endIcon={
                    <img
                      src="/images/chrome-logo.png"
                      width="20"
                      height="20"
                      alt="Google Chrome"
                    />
                  }
                >
                  Download on Chrome
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </Box>
  )
}

export default Header
