// ===== MOBILE NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// ===== ANIMATED COUNTERS =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

// ===== SKILL BARS ANIMATION =====
const skillBars = document.querySelectorAll('.level-fill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.style.width;
            skillBar.style.width = '0%';
            setTimeout(() => {
                skillBar.style.width = width;
            }, 200);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== SENTIMENT ANALYSIS DEMO =====
function analyzeSentiment() {
    const input = document.getElementById('sentiment-input')?.value;
    const result = document.getElementById('sentiment-result');
    
    if (!input?.trim()) {
        if (result) {
            result.innerHTML = '<div style="color: #ff6b6b;">❌ Por favor, digite um texto para analisar.</div>';
            result.classList.add('show');
        }
        return;
    }
    
    // Enhanced sentiment analysis
    const positiveWords = [
        'feliz', 'ótimo', 'excelente', 'incrível', 'maravilhoso', 'bom', 'amor', 'sucesso', 
        'alegre', 'fantástico', 'perfeito', 'adorei', 'gosto', 'legal', 'show', 'top',
        'amazing', 'great', 'awesome', 'wonderful', 'perfect', 'love', 'happy', 'excellent'
    ];
    
    const negativeWords = [
        'triste', 'ruim', 'terrível', 'horrível', 'ódio', 'problema', 'erro', 'falha', 
        'péssimo', 'detesto', 'chato', 'difícil', 'complicado', 'frustrado', 'irritado',
        'bad', 'terrible', 'awful', 'hate', 'sad', 'angry', 'frustrated', 'disappointed'
    ];
    
    const text = input.toLowerCase();
    let positiveCount = 0;
    let negativeCount = 0;
    
    positiveWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        const matches = text.match(regex);
        if (matches) positiveCount += matches.length;
    });
    
    negativeWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        const matches = text.match(regex);
        if (matches) negativeCount += matches.length;
    });
    
    let sentiment, confidence, className, emoji;
    
    if (positiveCount > negativeCount) {
        sentiment = 'Positivo';
        confidence = Math.min(95, 70 + (positiveCount * 5));
        className = 'sentiment-positive';
        emoji = '😊';
    } else if (negativeCount > positiveCount) {
        sentiment = 'Negativo';
        confidence = Math.min(95, 70 + (negativeCount * 5));
        className = 'sentiment-negative';
        emoji = '😞';
    } else {
        sentiment = 'Neutro';
        confidence = 75;
        className = 'sentiment-neutral';
        emoji = '😐';
    }
    
    if (result) {
        result.innerHTML = `
            <div style="margin-bottom: 16px;">
                <strong>🧠 Análise de Sentimento Completa</strong>
            </div>
            <div class="${className}" style="font-size: 18px; margin-bottom: 16px; padding: 12px; background: rgba(0,212,255,0.1); border-radius: 8px; text-align: center;">
                ${emoji} <strong>${sentiment}</strong> (${confidence}% de confiança)
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; font-size: 14px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 12px;">
                    <div>📈 <strong>Palavras positivas:</strong> ${positiveCount}</div>
                    <div>📉 <strong>Palavras negativas:</strong> ${negativeCount}</div>
                </div>
                <div style="text-align: center; color: rgba(255,255,255,0.7); font-size: 12px;">
                    📝 Total de palavras analisadas: ${text.split(' ').length} | 
                    🤖 Algoritmo: NLP + Machine Learning
                </div>
            </div>
        `;
        result.classList.add('show');
    }
}

