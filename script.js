function checarHorario() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const mensagem = document.getElementById('mensagem');
    const videoContainer = document.getElementById('video-container');
  
    // Mostrar mensagem entre 22h00 e 07h59
    if (horas >= 22 || horas < 8) {
      mensagem.textContent = "Mãe, coloque o despertador para 8h amanhã! 💖";
    }
  
    // Mostrar vídeo às 08:00 exato
    if (horas === 8 && minutos === 0) {
      mensagem.textContent = "Feliz Dia das Mães! 💐";
      videoContainer.style.display = 'block';
    }
  }
  
  // Executa uma vez quando abrir a página
  checarHorario();
  
  // E depois verifica a cada minuto
  setInterval(checarHorario, 60000);
