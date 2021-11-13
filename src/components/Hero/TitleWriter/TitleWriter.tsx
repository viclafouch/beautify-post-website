import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { Theme, Typography, useMediaQuery } from '@mui/material'

const TitleWriter = function (): React.ReactElement {
  const isUpLg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  const { text } = useTypewriter({
    words: ['bold', 'italic'],
    loop: isUpLg ? false : 1
  })

  return (
    <Typography variant="h2" component="h1">
      Format your text in <br />
      <Typography
        component="span"
        variant="inherit"
        sx={{
          fontStyle: text.startsWith('i') && isUpLg ? 'italic' : 'normal',
          fontWeight: text.startsWith('b') && isUpLg ? '900' : '700'
        }}
      >
        {text}
      </Typography>
      {isUpLg ? <Cursor /> : ' '}
      on LinkedIn
    </Typography>
  )
}

export default TitleWriter
