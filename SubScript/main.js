let myFormulario = {
    Create: function (){
        let fragmen = new DocumentFragment();
        let form = document.createElement("FORM");
        let myStyle = {
            display: "block",
            margin: "10px auto",
            width: "45%",
            height: "30px"
        }
        form.id = "myForm";
        fragmen.append(form);
        for (let i = 0; i < this.data.length; i++) {
            let nodo = document.createElement(this.data[i].tag);
            for(const datos in this.data[i]){
                if(this.data[i].tag=="INPUT"){
                    nodo[datos] = this.data[i][datos];
                    Object.assign(nodo.style, myStyle);
                }else if(this.data[i].tag=="TEXTAREA"){
                    // https://www.delftstack.com/es/howto/javascript/javascript-remove-property-from-object/#use-la-sintaxis-spread-para-eliminar-una-propiedad-de-un-objeto-en-javascript-ecmascript-6
                    var {height, ...myStyleUpdated} = myStyle;
                    nodo[datos] = this.data[i][datos];
                    Object.assign(nodo.style, myStyleUpdated);
                }else if(this.data[i].tag=="SELECT"){
                    nodo[datos] = this.data[i][datos];
                    let opcionesFragment = new DocumentFragment();
                    for(const select in this.data[i].option){
                        let opciones = document.createElement("OPTION");
                        opciones.value = this.data[i].option[select].value;
                        let texto = document.createTextNode(this.data[i].option[select].text);
                        opciones.appendChild(texto);
                        opcionesFragment.appendChild(opciones);
                        delete this.data[i].option[select];
                    }
                    Object.assign(nodo.style, myStyle);
                    nodo.appendChild(opcionesFragment);
                }
                
            }
            fragmen.children.myForm.append(nodo);
        }
        document.body.appendChild(fragmen);
    },
}
let propiedades = Object.create(myFormulario);
propiedades.data = [
    {
        tag: "SELECT",
        id: "mySelect1",
        name: "mySelect1",
        option:[
            {
                value: "",
                text: "Tipo de documento"
            },
            {
                value: "TI",
                text: "Targeta de identidad"
            },
            {
                value: "CC",
                text: "Cedula de ciudadania"
            }
        ]
    },
    {
        tag: "INPUT",
        id: "myInput1",
        type: "number",
        name: "myInput1",
        placeholder: "N° Documento",
    },
    {
        tag: "INPUT",
        id: "myInput2",
        type: "text",
        name: "myInput2",
        placeholder: "Nombre Completo",
    },
    {
        tag: "INPUT",
        id: "myInput3",
        type: "text",
        name: "myInput3",
        placeholder: "Apellido Completo",
    },
    {
        tag: "INPUT",
        id: "myInput4",
        type: "number",
        name: "myInput4",
        placeholder: "Edad",
    },
    {
        tag: "SELECT",
        id: "mySelect2",
        name: "mySelect2",
        option:[
            {
                value: "",
                text: "Genero"
            },
            {
                value: "M",
                text: "Masculino"
            },
            {
                value: "F",
                text: "Femenino"
            },
            {
                value: "N",
                text: "Prefiero no decirlo"
            }
        ]
    },
    {
        tag: "INPUT",
        id: "myInput5",
        type: "email",
        name: "myInput5",
        placeholder: "Correo electronico",
    },
    {
        tag: "INPUT",
        id: "myInput6",
        type: "number",
        name: "myInput6",
        placeholder: "Telefono",
    },
    {
        tag: "INPUT",
        id: "myInput7",
        type: "number",
        name: "myInput7",
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
    {
        tag: "INPUT",
        id: "myBoton",
        type: "submit",
        name: "myBoton",
        value: "Enviar Datos",
    },
]
propiedades.Create();