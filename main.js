const { app, BrowserWindow, ipcMain } = require('electron')

const mysql= require('mysql2')
let ventana
function createWindow(){
     ventana = new BrowserWindow({
        width : 1000,
        innerHeight : 1000,
        webPreferences: {
            nodeIntegration: true
        }
    })

    ventana.loadFile('index.html')

}
app.whenReady().then(createWindow)

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password:'1232',
    database:'RegistroAPI'
})

// Recibir evento de registro

ipcMain.on('registro', function(event, args){
  //  console.log(args)
    connection.query('insert into Registro(Numero, FechaRegistro) VALUES (?,curdate())',
    args,
    )
})

ipcMain.on('Consultar', function(event, args) {
//    console.log(args)
    
    /*const datos =*/ connection.query('SELECT * FROM Registro ORDER BY Registro.id DESC', 
    //const datos = connection.query('select * from Registro where id=1',
    function(err, results, fields){
       // console.log(results);
       // console.log(fields);
        
        

        
       // console.log(datos)
        ventana.webContents.send('Consultar',results)
    }
    )
})




/*
connection.query('SELECT * FROM Registro',

    function(err, results, fields){
        if(err){

        }else{
            console.log(results)
        }
        }
        

  

)
//var fechas= DATE.now()
connection.promise().query('insert into Registro(Numero, FechaRegistro) VALUES (1,curdate())')
    .then(([results, fields] )=>{
        
    }).catch((err)=>{


    })*/

    