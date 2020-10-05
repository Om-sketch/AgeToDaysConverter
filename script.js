function ageInDays(){
    var age=prompt("Enter Your birthYear");
    var days=(2018-age)*365;
    var h1=document.createElement('h1');
    var ageDays=document.createTextNode('Your age is '+days+' days');
    h1.setAttribute('id','days');
    h1.appendChild(ageDays);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('flex-box-result').remove();
}