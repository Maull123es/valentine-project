// ===== CONFIGURATION =====
const messages = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "I'm gonna cry...",
    "Okay, I'll stop asking...",
    "Just kidding! One more time?",
    "Pretty please?",
    "Final final chance!"
];

const photoSources = [
    "assets/images/couple-photo.jpg",
    "assets/images/memory1.jpg",
    "assets/images/memory2.jpg"
];

// ===== STATE VARIABLES =====
let messageIndex = 0;
let clickCount = 0;
let yesSize = 1;
let isMusicPlaying = false;
let currentPhotoIndex = 0;

// ===== DOM ELEMENTS =====
const noButton = document.getElementById('noButton');
const yesButton = document.querySelector('.yes-button');
const clickCounter = document.querySelector('#clickCounter span');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const photoContainer = document.getElementById('photoContainer');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log("💖 Valentine Website Loaded!");
    
    // Setup initial state
    createFloatingHearts(20);
    loadLocalStorage();
    setupPhotoCarousel();
    
    // Setup music
    bgMusic.volume = 0.4;
    bgMusic.preload = 'auto';
    
    // Event Listeners
    noButton.addEventListener('click', handleNoClick);
    noButton.addEventListener('mouseover', handleNoHover);
    noButton.addEventListener('touchstart', handleNoHover);
    musicToggle.addEventListener('click', toggleMusic);
    
    // Auto-play music after user interaction (optional)
    document.body.addEventListener('click', initMusicAutoPlay, { once: true });
    
    // Show welcome message
    setTimeout(() => {
        console.log("✨ Ready for romance!");
    }, 1000);
});

// ===== NO BUTTON HANDLERS =====
function handleNoClick() {
    // Update button text
    updateNoButtonText();
    
    // Grow YES button
    growYesButton();
    
    // Update counter
    updateClickCounter();
    
    // Effects
    createClickEffects();
    
    // Save to storage
    saveToLocalStorage();
    
    // Change photo periodically
    if (clickCount % 3 === 0) {
        changePhoto();
    }
}

function handleNoHover() {
    if (clickCount > 3) {
        moveButtonRandomly(noButton);
    }
}

function updateNoButtonText() {
    const icon = '<i class="fas fa-question-circle"></i>';
    noButton.innerHTML = `${icon} ${messages[messageIndex]}`;
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Add shake animation
    noButton.classList.add('shake');
    setTimeout(() => noButton.classList.remove('shake'), 300);
}

function growYesButton() {
    yesSize += 0.25;
    const scale = Math.min(yesSize, 3); // Max 3x size
    yesButton.style.transform = `scale(${scale})`;
    
    // Change color slightly
    const hue = 120 + (clickCount * 2); // Gets greener
    yesButton.style.background = `linear-gradient(135deg, hsl(${hue}, 80%, 60%), hsl(${hue}, 80%, 50%))`;
}

function updateClickCounter() {
    clickCount++;
    clickCounter.textContent = clickCount;
    clickCounter.style.animation = 'none';
    setTimeout(() => {
        clickCounter.style.animation = 'pulse 0.5s';
    }, 10);
}

function createClickEffects() {
    // Small confetti
    confetti({
        particleCount: Math.min(clickCount * 5, 100),
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff6b8b', '#ff8e53', '#a06cd5']
    });
    
    // Create floating heart
    createFloatingHeart(noButton);
    
    // Sound effect (optional)
    playClickSound();
}

// ===== YES BUTTON HANDLER =====
function handleYesClick() {
    // Mega celebration!
    triggerYesCelebration();
    
    // Save response
    saveYesResponse();
    
    // Redirect to yes page
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 2000);
}

function triggerYesCelebration() {
    // Big confetti explosion
    confetti({
        particleCount: 400,
        spread: 150,
        origin: { y: 0.6 }
    });
    
    // Side cannons
    setTimeout(() => {
        confetti({
            particleCount: 150,
            angle: 60,
            spread: 100,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 150,
            angle: 120,
            spread: 100,
            origin: { x: 1 }
        });
    }, 250);
    
    // Screen flash
    document.body.style.backgroundColor = '#ffffff';
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 300);
    
    // Button celebration
    yesButton.innerHTML = '<i class="fas fa-heart"></i> THANK YOU! <i class="fas fa-heart"></i>';
    yesButton.style.animation = 'pulse 0.5s infinite';
}

// ===== PHOTO CAROUSEL =====
function setupPhotoCarousel() {
    // Check if photos exist
    const img = new Image();
    img.src = photoSources[0];
    img.onload = function() {
        // Photo exists, display it
        displayPhoto(0);
        
        // Auto rotate photos every 10 seconds
        setInterval(() => {
            currentPhotoIndex = (currentPhotoIndex + 1) % photoSources.length;
            displayPhoto(currentPhotoIndex);
        }, 10000);
    };
    
    img.onerror = function() {
        // No photo found, show default
        photoContainer.innerHTML = `
            <div class="default-photo">
                <i class="fas fa-heartbeat fa-4x"></i>
                <p>Our Photo Here 💖</p>
                <p class="hint-text">Add your photo to: assets/images/couple-photo.jpg</p>
            </div>
        `;
    };
}

