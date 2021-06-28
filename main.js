//Crear un formulario con los siguientes campos
//Tipo de documento, Cedula, Nombre, Apellido, edad, genero,email,telefono, celular, mensaje,
//id, type, name, enable, for,
//Crear los nodos por medio del JavaScript
//Nota utilizar el metodo open(); para la creacion de la ventana
addEventListener("DOMContentLoaded", function(){
    let myBoton = {
        Create: function ({...arg}){
            for(const datos in arg){
                this.nodo[datos] = ""+arg[datos];
            }
            this.nodo.appendChild(this.texto);
            document.body.appendChild(this.nodo);
        },
        ventana : function(){
            let ventana = open("formulario.html","","");
            let script = document.createElement("SCRIPT");
            script.src = "SubScript/main.js";
            ventana.addEventListener("DOMContentLoaded", function(){
                ventana.document.head.appendChild(script);
            });
            
        }
    }
    let propiedades = Object.create(myBoton);
    propiedades.nodo = document.createElement("BUTTON");
    propiedades.texto = document.createTextNode("Generar Ventana");
    propiedades.Create({type: "button", id: "myBoton"});

    document.getElementById("myBoton").onclick = ()=>{
        propiedades.ventana();
    }
})