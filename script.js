<script>
         const elementsWithSpeech = document.querySelectorAll(".speech");

          function speakText(text) {
            const speechSynthesis = window.speechSynthesis;

            if (speechSynthesis.speaking) {
              speechSynthesis.cancel();
            }

            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
          }

          elementsWithSpeech.forEach((element) => {
            element.addEventListener("mouseover", () => {
              const text = element.textContent;
              speakText(text);
            });
          });

          document.querySelector(".accept").onclick = function () {
            document.querySelector(".cookie-card").style.transition =
            "all 1s ease-in-out";
            document.querySelector(".cookie-card").style.right = "-100%";
          };

            //BOTÃO SWITCH DARK/LIGHT
            const modoSwitch = document.getElementById("modoSwitch");
            const conteudo = document.getElementById("conteudo");

            modoSwitch.addEventListener("change", () => {
              if (modoSwitch.checked) {
                // Modo Escuro
                conteudo.style.backgroundColor = "black";
                conteudo.style.color = "orange";
              } else {
                // Modo Claro
                conteudo.style.backgroundColor = "white";
                conteudo.style.color = "orange";
              }
            });
            const modoSwitch3 = document.getElementById("modoSwitch");
            const conteudo2 = document.getElementById("conteudo2");

            modoSwitch3.addEventListener("change", () => {
              if (modoSwitch.checked) {
                // Modo Escuro
                conteudo2.style.backgroundColor = "black";
                conteudo2.style.color = "orange";
              } else {
                // Modo Claro
                conteudo2.style.backgroundColor = "white";
                conteudo2.style.color = "orange";
              }
            });

            //MUDAR IMAGEM
            const modoSwitch2 = document.getElementById("modoSwitch");
            const trocaIMG = document.getElementById("trocaImg");

            modoSwitch2.addEventListener("change", () => {
              if (modoSwitch.checked) {
                // Mudar para a segunda imagem
                trocaImg.src = "img/gpmapsDark.png";
                trocaImg.alt = "Imagem 2";
              } else {
                // Mudar de volta para a primeira imagem
                trocaImg.src = "img/gpmaps.jpg";
                trocaImg.alt = "Imagem 1";
              }
            });
 
</script>
