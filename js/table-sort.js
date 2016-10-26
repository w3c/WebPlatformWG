var sortOrder;

$('.sortable').each(function() {
    var $table = $(this);

    $table.find('th').each(function() {
        this.setAttribute('aria-sort', 'none');
    });

    $table.find('span.th-body').each(function() {
        this.setAttribute('role', 'button');
        this.setAttribute('tabindex', '0');
    });

    $table.on('click', '.sortableColumn', sortCol);
    $table.on('keydown', '.th-body', function (e) {
        if (e.which === 13 || e.which === 32) {
            this.click();
        }
    });
});

function sortCol() {
    var $table = $(this).closest('.sortable');
    var $tbody = $table.find('tbody');
    var $rows  = $table.find('tbody tr');
    var $sortableColumns = $table.find('.sortableColumn');

    // updates the sort icon and returns the new sort state
    sortOrder = updateIcon(this);
    var items = [];
    var sortType = this.getAttribute('data-sort');
    var thisIndex = $.inArray(this, $sortableColumns);

    // loop through each row and build our `items` array
    // which will become an array of objects:
    // {
    //  tr: (the HTMLElement reference to the given row),
    //  val: (the String value of the corresponding td)
    // }
    $rows.each(function () {
        var item = {};
        item.tr = this;
        $tds = $(this).find('td');
        var td = $tds[thisIndex];
        item.val = $(td).text();
        items.push(item);
    });

    // sort the array of values
    if (!sortType || sortType === 'standard') {
        items.sort(standardSort);
    } else if (sortType === 'date') {
        items.sort(dateSort);
    } else if (sortType === 'text') {
        items.sort(textSort);
    } else if (sortType === 'money') {
        items.sort(moneySort);
    }

    // clear the tbody's contents
    $tbody.html('');

    // append each row in the new, sorted order
    // currently not working in IE
    $.each(items, function (i, item) {
        $tbody.append(item.tr);
    });

    // update the live region:
    var updatedMessage = ' (Sorted by ' + $(this).text() + ': ' + sortOrder + ')';

    $('#liveForScreenReaders').text(updatedMessage);
    setTimeout(function() {
        $('#liveForScreenReaders').html('');
    }, 2000);
}

/**
* Updates the arrow icon based on new sort status
* @param  {HTMLElement} th    The table heading element reference
* @return {String}      state The new sort state ("ascending" or "descending")
*/
function updateIcon(th) {
    var state = 'ascending';
    var $icon = $(th).find('i');
    if ($icon.hasClass('arrow')) { // No sort -> Ascending
        $icon
        .removeClass('arrow')
        .addClass('arrow-up');
    } else if ($icon.hasClass('arrow-down')) { // Descending -> Ascending
        $icon
        .removeClass('arrow-down')
        .addClass('arrow-up');
        state = 'ascending';
    } else { // Ascending -> Descending
        $icon
        .removeClass('arrow-up')
        .addClass('arrow-down');
        state = 'descending';
    }

    $(th).attr('aria-sort', state);

    $(th).siblings().each(function () {
        // update all other rows with the neutral sort icon
        $(this)
        .attr('aria-sort', 'none')
        .find('i')
        .removeClass('arrow-up')
        .removeClass('arrow-down')
        .addClass('arrow');
    });
    return state;
}

/**
* Executes a standard sort (direct comparisons)
*/
function standardSort(a, b) {
    return (sortOrder === 'ascending')
    ? a.val - b.val
    : b.val - a.val;
}

/**
* Takes two formatted date/time values
* (see `formatDate`) and compares them
*/
function dateSort(a, b) {
    return (sortOrder === 'ascending')
    ? formatDate(a.val) - formatDate(b.val)
    : formatDate(b.val) - formatDate(a.val);
}

function textSort(a, b) {
    if (sortOrder === 'ascending') {
        if (a.val.toLowerCase() < b.val.toLowerCase()) {
            return -1;
        }
        if (a.val.toLowerCase() > b.val.toLowerCase()) {
            return 1;
        }

        return 0;
    } else {
        if (a.val.toLowerCase() < b.val.toLowerCase()) {
            return 1;
        }
        if (a.val.toLowerCase() > b.val.toLowerCase()) {
            return -1;
        }

        return 0;
    }
}

function moneySort(a, b) {
    var strippedA = a.val.replace(/,/g , '');
    var strippedB = b.val.replace(/,/g , '');

    if (sortOrder === 'ascending') {
        if (strippedA < strippedB) {
            return -1;
        }
        if (strippedA > strippedB) {
            return 1;
        }

        return 0;
    } else {
        if (strippedA < strippedB) {
            return 1;
        }
        if (strippedA > strippedB) {
            return -1;
        }

        return 0;
    }
}


/**
* Formats a date string ("01/01/01") as
* a numeric value using `Date.getTime`
*/
function formatDate(dateString) {
    var formattedDate = new Date(dateString);
    return formattedDate.getTime();
}
