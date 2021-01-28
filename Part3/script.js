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
    var table = document.getElementById('myTable')

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