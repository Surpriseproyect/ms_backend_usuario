// Editar usuario
let editar1 = document.querySelectorAll(".editarUsuario");

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
        console.log("Producto ID:", id);

        const identificacion = document.querySelector(".identificacionEdit");
        const nombres = document.querySelector(".nombreEdit");
        const telefono = document.querySelector(".telefonoEdit");
        const correo = document.querySelector(".correoEdit");
        const contrasena = document.querySelector(".contrasenaEdit");
        const rol = document.querySelector(".select");
        const estado = document.querySelector(".estado1");


        if (!identificacion || !nombres || !telefono || !correo || !contrasena || !rol || !estado) {
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
                    nombres.value = usuario.nombres || '';
                    telefono.value = usuario.telefono || '';
                    correo.value = usuario.correo || '';
                    contrasena.value = usuario.contrasena || '';
                    rol.value = usuario.rol || '';
                    estado.value = usuario.estado || '';

                    editarUsuario();
                } else {
                    console.log("No user found with the given ID.");
                }
            })
            .catch(error => console.error("Fetch error:", error));
            document.getElementById("confirmarBtn").addEventListener("click", (e) => {
                e.preventDefault();
            
                const identificacion = document.querySelector(".identificacionEdit").value;
                const nombres = document.querySelector(".nombreEdit").value;
                const telefono = document.querySelector(".telefonoEdit").value;
                const correo = document.querySelector(".correoEdit").value;
                const contrasena = document.querySelector(".contrasenaEdit").value;
                const rol = document.querySelector(".select").value;
                const estado = document.querySelector(".estado1").value;
            
                const datosProducto = {
                    identificacion: identificacion,
                    nombres: nombres,
                    telefono: telefono,
                    correo: correo,
                    contrasena: contrasena,
                    rol: rol,
                    estado: estado
                };
                fetch(`http://localhost:3000/usuario/usuario/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosProducto)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Usuario actualizado:", data);
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                });
            // location.reload()
            });
    });
});

// Crear Usuarios

document.getElementById("crearUsuario").addEventListener("click", (e) => {
    e.preventDefault();

    const identificacion = document.querySelector(".identificacionCrear").value;
    const nombres = document.querySelector(".nombreCrear").value;
    const telefono = document.querySelector(".telefonoCrear").value;
    const correo = document.querySelector(".correoCrear").value;
    const contrasena = document.querySelector(".contrasenaCrear").value;
    const rol = document.querySelector(".selectCrear").value;
    const estado = document.querySelector(".estado1Crear").value;

    const datosProducto = {
        identificacion: identificacion,
        nombres: nombres,
        telefono: telefono,
        correo: correo,
        contrasena: contrasena,
        rol: rol,
        estado: estado
    };
    fetch(`http://localhost:3000/usuario/usuario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosProducto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Producto agregado:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
    location.reload()
});

// Eliminar Usuarios
let elimina = document.querySelectorAll(".eliminarUsuario")
elimina.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar");
        ventana.style.display = "flex";
        let usuario = e.target.closest(".user-list-item");
        let nombre = usuario.querySelector(".nombre").innerHTML;
        let aceptar = document.querySelector(".aceptar");
        let textoVentana = document.querySelector(".texto")
        textoVentana.innerHTML = `¿Seguro que quieres eliminar la cuenta de ${nombre}?`
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

// Editar producto
let editar2 = document.querySelectorAll(".editarProducto");

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
        const imagen = document.querySelector(".urlEdit");
        const descripcion = document.querySelector(".descripcionEdit");
        const stock = document.querySelector(".stockEdit");
        if (!producto || !categoria || !precio || !descripcion || !imagen || !stock) {
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
                    const productos = productoEncontrado[0][0];
                    producto.value = productos.producto || '';
                    categoria.value = productos.categoria || '';
                    precio.value = productos.preciou || '';
                    descripcion.value = productos.descripcion || '';
                    imagen.value = productos.imagen || '';
                    stock.value = productos.stock || '';
                    
                    editarProducto();
                } else {
                    console.log("No user found with the given ID.");
                }
            })
            .catch(error => console.error("Fetch error:", error));
            document.getElementById("confirmarBtnn").addEventListener("click", (e) => {
                e.preventDefault();
            
                const producto = document.querySelector(".productoEdit").value;
                const categoria = document.querySelector(".categoriaEdit").value;
                const precio = document.querySelector(".precioEdit").value;
                const descripcion = document.querySelector(".descripcionEdit").value;
                const imagen = document.querySelector(".urlEdit").value;
                const stock = document.querySelector(".stockEdit").value;
            
                const datosProducto = {
                    producto: producto,
                    categoria: categoria,
                    preciou: precio,
                    descripcion: descripcion,
                    imagen: imagen,
                    stock: stock
                };
                fetch(`http://localhost:3000/producto/producto/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosProducto)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Producto actualizado:", data);
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                });
            location.reload()
            });
    });
});

// Crear producto
document.getElementById("crearProducto").addEventListener("click", (e) => {
    e.preventDefault();

    const producto = document.querySelector(".productoCrear").value;
    const categoria = document.querySelector(".categoriaCrear").value;
    const precio = document.querySelector(".precioCrear").value;
    const descripcion = document.querySelector(".descripcionCrear").value;
    const imagen = document.querySelector(".urlCrear").value;
    const stock = document.querySelector(".stockCrear").value;

    const datosProducto = {
        producto: producto,
        categoria: categoria,
        preciou: precio,
        descripcion: descripcion,
        imagen: imagen,
        stock: stock
    };
    fetch(`http://localhost:3000/producto/producto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosProducto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Producto agregado:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
    location.reload()
});

// Eliminar producto
let eliminarProducto = document.querySelectorAll(".eliminarProducto")
eliminarProducto.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar")
        ventana.style.display = "flex"
        let producto = e.target.closest(".user-list-item")
        let nombre = producto.querySelector(".nombreP").innerHTML;
        let aceptar = document.querySelector(".aceptar");
        let textoVentana = document.querySelector(".texto")
        textoVentana.innerHTML = `¿Seguro que quieres eliminar el producto ${nombre}?`
        let id = producto.querySelector(".id").innerHTML
        aceptar.addEventListener("click", () => {
        fetch(`http://localhost:3000/producto/producto/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                producto.remove();
                ventana.style.display= "none"
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(producto);
    })
})

//Actualizar estado factura
let pagado = document.querySelectorAll(".pagado");
pagado.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let estado = e.target.closest(".user-list-item");
        let id = estado.querySelector(".id").innerHTML

        fetch(`http://localhost:3000/factura/factura/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then(data => {
            console.log(data.respuesta);
            estado.remove();

        })
        .catch(error => console.log(error));
    });
});

