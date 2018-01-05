import React, {Component} from 'react';
import { connect } from 'react-redux';
import  styled from 'styled-components';
import Map from '../components/map_component';

class ShowsGrid extends Component{
    render(){

        return (    
            <div key="map" id="map_container">
                    <Map lat={40.418461} long={-3.710589}/>
                </div>
           );
    }
}



export default ShowsGrid;