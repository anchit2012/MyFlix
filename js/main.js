document.addEventListener('DOMContentLoaded', () => {

    /* 0. THE GATEKEEPER */
    if (!localStorage.getItem('loveFlixAvatar')) {
        window.location.href = "profiles.html";
    }

    /* 1. NAVBAR SCROLL EFFECT */
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-black');
        } else {
            nav.classList.remove('nav-black');
        }
    });

    /* 2. VIDEO CONFIGURATION */
    // The Big Banner Video
    const mainHeroVideoId = "YOUR_MAIN_VIDEO_ID_HERE"; 

    // Row 1: Trending
    const trendingVideos = [
        "VIDEO_ID_1", 
        "VIDEO_ID_2", 
        "VIDEO_ID_3", 
        "VIDEO_ID_4", 
        "VIDEO_ID_5", 
        "VIDEO_ID_6"
    ];

    // Row 2: Favorites (Originals)
    const originalVideos = [
        "VIDEO_ID_1", 
        "VIDEO_ID_2", 
        "VIDEO_ID_3", 
        "VIDEO_ID_4", 
        "VIDEO_ID_5"
    ];

    /* 3. CLICK LOGIC */
    function setupRow(rowIndex, videoList) {
        const rows = document.querySelectorAll('.row-posters');
        
        // SAFETY CHECK: Does this row actually exist in the HTML?
        if (rows[rowIndex]) {
            const row = rows[rowIndex];
            const images = row.querySelectorAll('.row-poster');

            images.forEach((img, index) => {
                img.addEventListener('click', () => {
                    if (videoList[index]) {
                        window.location.href = `watch.html?v=${videoList[index]}`;
                    } else {
                        alert("This video hasn't been uploaded yet!");
                    }
                });
            });
        }
    }

    // Initialize the rows (ONLY 0 and 1 now)
    setupRow(0, trendingVideos);
    setupRow(1, originalVideos);
    // REMOVED setupRow(2) because you deleted that row

    /* 4. HERO BUTTON LOGIC */
    const playButton = document.querySelector('.play-btn');
    const infoButton = document.querySelector('.info-btn');

    if (playButton) {
        playButton.addEventListener('click', () => {
            window.location.href = `watch.html?v=${mainHeroVideoId}`;
        });
    }

    if (infoButton) {
        infoButton.addEventListener('click', () => {
            alert("This is the story of our first year together. Created with love.");
        });
    }

    /* 5. AVATAR CHECKER & LOGOUT */
    const userAvatar = document.querySelector('.nav-avatar');
    const savedAvatar = localStorage.getItem('loveFlixAvatar');

    if (userAvatar) {
        // Update image if saved
        if (savedAvatar) {
            userAvatar.src = savedAvatar;
        }

        // Logout Logic
        userAvatar.addEventListener('click', () => {
            localStorage.removeItem('loveFlixAvatar');
            window.location.href = "profiles.html";
        });
        
        // Make sure it looks clickable
        userAvatar.style.cursor = "pointer";
    }
});
