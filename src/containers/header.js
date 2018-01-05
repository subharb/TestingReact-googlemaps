import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Header extends Component {
    
    render() {
      const TitleHolder = styled.div`
        padding:0.25rem;
        color:${props => props.theme.alterPrimaryColor};
      `;
      const Image = styled.img`
        height: 100%;
        padding:0.6rem;
      `;
      const Header = styled.div`
        height: 3.75rem;
      `;
      const Container = styled.div`
        background:${props => props.theme.primaryColor};
        margin:0rem;
        width:100%;
      `;
      const ImageContainer = styled.div`
        height:100%;
      `;
      return ( 
        <Container className="container">
          <Header className="row border justify-content-center d-flex">
            <ImageContainer className="col-xs-6">
              <Image className="img-fluid" src={ this.props.promoter.image } />
            </ImageContainer>
            <TitleHolder className="col-xs-6 align-self-center">
              <h2>{ this.props.promoter.name }</h2>
            </TitleHolder>
          </Header>
        </Container>
      );
    }
}

function mapStateToProps(state){
  return{
      promoter : state.promoter
  }
}

export default connect(mapStateToProps)(Header);