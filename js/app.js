$(document).ready(function() {
    // When the cursor enters the div hide the still image
    // and replace it with the ready gif
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    // When the cursor leaves the div, repalce the ready gif
    // with the still image
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    // When the user clicks the mouse button down while in the div,
    // change from the ready image to the throwing image.
    .mousedown(function() {
        console.log('mousedown');
        // Play the audio clip
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        // Add the ball of fire
        $('.hadouken').show();
        // Animate the ball of fire across the screen
    })
    // When the mouse button is released, switch back to the ready image
    .mouseup(function() {
        console.log('mouseup');
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});