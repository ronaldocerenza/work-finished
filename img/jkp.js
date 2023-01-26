

function jogar(params) {
  
  if(document.getElementById("pedra").checked == false && document.
  getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
      alert("Selecione uma opção");
  } else {
      var sorteio = Math.floor(Math.random() * 3);
      switch(sorteio){
          case 0:
              document.getElementById("compu").src = "pedra.jpg";
              break;
          case 1:
              document.getElementById("computer").src = "papel.jpg";
              break;
          case 2:
              document.getElementById("computer").src = "tesoura.jpg";
              break;
      }
      if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || 
      (document.getElementById("tesoura").checked == true && sorteio == 2)){
          document.getElementById("placar").innerHTML="Empate";
          document.getElementById("placar").style.color = "orange";
      } else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) ||
      (document.getElementById("tesoura").checked == true && sorteio == 1)) {
          document.getElementById("placar").innerHTML="Você venceu";
          document.getElementById("placar").style.color = "blue";
      } else {
          document.getElementById("placar").innerHTML="Computador venceu";
          document.getElementById("placar").style.color = "red";
      }
  }
}

function resetar() {
  document.getElementById("computer").src="computer.png";
  document.getElementById("placar").innerHTML=" ";
}