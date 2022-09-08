function iniciarConversa() {
  window.open("https://api.whatsapp.com/send?phone=55" + numeroWhatsapp.value, "_blank");
  numeroWhatsapp.value = "";
  numeroWhatsapp.focus();
}

var numeroWhatsapp = document.querySelector(".telefone");

var criarLink = document.querySelector(".botao");
criarLink.onclick = iniciarConversa;

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {

    var btn = document.querySelector(".botao");
    btn.click();
  }
});