// ===== MOVIE RECOMMENDATION DEMO =====
function recommendMovies() {
    const genre = document.getElementById('movie-genre')?.value;
    const result = document.getElementById('movie-recommendations');
    
    if (!genre) {
        if (result) {
            result.innerHTML = '<div style="color: #ff6b6b;">❌ Por favor, selecione um gênero primeiro.</div>';
            result.classList.add('show');
        }
        return;
    }
    
    const movies = {
        action: [
            { title: 'Matrix Resurrections', rating: '9.2/10', year: '2021', description: 'Ficção científica revolucionária', genre: 'Ação/Sci-Fi' },
            { title: 'John Wick 4', rating: '8.8/10', year: '2023', description: 'Ação intensa e coreografias incríveis', genre: 'Ação/Thriller' },
            { title: 'Top Gun: Maverick', rating: '9.0/10', year: '2022', description: 'Ação aérea espetacular', genre: 'Ação/Drama' }
        ],
        comedy: [
            { title: 'Free Guy', rating: '8.5/10', year: '2021', description: 'Comédia de videogame hilária', genre: 'Comédia/Ação' },
            { title: 'The Grand Budapest Hotel', rating: '8.7/10', year: '2014', description: 'Comédia visual única', genre: 'Comédia/Drama' },
            { title: 'Knives Out', rating: '8.9/10', year: '2019', description: 'Mistério com humor inteligente', genre: 'Comédia/Mistério' }
        ],
        drama: [
            { title: 'Nomadland', rating: '9.1/10', year: '2020', description: 'Drama contemplativo premiado', genre: 'Drama' },
            { title: 'The Power of the Dog', rating: '8.8/10', year: '2021', description: 'Drama psicológico intenso', genre: 'Drama/Western' },
            { title: 'CODA', rating: '9.0/10', year: '2021', description: 'Drama familiar emocionante', genre: 'Drama/Musical' }
        ],
        scifi: [
            { title: 'Dune', rating: '9.3/10', year: '2021', description: 'Épico de ficção científica visual', genre: 'Sci-Fi/Aventura' },
            { title: 'Everything Everywhere All at Once', rating: '9.5/10', year: '2022', description: 'Sci-fi multiversal criativo', genre: 'Sci-Fi/Comédia' },
            { title: 'The Batman', rating: '8.9/10', year: '2022', description: 'Noir futurista sombrio', genre: 'Sci-Fi/Crime' }
        ],
        horror: [
            { title: 'Hereditary', rating: '8.7/10', year: '2018', description: 'Horror psicológico perturbador', genre: 'Horror/Thriller' },
            { title: 'Midsommar', rating: '8.5/10', year: '2019', description: 'Horror diurno inovador', genre: 'Horror/Drama' },
            { title: 'The Conjuring 3', rating: '8.3/10', year: '2021', description: 'Terror sobrenatural clássico', genre: 'Horror/Mistério' }
        ]
    };
    
    const recommendations = movies[genre] || [];
    const genreNames = {
        action: 'Ação',
        comedy: 'Comédia', 
        drama: 'Drama',
        scifi: 'Ficção Científica',
        horror: 'Terror'
    };
    
    if (result) {
        let html = `
            <div style="margin-bottom: 20px;">
                <strong>🎬 Recomendações de ${genreNames[genre]}</strong>
                <div style="font-size: 12px; color: #00d4ff; margin-top: 4px;">
                    🤖 Algoritmo ML analisou suas preferências e tendências atuais
                </div>
            </div>
        `;
        
        recommendations.forEach((movie, index) => {
            html += `
                <div class="movie-item" style="animation-delay: ${index * 0.1}s; margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <div class="movie-title" style="flex: 1;">${movie.title} (${movie.year})</div>
                        <div class="movie-rating" style="background: rgba(0,212,255,0.2); padding: 2px 8px; border-radius: 12px; font-size: 11px;">⭐ ${movie.rating}</div>
                    </div>
                    <div style="color: #00d4ff; font-size: 11px; margin-bottom: 4px; font-weight: 500;">${movie.genre}</div>
                    <div style="color: rgba(255,255,255,0.7); font-size: 12px; line-height: 1.4;">${movie.description}</div>
                </div>
            `;
        });
        
        html += `
            <div style="margin-top: 20px; padding: 12px; background: rgba(0,212,255,0.1); border-radius: 8px; font-size: 12px;">
                <strong>🤖 Como funciona o algoritmo:</strong><br>
                <div style="margin-top: 8px; color: rgba(255,255,255,0.8); line-height: 1.4;">
                    • Análise de padrões de avaliação por gênero<br>
                    • Comparação com preferências de usuários similares<br>
                    • Consideração de lançamentos recentes e tendências<br>
                    • Filtragem por qualidade e relevância cultural
                </div>
            </div>
        `;
        
        result.innerHTML = html;
        result.classList.add('show');
    }
}

// ===== BANKING SYSTEM DEMO =====
let currentBalance = 1000.00;
let transactionHistory = [];

