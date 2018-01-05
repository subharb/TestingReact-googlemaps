import $ from 'jquery'
export function getWeekday(int){
    var day = "";
    switch(int){
        case 0 : day = "Domingo";break;
        case 1 : day = "Lunes";break;
        case 2 : day = "Martes";break;
        case 3 : day = "Miércoles";break;
        case 4 : day = "Jueves";break;
        case 5 : day = "Viernes";break;
        case 6 : day = "Sábado";break;
    }

    return day;
}

export function getMonth(int){
    var day = "";
    switch(int){
        case 0 : day = "Enero";break;
        case 1 : day = "Febrero";break;
        case 2 : day = "Marzo";break;
        case 3 : day = "Abril";break;
        case 4 : day = "Mayo";break;
        case 5 : day = "Junio";break;
        case 6 : day = "Julio";break;
        case 7 : day = "Agosto";break;
        case 8 : day = "Septiembre";break;
        case 9 : day = "Octubre";break;
        case 10 : day = "Noviembre";break;
        case 11 : day = "Diciembre";break;
    }

    return day;
}

export function getShortMonth(int){
    var day = "";
    switch(int){
        case 0 : day = "Ene.";break;
        case 1 : day = "Feb.";break;
        case 2 : day = "Mar.";break;
        case 3 : day = "Abr.";break;
        case 4 : day = "Mayo";break;
        case 5 : day = "Jun.";break;
        case 6 : day = "Jul.";break;
        case 7 : day = "Ago.";break;
        case 8 : day = "Sept.";break;
        case 9 : day = "Oct.";break;
        case 10 : day = "Nov.";break;
        case 11 : day = "Dic.";break;
    }

    return day;
}

export function serializeKey(object){
    return object.idConces + object.idSession + object.idBlock;
}

export function scrollToElement(element){
    console.log("Hay que hacer scroll:"+element);
    var elmnt = document.getElementsByClassName(element);
    console.log("componentDidMount"+elmnt);
    elmnt[0].scrollIntoView({block: "start", behavior: "smooth"});   
    $(".to_sessions").hide();
    $(".mini_cart").attr("style", "display: block !important");
}