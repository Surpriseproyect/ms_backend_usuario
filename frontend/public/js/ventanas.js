let editar1 = document.querySelectorAll(".edita");

editar1.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const usuarioLista = e.target.closest(".user-list-item");
        if (!usuarioLista) {
            console.log("User list item not found.");
            return;
        }

        const idElement = usuarioLista.querySelector(".id");
        if (!idElement) {
            console.log("ID element not found.");
            return;
        }
        const id = idElement.innerHTML.trim();
        console.log("User ID:", id);

        const identificacion = document.querySelector(".identificacionEdit");
        const nombre = document.querySelector(".nombreEdit");
        const telefono = document.querySelector(".telefonoEdit");
        const correo = document.querySelector(".correoEdit");
        const contrasena = document.querySelector(".contrasenaEdit");

        if (!identificacion || !nombre || !telefono || !correo || !contrasena) {
            console.log("One or more input elements not found.");
            return;
        }

        console.log("Fetching user data...");
        fetch(`http://localhost:3000/usuario/${id}`)
            .then(response => {
                console.log("Response received:", response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(usuarioEncontrado => {
                console.log("User data found:", usuarioEncontrado);
                if (usuarioEncontrado.length > 0) {
                    const usuario = usuarioEncontrado[0];
                    identificacion.value = usuario.identificacion || '';
                    nombre.value = usuario.nombres || '';
                    telefono.value = usuario.telefono || '';
                    correo.value = usuario.correo || '';
                    contrasena.value = usuario.contrasena || '';
                    
                    // Show the edit window
                    editar();
                } else {
                    console.log("No user found with the given ID.");
                }
            })
            .catch(error => console.error("Fetch error:", error));
    });
});


function mostrar(){
    let ventana = document.getElementById("ventana")
    ventana.addEventListener("click", () => {})
    ventana.style.display = "flex"
}
function ocultar(){
    let ventana = document.getElementById("ventana")
    ventana.style.display = "none"
}

function solicitar(){
    let ventana = document.getElementById("solicitar")
    ventana.style.display = "flex"
}
function reservar(){
    let ventana = document.getElementById("reservar")
    ventana.style.display = "flex"
}
function cancelar(){
    let ventana = document.getElementById("cancelar")
    ventana.style.display = "flex"
}
function editar(){
    let ventana = document.getElementById("editar")
    ventana.style.display = "flex"
    
}
function ocultarE(){
    let ventana = document.getElementById("editar")
    ventana.style.display = "none"
}
function crear(){
    let ventana = document.getElementById("crear")
    ventana.style.display = "flex"
}
function ocultarC(){
    let ventana = document.getElementById("crear")
    ventana.style.display = "none"
}

function eliminar(){
    let ventana = document.getElementById("eliminar")
    ventana.style.display = "flex"
}
function ocultarEliminar(){
    let ventana = document.getElementById("eliminar")
    ventana.style.display = "none"
}

function reporte(){
    let ventana = document.getElementById("reporte")
    ventana.style.display = "flex"
}
function ocultarReporte(){
    let ventana = document.getElementById("reporte")
    ventana.style.display = "none"
}

//Laptops
function crearLaptop(){
    let ventana = document.getElementById("crearLaptop")
    ventana.style.display = "flex"
}
function ocultarLaptop(){
    let ventana = document.getElementById("crearLaptop")
    ventana.style.display = "none"
}

function editarLaptop(){
    let ventana = document.getElementById("editarLaptop")
    ventana.style.display = "flex"
}
function ocultarL(){
    let ventana = document.getElementById("editarLaptop")
    ventana.style.display = "none"
}

function reporteLaptop(){
    let ventana = document.getElementById("reporteLaptop")
    ventana.style.display = "flex"
}
function ocultarR(){
    let ventana = document.getElementById("reporteLaptop")
    ventana.style.display = "none"
}

function eliminarLaptop(){
    let ventana = document.getElementById("eliminarLaptop")
    ventana.style.display = "flex"
}
function ocultarEliminar(){
    let ventana = document.getElementById("eliminarLaptop")
    ventana.style.display = "none"
}

function accion(){
    let ventana = document.getElementById("accion")
    ventana.style.display = "flex"
}
function ocultarAccion(){
    let ventana = document.getElementById("accion")
    ventana.style.display = "none"
}

function cambios(){
    let ventana = document.getElementById("cambios")
    ventana.style.display = "flex"
}
function ocultar(){
    let ventana = document.getElementById("cambios")
    ventana.style.display = "none"
}


