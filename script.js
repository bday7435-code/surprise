const countDownDate = new Date("2026-06-11T00:00:00+02:00").getTime();


const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Usamos Math.max(0, ...) para garantir que o valor nunca seja menor que zero
    const d = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
    const h = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const m = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const s = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

    document.getElementById("days").innerHTML = d.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = s.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(x);
        
        // Efeito de Confete
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });

        document.getElementById("timer").classList.add("hidden");
        document.getElementById("status-text").innerHTML = "It's time for your surprise! ♥";
        document.getElementById("video-container").classList.remove("hidden");
        document.getElementById("footer-msg").classList.remove("hidden");
        
        // Carrega o vídeo local
        const video = document.getElementById("meuVideo");
        video.load();
    }
}, 1000);


function createHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.innerHTML = '♥';
    heart.className = 'heart';
    
    // Adiciona variação de tamanho para os corações parecerem mais naturais
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px'; 
    
    // Define posição horizontal e tempo de animação aleatórios
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
    container.appendChild(heart);
    
    // Remove o elemento após a animação para não sobrecarregar o site
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Cria um novo coração a cada 200ms
setInterval(createHeart, 200);
