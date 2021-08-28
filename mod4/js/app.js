function calcAreaOfCircle( radius, show ){
    //formula : A=π * r * r
    // alert( radius );
    let result = Math.PI * radius * radius;
    show( result );
    //document.getElementById('result').textContent = result;
}