$(document).ready(function() {

    // SETUP
    var $list, $newItemForm, $newItemButton;
    var item = '';                                 // item is an empty string
    $list = $('ul');                               // Cache the unordered list
    $newItemForm = $('#newItemForm');              // Cache form to add new items
    $newItemButton = $('#newItemButton');          // Cache button to show form

    // ITEM COUNTER
    function updateCount() {                       // Create function to update counter
        var items = $('li[class!=complete]').length; // Number of items in list
        $('#counter').text(items);                   // Added into counter circle
    }
    updateCount();                                 // Call the function

    // SETUP FORM FOR NEW ITEMS
    $newItemButton.show();                         // Show the button
    $newItemForm.hide();                           // Hide the form
    $('#showForm').on('click', function() {        // When click on add item button
        $newItemButton.hide();                       // Hide the button
        $newItemForm.show();                         // Show the form
    });
     // ADDING A NEW LIST ITEM
    $newItemForm.on('submit', function(e) {       // When a new item is submitted
        e.preventDefault();                         // Prevent form being submitted
        var text = $('input:text').val();           // Get value of text input
        $list.append('<li>' + text + '</li>');      // Add item to end of the list
        $('input:text').val('');                    // Empty the text input
        updateCount();                              // Update the count
    });

    //Check as Complete
    $list.on('click', 'li', function() {
        var $this = $(this);
        var complete = $this.hasClass('complete');

        if (complete !== true) {
            item = $this.text();             // Get the text from the list item
            $this.remove();                  // Remove the list item
            $list                            // Add back to end of list as complete
                .append('<li class=\"complete\">' + item + '<button type="button" class="trashbutton" src="/images/icon-trash.png" alt="Trash Icon"></button>' + '</li>')
                .hide().fadeIn(300);           // Hide it so it can be faded in
            complete = true;
        }
        updateCount();
    });

 $list.on('click', 'li > button', function() {
        var $this = $(this);
        var readyToDelete = $this.hasClass('trashbutton');

        if(readyToDelete === true) {
            $this.parent().animate({                
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function() {
                $(this).remove();
            });
        }
        updateCount;
    }); 
});





    