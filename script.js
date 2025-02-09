// ========== CONFIGURAÇÕES INICIAIS ==========
document.addEventListener('DOMContentLoaded', () => {
    // Configurações gerais
    initSmoothScroll();
    initScrollAnimations();
    initCTAButtons();
});

// ========== SCROLL SUAVE PARA LINKS INTERNOS ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== ANIMAÇÕES AO SCROLL ==========
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, observerOptions);

    // Elementos para animar
    document.querySelectorAll('.topico, .citacao, .especialista-content').forEach(el => {
        el.classList.add('pre-animate');
        observer.observe(el);
    });
}

// ========== CONTROLE DE BOTÕES CTA ==========
function initCTAButtons() {
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Adicionar tracking (opcional)
            console.log('Botão CTA clicado:', this.href);

            // Abrir link em nova aba
            window.open(this.href, '_blank');
        });
    });
}

// ========== FUNÇÃO PARA VERIFICAR REDIRECIONAMENTO ==========
function checkRedirects() {
    const links = document.querySelectorAll('a[href*="kiwify"]');
    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Redirecionando para:', this.href);
        });
    });
}

// Inicializa a verificação de redirecionamentos
checkRedirects();