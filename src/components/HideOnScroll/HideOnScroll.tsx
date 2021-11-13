import React from 'react'
import { Slide, useScrollTrigger } from '@mui/material'

type HideOnScrollProps = {
  children: JSX.Element
}

const HideOnScroll = function (props: HideOnScrollProps): React.ReactElement {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
