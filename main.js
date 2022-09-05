function iniciarConversa() {
  window.open("https://api.whatsapp.com/send?phone=55" + numeroWhatsapp.value, "_blank");
  numeroWhatsapp.value = "";
  numeroWhatsapp.focus();
}

var numeroWhatsapp = document.querySelector(".telefone");

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
    var btn = document.querySelector(".enviar");
    btn.click();
  }
});

var criarLink = document.querySelector(".enviar");
criarLink.onclick = iniciarConversa;
