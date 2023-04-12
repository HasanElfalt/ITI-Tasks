console.log("script");

document.getElementById("getAllClients").addEventListener("click", function(){
    console.log("Button Clicked");
    $.ajax({
        method:"GET",
        url:"../Server/clients.json",
        //contentType: 'application/json',
        //dataType: "text",
        success: function(data,status,xhr) {
            
            
            console.log(data);

            for(var item in data){
                console.log(item);
            }

            let table = $('<table>');
            let headerRow = $('<tr>');
            headerRow.append($('<th>').text('FirstName'));  
            headerRow.append($('<th>').text('Mobile'));
            headerRow.append($('<th>').text('Email'));
            headerRow.append($('<th>').text('Address'));

            table.append(headerRow);
        
            $.each(data.clients, function(index, client) {
              //console.log(data[0]);
              let row = $('<tr>');
              row.append($('<td>').text(client.firstName));
              row.append($('<td>').text(client.mobile));
              row.append($('<td>').text(client.email));
              row.append($('<td>').text(client.address));
              table.append(row);
            
            });

            $('#clients-table').append(table);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('AJAX request failed: ' + textStatus + ', ' + errorThrown + ', ');
            // Code for handling failed response
        }
    });
});