// Eliminar metodo de pago
let eliminarMetodo = document.querySelectorAll(".eliminarMetodo")
eliminarMetodo.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar")
        ventana.style.display = "flex"
        let metopago = e.target.closest(".user-list-item")
        let nombre = metopago.querySelector(".nombreTipo").innerHTML;
        let aceptar = document.querySelector(".aceptar");
        let textoVentana = document.querySelector(".texto")
        textoVentana.innerHTML = `¿Seguro que quieres eliminar el metodo de pago ${nombre}?`
        let id = metopago.querySelector(".id").innerHTML
        aceptar.addEventListener("click", () => {
        fetch(`http://localhost:3000/metopago/metopago/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                metopago.remove();
                ventana.style.display= "none"
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(metopago);
    })
})

// Usuario
function editarUsuario(){
    let ventana = document.getElementById("editarUsuario")
    ventana.style.display = "flex"
}
function ocultarE(){
    let ventana = document.getElementById("editarUsuario")
    ventana.style.display = "none"
}
// Crear Usuario
function crear(){
    let ventana = document.getElementById("crear")
    ventana.style.display = "flex"
}
function ocultarC(){
    let ventana = document.getElementById("crear")
    ventana.style.display = "none"
}
// Eliminar Usuario
function eliminar() {
    let ventana = document.getElementById("eliminar")
    ventana.style.display = "flex"
}
function ocultarEliminar() {
    let ventana = document.getElementById("eliminar")
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

// Crear Producto
function crearProducto(){
    let ventana = document.getElementById("crearP")
    ventana.style.display = "flex"
}
function ocultarCrearProducto(){
    let ventana = document.getElementById("crearP")
    ventana.style.display = "none"
}


