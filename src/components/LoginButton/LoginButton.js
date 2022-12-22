import React from 'react'
import { StyledLink } from './LoginButton.styles'

const LoginButton = () => {
  const onClick = () => {
    alert('this has been clicked')
  }
  return (
    <StyledLink to='/'>Create Account</StyledLink>
  )
}

export default LoginButton