var numeroWhats = document.querySelector(".telefone");

			function iniciarConversa() {

				window.open("https://api.whatsapp.com/send?phone=55" + numeroWhats.value, "_blank");
				numeroWhats.value = "";
				numeroWhats.focus();

				}

				document.addEventListener("keypress", function(e) {
					if(e.key === 'Enter') {

						var btn = document.querySelector("button");
						btn.click();
					}
				});

			var button = document.querySelector(".enviar");
			button.onclick = iniciarConversa;
