export const API_KEY = 'AIzaSyAyO3BMcxHZtKV40gY1FSesE7VpL7uUwz8'
export const value_converter =(value) =>{

    if (value>1000000){
        return Math.floor(value/1000000)+"M"

    }
    else if (value>=1000){
        return Math.floor(value/1000)+"K"

    }
    else {
        return value;
    }

}
export default API_KEY ; value_converter;
