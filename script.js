//jQuery

function newItem() {
// add new item to the list of items
    let li = $('<li></li>');
    let newValue = $('#input').val();
    $(li).append(newValue);

    if (newValue === '') {
        alert ("You cannot add an empty task.");
    } else {
        $('#list').append(li);
    }
    
// cross out an item from the list
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);

// delete an item from the list
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);

    function deleteListItem() {
        li.addClass('delete');
    }

    crossOutButton.on('click', deleteListItem);

// reorder the items
    $('#list').sortable();

}



