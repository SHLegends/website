import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { EditLink } from '.'

export interface MenuProps {
  cms: any
  moveDown: string
  openToggle: () => void
  isOpen: boolean
}

export const Menu = ({cms, moveDown, openToggle, isOpen} : MenuProps) => {


  return (
    <>
    <MenuToggle open={isOpen} onClick={() => openToggle()} moveDown={moveDown}>
        <Compass open={isOpen}>
        {isOpen ? (<i className="fal fa-compass"></i>) : (<i className="fal fa-compass"></i>) }
        </Compass>
      </MenuToggle>
    <MenuContainer open={isOpen} moveDown={moveDown}> 
      
      

      <MenuContent>
      <Top>
        
      </Top>
        <Main>
          test
        </Main>
        <Bottom>
          <EditLink cms={cms} />
        </Bottom>


      </MenuContent>
      

    </MenuContainer>
    </>
  )
}



const CloseButton = styled.div`
  margin: 1em 1em 0 0;
  font-size: 1.5em;
  font-family: Arial;
  font-weight: bold;

  color: ${props => props.theme.primary};

  :hover {
    
    box-shadow: 0 0 0 0;
    cursor: pointer;
    color: ${props => props.theme.background};
  }

  transition: 0.25s;
`

const Top = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  justify-content: flex-end;
`

const MenuContent = styled.div`
  position: absolute;
  overflow: hidden;
  
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;


`

const Main = styled.div`
  width: 100%;
  



  flex: 3;
`

const Bottom = styled.div`

  width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;
  

`

const Compass = styled.div`
  

  transition-duration: .25s;
  margin: 0 0 1em 0;

  opacity: ${props => props.open ? '0' : '1'};

  :hover {
    
    box-shadow: 0 0 0 0;
    cursor: pointer;
    color: ${props => props.open ? props.theme.background : props.theme.secondary};
  }
`

const MenuToggle = styled.div`
  color: ${props => props.theme.primary};
  

  transition-duration: .25s;

  position: fixed;
  top: ${props => props.moveDown};
  left: 0;

  margin: 1em 0 0 1em;

  font-size: 2em;
`

const MenuContainer = styled.div`
  top: ${props => props.moveDown};
  position: fixed;

  border-bottom-right-radius: 25px;

  background-color: ${props => props.theme.primary};
  width: ${props => props.open ? '350px;' : '350px'};

  left: ${props => props.open ? '0' : '-350px'};

  transition-duration: .25s;
  
  min-height: 500px;

  

`