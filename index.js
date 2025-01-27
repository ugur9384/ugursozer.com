document.addEventListener("DOMContentLoaded", () => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["student"];
    const typingDelay = 200; // Delay between each letter
    const erasingDelay = 100; // Delay between erasing letters (if needed)
    const newTextDelay = 2000; // Delay before typing starts again
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.style.animation = "blink 0.6s step-start infinite"; // Cursor keeps blinking

            // Remove the cursor after the text has fully typed
            setTimeout(() => {
                cursorSpan.style.display = "none"; // Hides the cursor
            }, 1000); // 1-second delay before hiding the cursor
        }
    }

    function startTypingEffect() {
        if (textArray.length) {
            typedTextSpan.textContent = "";
            type();
        }
    }

    startTypingEffect();
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");
    const navWrapper = document.querySelector("header"); // Assuming the entire nav/header wrapper needs to hide
    let lastScrollTop = 0;

    // Toggle menu visibility on click
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active"); // Add/remove 'active' class
    });

    // Handle scrolling logic
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // If scrolling down, hide both the nav links and the menu toggle
        if (currentScroll > lastScrollTop) {
            navWrapper.style.transform = "translateY(-100%)"; // Slide up
            navWrapper.style.transition = "transform 0.3s ease-in-out"; // Smooth hiding
        } else {
            // If scrolling up, show both the nav links and the menu toggle
            navWrapper.style.transform = "translateY(0)"; // Slide back down
        }

        lastScrollTop = currentScroll; // Update last scroll position
    });
});
