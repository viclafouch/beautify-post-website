import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'

const Video = styled('video')({
  display: 'block'
})

const HowItWorks = function (): React.ReactElement {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const { ref, inView } = useInView({
    threshold: 0
  })

  React.useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play()
    }
  }, [inView, videoRef])

  return (
    <Container sx={{ pt: 5, pb: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        How it works
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 600, margin: 'auto' }}
      >
        <b>1.</b> Install the extension. <br />
        <b>2.</b> Select a text inside the creation post modal to display the
        tooltip to bold and italic your current text.
      </Typography>
      <Box
        data-aos="zoom-in"
        ref={ref}
        data-aos-once="true"
        sx={{
          boxShadow: (theme): string => theme.shadows[6],
          maxWidth: 720,
          margin: 'auto',
          mt: 5,
          borderRadius: 1,
          overflow: 'hidden'
        }}
      >
        <Video
          controls
          muted
          ref={videoRef}
          preload="metadata"
          playsInline
          width="100%"
          height="100%"
          disablePictureInPicture
        >
          <source src="/videos/how-it-works.mp4" type="video/mp4" />
        </Video>
      </Box>
    </Container>
  )
}

export default HowItWorks
