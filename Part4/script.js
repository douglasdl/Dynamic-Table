var myArray = [];

$.ajax({
    method: 'GET',
    url: 'https://reqres.in/api/users',
    success: function(response) {
        myArray = response.data;
        console.log(myArray);
        buildTable(myArray);
    }
})

$('#search-input').on('keyup', function(){
    var value =$(this).val();
    console.log(value);
    var data = searchTable(value, myArray);
    buildTable(data);
})

$('th').on('click', function(){
    var column = $(this).data('column');
    var order = $(this).data('order');
    var text = $(this).html();
    text = text.substring(0, text.length - 1); // Remove the arrow
    //console.log("Column was clicked", column, order);

    if (order == 'desc') {
        $(this).data('order', "asc");
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1);
        text += ' &#9660';
    } else {
        $(this).data('order', "desc");
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1);
        text += ' &#9650';
    }
    $(this).html(text);
    buildTable(myArray);
})

buildTable(myArray);

function searchTable(value, data) {
    var filteredData = [];

    for (var i = 0; i < data.length; i++) {
        value = value.toLowerCase();
        var first_name = data[i].first_name.toLowerCase();

        if (first_name.includes(value)) {
            filteredData.push(data[i]);
        }
    }
    return filteredData;
}

function buildTable(data){
    var table = document.getElementById('myTable');

    table.innerHTML = "";

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].first_name}</td>
                        <td>${data[i].last_name}</td>
                        <td>${data[i].email}</td>
                  </tr>`
        table.innerHTML += row
    }
}