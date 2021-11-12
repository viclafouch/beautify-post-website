import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

type Feature = {
  title: string
  description: string
  icon: React.ElementType
}

const FEATURES: Feature[] = [
  {
    title: 'Hello world 1',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae atque delectus, necessitatibus voluptas laborum',
    icon: FolderIcon
  },
  {
    title: 'Hello world 2',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae atque delectus, necessitatibus voluptas laborum',
    icon: FolderIcon
  },
  {
    title: 'Hello world 3',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae atque delectus, necessitatibus voluptas laborum',
    icon: FolderIcon
  }
]

const Features = function (): React.ReactElement {
  return (
    <Container>
      <Box mt={10} mb={10}>
        <Typography variant="h4" align="center" gutterBottom>
          Format your text on Linkedin
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ maxWidth: 680, margin: 'auto' }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </Typography>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} mt={2} spacing={4}>
          {FEATURES.map((FEATURE, index) => {
            const IconComponent = FEATURE.icon
            return (
              <Grid key={FEATURE.title} item xs={2} sm={4} md={4}>
                <Box
                  data-aos="fade-up"
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
                  <Typography variant="h6" gutterBottom align="center">
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
