💖 Valentine Proposal Website

A beautiful, interactive Valentine's Day proposal website with playful animations, music, and a heartfelt "Yes" celebration page.

🎯 Live Demo

Click here to view the website

✨ Features

🏠 Main Page

· Interactive "Yes" & "No" buttons with growing/shrinking effects
· No button that changes messages and runs away on hover
· Photo carousel displaying your memories together
· Background music controls
· Floating heart animations
· Confetti effects
· Responsive design for all devices
· Local storage to save interaction history

🎉 Yes Page

· Celebration mode with continuous confetti
· Personalized message display
· Memory photo gallery
· Valentine's Day countdown timer
· Decision statistics
· Social sharing options
· Beautiful animations and transitions

📁 Project Structure

```
valentine-project/
├── index.html                    # Main proposal page
├── yes_page.html                 # Celebration page after "Yes"
├── css/
│   ├── style.css                 # Main styles
│   └── yes-style.css             # Yes page styles
├── js/
│   ├── script.js                 # Main page logic
│   └── yes-script.js             # Yes page logic
└── assets/
    ├── images/
    │   ├── couple-photo.jpg      # Your main photo (REQUIRED)
    │   ├── memory1.jpg           # Memory photo 1 (optional)
    │   └── memory2.jpg           # Memory photo 2 (optional)
    └── audio/
        └── bg-music.mp3          # Background music (REQUIRED)
```

🚀 Quick Start

1. Clone or Download the project folder
2. Prepare your assets:
   · Add your couple photo as assets/images/couple-photo.jpg
   · Add background music as assets/audio/bg-music.mp3
3. Open index.html in your browser
4. Customize the content (see below)

🛠️ Customization

1. Change Photos

· Replace assets/images/couple-photo.jpg with your photo
· Add more photos as memory1.jpg, memory2.jpg, etc.
· Update the photoSources array in js/script.js if adding more photos

2. Personalize Messages

Edit the following files:

In index.html:

```html
<!-- Line 15-17 -->
<p class="quote">"I've never felt so sure, I want you to be mine"</p>

<!-- Line 54 -->
<p>Made with <i class="fas fa-heart"></i> for the most special person</p>
```

In js/script.js:

```javascript
// Line 2-22: Change the "No" button messages
const messages = [
    "Are you sure?",
    "Really sure?",
    // ... add your own messages
];
```

In yes_page.html:

```html
<!-- Line 36-41: Personal message -->
<p class="message">
    "From the moment you said 'Yes', my world became brighter..."
</p>

<!-- Line 44: Your signature -->
<p class="name">[Your Name Here] 💌</p>
```

3. Change Colors

Edit the CSS variables in css/style.css:

```css
/* Main colors - change these values */
.header h1 { color: #ff6b8b; } /* Pink color */
.yes-button { background: linear-gradient(135deg, #40e495, #30dd8a); } /* Green */
.no-button { background: linear-gradient(135deg, #ff6b8b, #ff8e53); } /* Orange-Pink */
```

4. Change Music

· Replace assets/audio/bg-music.mp3 with your chosen song
· Supported formats: MP3, WAV, OGG
· Recommended: Instrumental or romantic songs

📱 Responsive Design

The website works perfectly on:

· Desktop computers (1920px and above)
· Laptops (1366px - 1920px)
· Tablets (768px - 1366px)
· Mobile phones (320px - 767px)

🌐 Deployment

Deploy to GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all project files
3. Go to Repository Settings → Pages
4. Select "main branch" as source
5. Your site will be at: https://your-username.github.io/repository-name/

Deploy to Netlify (Free)

1. Drag and drop your project folder to Netlify
2. Get a custom URL like: your-site-name.netlify.app

🔧 Technical Details

Built With

· HTML5, CSS3, JavaScript (Vanilla)
· Canvas Confetti Library
· Font Awesome Icons
· Google Fonts (Pacifico, Quicksand, Dancing Script)

Browser Support

· Chrome 60+
· Firefox 55+
· Safari 12+
· Edge 79+

Performance

· Optimized images (auto-compressed)
· Lazy loading for gallery images
· Minimal external dependencies
· Efficient CSS animations

🐛 Troubleshooting

Issue: Photos not showing

Solution: Check that:

· Files are in assets/images/ folder
· File names match exactly (case-sensitive)
· File extensions are .jpg or .png

Issue: Music not playing

Solution:

· Browser may block auto-play, click the music button
· Ensure MP3 file is not corrupted
· Try a different audio file format

Issue: Buttons not working

Solution:

· Open browser console (F12)
· Check for JavaScript errors
· Ensure all JS files are loaded

📝 License

This project is open source and available for personal use. Please give credit if modifying and sharing.

🤝 Contributing

Feel free to fork this project and customize it for your own Valentine's Day proposal!

💌 Special Thanks

· beabadoobee for the "Glue Song" inspiration
· Canvas Confetti for the celebration effects
· Font Awesome for the beautiful icons
· Google Fonts for the typography

🎨 Color Palette

Color Hex Usage
Romantic Pink #ff6b8b Headers, buttons, accents
Warm Orange #ff8e53 Subtitles, highlights
Purple #a06cd5 Quotes, secondary elements
Green #40e495 Yes button, success elements
Light Pink #ffafbd Background gradient
Peach #ffc3a0 Background gradient

📊 Analytics (Optional)

To track how many times she hesitated:

1. The counter is saved in browser's local storage
2. Data persists between sessions
3. No external tracking - privacy focused

🌟 Pro Tips

1. Test on mobile before sending the link
2. Use high-quality photos for best results
3. Choose meaningful music that you both love
4. Personalize the messages to make it special
5. Schedule the delivery for a romantic moment

---

Made with ❤️ for that special someone in your life. Good luck with your proposal! 💘