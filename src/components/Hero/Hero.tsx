import React from 'react'
import { Box, Container, Grid, Rating, Typography } from '@mui/material'
import TitleWriter from './TitleWriter/TitleWriter'
import DownloadButton from '@components/DownloadButton/DownloadButton'
import Rocket from '@components/Icons/Rocket/Rocket'

const Hero = function (): React.ReactElement {
  return (
    <Box
      pt={20}
      mt={-10}
      pb={5}
      sx={{
        position: 'relative',
        backgroundPosition: 'top',
        background: 'linear-gradient(to bottom, #a0d4f7, #6dd5fa, #ffffff)'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'bottom',
          backgroundImage: 'url(images/sea-of-clouds.png)'
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 2 }}>
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
                <TitleWriter />
              </Box>
              <Box mb={5}>
                <Typography variant="body1" sx={{ maxWidth: 650 }}>
                  Boost your visual creativity by making your text more
                  attractive on your LinkedIn posts. You will add value for each
                  posts you create with this extension.
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <DownloadButton />
                <Box
                  display="flex"
                  mt={2}
                  width="100%"
                  alignItems="center"
                  sx={{
                    flexDirection: {
                      xs: 'column',
                      md: 'row'
                    },
                    justifyContent: {
                      xs: 'center',
                      lg: 'flex-start'
                    }
                  }}
                >
                  <Box
                    sx={{
                      marginRight: {
                        xs: 0,
                        md: 1
                      }
                    }}
                    display="flex"
                  >
                    <Rating
                      name="linkeding-rating"
                      defaultValue={4.5}
                      readOnly
                      precision={0.5}
                    />
                  </Box>
                  <Typography variant="subtitle2" component="span">
                    +100k users
                  </Typography>
                </Box>
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
    </Box>
  )
}

export default Hero
