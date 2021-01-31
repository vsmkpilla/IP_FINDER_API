var ipDisplay = document.querySelector('#ip_address');
var locDisplay = document.getElementById('Location');
var pinDisplay = document.getElementById('Pincode');
var regDisplay = document.getElementById('Region');
var conDisplay = document.querySelector('#Country');
var btn = document.getElementById('ip_find');
var data1 = "";
btn.addEventListener('click',function(){
fetch("https://api.ipfind.com/me?auth=5339bacf-d6ff-4bf1-b8b3-876830df0614")
.then(response=>response.json())
.then(data=>{
    ipDisplay.innerHTML = data['ip_address'];
    locDisplay.innerHTML = data['city'];
    pinDisplay.innerHTML = data['postal_code'];
    regDisplay.innerHTML = data['region'];
    conDisplay.innerHTML = data['country'];
})

});

var ip = document.querySelector('#ip_text');
var o_btn= document.querySelector('#ip_other');
var o_ipDisplay = document.querySelector('#o_ip_address');
var o_locDisplay = document.getElementById('o_Location');
var o_pinDisplay = document.getElementById('o_Pincode');
var o_regDisplay = document.getElementById('o_Region');
var o_conDisplay = document.querySelector('#o_Country');


o_btn.addEventListener('click',function(){
    console.log(ip.value);
    
    fetch("https://api.ipfind.com?ip="+ip.value+"&auth=5339bacf-d6ff-4bf1-b8b3-876830df0614")
    .then(response=>response.json())
    .then(data=>{
        o_ipDisplay.innerHTML = data['ip_address'];
        o_locDisplay.innerHTML = data['city'];
        o_pinDisplay.innerHTML= data['pincode'];
        o_regDisplay.innerHTML = data['region'];
        o_conDisplay.innerHTML = data['country'];
    })

})




