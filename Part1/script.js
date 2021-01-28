var myArray = [
    {'name':'Adão', 'address':'USA', 'birthdate':'21/12/1959'},
    {'name':'Eva', 'address':'Brazil', 'birthdate':'13/11/1978'},
    {'name':'Caim', 'address':'Japan', 'birthdate':'15/24/1930'},
    {'name':'Abel', 'address':'Germany', 'birthdate':'16/23/1994'},
    {'name':'Noé', 'address':'USA', 'birthdate':'13/10/1971'},
    {'name':'Maria', 'address':'Brazil', 'birthdate':'14/30/1965'},
]

buildTable(myArray)

function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].address}</td>
                        <td>${data[i].birthdate}</td>
                  </tr>`
        table.innerHTML += row
    }
}