import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ShowCardSimple from './show_card_simple';
import NextButton from './next_button';
import styled from 'styled-components';

export default class ShowCard extends Component{
    render(){
        const url = "/espectaculo/" + this.props.name.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") + "/" + this.props.id;
        const CardShowContainer = styled.div`
        @media (min-width: 992px) {
            width: 33.32%;
            padding:0.8125rem
        }
        `;
        const CardShow = styled.div`
            display: block;
            margin-left: auto;
            margin-right: auto;
            width:20rem;
            min-height:24rem;
            @media (min-width: 992px) {
                width: 100%;
            }
        `;
        const ImageHolder = styled.div`
            width : 100%;
            height: 13rem;
            background:url('${props => props.src}') center center no-repeat;
        `;    
        const StyledLink = styled(Link)`
            &:hover {
                text-decoration: none;
            }
            `;
        const BuyButton = styled.span`
            background-color:${props => props.theme.primaryButtonBackround};
            color:white;
            text-transform: uppercase;
            font-weight: 300;
            font-size:.75rem;
            margin-top:2rem;
            border-radius: 2px;
            &:hover {
                color:white;
            }
        `;
        const ButtonHolder = styled.div`
            padding-top:0rem;
        `;
        const InfoHolder = styled.div`
            padding:1.125rem;
        `;
        return(
            <CardShowContainer>
                <StyledLink to={ url }>
                <CardShow className="card show">                    
                        <ImageHolder className="card-img-top" color="black" src={this.props.image} alt={this.props.name} />
                        <InfoHolder>
                            <ShowCardSimple name={this.props.name} location={this.props.location} startDate={this.props.startDate} />   
                            <ButtonHolder className="text-right ">
                                <NextButton className="d-inline align-text-bottom" text="Comprar" />
                            </ButtonHolder>
                        </InfoHolder>
                </CardShow>
                </StyledLink>
            </CardShowContainer>            
        );
    }
}
