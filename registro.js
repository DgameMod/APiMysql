const { ipcRenderer, webContents, ipcMain } = require('electron')

const mysql= require('mysql2')
document.getElementById('formulario_registro')
addEventListener('submit', function(event){
    event.preventDefault()

    var No = document.getElementById('numero')
    
  

    ipcRenderer.send('registro',[No.value])
})

var fe = document.getElementById('fecha')
var Mo = document.getElementById('MostrarNumero')

document.getElementById('formulario_registro')
addEventListener('submit', function(event){
    
    event.preventDefault()

    

 
  ipcRenderer.send('Consultar',[fe.value, Mo.value])
    
   
    
 
    //fe.textContent = results[0]
    //Mo.textContent = results[1]
    
})
let datos =[]
ipcRenderer.on('Consultar', function(event, args){
  // console.log(args);
   
   /* let valor1 = args[0]
   let valor2 = args[1]
   console.log({"Fecha 0": valor1 })
   console.log({"Fecha 0": valor2 })*/


  /*  args.forEach(function(Numero, index)  {
        console.log(Numero)
        console.log(index)
          fe.innerHTML= Numero;
       Mo.innerText= index;
        
    });*/

    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password:'1232',
        database:'RegistroAPI'
    })

    connection.query('SELECT * FROM Registro ', function (error, results, fields) {
        if (error) throw error;
    
        results.forEach(function(elemento, index){
            datos = elemento;

           
        });
        console.log(datos.Numero, datos.FechaRegistro)
        fe.innerText= datos.FechaRegistro;
        Mo.innerText= datos.Numero;

})
})




