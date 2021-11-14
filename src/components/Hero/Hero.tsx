import React from 'react'
import { Box, Container, Grid, Rating, Typography } from '@mui/material'
import TitleWriter from './TitleWriter/TitleWriter'
import DownloadButton from '@components/DownloadButton/DownloadButton'
import Rocket from '@components/Icons/Rocket/Rocket'

const Hero = function (): React.ReactElement {
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
              <TitleWriter />
            </Box>
            <Box mb={5}>
              <Typography variant="body1" sx={{ maxWidth: 650 }}>
                Boost your visual creativity by making your text more beautiful
                on your LinkedIn posts. You will add value for each posts you
                create with this extension.
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="flex-start"
            >
              <DownloadButton />
              <Box display="flex" gap={1} alignItems="center">
                <Rating
                  name="linkeding-rating"
                  defaultValue={4.5}
                  readOnly
                  precision={0.5}
                />
                <Typography variant="subtitle2">+100k users</Typography>
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
  )
}

export default Hero
