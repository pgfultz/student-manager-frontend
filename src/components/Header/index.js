import {useEffect, useState} from 'react';
import {Container, CircularProgress} from '@material-ui/core';
import {
  HeaderArea,
  HeaderContent,
  Logo,
} from './styles';

export default function Header(){

  if(true) {
    return(
      <div className="f-loading">
        <CircularProgress />
      </div>
    );
  }

  return(
    <HeaderArea>
      <Container>
        <HeaderContent>
          <Logo>Logo</Logo>
        </HeaderContent>
      </Container>
    </HeaderArea>
  );
}