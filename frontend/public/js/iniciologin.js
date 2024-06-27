const loginsec = document.querySelector('.login-section');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const olvidocontraseñalink = document.querySelector(".olvido-contraseña");

registerlink.addEventListener('click', () => {
    loginsec.classList.add('active');
});

loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active');
});

olvidocontraseñalink.addEventListener("click", () => {
    loginsec.classList.remove("active");
});

// Función para validar campos antes de registrar
function validarCamposRegistro() {
    const identificacion = document.querySelector(".identificacion").value.trim();
    const nombres = document.querySelector(".nombre").value.trim();
    const telefono = document.querySelector(".telefono").value.trim();
    const correo = document.querySelector(".correo").value.trim();
    const contrasena = document.querySelector(".contrasena").value.trim();
    const rol = document.querySelector(".roles").value.trim();
    const terminos = document.querySelector(".terminosycondiciones");

    if (!identificacion || !nombres || !telefono || !correo || !contrasena || !rol || !terminos.checked) {
        var notification = alertify.notify('Rellene todos los capos por favor', 'error', 5, function(){  console.log('dismissed'); });
        return false; // Detener el envío del formulario si faltan campos
    }

    return true; // Todos los campos están completos
}

// Registro de usuario
document.getElementById("registrar").addEventListener("click", async (e) => {
    e.preventDefault();

    // Validar campos antes de proceder
    if (!validarCamposRegistro()) {
        return; // Detener la ejecución si faltan campos
    }

    const identificacion = document.querySelector(".identificacion").value.trim();
    const nombres = document.querySelector(".nombre").value.trim();
    const telefono = document.querySelector(".telefono").value.trim();
    const correo = document.querySelector(".correo").value.trim();
    const contrasena = document.querySelector(".contrasena").value.trim();
    const rol = document.querySelector(".roles").value.trim();
    const estado = "Pagado";

    const datosUsuario = {
        identificacion,
        nombres,
        telefono,
        correo,
        contrasena,
        rol,
        estado
    };

    try {
        const response = await fetch(`http://localhost:3000/usuario/usuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Usuario registrado:", data);
        location.reload(); // Recargar la página después de registrar
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Ocurrió un error al registrar al usuario. Por favor, inténtelo nuevamente.");
    }
});

// Función para iniciar sesión
const loguear = async () => {
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const url = document.getElementById("url").value;

    sessionStorage.setItem("urlSurprise", url);
    const urlSurprise = sessionStorage.getItem("urlSurprise") + "/usuario/loginusuario";

    const options = {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            correo,
            contrasena: password
        })
    };

    try {
        const response = await fetch(urlSurprise, options);
        const data = await response.json();

        if (data.error) {
            alertify.error('Correo o Contraseña Incorrecta');
        } else {
            sessionStorage.setItem("token", data.body.token);
            sessionStorage.setItem("rol", data.body.rol);
            window.location.href = sessionStorage.getItem("rol");
        }
    } catch (err) {
        console.error("Se presentó un problema:", err);
    }
};
