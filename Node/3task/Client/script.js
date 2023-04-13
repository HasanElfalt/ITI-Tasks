
document.getElementById("getAllTickets").addEventListener("click", function(){

    $.ajax({
        url:'clients.json',
        dataType:'json',
        success: function(data) {
            let table = $('<table>');
            let headerRow = $('<tr>');
            headerRow.append($('<th>').text('FirstName'));
            headerRow.append($('<th>').text('Mobile'));
            headerRow.append($('<th>').text('Email'));
            headerRow.append($('<th>').text('Address'));

            table.append(headerRow);
        
            $.each(data, function(index, client) {
              let row = $('<tr>');
              row.append($('<td>').text(client.firstName));
              row.append($('<td>').text(client.mobile));
              row.append($('<td>').text(client.email));
              row.append($('<td>').text(client.address));
              table.append(row);
            
            });

            $('#clients-table').append(table);
        }
    });
});
