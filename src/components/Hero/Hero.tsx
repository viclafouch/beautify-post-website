import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import { Box, Button, Container, Grid, Theme, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Rocket from '@components/Rocket/Rocket'
import { EXTENSION_URL } from '@shared/constants/extension'

const Hero = function (): React.ReactElement {
  const isUpLg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  const { text } = useTypewriter({
    words: ['bold', 'italic'],
    loop: isUpLg ? false : 1
  })

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }} pt={10} pb={5}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            lg={6}
            xs={12}
            display="flex"
            flexDirection="column"
            sx={{
              textAlign: {
                xs: 'center',
                lg: 'left'
              },
              alignItems: {
                xs: 'center',
                lg: 'flex-start'
              }
            }}
          >
            <Box mb={2}>
              <Typography variant="h2" component="h1">
                Format your text in <br />
                <Typography
                  component="span"
                  variant="inherit"
                  sx={{
                    fontStyle:
                      text.startsWith('i') && isUpLg ? 'italic' : 'normal',
                    fontWeight: text.startsWith('b') && isUpLg ? '900' : '700'
                  }}
                >
                  {text}
                </Typography>
                {isUpLg ? <Cursor /> : ' '}
                on LinkedIn
              </Typography>
            </Box>
            <Box mb={5}>
              <Typography variant="body1" sx={{ maxWidth: 650 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                molestiae accusantium, sit distinctio non voluptatem asperiores
                eos nam adipisci ea qui? Ipsa earum quis ea excepturi similique
                sunt esse quibusdam!
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Button
                color="primary"
                component="a"
                href={EXTENSION_URL}
                variant="contained"
                startIcon={
                  <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Image
                      src="/images/chrome-logo.png"
                      width="20"
                      height="20"
                      alt="Google Chrome"
                    />
                  </Box>
                }
                size="large"
              >
                <Typography component="span" variant="body2">
                  Download on the Chrome Web Store
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            pl={8}
            sx={{ display: { xs: 'none', lg: 'block' } }}
          >
            <Box width="100%" height="100%" maxWidth={600}>
              <Rocket />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
