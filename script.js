function bookRoom(roomNumber) {
            // Retrieve room details based on roomNumber
            var roomDetails = getRoomDetails(roomNumber);

            // Prompt user for their details
            var guestName = prompt("Enter your name:");
            var checkInDate = prompt("Enter check-in date:");
            var checkOutDate = prompt("Enter check-out date:");

            // Perform booking logic (this is a simplified example)
            var bookingDetails = {
                roomNumber: roomNumber,
                roomDetails: roomDetails,
                guestName: guestName,
                checkInDate: checkInDate,
                checkOutDate: checkOutDate
            };

            // You can perform further processing with the bookingDetails object
            console.log(bookingDetails);

            // Show a confirmation message to the user
            alert("Room booked successfully!");
        }

        function getRoomDetails(roomNumber) {
            // Placeholder function to retrieve room details based on roomNumber
            // Replace with your own logic to fetch room details from a database or API
            if (roomNumber === 1) {
                return "Room 1 details";
            } else if (roomNumber === 2) {
                return "Room 2 details";
            } else {
                return "Room details not found";
            }
        }