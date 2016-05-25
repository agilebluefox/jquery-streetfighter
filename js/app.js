$(document).ready(function() {
    // When the cursor enters the div hide the still image
    // and replace it with the ready gif
    $('.ryu').mouseenter(function() {
        // Debugging message
        console.log('The mouse is in the container');
        $('.ryu-still').hide();
        // $('.ryu-cool').hide();
        $('.ryu-ready').show();
    })
    // When the cursor leaves the div, repalce the ready gif
    // with the still image
    .mouseleave(function() {
        // Debugging message
        console.log('The mouse left the container');
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    // When the user clicks the mouse button down while in the div,
    // change from the ready image to the throwing image.
    .mousedown(function() {
        console.log('mousedown');
        // Play the audio clip
        playHadouken();
        $('.ryu-ready').hide();
        // I had to hide the ryu-still div and add some additional css
        // to solve the issue that occured when the keyup event
        // was followed immediately by a mousedown event
        $('.ryu-still').hide();
        $('.ryu-throwing').show();
        // Add the ball of fire and animate it across the screen
        $('.hadouken').finish().show().animate(
            { 'left' : '1020px' },
            500,
            function() {
                $(this).hide();
                $(this).css('left', '535px');
            }
        );
    })
    // When the mouse button is released, switch back to the ready image
    .mouseup(function() {
        console.log('mouseup');
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    // When the 'x' key is pressed, make ryu cool
    // Select the body tag (or the document?)
    // Using the example from the API docs ....
    $(document).keydown(function(x) {
        // Check for a specific key - 'x'
        if(x.which == 88) {
            // debugging message
            console.log( "Handler for .keydown() called." );
            // Hide the other images and show the "cool" image
            // $('.ryu-throwing').hide();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-cool').show();
        }
    })
    // Switch out the cool image when the 'x' key is released
    .keyup(function(x) {
        if(x.which == 88) {
            // debugging message
            console.log( "Handler for .keyup() called." );
            $('.ryu-cool').hide();
            // $('.ryu-ready').hide();
            // $('.ryu-throwing').hide();
            $('.ryu-still').show();
        }
    })
});

// Function to play the sound when ryu fires a shot
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}