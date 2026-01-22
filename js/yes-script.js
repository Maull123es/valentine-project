// ===== CONFIGURATION =====
const memoryImages = [
    'assets/images/couple-photo.jpg',
    'assets/images/memory1.jpg',
    'assets/images/memory2.jpg'
];

const memoryCaptions = [
    "Our First Photo Together ❤️",
    "Beautiful Memories 😊",
    "Happiest Moments 🌟"
];

// ===== STATE VARIABLES =====
let confettiInterval;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎉 Yes Page Loaded!");
    
    // Load saved data
    loadResponseData();
    
    // Setup gallery
    setupMemoryGallery();
    
    // Start celebrations
    startCelebrations();
    
    // Setup countdown
    setupCountdown();
    
    // Setup event listeners
    setupEventListeners();
    
    // Play celebration sound
    playCelebrationSound();
});

// ===== DATA LOADING =====
function loadResponseData() {
    // Load hesitation count
    const savedClicks = localStorage.getItem('valentineClickCount') || '0';
    document.getElementById('hesitationCount').textContent = savedClicks;
    
    // Load response time
    const response = localStorage.getItem('valentineResponse');
    if (response) {
        try {
            const data = JSON.parse(response);
            const date = new Date(data.timestamp);
            
            // Format date beautifully
            const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            document.getElementById('decisionTime').textContent = formattedDate;
            
            // Set Valentine's date
            setValentineDate();
            
        } catch (e) {
            console.log("Error parsing response:", e);
            document.getElementById('decisionTime').textContent = "Just now!";
        }
    } else {
        document.getElementById('decisionTime').textContent = "Just now!";
    }
}

function setValentineDate() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let valentineDate = new Date(currentYear, 1, 14); // February 14
    
    // If Valentine's has passed this year, show next year's
    if (now > valentineDate) {
        valentineDate = new Date(currentYear + 1, 1, 14);
    }
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('valentineDate').textContent = 
        valentineDate.toLocaleDateString('en-US', options);
}

// ===== GALLERY SETUP =====
function setupMemoryGallery() {
    const gallery = document.getElementById('memoryGallery');
    
    // Clear loading content
    gallery.innerHTML = '';
    
    // Add memory items
    memoryImages.forEach((src, index) => {
        const img = new Image();
        img.onload = function() {
            // Image exists, add it to gallery
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${src}" alt="Memory ${index + 1}" loading="lazy">
                <div class="gallery-caption">${memoryCaptions[index] || `Memory ${index + 1}`}</div>
            `;
            
            // Add click to enlarge
            galleryItem.addEventListener('click', () => {
                showFullscreenImage(src, memoryCaptions[index]);
            });
            
            gallery.appendChild(galleryItem);
        };
        
        img.onerror = function() {
            // Image doesn't exist, add placeholder
            if (index === 0) { // Only show one placeholder
                const placeholder = document.createElement('div');
                placeholder.className = 'gallery-item placeholder';
                placeholder.innerHTML = `
                    <div class="placeholder-content">
                        <i class="fas fa-camera"></i>
                        <p>Add your photos!</p>
                    </div>
                `;
                gallery.appendChild(placeholder);
            }
        };
        
        img.src = src;
    });
    
    // If no images loaded, add message
    if (gallery.children.length === 0) {
        gallery.innerHTML = `
            <div class="no-memories">
                <i class="fas fa-images fa-3x"></i>
                <p>No memories yet!</p>
                <p class="hint">Add photos to the assets/images/ folder</p>
            </div>
        `;
    }
}

function showFullscreenImage(src, caption) {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-modal">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${src}" alt="${caption}">
            <div class="image-caption">${caption}</div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Add styles if not already present
    if (!document.querySelector('#overlay-styles')) {
        const styles = document.createElement('style');
        styles.id = 'overlay-styles';
        styles.textContent = `
            .image-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .image-modal {
                max-width: 90%;
                max-height: 90%;
                position: relative;
                animation: scaleIn 0.3s ease;
            }
            
            @keyframes scaleIn {
                from { transform: scale(0.8); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            
            .image-modal img {
                max-width: 100%;
                max-height: 70vh;
                border-radius: 10px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }
            
            .close-btn {
                position: absolute;
                top: -40px;
                right: -40px;
                background: #ff6b8b;
                border: none;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.2rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
            }
            
            .close-btn:hover {
                background: #ff4757;
                transform: rotate(90deg);
            }
            
            .image-caption {
                text-align: center;
                color: white;
                margin-top: 20px;
                font-size: 1.3rem;
                font-weight: 600;
            }
            
            @media (max-width: 768px) {
                .close-btn {
                    top: -50px;
                    right: 10px;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// ===== CELEBRATION EFFECTS =====
function startCelebrations() {
    // Initial big confetti burst
    triggerMegaConfetti();
    
    // Continuous confetti rain
    confettiInterval = setInterval(() => {
        confetti({
            particleCount: 15,
            spread: 100,
            origin: { y: 0 },
            colors: ['#ff6b8b', '#a06cd5', '#40e495', '#ff8e53', '#ffd166']
        });
    }, 2000);
    
    // Trophy animation
    const trophy = document.querySelector('.trophy');
    setInterval(() => {
        trophy.style.animation = 'none';
        setTimeout(() => {
            trophy.style.animation = 'spin 3s infinite linear';
        }, 10);
    }, 10000);
}

function triggerMegaConfetti() {
    // Center burst
    confetti({
        particleCount: 400,
        spread: 180,
        origin: { y: 0.6 },
        colors: ['#ff6b8b', '#ff8e53', '#a06cd5', '#40e495', '#ffd166']
    });
    
    // Sequential bursts
    setTimeout(() => {
        confetti({
            particleCount: 200,
            angle: 60,
            spread: 120,
            origin: { x: 0 }
        });
    }, 150);
    
    setTimeout(() => {
        confetti({
            particleCount: 200,
            angle: 120,
            spread: 120,
            origin: { x: 1 }
        });
    }, 300);
    
    // Top shower
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 150,
                    origin: { y: 0 },
                    colors: ['#ff6b8b', '#a06cd5']
                });
            }, i * 200);
        }
    }, 500);
}

function moreConfetti() {
    // Double the celebration!
    triggerMegaConfetti();
    
    // Button feedback
    const btn = document.querySelector('.celebration-btn');
    btn.innerHTML = '<i class="fas fa-fireworks"></i> WOOO! MORE!';
    btn.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-birthday-cake"></i> More Celebration!';
        btn.style.transform = '';
    }, 1000);
}

