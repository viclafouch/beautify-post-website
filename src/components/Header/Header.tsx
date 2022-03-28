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
import useScrollPosition from '@react-hook/window-scroll'

const Header = (): React.ReactElement => {
  const scrollY = useScrollPosition()

  return (
    <Box>
      <HideOnScroll>
        <AppBar color="transparent" elevation={scrollY < 60 ? 0 : 1}>
          <Box
            sx={{
              backgroundColor: scrollY < 60 ? 'transparent' : 'white',
              transition: 'background-color 0.3s'
            }}
          >
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
                        alt="Beautify Post Logo"
                        width="32"
                        height="32"
                      />
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{
                          display: { xs: 'none', sm: 'block' },
                          paddingLeft: 1,
                          lineHeight: 'normal'
                        }}
                      >
                        Beautify Post
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
                    Download the extension
                  </Button>
                </Box>
              </Toolbar>
            </Container>
          </Box>
        </AppBar>
      </HideOnScroll>
    </Box>
  )
}

export default Header
