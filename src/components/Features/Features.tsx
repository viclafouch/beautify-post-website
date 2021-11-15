import React from 'react'
import CreateIcon from '@mui/icons-material/Create'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

type Feature = {
  title: string
  description: string
  icon: React.ElementType
}

const FEATURES: Feature[] = [
  {
    title: 'Better readability',
    description:
      'By styling the most relevant phrases and keywords, you are helping the user to understand your content faster.',
    icon: VisibilityIcon
  },
  {
    title: 'New creativity',
    description:
      'By default, making words in bold and italic is not possible on LinkedIn, using LinkedIn Formatter will make you more creative.',
    icon: CreateIcon
  },
  {
    title: 'Different identity',
    description:
      "Be authentic in your posts by giving a new style to your phrases and keywords. Start with authenticity and you can't go wrong.",
    icon: FingerprintIcon
  }
]

const Features = function (): React.ReactElement {
  return (
    <Container>
      <Box mt={10} mb={10}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          A new way to publish on LinkedIn
        </Typography>
        <Typography
          variant="subtitle1"
          component="span"
          align="center"
          sx={{ maxWidth: 680, margin: 'auto', display: 'block' }}
        >
          3 main take aways.
        </Typography>
        <Grid container mt={2} spacing={4}>
          {FEATURES.map((FEATURE, index) => {
            const IconComponent = FEATURE.icon
            return (
              <Grid key={FEATURE.title} item xs={12} sm={6} md={4}>
                <Box
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay={index * 100}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Avatar
                    sx={{
                      width: 56,
                      mb: 3,
                      height: 56,
                      backgroundColor: (theme): string => {
                        return alpha(theme.palette.primary.main, 0.1)
                      }
                    }}
                  >
                    <IconComponent color="primary" />
                  </Avatar>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    align="center"
                  >
                    {FEATURE.title}
                  </Typography>
                  <Typography variant="body1" align="center">
                    {FEATURE.description}
                  </Typography>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  )
}

export default Features
