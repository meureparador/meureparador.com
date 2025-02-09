// Funções Gerais
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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

    // Controle de formulário
    const form = document.querySelector('.contato-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Adicionar lógica de envio aqui
            alert('Formulário enviado com sucesso!');
            form.reset();
        });
    }
});

// Efeito de digitação no hero (opcional)
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

// Inicializar efeito de digitação
const heroTitle = document.querySelector('.hero h1');
if(heroTitle) {
    typeEffect(heroTitle, 100);
}