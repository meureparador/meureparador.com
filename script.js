// Verificação de redirecionamento
document.querySelectorAll('a[href*="kiwify"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Redirecionando para:', this.href);
    });
});

// Animação ao scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Elementos para animar
document.querySelectorAll('.topico, .citacao, .inimigo-comum').forEach(el => {
    el.classList.add('pre-animate');
    observer.observe(el);
});