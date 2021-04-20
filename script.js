function addMovie(event) {
	event.preventDefault();

	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var movie = document.getElementById("movieSelect").selectedIndex;
	var movieVal = document.getElementsByTagName("option")[movie].value;
	var timing = document.getElementById("timingSelect");
	var timingVal = timing.options[timing.selectedIndex].value;
	var platinum = document.getElementById("ptn").value;
	var gold = document.getElementById("gld").value;
	var silver = document.getElementById("slv").value;

	const amount = platinum * 400 + gold * 280 + silver * 150;

	var table = document.getElementsByTagName("table")[0];

	if (
		(name == "" || null,
		phone == "" || null,
		email == "" || null,
		movieVal == "" || null,
		timingVal == "" || null,
		platinum == "",
		gold == "",
		silver == "")
	) {
		alert("Please fill all the details!");
		return false;
	} else {
		var newRow = table.insertRow(table.rows.length);

		var cel1 = newRow.insertCell(0);
		var cel2 = newRow.insertCell(1);
		var cel3 = newRow.insertCell(2);
		var cel4 = newRow.insertCell(3);
		var cel5 = newRow.insertCell(4);
		var cel6 = newRow.insertCell(5);
		var cel7 = newRow.insertCell(6);
		var cel8 = newRow.insertCell(7);
		var cel9 = newRow.insertCell(8);

		alert("Total Amount to be paid: Rs." + amount);

		cel1.innerHTML = name;
		cel2.innerHTML = phone;
		cel3.innerHTML = email;
		cel4.innerHTML = movieVal;
		cel5.innerHTML = timingVal;
		cel6.innerHTML = platinum;
		cel7.innerHTML = gold;
		cel8.innerHTML = silver;
		cel9.innerHTML = amount;
		return true;
	}
}
