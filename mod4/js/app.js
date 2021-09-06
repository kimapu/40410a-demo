// task: compute area
function calcAreaOfCircle( radius, show ){
    //formula : A=π * r * r
    // alert( radius );
    try{
        if( radius < 0 ){
            throw "negative value"; //gen new exception error
        }else{
            let result = Math.PI * Math.pow( radius, 2 );
            show( result );
        }
    }catch(err){
        console.log( err );
        show( err );
        
    }
    
}