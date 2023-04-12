
let {FlightReservation} = require("./Module");

let ticket = new FlightReservation();
ticket.AddTicket(1,7,1001,"Cairo", "Makkah", "6/6/2023");
ticket.AddTicket(2,6,1002,"Cairo", "Dubai", "30/6/2023");
ticket.AddTicket(3,9,1003,"Cairo", "Doha", "1/5/2023");
ticket.AddTicket(4,20,1005,"Cairo", "Tokyo", "6/6/2023");

ticket.DisplayTickets();

ticket.updateTicket(4, {id:4, seatNum:25, flightNum:1005, departAirport:"Cairo", arrAirport:"Tokyo", TravellingDate:"10/7/2023"});

console.log(ticket.GetTicket(4));
