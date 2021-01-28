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

function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].first_name}</td>
                        <td>${data[i].last_name}</td>
                        <td>${data[i].email}</td>
                  </tr>`
        table.innerHTML += row
    }
}