var id = 1; // unique id for list items

$(document).ready(function(e) {
	editButton();

	$("tbody").on("click", ".cross", function() {
		$(this).closest("tr").remove();
	});

	$("button").on("click", getInput);

	$("tbody").on("click", ".box", function() {
		$(this).closest("tr").find("span").toggleClass("checked");
	});

});

// triggered on Enter
$(document).on("keydown", function(e) {
	if(e.keyCode === 13) {
		getInput();
	}
});



// Toggle delete icon when edit button is clicked
function editButton() {
	$(".edit").on("click", "span", function() {
		$(".cross").toggle();
	});
}


// Obtaining customer input and then calling addItem() with the input
function getInput() {
	var custInput = $(".custinput");
	var input = custInput.val();

	if ((input !== "") && ($.trim(input) !== "")) {
		// addItem(input);
		get_missions(input);
		custInput.val("");
	}
}


/******************************************************************************
	adding item to the list
	increment id counter for unique id
*******************************************************************************/
function addItem(message) {

	$(".cross").hide(); // hiding the delete icon

	var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + id + "\" class=\"box\">" + "<label for=\"item" + id + "\" class=\"check-label\"></label></td>";

	var content = "<td class=\"content\"><span>" + message + "</span></td>";

	var delIcon = "<td><img src=\"img/cross.png\" alt=\"cross\" class=\"cross\"></td>";

	$("tbody").append("<tr>" + checkbox + content + delIcon + "</tr>");

	id++;
}

function cartesianProduct (arr1, arr2) 
{
	const res = [];
	for(let i = 0; i < arr1.length; i++){
	   for(let j = 0; j < arr2.length; j++){
		  res.push(
			 [arr1[i]].concat(arr2[j])
		  );
	   };
	};
	return res;
 };

function draw_card(deck)
{
	return deck[Math.floor(Math.random()*deck.length)];
}

function get_missions(n_missions)
{
	var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
	var suits = ["fantasmas", "anoes", "mortos-vivos", "doppelgangers"]
	var deck_of_missions = cartesianProduct(number, suits)
	var n_missions = parseInt(n_missions, 10)
	for(let i = 0; i < n_missions; i++){
		card = draw_card(deck_of_missions)
		addItem(`${card[0]} de ${card[1]}`)
	}
}