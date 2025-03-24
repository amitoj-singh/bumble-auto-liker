//https://github.com/amitoj-singh/bumble-auto-liker/
(function() {
    // Ask the user for the number of likes to send
    const numberOfLikes = parseInt(prompt('How many likes would you like to send?'), 10);

    // Validate the input
    if (isNaN(numberOfLikes) || numberOfLikes <= 0) {
        alert('Please enter a positive number');
        throw new Error('Invalid input');
    }

    let currentCount = 0;
    // Selector for the like button
    const likeButtonSelector = '.encounters-action.tooltip-activator.encounters-action--like';
    // Selector for the "Continue Bumbling" button (from the copied selector)
    const continueButtonSelector = "#main > div > div.page__layout > main > div.page__content-inner > article > div > footer > div.encounters-match__cta > div:nth-child(2) > button > span > span > span > span";

    // Helper function to click a button by its selector
    function tryClick(selector, attempt = 1) {
        const button = document.querySelector(selector);
        if (button && button.offsetParent !== null) {
            button.click();
            console.log(`Attempt ${attempt}: Clicked button '${selector}'`);
            return true;
        }
        return false;
    }

    // Function to control the like process
    function like() {
        // If the desired number of likes has been reached, stop the script
        if (currentCount >= numberOfLikes) {
            console.log(`A total of ${currentCount} likes have been sent`);
            return;
        }

        // Try to find the like button
        const likeButton = document.querySelector(likeButtonSelector);

        // If the like button isn't found or is not visible, try clicking the "Continue" button instead
        if (!likeButton || likeButton.offsetParent === null) {
            if (tryClick(continueButtonSelector)) {
                console.log('Clicked continue button to load the like button...');
            } else {
                console.log('No "Like" or continue button found or visible.');
            }
            // Wait for 1 second before trying to find the like button again
            setTimeout(like, 1000);
            return;
        }

        // Click the like button
        likeButton.click();
        currentCount++;
        console.log(`Like ${currentCount}`);

        // Generate a random delay between 0 and 5000 milliseconds before sending the next like
        const randomDelay = Math.floor(Math.random() * 5000);
        setTimeout(like, randomDelay);
    }

    // Start the process
    like();
})();
