let menuMobile = document.querySelector('.lista-mobile')
let imgMenu = document.querySelector('#imgMenu')

function menu() {

    if (menuMobile.style.left == '-100%') {
        menuMobile.style.left = '0%';
        imgMenu.src = "../Imagens/close.svg"
    }
    else {
        menuMobile.style.left = '-100%'
        imgMenu.src = "../Imagens/menu.svg"
    }
}









function validaRegisterForm() {
    const form = document.getElementById("register-form");
    const idpassagem = form.elements['idpassagem'].value;
    const duracao = form.elements['duracao'].value;
    const dataembarque = form.elements['dataembarque'].value;
    const dataretorno = form.elements['dataretorno'].value;
    const destino = form.elements['destino'].value;
    const origem = form.elements['origem'].value;
    const classe = form.elements['classe'].value;

    console.log(idpassagem, duracao, dataembarque, dataretorno, destino, origem, classe);

    if (idpassagem !== '' && duracao !== '' && dataembarque !== '' && dataretorno !== '' && destino !== '' && origem !== '' && classe !== '') {
        alert('Dados cadastrados');
        form.reset();
    } else {
        alert('Preencha todos os dados');
    }
}

    //if  (idpassagem != '' && duracao != '' ){
    //    alert('Dados cadastrados');
    //    form.reset();
    //  return true;
    //}
    //else{
    //  alert('Preencha todos os dados');
    //return false;




