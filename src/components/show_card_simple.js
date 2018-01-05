import React, { Component } from 'react';
import styled from 'styled-components';

export default class ShowCardSimple extends Component{
    render(){
        const ShowCardSimple = styled.div`
            color:${props => props.theme.primaryFontColor};
            font-size:0.85rem;
            xline-height:0.85rem;
            font-weight:400;
            height:9rem;
        `;
        const TitleCard = styled.h4`
            text-decoration:none;
            &:hover {
                text-decoration:none;
              }
        `;
        const InfoContainer = styled.div`
            height:1.75rem;
            font-weight:300;
            display: flex;
            align-items: center;
        `;
        const IconContainer = styled.div`
            xalign-items: center;
            display:block;
            padding-right:0.125rem;
        `;
        return(
            <ShowCardSimple className="card-body">
                <TitleCard className="card-title">{this.props.name}</TitleCard>
                <div>
                    <InfoContainer>
                        <IconContainer>
                            <i className="material-icons align-middle">date_range</i>
                        </IconContainer>
                        <span>
                            {this.props.startDate}
                        </span>
                    </InfoContainer>
                    <InfoContainer>
                        <IconContainer>
                            <i className="material-icons align-middle">room</i>
                        </IconContainer>
                        <span>
                            {this.props.location}
                        </span>
                        
                    </InfoContainer>           
                </div>
            </ShowCardSimple>
        );
    }
}