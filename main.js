function iniciarConversa() {
  window.open("https://api.whatsapp.com/send?phone=55" + numeroWhatsapp.value, "_blank");
  numeroWhatsapp.value = "";
  numeroWhatsapp.focus();
}

var numeroWhatsapp = document.querySelector(".telefone");

var criarLink = document.querySelector(".enviar");
criarLink.onclick = iniciarConversa;


