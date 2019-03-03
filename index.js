$(function() {
    //Add item functionality
    $('.js-addItem').submit(function(event) {
        event.preventDefault();
        let newItem = $('input[id="shopping-list-entry"]').val();
        $('li:last').after(
        `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`);
    });
    
    //Check/un-check items functionality
    $('ul').on('click', 'button.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    //Delete items functionality
    $('ul').on('click', 'button.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
})