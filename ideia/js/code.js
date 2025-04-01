const ShiddenLogin = document.querySelector(".hiddenLogin")
const SdivLogin = document.querySelector(".DivLogin")
const SDivCadastro = document.querySelector(".DivCadastro")


ShiddenLogin.onclick = ()=>{
    SdivLogin.style.display = 'none'
    SDivCadastro.style.display = 'inline-block'
}

function hiddenCR(){
    SdivLogin.style.display = 'inline-block'
    SDivCadastro.style.display = 'none'
}