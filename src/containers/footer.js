import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Footer extends Component {
    
    render() {
      
      const Container = styled.div`
        visibility:block;
        background:${props => props.theme.primaryColor};
        margin:0rem;
        width:100%;
        min-height:6rem;
        color:white;
        padding-top:1rem;
        @media (min-width: 992px) {
          padding-left:8rem;
        }
      `;
      const VersionString = styled.span`
        font-size: 0.75rem;
      `;
      return ( 
        <Container className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
                <p>{ this.props.promoter.legalName }, { this.props.promoter.city }</p>
                <p>Janto Ticketing Software. All rights reserved,2017</p>
            </div>
            <div className="col-lg-6">
              <span>Contacto:</span><br/>
              <span>Teléfono: { this.props.promoter.phone }</span><br/>
              <span>Email: { this.props.promoter.email }</span><br/>

            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-12 text-right">
                <VersionString>v { this.props.config.version }</VersionString>
            </div>
          </div>
        </Container>
      );
    }
}

function mapStateToProps(state){
  return{
      promoter : state.promoter,
      config : state.config,
      shoppingCart : state.shoppingCart
  }
}

export default connect(mapStateToProps)(Footer);