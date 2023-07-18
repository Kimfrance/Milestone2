function bookRoom(roomNumber) {
	var roomDetails = getRoomDetails(roomNumber);
	var guestName = prompt("Enter your name:");
	var checkInDate = prompt("Enter check-in date:");
	var checkOutDate = prompt("Enter check-out date:");
	var bookingDetails = {
		roomNumber: roomNumber,
		roomDetails: roomDetails,
		guestName: guestName,
		checkInDate: checkInDate,
		checkOutDate: checkOutDate
	};
	
	console.log(bookingDetails);
	
	alert("Room booked successfully!");

	function getRoomDetails(roomNumber) {
            if (roomNumber === 1) {
                return "Room 1 details";
            } else if (roomNumber === 2) {
                return "Room 2 details";
            } else if (roomNumber === 3) {
                return "Room 3 details";
            } else if (roomNumber === 4) {
                return "Room 4 details";
            } else if (roomNumber === 5) {
                return "Room 5 details";
            } else if (roomNumber === 6) {
                return "Room 6 details";
            } else {
                return "Room details not found";
            }
        }
	window.onscroll = function() {
		var navbar = document.getElementById("navbar");
		var page = document.getElementById("page")
		var scrolled = window.pageYOffset;
		
		if (window.pageYOffset > 0) {
			navbar.classList.add("stickynav");
		} else {
			navbar.classList.remove("stickynav");
		}
	};