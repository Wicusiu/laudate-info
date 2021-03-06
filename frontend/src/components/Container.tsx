import * as React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
