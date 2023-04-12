
class FlightReservation{
    
    Tickets=[];

    AddTicket(id,seatNum, flightNum, departAirport, arrAirport, TravellingDate){
        let newItem = {id,seatNum, flightNum, departAirport, arrAirport, TravellingDate}
        this.Tickets.push(newItem);
    }

    DisplayTickets(){
        for(let i=0; i<this.Tickets.length; i++){
            console.log(this.Tickets[i]);
        }
    }

    GetTicket(id){
        for(let i=0; i<this.Tickets.length;i++){
            if(this.Tickets[i].id == id){
                return this.Tickets[i];
            }
        }
        return null;
    }

    updateTicket(id, updateTicket){
        if(id == updateTicket.id){
            if(id > 0){
                
                this.Tickets[id-1] = updateTicket;

                console.log(`Ticket ${id} updated.`);
            }else{
                console.log(`Ticket ${id} not found.`);
            }
        }
    }
}

module.exports = {
    FlightReservation
}