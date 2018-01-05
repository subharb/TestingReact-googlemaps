import { FETCH_SESSIONS } from '../actions';
import { UPDATE_CART, CALCULATE_CART, BOOK_TICKETS } from '../actions';

import { serializeKey } from '../helpers';
import { movePhase } from '../actions';
import _ from 'lodash';

var initialState = { "selections" : {}, "summary" : {"amount" : 0, "nTickets" : 0} };
//var initialState = {"selections":{"GEN0000000000003986A_ZonaA":{"number":2,"info":{"price":2050,"name":"Entrada General","idConces":"GEN","idSession":"0000000000003986","idBlock":"A_ZonaA","zone":"Zona A","idZona":"Aforament","idArea":"A1","idNivel":"N1","sign":1}},"INF0000000000003986A_ZonaA":{"number":2,"info":{"price":1550,"name":"Entrada Infantil","idConces":"INF","idSession":"0000000000003986","idBlock":"A_ZonaA","zone":"Zona A","idZona":"Aforament","idArea":"A1","idNivel":"N1","sign":1}}},"summary":{"amount":72,"nTickets":4}}
export default function(state = initialState, action){
    var newState = { ...state};
    //console.log(action.type +":"+JSON.stringify(action));
    switch (action.type) {
        case UPDATE_CART:
            console.log(action.payload.sign);
            var keyCart = serializeKey(action.payload);
            if(newState.selections[keyCart]){
                if(action.payload.sign === 1){
                    console.log("Suma entradas");
                    newState.selections[keyCart].number++;
                }
                else if(action.payload.sign === 0){
                    console.log("Resta entradas");
                    newState.selections[keyCart].number--;
                    if(newState.selections[keyCart].number === 0){
                      delete newState.selections[keyCart];
                    }
                }
            }
            else if(action.payload.sign === 1){
                var cartOption = {};
                cartOption.number = 1;
                cartOption.info = action.payload;
                newState.selections[keyCart] = cartOption;
            }
            //Calculo le summary
            var amount = 0;
            var nTickets = 0;
            for (var key in newState.selections) {
                if (newState.selections.hasOwnProperty(key)) {
                    nTickets += newState.selections[key]["number"];
                    amount += newState.selections[key].info["price"] * newState.selections[key]["number"];
                }
            }
            newState.summary.amount = amount / 100;
            newState.summary.nTickets = nTickets;
            return newState
            break;
        case BOOK_TICKETS:
            console.log(JSON.stringify(action.payload.data));
            if(action.payload.data.status === 200){
                //Comprobamos que los datos coinciden con lo que hay en shoppingcart 
                if(parseInt(newState.summary.amount * 100) === parseInt(action.payload.data.amount)){
                    newState.summary.refOperation = action.payload.data.refOperation;
                    newState.form = action.payload.data.form;
                }
            }
            return newState;
            break;
        default:
        return state;
    }
}
