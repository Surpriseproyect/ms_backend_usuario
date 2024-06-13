// Editar usuario
// Editar usuario


// Editar producto
let editar2 = document.querySelectorAll(".editaProducto");

editar2.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const productoLista = e.target.closest(".user-list-item");
        if (!productoLista) {
            console.log("User list item not found.");
            return;
        }

        const idElement = productoLista.querySelector(".id");
        if (!idElement) {
            console.log("ID element not found.");
            return;
        }
        const id = idElement.innerHTML.trim();
        console.log("Producto ID:", id);

        const producto = document.querySelector(".productoEdit");
        const categoria = document.querySelector(".categoriaEdit");
        const precio = document.querySelector(".precioEdit");
        const descripcion = document.querySelector(".descripcionEdit");
        const stock = document.querySelector(".stockEdit");
        if (!producto || !categoria || !precio || !descripcion || !stock) {
            console.log("One or more input elements not found.");
            return;
        }

        console.log("Fetching user data...");
        fetch(`http://localhost:3000/producto/producto/${id}`)
            .then(response => {
                console.log("Response received:", response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(productoEncontrado => {
                console.log("User data found:", productoEncontrado);
                if (productoEncontrado.length > 0) {
                    const productos = productoEncontrado[0];
                    producto.value = productos.producto || '';
                    categoria.value = productos.categoria || '';
                    precio.value = productos.precio || '';
                    descripcion.value = productos.descripcion || '';
                    stock.value = productos.stock || '';
                    
                    editar();
                } else {
                    console.log("No user found with the given ID.");
                }
            })
            .catch(error => console.error("Fetch error:", error));
    });
});
let elimina = document.querySelectorAll(".elimina")
elimina.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar")
        ventana.style.display = "flex"
        let usuario = e.target.closest(".user-list-item")
        let aceptar = document.querySelector(".aceptar");
        let id = usuario.querySelector(".id").innerHTML
        aceptar.addEventListener("click", () => {
        fetch(`http://localhost:3000/usuario/usuario/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                usuario.remove();
                ventana.style.display= "none"
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(usuario);
    })
})
function eliminar() {
    let ventana = document.getElementById("eliminar")
    ventana.style.display = "flex"
}
// Usuario
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

// Producto
function editarProducto(){
    let ventana = document.getElementById("editarProducto")
    ventana.style.display = "flex"
}
function ocultarProducto(){
    let ventana = document.getElementById("editarProducto")
    ventana.style.display = "none"
}
