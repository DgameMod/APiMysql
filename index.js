var con = document.getElementById('contenido')
var bot = document.getElementById('peticion')
var num= document.getElementById('numero')



bot.addEventListener('click', realizarPeticion)
function realizarPeticion(){

    if(num.value == '1'){
        document.getElementById('img1').src ="https://images.dog.ceo/breeds/hound-afghan/n02088094_4501.jpg"
    }if(num.value=="2"){
        document.getElementById('img1').src ="https://images.dog.ceo/breeds/hound-ibizan/n02091244_596.jpg"
    }if(num.value=="3"){
        document.getElementById('img1').src ="https://images.dog.ceo/breeds/hound-afghan/n02088094_988.jpg"
    }


    fetch(' https://dog.ceo/api/breeds/image/random')
        .then(res =>{
            res.json()
            .then(resJSON =>{
                var data =resJSON['dataseries']
                for(var i =0; i < data; i++){
                    con.innerHTML += data[i]
                    
                }

            })
        })
        
}

