import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({theme}) => theme.colors.primary}; 
`

function CssInJs() {
   return (
       <>
         <Title>Styled Component</Title>
         <h2 style={{color: 'red'}}>Hello World</h2>
       </>
   )
}

export default CssInJs