function displayPhoto(index) {
    photoContainer.innerHTML = `
        <img src="${photoSources[index]}" alt="Our Memory ${index + 1}" id="couplePhoto">
        <div class="photo-overlay">
            Memory ${index + 1} of ${photoSources.length} 💕
        </div>
    `;
}

function changePhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoSources.length;
    displayPhoto(currentPhotoIndex);
}

// ===== ANIMATION & EFFECTS =====
function createFloatingHearts(count) {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = getRandomHeartIcon();
            
            // Random properties
            const size = Math.random() * 30 + 20;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 4 + 6;
            const opacity = Math.random() * 0.5 + 0.5;
            
            heart.style.fontSize = `${size}px`;
            heart.style.left = `${left}%`;
            heart.style.top = `${Math.random() * 120 - 10}%`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.animationDuration = `${duration}s`;
            heart.style.opacity = opacity;
            
            container.appendChild(heart);
            
            // Remove after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, duration * 1000);
        }, i * 200);
    }
}

function createFloatingHeart(button) {
    const rect = button.getBoundingClientRect();
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = getRandomHeartIcon();
    
    heart.style.fontSize = '30px';
    heart.style.left = `${rect.left + rect.width/2}px`;
    heart.style.top = `${rect.top}px`;
    heart.style.position = 'fixed';
    heart.style.animationDuration = '2.5s';
    heart.style.zIndex = '1000';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 2500);
}

function getRandomHeartIcon() {
    const hearts = ['❤️', '💖', '💗', '💓', '💞', '💕', '💘', '💝'];
    return hearts[Math.floor(Math.random() * hearts.length)];
}

function moveButtonRandomly(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    // Calculate available space
    const padding = 20;
    const maxX = containerRect.width - buttonRect.width - padding * 2;
    const maxY = containerRect.height - buttonRect.height - padding * 2;
    
    // Only move if there's space
    if (maxX > 0 && maxY > 0) {
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        button.style.transition = 'all 0.3s ease-out';
        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
        
        // Reset after delay
        setTimeout(() => {
            button.style.transition = 'all 0.5s ease-in-out';
            button.style.position = '';
            button.style.left = '';
            button.style.top = '';
        }, 800);
    }
}

// ===== MUSIC CONTROLS =====
function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i> <span>Play Music</span>';
        musicToggle.style.background = 'linear-gradient(135deg, #a06cd5 0%, #c084fc 100%)';
    } else {
        bgMusic.play().then(() => {
            musicToggle.innerHTML = '<i class="fas fa-pause"></i> <span>Pause Music</span>';
            musicToggle.style.background = 'linear-gradient(135deg, #ff6b8b 0%, #ff8e53 100%)';
            isMusicPlaying = true;
        }).catch(e => {
            console.log("Music play failed:", e);
            alert("Click the button again to play music! 🎵");
        });
    }
    isMusicPlaying = !isMusicPlaying;
}

function initMusicAutoPlay() {
    // Try to auto-play music quietly
    bgMusic.volume = 0.1;
    bgMusic.play().then(() => {
        isMusicPlaying = true;
        musicToggle.innerHTML = '<i class="fas fa-pause"></i> <span>Pause Music</span>';
        musicToggle.style.background = 'linear-gradient(135deg, #ff6b8b 0%, #ff8e53 100%)';
        setTimeout(() => {
            bgMusic.volume = 0.4;
        }, 1000);
    }).catch(e => {
        // Auto-play failed, that's okay
        console.log("Auto-play prevented, user interaction required");
    });
}

function playClickSound() {
    // Create a simple click sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800 + (clickCount * 20);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Web Audio not supported, that's fine
    }
}

// ===== LOCAL STORAGE =====
function saveToLocalStorage() {
    localStorage.setItem('valentineClickCount', clickCount);
    localStorage.setItem('valentineYesSize', yesSize);
    localStorage.setItem('valentineLastVisit', new Date().toISOString());
}

function loadLocalStorage() {
    const savedClicks = localStorage.getItem('valentineClickCount');
    if (savedClicks) {
        clickCount = parseInt(savedClicks);
        clickCounter.textContent = clickCount;
        
        const savedSize = localStorage.getItem('valentineYesSize');
        if (savedSize) {
            yesSize = parseFloat(savedSize);
            yesButton.style.transform = `scale(${Math.min(yesSize, 3)})`;
        }
        
        console.log(`Loaded previous session: ${clickCount} clicks`);
    }
}

function saveYesResponse() {
    const response = {
        answer: 'YES',
        timestamp: new Date().toISOString(),
        clicksBeforeYes: clickCount,
        totalTime: Date.now() - performance.timing.navigationStart
    };
    
    localStorage.setItem('valentineResponse', JSON.stringify(response));
    localStorage.setItem('valentineSaidYes', 'true');
}

// ===== UTILITY FUNCTIONS =====
function addCSSAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        .default-photo {
            padding: 30px;
            text-align: center;
        }
        
        .default-photo i {
            margin-bottom: 20px;
            color: #ff6b8b;
            animation: heartbeat 1.5s infinite;
        }
        
        .hint-text {
            font-size: 0.9rem;
            color: #888;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(style);
}

// Initialize CSS animations
addCSSAnimation();