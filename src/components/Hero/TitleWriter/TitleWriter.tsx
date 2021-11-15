import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { Theme, Typography, useMediaQuery } from '@mui/material'

const TitleWriter = function (): React.ReactElement {
  const isUpLg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  const { text } = useTypewriter({
    words: ['bold', 'italic'],
    loop: isUpLg ? false : 1
  })

  return isUpLg ? (
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
  ) : (
    <Typography variant="h2" component="h1">
      Format your text in <br />
      <Typography
        component="span"
        variant="inherit"
        sx={{
          fontWeight: '900'
        }}
      >
        bold
      </Typography>{' '}
      on LinkedIn
    </Typography>
  )
}

export default TitleWriter
