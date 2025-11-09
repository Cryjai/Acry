// Futuristic Portfolio JavaScript - Powered by Acry CEO
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.getElementById('nav');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Enhanced smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = nav ? nav.offsetHeight : 70;
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - navHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Show success notification
                    showNotification('🚀 導航成功！');
                }
            }
        });
    });

    // Navigation background on scroll
    window.addEventListener('scroll', function() {
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(10, 10, 15, 0.95)';
            } else {
                nav.style.background = 'rgba(10, 10, 15, 0.9)';
            }
        }
    });

    // Matrix background effect
    function createMatrixEffect() {
        const matrixBg = document.getElementById('matrix-bg');
        if (!matrixBg) return;
        
        const characters = '01アクリー天才ADHD量化金融';
        
        setInterval(() => {
            const span = document.createElement('span');
            span.textContent = characters[Math.floor(Math.random() * characters.length)];
            span.style.position = 'absolute';
            span.style.left = Math.random() * 100 + '%';
            span.style.top = '-20px';
            span.style.color = `rgba(0, 191, 255, ${Math.random() * 0.5 + 0.2})`;
            span.style.fontSize = Math.random() * 20 + 10 + 'px';
            span.style.fontFamily = 'monospace';
            span.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            span.style.zIndex = '-1';
            
            matrixBg.appendChild(span);
            
            setTimeout(() => {
                if (span.parentNode) {
                    span.parentNode.removeChild(span);
                }
            }, 5000);
        }, 200);
    }

    // Add CSS for falling animation and mobile menu
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
        
        .nav-menu.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(10, 10, 15, 0.95);
            backdrop-filter: blur(20px);
            padding: 20px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize matrix effect
    createMatrixEffect();

    // Skill bars animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.getAttribute('data-progress');
                    if (progress) {
                        progressBar.style.width = progress + '%';
                    }
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // Initialize skill bars animation
    animateSkillBars();

    // Scroll animations for elements
    function initScrollAnimations() {
        const animateElements = document.querySelectorAll('.achievement-card, .project-card, .skill-category');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Set initial state for animations
        animateElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'all 0.6s ease';
            observer.observe(element);
        });
    }

    // Initialize scroll animations
    initScrollAnimations();

    // Enhanced CV Download functionality
    const downloadCvBtn = document.querySelector('.download-cv');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show loading state
            const originalText = this.textContent;
            this.textContent = '生成中...';
            this.disabled = true;
            
            setTimeout(() => {
                // Create comprehensive CV content
                const cvContent = `
ACRY - FUTURE QFIN GENIUS
ADHD-Powered, Self-Taught, Money-Oriented
======================================

CONTACT INFORMATION
📧 Email: mickeycry0506@gmail.com
🐙 GitHub: https://github.com/Cryjai
📍 Location: Hong Kong

PROFILE
======================================
18歲香港ADHD天才少女，DSE數學全校第一，用免費資源自學程式開發。
目標：靠技術實力進入頂尖QFin程序，然後開發吸金App實現財富自由。

ACHIEVEMENTS
======================================
🏆 2024中大Mathematics & Information Competition - 全校僅選10人參賽
👑 學校M2 Mock考試冠軍 - 2025年度第一名  
📊 DSE數學5*全校第一 - 2025年，即使「炒車」都能拿5*
🥇 香港學校體適能金獎 - 文武雙全的典型代表

TECHNICAL SKILLS
======================================
Programming Languages:
• JavaScript (90%) - 前端開發專家
• Python (85%) - 數據分析和自動化
• HTML/CSS (95%) - UI/UX設計高手

Frameworks & Tools:
• React (80%) - 現代前端框架
• Node.js (75%) - 後端開發
• Git/GitHub (90%) - 版本控制專家
• Chart.js - 數據視覺化

Finance & Math:
• Stock Analysis (85%) - 股票市場分析
• Quantitative Methods (80%) - 量化分析
• Data Analysis (88%) - 大數據處理
• Financial Modeling - 金融建模

Languages: 繁體中文 (Native), English (Fluent), Spanish (Intermediate)

PROJECTS PORTFOLIO
======================================
1. 📈 Stock Sentiment Analysis
   • Python自動撈股票新聞，分析市場情緒
   • Tech Stack: Python, TextBlob, Matplotlib, Finviz API
   • GitHub: https://github.com/Cryjai/stock-sentiment-analysis

2. 💸 Life Bankruptcy Tracker  
   • 人生破產追蹤器 - 時間就是金錢，追蹤投資回報率
   • Tech Stack: HTML, CSS, JavaScript, LocalStorage
   • Live Demo: https://cryjai.github.io/life-bankruptcy-trackor/

3. 📚 Acry DSE Study Hub
   • 全網最潮DSE資源站 - 讀書唔再死蠢
   • Tech Stack: HTML, CSS, JavaScript, Chart.js
   • GitHub: https://github.com/Cryjai/Acry-dse-study-hub

4. 💰 Acry Finance Hub
   • 個人理財管理中心 - 記帳、投資追蹤一站式解決
   • Tech Stack: HTML, CSS, JavaScript, Chart.js  
   • Live Demo: https://cryjai.github.io/acry-finance-hub/#

5. 🧠 Acry Infinite DSE Quiz
   • 無限DSE題庫系統 - AI生成題目，智能評分
   • Tech Stack: JavaScript, AI Integration, LocalStorage
   • GitHub: https://github.com/Cryjai/acry-infinite-dse-quiz

EDUCATION
======================================
2025-2026: DSE Retaker (Self-Study)
• 全職備戰DSE，拒絕傳統教育制度的批量化生產
• 專注數學、經濟、物理等QFin相關科目

2021-2024: 香港中學  
• 在校期間已展現數學天賦，決定自主學習路線
• 參與多項數學競賽，獲得優異成績

EXPERIENCE
======================================
2024-Present: Full-Stack Developer & CEO
Acry Tech (Personal Brand)
• 開發多個web應用，涵蓋金融分析、學習管理、生產力工具
• 獨立完成從概念到部署的完整開發流程
• 累積5+個完整項目，超過10,000行代碼

2023-Present: Self-Taught Programmer
Independent Learning  
• 通過免費資源自學編程，目標超越傳統CS畢業生
• 每日平均學習8-12小時，ADHD超專注力優勢
• 掌握前端、後端、數據分析等多領域技能

WHY QFIN?
======================================
因為我愛錢！更愛用數學和科技去賺錢。

ADHD給我超專注力優勢：
• 當我對某樣東西著迷時，可以連續16小時不停學習
• 思維跳躍快，能快速掌握複雜概念
• 創意思維，能想出別人想不到的解決方案

技術+金融的完美結合：
• 已有股票分析和理財管理項目經驗  
• 熟悉Python數據分析，適合量化金融
• 自學能力強，能快速適應金融科技發展

未來目標：
• 成為頂尖Quant，開發革命性交易算法
• 創立金融科技獨角獸公司
• 用技術改變金融行業，實現財富自由

======================================
Powered by Acry CEO | 用ADHD超能力改變世界
Generated on: ${new Date().toLocaleString('zh-HK')}
======================================
                `;
                
                // Create and download the CV
                const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Acry_CV_Future_QFin_Genius.txt';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                
                // Reset button state
                this.textContent = originalText;
                this.disabled = false;
                
                // Show success message
                showNotification('🎉 CV下載成功！準備好征服QFin世界了嗎？');
                
            }.bind(this), 1000);
        });
    }

    // Enhanced external links functionality
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && (href.startsWith('http') || href.startsWith('https'))) {
                // Show notification that link is opening
                showNotification('🚀 正在打開新窗口...');
                
                // Ensure it opens in new tab
                window.open(href, '_blank', 'noopener,noreferrer');
                e.preventDefault();
            }
        });
    });

    // Enhanced contact links
    const contactLinks = document.querySelectorAll('.contact-value[href], .footer-links a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href) {
                if (href.startsWith('mailto:')) {
                    showNotification('📧 正在打開郵件客戶端...');
                } else if (href.startsWith('http')) {
                    showNotification('🔗 正在打開外部連結...');
                    window.open(href, '_blank', 'noopener,noreferrer');
                    e.preventDefault();
                }
            }
        });
    });

    // Notification system
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(45deg, #ff0080, #8000ff);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            z-index: 10000;
            font-weight: 600;
            box-shadow: 0 0 25px rgba(255, 0, 128, 0.5);
            animation: slideIn 0.5s ease, slideOut 0.5s ease 2.5s forwards;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }

    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);

    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === konamiSequence.length && 
            konamiCode.every((code, index) => code === konamiSequence[index])) {
            activateSecretMode();
        }
    });

    // Secret mode activation
    function activateSecretMode() {
        document.body.style.animation = 'rainbow 2s infinite';
        showNotification('🌈 ADHD超能力模式啟動！你發現了隱藏彩蛋！');
        
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        setTimeout(() => {
            document.body.style.animation = '';
            rainbowStyle.remove();
        }, 10000);
    }

    // Typing effect for hero subtitle
    function typeWriterEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;
        
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        
        const typeTimer = setInterval(() => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeTimer);
            }
        }, 50);
    }

    // Initialize typing effect
    setTimeout(typeWriterEffect, 1000);

    // Parallax effect for glow orbs
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const orbs = document.querySelectorAll('.glow-orb');
        
        orbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Dynamic stats counter
    function animateCounters() {
        const stats = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = entry.target;
                    const finalValue = stat.textContent;
                    
                    if (finalValue === '∞') return; // Skip infinity symbol
                    
                    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                    if (numericValue > 0) {
                        animateCounter(stat, numericValue, finalValue);
                    }
                }
            });
        });
        
        stats.forEach(stat => observer.observe(stat));
    }

    function animateCounter(element, target, originalText) {
        let current = 0;
        const increment = target / 30; // 30 steps
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = originalText;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (originalText.includes('+') ? '+' : '');
            }
        }, 50);
    }

    // Initialize counter animation
    animateCounters();

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    const throttledScroll = throttle(function() {
        // Any additional scroll-based functionality can go here
    }, 100);

    window.addEventListener('scroll', throttledScroll);

    // Initialize all animations on page load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);

    // Add loading state styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body:not(.loaded) * {
            animation-play-state: paused !important;
        }
        
        body.loaded * {
            animation-play-state: running !important;
        }
    `;
    document.head.appendChild(loadingStyle);

    // Console message for curious developers
    console.log(`
    🚀 Welcome to Acry's Futuristic Portfolio! 🚀
    
    Built with ADHD superpowers and lots of caffeine ☕
    
    If you're reading this, you're probably a developer too!
    Want to collaborate? Hit me up: mickeycry0506@gmail.com
    
    Fun fact: This entire website was built by an 18-year-old
    self-taught programmer targeting QFin programs! 
    
    Try the Konami code for a surprise! ↑↑↓↓←→←→BA
    
    Powered by Acry CEO 💜
    `);

    // Add some fun interactions with enhanced ripple effect
    document.addEventListener('click', function(e) {
        // Create click ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 0, 128, 0.3) 0%, transparent 70%);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            z-index: 9999;
        `;
        
        const size = 60;
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - size / 2) + 'px';
        ripple.style.top = (e.clientY - size / 2) + 'px';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        console.log('Service Worker support detected - ready for PWA deployment!');
    });
}