import axios from 'axios';
export const FETCH_SESSIONS = "FETCH_SESSIONS";
export const UPDATE_CART = "UPDATE_CART";
export const CALCULATE_CART = "CALCULATE_CART";
export const LIST_SHOWS = 'LIST_SHOWS';
export const BOOK_TICKETS = 'BOOK_TICKETS';
export const SAVE_PERSONAL_INFO = 'SAVE_PERSONAL_INFO';
export const UPDATE_PHASE = 'UPDATE_PHASE';
export const MOVE_PHASE = 'MOVE_PHASE'
export const SHOW_MODAL = 'SHOW_MODAL'
export const CONFIRM_PURCHASE = 'CONFIRM_PURCHASE';

const ROOT_URL = API_URL; 

export function fetchSessions(idEvent){
  console.log("Se llama a fetchSessions "+ROOT_URL+'/sessions/'+idEvent);
  const request = axios.get(ROOT_URL+'/sessions/'+idEvent)
    .catch(err => console.log('Catch', err)); 
  //console.log(request);
  return{
    type : FETCH_SESSIONS,
    payload : request
  };
}

export function updateShoppingCart(object, sign){
  console.log("Action UPDATE_CART");
  object.sign = sign;
  console.log(object.sign);
  return{
    type : UPDATE_CART,
    payload : object
  };
}

export function calculateShoppingCart(object){
  console.log("Action calculateShoppingCart");
  return{
    type : CALCULATE_CART,
    payload : object
  };
}

export function createPaymentRedsys(selections, callback){
  console.log("Booking: "+JSON.stringify(selections));
  const request = axios.post(ROOT_URL+'/create/payment/redsys', selections)
    .catch(err => console.log('Catch', err));
  callback();
  return{
    type : BOOK_TICKETS,
    payload : request
  };
}

export function savePersonalInfo(object){
  console.log("User Info: "+JSON.stringify(object));
  return{
    type : SAVE_PERSONAL_INFO,
    payload : object
  };
}

export function updatePhase(object){
  console.log("Action updatePhase: "+JSON.stringify(object));
  return{
    type : UPDATE_PHASE,
    payload : object
  };
}

export function movePhase(){
  console.log("Action movePhase: "+MOVE_PHASE);

  return{
    type : MOVE_PHASE,
    payload : ""
  };
}

export function confirmPurchase(refOperation, callback){
  console.log("confirmPurchase: "+ROOT_URL+'/purchase/confirmation/' + refOperation);
  
  const request = axios.get(ROOT_URL+'/purchase/confirmation/' + refOperation)
  .catch(function (error) {
    console.log(error);
  });

  return (dispatch) => {
      request.then((response) => {
        console.log(JSON.stringify(response.data));
        
        if(response.data.status !== 200){
          dispatch({
            type : CONFIRM_PURCHASE,
            payload : response
          });
        }
        
      callback();
      });
  }  
}