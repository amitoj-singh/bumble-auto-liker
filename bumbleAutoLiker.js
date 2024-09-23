//https://github.com/amitoj-singh/bumble-auto-liker/
(function() {
  // Ask the user for the number of likes to send
  const numberOfLikes = parseInt(prompt('How many likes would you like to send?'), 10);

  // Validate input
  if (isNaN(numberOfLikes) || numberOfLikes <= 0) {
    alert('Please enter a positive number');
    throw new Error('Invalid input');
  }

  let currentCount = 0;
  const likeButtonSelector = '.encounters-action.tooltip-activator.encounters-action--like';

  // Function to send a like
  function like() {
    if (currentCount >= numberOfLikes) {
      console.log(`A total of ${currentCount} likes have been sent`);
      return;
    }

    const likeButton = document.querySelector(likeButtonSelector);

    if (likeButton && likeButton.offsetParent !== null) {
      likeButton.click();
      currentCount++;
      console.log(`Like ${currentCount}`);
      // Generate a random delay between 0 and 5000 milliseconds
      const randomDelay = Math.floor(Math.random() * 5000);
      // Send the next like after the random delay
      setTimeout(like, randomDelay);
    } else {
      console.log('No "Like" button found or the button is not visible.');
      alert('The "Like" button was not found or is not visible.');
    }
  }

  // Start the liking process
  like();
})();