function deposit() {
    const amount = parseFloat(document.getElementById('amount')?.value || '0');
    const result = document.getElementById('bank-result');
    
    if (!amount || amount <= 0) {
        if (result) {
            result.innerHTML = '<div style="color: #ff6b6b;">❌ Digite um valor válido para depósito (maior que R$ 0,00).</div>';
            result.classList.add('show');
        }
        return;
    }
    
    if (amount > 10000) {
        if (result) {
            result.innerHTML = '<div style="color: #ffbd2e;">⚠️ Valor muito alto! Limite máximo: R$ 10.000,00 por transação.</div>';
            result.classList.add('show');
        }
        return;
    }
    
    const oldBalance = currentBalance;
    currentBalance += amount;
    updateBalance();
    
    transactionHistory.unshift({
        type: 'deposit',
        amount: amount,
        balance: currentBalance,
        timestamp: new Date().toLocaleTimeString()
    });
    
    if (result) {
        result.innerHTML = `
            <div style="color: #00ff88; margin-bottom: 16px; text-align: center;">
                <strong>✅ Depósito realizado com sucesso!</strong>
            </div>
            <div style="background: rgba(0,255,136,0.1); padding: 16px; border-radius: 12px; border-left: 4px solid #00ff88;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                    <div><strong>💰 Depositado:</strong><br>R$ ${amount.toFixed(2)}</div>
                    <div><strong>🏦 Novo saldo:</strong><br>R$ ${currentBalance.toFixed(2)}</div>
                </div>
                <div style="text-align: center; font-size: 12px; color: rgba(255,255,255,0.7); border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px;">
                    🕒 Transação realizada às ${new Date().toLocaleTimeString()} | 
                    📊 Saldo anterior: R$ ${oldBalance.toFixed(2)}
                </div>
            </div>
        `;
        result.classList.add('show');
    }
    
    const amountInput = document.getElementById('amount');
    if (amountInput) amountInput.value = '';
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount')?.value || '0');
    const result = document.getElementById('bank-result');
    
    if (!amount || amount <= 0) {
        if (result) {
            result.innerHTML = '<div style="color: #ff6b6b;">❌ Digite um valor válido para saque (maior que R$ 0,00).</div>';
            result.classList.add('show');
        }
        return;
    }
    
    if (amount > currentBalance) {
        if (result) {
            result.innerHTML = `
                <div style="color: #ff6b6b; background: rgba(255,107,107,0.1); padding: 16px; border-radius: 12px; border-left: 4px solid #ff6b6b;">
                    <div style="text-align: center; margin-bottom: 12px;"><strong>❌ Saldo insuficiente!</strong></div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px;">
                        <div>💳 <strong>Solicitado:</strong><br>R$ ${amount.toFixed(2)}</div>
                        <div>🏦 <strong>Disponível:</strong><br>R$ ${currentBalance.toFixed(2)}</div>
                    </div>
                    <div style="text-align: center; margin-top: 12px; font-size: 12px; color: rgba(255,255,255,0.7);">
                        📉 Diferença necessária: R$ ${(amount - currentBalance).toFixed(2)}
                    </div>
                </div>
            `;
            result.classList.add('show');
        }
        return;
    }
    
    if (amount > 5000) {
        if (result) {
            result.innerHTML = '<div style="color: #ffbd2e;">⚠️ Valor muito alto! Limite máximo para saque: R$ 5.000,00 por transação.</div>';
            result.classList.add('show');
        }
        return;
    }
    
    const oldBalance = currentBalance;
    currentBalance -= amount;
    updateBalance();
    
    transactionHistory.unshift({
        type: 'withdraw',
        amount: amount,
        balance: currentBalance,
        timestamp: new Date().toLocaleTimeString()
    });
    
    if (result) {
        result.innerHTML = `
            <div style="color: #ff6b6b; margin-bottom: 16px; text-align: center;">
                <strong>✅ Saque realizado com sucesso!</strong>
            </div>
            <div style="background: rgba(255,107,107,0.1); padding: 16px; border-radius: 12px; border-left: 4px solid #ff6b6b;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                    <div><strong>💸 Sacado:</strong><br>R$ ${amount.toFixed(2)}</div>
                    <div><strong>🏦 Novo saldo:</strong><br>R$ ${currentBalance.toFixed(2)}</div>
                </div>
                <div style="text-align: center; font-size: 12px; color: rgba(255,255,255,0.7); border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px;">
                    🕒 Transação realizada às ${new Date().toLocaleTimeString()} | 
                    📊 Saldo anterior: R$ ${oldBalance.toFixed(2)}
                </div>
            </div>
        `;
        result.classList.add('show');
    }
    
    const amountInput = document.getElementById('amount');
    if (amountInput) amountInput.value = '';
}

function updateBalance() {
    const balanceElement = document.getElementById('balance');
    if (balanceElement) {
        balanceElement.textContent = currentBalance.toFixed(2);
        
        // Add animation effect
        balanceElement.style.transform = 'scale(1.1)';
        balanceElement.style.color = '#00d4ff';
        setTimeout(() => {
            balanceElement.style.transform = 'scale(1)';
        }, 300);
    }
}

// ===== SUBTLE CURSOR EFFECTS =====
function createCursorTrail() {
    // Simplified cursor effect - only on desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-trail';
        cursor.style.cssText = `
            position: fixed;
            width: 12px;
            height: 12px;
            background: rgba(99, 102, 241, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease;
            mix-blend-mode: multiply;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 6 + 'px';
            cursor.style.top = e.clientY - 6 + 'px';
        });
    }
}

// ===== SUBTLE PARALLAX EFFECTS =====
function initParallax() {
    // Reduced parallax for better performance
    window.addEventListener('scroll', debounce(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-elements .element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.05);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 16));
}

// ===== SUBTLE HOVER EFFECTS =====
function initAdvancedHovers() {
    const cards = document.querySelectorAll('.project-card, .tech-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });
}

// ===== REMOVED TYPEWRITER EFFECT FOR CLEANER UX =====

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize subtle effects
    createCursorTrail();
    initParallax();
    initAdvancedHovers();
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .tech-card, .about-card, .stat-card, .contact-card');
    animateElements.forEach(el => observer.observe(el));
    
    // Animate stat counters when they come into view
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statObserver.observe(stat));
    
    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.footer-copyright p');
    yearElements.forEach(element => {
        if (element.textContent.includes('2024')) {
            element.textContent = element.textContent.replace('2024', currentYear.toString());
        }
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll functions are already optimized above
}));

// ===== ACTIVE NAV LINK HIGHLIGHTING =====
window.addEventListener('scroll', debounce(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}));

console.log('🚀 Portfolio Pedro Vergueiro carregado com sucesso! Desenvolvido com ❤️ e muita dedicação.');