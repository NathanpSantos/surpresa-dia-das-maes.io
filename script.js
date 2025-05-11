function checarHorario() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const mensagem = document.getElementById('mensagem');
    const videoContainer = document.getElementById('video-container');
  
    if (horas === 22 && minutos === 0) {
      mensagem.textContent = "Mãe, coloque o despertador para 8h amanhã! 💖";
    }
  
    if (horas === 8 && minutos === 0) {
      mensagem.textContent = "Feliz Dia das Mães! 💐";
      videoContainer.style.display = 'block';
    }
  }
  
  // Checar a cada minuto
  setInterval(checarHorario, 60000);
  