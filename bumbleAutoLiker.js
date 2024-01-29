//https://github.com/amitoj-singh/bumble-auto-liker/
var confirmBox = parseInt(prompt('How many likes do you want to send ?'));
if (isNaN(confirmBox)) {
    alert('You must enter a number');
    throw new Error('You must enter a number');
}

var count = 0;
var like = function() {
    if (confirmBox > 0) {
        //select right swipe button element and fire a click event
        var likeBtn = document.querySelector('.encounters-action.tooltip-activator.encounters-action--like');
        if (likeBtn && likeBtn.offsetParent !== null) {
            if (count >= confirmBox) {
                console.log('Send ' + count + ' likes');
                return;
            }
            likeBtn.click();
            console.log('Like ' + (count + 1));
            count++;
        } else {
            console.log('Any "Like" button found or the button is not visible.');
        }
    };
    setTimeout(like, 1000); //time in miliseconds after which like button will be clicked
};
setTimeout(like, 1000); //time in miliseconds after which like button will be clicked

