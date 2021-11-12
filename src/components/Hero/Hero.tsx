import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import GoogleChromeIcon from '@components/GoogleChrome/GoogleChrome'
import Rocket from '@components/Rocket/Rocket'
import { EXTENSION_URL } from '@shared/constants/extension'

const Hero = function (): React.ReactElement {
  const { text } = useTypewriter({
    words: ['bold', 'italic'],
    loop: 1
  })

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }} pt={10} pb={5}>
      <Container maxWidth="lg">
        <Grid container columns={{ xs: 4 }}>
          <Grid
            item
            xs={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <Box mb={2}>
                <Typography variant="h2" component="h1">
                  Format your text in <br />
                  <Typography
                    component="span"
                    variant="inherit"
                    sx={{
                      fontStyle: text.startsWith('i') ? 'italic' : 'normal',
                      fontWeight: text.startsWith('b') ? '900' : '700'
                    }}
                  >
                    {text}
                  </Typography>
                  <Cursor />
                  on LinkedIn
                </Typography>
              </Box>
              <Box mb={5}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  molestiae accusantium, sit distinctio non voluptatem
                  asperiores eos nam adipisci ea qui? Ipsa earum quis ea
                  excepturi similique sunt esse quibusdam!
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Button
                  color="primary"
                  component="a"
                  href={EXTENSION_URL}
                  variant="contained"
                  startIcon={<GoogleChromeIcon width={40} height={40} />}
                  size="large"
                >
                  <Typography component="span" variant="body2">
                    Download on the Chrome Web Store
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} pl={8}>
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
