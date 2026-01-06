/* 1. NAVBAR SCROLL EFFECT
   Changes the navbar from transparent to black when you scroll down.
*/
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('nav-black');
    } else {
        nav.classList.remove('nav-black');
    }
});


/* 2. VIDEO CONFIGURATION
   Paste your YouTube Video IDs here.
   Order matters! The first ID corresponds to the first image in that row in your HTML.
*/

// The Big Banner Video (The "Play" button at the top)
const mainHeroVideoId = "YOUR_MAIN_VIDEO_ID_HERE"; 

// Row 1: Trending in Our Hearts (Standard landscape images)
const trendingVideos = [
    "VIDEO_ID_1", // Matches thumb1.jpg
    "VIDEO_ID_2", // Matches thumb2.jpg
    "VIDEO_ID_3", // Matches thumb3.jpg
    "VIDEO_ID_4", // Matches thumb4.jpg
    "VIDEO_ID_5", // Matches thumb5.jpg
    "VIDEO_ID_6"  // Matches thumb6.jpg
];

// Row 2: Your Favorites / Originals (Large vertical images)
const originalVideos = [
    "VIDEO_ID_1", 
    "VIDEO_ID_2", 
    "VIDEO_ID_3", 
    "VIDEO_ID_4", 
    "VIDEO_ID_5"
];

// Row 3: Funniest Moments
const funnyVideos = [
    "VIDEO_ID_1", 
    "VIDEO_ID_2", 
    "VIDEO_ID_3", 
    "VIDEO_ID_4", 
    "VIDEO_ID_5"
];


/* 3. CLICK LOGIC
   This attaches the click event to the images.
*/

// Function to attach clicks to a specific row
function setupRow(rowIndex, videoList) {
    // Get the specific row of posters from the HTML
    const row = document.querySelectorAll('.row-posters')[rowIndex];
    const images = row.querySelectorAll('.row-poster');

    // Loop through the images and assign the video ID
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            // Check if we have a video ID for this image
            if (videoList[index]) {
                // Redirect to watch page with the ID
                window.location.href = `watch.html?v=${videoList[index]}`;
            } else {
                alert("This video hasn't been uploaded yet!");
            }
        });
    });
}

// Initialize the rows
// Index 0 = First row in HTML, Index 1 = Second row, etc.
setupRow(0, trendingVideos);
setupRow(1, originalVideos);
setupRow(2, funnyVideos);


/* 4. HERO BUTTON LOGIC
*/
const playButton = document.querySelector('.play-btn');
const infoButton = document.querySelector('.info-btn');

playButton.addEventListener('click', () => {
    window.location.href = `watch.html?v=${mainHeroVideoId}`;
});

infoButton.addEventListener('click', () => {
    alert("This is the story of our first year together. Created with love.");
});
/* 5. AVATAR CHECKER
   This looks at localStorage to see who logged in and updates the top-right icon.
*/
const userAvatar = document.querySelector('.nav-avatar');
const savedAvatar = localStorage.getItem('loveFlixAvatar');

if (savedAvatar) {
    // If we found a saved avatar, update the image source
    userAvatar.src = savedAvatar;
}
// If not found, it keeps the default "avatar.png" you set in HTML
