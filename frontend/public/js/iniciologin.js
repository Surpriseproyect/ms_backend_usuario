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