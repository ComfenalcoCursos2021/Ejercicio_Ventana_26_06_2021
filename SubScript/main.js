//Crear un formulario con los siguientes campos
//Tipo de documento, Cedula, Nombre, Apellido, edad, genero,email,telefono, celular, mensaje,
//id, type, name, enable, for,
//Crear los nodos por medio del JavaScript
//Nota utilizar el metodo open(); para la creacion de la ventana
let myFormulario = {
    Create: function (){
        let fragmen = new DocumentFragment();
        for (let i = 0; i < this.data.length; i++) {
            let nodo = document.createElement(""+this.data[i].tag);
            for(const datos in this.data[i]){
                nodo[datos] = this.data[i][datos];
            }
            fragmen.appendChild(nodo);
        }
        document.body.appendChild(fragmen);
    },
}

let propiedades = Object.create(myFormulario);
propiedades.data = [
    {
        tag: "INPUT",
        id: "myInput1",
        type: "text",
        name: "myInput1",
        placeholder: "Nombre Completo",
    },
    {
        tag: "INPUT",
        id: "myInput2",
        type: "text",
        name: "myInput2",
        placeholder: "Apellido Completo",
    },
    {
        tag: "INPUT",
        id: "myInput3",
        type: "number",
        name: "myInput3",
        placeholder: "Edad",
    },
    {
        tag: "INPUT",
        id: "myInput4",
        type: "email",
        name: "myInput4",
        placeholder: "Correo electronico",
    },
    {
        tag: "INPUT",
        id: "myInput5",
        type: "number",
        name: "myInput5",
        placeholder: "Telefono",
    },
    {
        tag: "INPUT",
        id: "myInput6",
        type: "number",
        name: "myInput6",
        placeholder: "Celular",
    },
    {
        tag: "TEXTAREA",
        id: "textarea",
        name: "textarea",
        cols: "30",
        rows: "10",
        placeholder: "Mensaje",
    },
]
propiedades.Create();