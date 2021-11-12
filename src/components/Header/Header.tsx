import React from 'react'
import Image from 'next/image'
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
import { EXTENSION_URL } from '@shared/constants/extension'

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
                    <Image
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
                  href={EXTENSION_URL}
                  color="inherit"
                  variant="text"
                  endIcon={
                    <Image
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
