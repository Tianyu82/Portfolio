function Ood(){
    return(
        <div>
            <h1  style={{ color: 'lightblue', textAlign: 'left', paddingTop: '50px' }}>Object Oriented Design</h1>
            <div style={{ color: 'white', textAlign: 'left', paddingTop: '50px' }}>
                <h3>Practice Clarifying the Requirements</h3>
                <p>No matter we are at work or in an interview, asking for clarifying the requirements is important</p>
                <br></br>
                <p>Parking Lot. A common parking lot is like this. The parking lot allows multiple types of vehicles to park
                    such as motorcycles, cars, and trucks. The parking lot has corresponding sapces for these vehicles. The 
                    parking lot, at its entrance, displays the number of available parkings for each type of vehicles. 
                    Once the driver parks their car, they enter the parking spot id into a parking meter, and the parking meter 
                    returns a ticket to the drivers. When leaving, the driver insert the ticket to the machine and pay for the
                    parking basing on their parking time and parking rates. Rates are different between vehicle types.
                </p>
            </div>
            <br></br>

            <div style={{ color: 'white', textAlign: 'left', paddingTop: '50px' }}>
                <h3>Identifying the Objects</h3>
                <br></br>
                <p>Parking Lot. From big to small, the system should have the following objects: ParkingLot, ParkingSpot
                    and ticket.
                </p>
            </div>
            <br></br>

            <div style={{ color: 'white', textAlign: 'left', paddingTop: '50px' }}>
                <h3>What the System Receives and Returns (Interactions) </h3>
                <br></br>
                <p>Parking Lot. When parking, the system receives the parking spot id from the </p>
            </div>

        </div>
    );
};

export default Ood;