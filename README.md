# 💖 Valentine Proposal Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://maull123es.github.io/valentine-project/)

A beautiful, interactive Valentine''s Day proposal website with playful animations, music, and a heartfelt celebration page. Make your special someone smile with this digital Valentine''s surprise!

## 🌐 Live Demo
**[Click here to see it live!](https://maull123es.github.io/valentine-project/)**

## ✨ Features

### 🎮 Interactive Experience
- **Dynamic Buttons**: "Yes" button grows bigger, "No" button changes messages and runs away
- **Photo Carousel**: Displays your precious memories together
- **Background Music**: Romantic soundtrack with play/pause controls
- **Confetti Effects**: Celebration animations when she says "Yes"
- **Floating Hearts**: Animated hearts in the background

### 💾 Smart Features
- **Click Counter**: Tracks how many times she hesitates
- **Local Storage**: Saves her response and interaction history
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Progress Tracking**: The more she hesitates, the bigger the "Yes" button gets

### 🎉 Celebration Page
- **Victory Confetti**: Continuous celebration effects
- **Memory Gallery**: Showcase your favorite photos together
- **Decision Stats**: Display fun statistics about her choice
- **Countdown Timer**: Time until your first Valentine''s together
- **Share Feature**: Let her share the happy news

## 📁 Project Structure

```
valentine-project/
├── index.html                    # Main proposal page
├── yes_page.html                 # Celebration page (after "Yes")
├── css/
│   ├── style.css                 # Main styles (pink/romantic theme)
│   └── yes-style.css             # Celebration page styles (gold/celebration)
├── js/
│   ├── script.js                 # Main page logic (button interactions, animations)
│   └── yes-script.js             # Celebration page logic (confetti, stats)
└── assets/
    ├── images/                   # Your photos (couple-photo.jpg, memory1.jpg, etc.)
    └── audio/                    # Background music (bg-music.mp3)
```

## 🚀 Quick Start

### For Users (She''ll see this):
1. Visit: https://maull123es.github.io/valentine-project/
2. See your photos and read the proposal
3. Click the buttons - watch them react!
4. Say "Yes" for a surprise celebration! 🎉

### For Developers (You):
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Maull123es/valentine-project.git
   \`\`\`
2. Add your photos to \`assets/images/\`:
   - \`couple-photo.jpg\` (main photo, 800x800px recommended)
   - \`memory1.jpg\`, \`memory2.jpg\` (optional additional memories)
3. Add background music to \`assets/audio/bg-music.mp3\`
4. Customize messages in \`js/script.js\` (lines 2-22)
5. Open \`index.html\` in your browser to test locally
6. Deploy to GitHub Pages for sharing

## 🛠️ Customization Guide

### Change Photos
Replace the files in \`assets/images/\`:
- \`couple-photo.jpg\` - Your main photo together
- \`memory1.jpg\`, \`memory2.jpg\` - Additional memories

### Change Messages
Edit \`js/script.js\`:
\`\`\`javascript
const messages = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    // Add your own messages here
];
\`\`\`

### Change Music
Replace \`assets/audio/bg-music.mp3\` with your favorite romantic song (MP3 format, < 5MB recommended).

### Personalize Text
Edit these files:
- \`index.html\` - Main proposal text
- \`yes_page.html\` - Celebration message
- Update the signature with your name

## 📱 Responsive Design

The website automatically adapts to:
- **Mobile**: 320px - 767px (touch-friendly buttons)
- **Tablet**: 768px - 1024px (optimized layout)
- **Desktop**: 1025px+ (full experience with animations)

## 🔧 Technical Details

- **Built With**: HTML5, CSS3, Vanilla JavaScript
- **Animations**: CSS keyframes + Canvas Confetti
- **Storage**: Browser LocalStorage API
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Pacifico, Quicksand, Dancing Script)
- **Deployment**: GitHub Pages

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Romantic Pink | \`#ff6b8b\` | Primary buttons, headers |
| Warm Orange | \`#ff8e53\` | Accents, highlights |
| Celebration Gold | \`#ffd700\` | Yes page, trophies |
| Soft Purple | \`#a06cd5\` | Quotes, secondary elements |
| Success Green | \`#40e495\` | Yes button, positive elements |

## 🤝 Contributing

Feel free to fork this project and customize it for your own Valentine''s Day proposal! 

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m ''Add some AmazingFeature''\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What does this mean?
- ✅ **You can**: Use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
- ✅ **You can**: Use for personal or commercial projects
- ✅ **You can**: Modify and create derivative works
- ✅ **You must**: Include the original copyright notice and license
- ❌ **The authors are not liable** for any damages

**TL;DR**: Feel free to use this for your own Valentine's proposal! Just give credit if you share it.

## 🙏 Acknowledgments

- [beabadoobee](https://open.spotify.com/artist/35l9BRT7MXmM8bv2WDQiyB) for the "Glue Song" inspiration
- [Canvas Confetti](https://www.kirilv.com/canvas-confetti/) for celebration effects
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- All the romantics who inspired this project ❤️

## 💝 Special Note

This website was created with love, JavaScript, and the hope of making someone''s day a little brighter. Whether she says yes immediately or after a few clicks, the journey is what makes it special.

Happy Valentine''s Day! May your love story be as beautiful as this website 💘

---

*Made with ❤️ by [Maull123es](https://github.com/Maull123es) for someone very special.*
