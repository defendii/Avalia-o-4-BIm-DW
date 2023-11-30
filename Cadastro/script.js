let menuMobile = document.querySelector('.lista-mobile')
let imgMenu = document.querySelector('#imgMenu')

function menu(){

    if(menuMobile.style.left == '-100%'){
        menuMobile.style.left = '0%';
        imgMenu.src = "../Imagens/close.svg"
    }
    else{
        menuMobile.style.left = '-100%'
        imgMenu.src = "../Imagens/menu.svg"
    }
}

function validaRegisterForm(){
    const form = document.getElementById("register-form");
    // console.log(form.elements['idpassagem'])
    // const idpasssagem= form.elements['idpassagem'].value;
    const idpassagem = document.querySelector('#idpassagem').value
    console.log(idpassagem)

    const duracao=form.elements['duracao'].value;
    const dataembarque=form.elements['dataembarque'].value;
    const dataretorno=form.elements['dataretorno'].value;
    const destino=form.elements['destino'].value;
    const origem=form.elements['origem'].value;
    const classe=form.elements['classe'].value;

    
    
    if  (idpassagem != '' && duracao != '' ){
        alert('Dados cadastrados');
        form.reset();
        return true;
    }
    else{
        alert('Preencha todos os dados');
        return false;

    }

    // if  (idpasssagem!='' && duracao && dataembarque && dataretorno && destino && origem && classe){
    //     alert('Dados cadastrados');
    //     form.reset();
    //     return true;
    // }
    // else{
    //     alert('Preencha todos os dados');
    //     return false;

    // }
}