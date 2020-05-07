import React from 'react';
import styled from 'styled-components'

const Header = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   h1 {
      font-size: 26px;
      cursor: pointer;
      :hover {
         color: ${props => props.colored ? 'red' : 'black'};
      }
   }
   h2 {
      font-size: 1.2rem;
      color: blue;
      cursor: pointer;
      transition: all 2s;
      :hover {
         font-size: 2rem;
         color: green
      }
   }
`

const AppHeader = () => {
   return (
      <Header colored>
         <h1>Igor Belinskiy</h1>
         <h2>5 записей, из них понравилось 0</h2>
      </Header>
   )
}

export default AppHeader;