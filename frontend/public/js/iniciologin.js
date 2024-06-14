const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
const olvidocontraseñalink=document.querySelector(".olvido-contraseña")
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
olvidocontraseñalink.addEventListener("click",()=>{
    loginsec.classList.remove("active")
})

const loguear = async ()=>{

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const url = document.getElementById("url").value;

    sessionStorage.setItem("urlSurprise", url);
    const urlSurprise = sessionStorage.getItem("urlSurprise") + "/usuario/loginusuario";
    const options = {
        method:"POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            correo: correo,
            contraseña: password
        })
    }
    await fetch(urlSurprise, options)
    .then(res => res.json())
    .then(data =>{
        if(data.error == true){
            alertify.error('Contraseña Incorrecta');
        }else{
            console.log(data);
        }
    })
    .catch(err=>{
        console.error("Se presento un problema", err)
    })
}