function playCelebrationSound() {
    // Try to play celebration sound
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create a festive sound
        const playNote = (frequency, duration, time) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, time);
            gainNode.gain.exponentialRampToValueAtTime(0.01, time + duration);
            
            oscillator.start(time);
            oscillator.stop(time + duration);
        };
        
        // Play a little melody
        const now = audioContext.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        
        notes.forEach((note, i) => {
            playNote(note, 0.3, now + i * 0.2);
        });
        
    } catch (e) {
        // Sound not supported, that's okay
    }
}

// ===== COUNTDOWN TIMER =====
function setupCountdown() {
    // Set target date (next Valentine's Day)
    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = new Date(currentYear, 1, 14, 0, 0, 0); // February 14
    
    // If Valentine's has passed, use next year
    if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 1, 14, 0, 0, 0);
    }
    
    // Update countdown immediately
    updateCountdown(targetDate);
    
    // Update every second
    setInterval(() => updateCountdown(targetDate), 1000);
}

function updateCountdown(targetDate) {
    const now = new Date();
    const diff = targetDate - now;
    
    // Calculate time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update display
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Add animation when numbers change
    const numbers = document.querySelectorAll('.countdown-item .number');
    numbers.forEach(num => {
        num.classList.add('updating');
        setTimeout(() => num.classList.remove('updating'), 300);
    });
}

// ===== SHARE FUNCTIONALITY =====
function shareTheLove() {
    const shareText = "I just said YES to being someone's Valentine! 💖 This adorable website made my day!";
    const shareUrl = window.location.href;
    
    // Check if Web Share API is supported
    if (navigator.share) {
        navigator.share({
            title: 'I said YES! 💌',
            text: shareText,
            url: shareUrl
        }).then(() => {
            console.log('Share successful!');
        }).catch(error => {
            console.log('Error sharing:', error);
            fallbackShare(shareText, shareUrl);
        });
    } else {
        fallbackShare(shareText, shareUrl);
    }
}

function fallbackShare(text, url) {
    // Try to copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(`${text} ${url}`)
            .then(() => {
                alert("Link copied to clipboard! 📋\n\nShare it with your friends!");
            })
            .catch(() => {
                prompt("Copy this link to share:", url);
            });
    } else {
        prompt("Copy this link to share:", url);
    }
}

// ===== NAVIGATION =====
function goBack() {
    // Add exit animation
    document.querySelector('.yes-container').style.animation = 'fadeOut 0.5s ease';
    
    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);
}

// ===== EVENT LISTENERS SETUP =====
function setupEventListeners() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.95); }
        }
        
        .updating {
            animation: pulseNumber 0.3s ease;
        }
        
        @keyframes pulseNumber {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
        
        .placeholder-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: #aaa;
            gap: 10px;
        }
        
        .placeholder-content i {
            font-size: 2rem;
        }
        
        .no-memories {
            grid-column: 1 / -1;
            text-align: center;
            padding: 40px;
            color: #888;
        }
        
        .no-memories i {
            margin-bottom: 20px;
            color: #ddd;
        }
        
        .no-memories .hint {
            font-size: 0.9rem;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(style);
}

// Clean up on page unload
window.addEventListener('beforeunload', function() {
    if (confettiInterval) {
        clearInterval(confettiInterval);
    }
});