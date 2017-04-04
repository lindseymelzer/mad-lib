function makeStory() {
	// get form values (2 points)
	var adjective1 = document.getElementById('adjective1').value;
	var adjective2 = document.getElementById('adjective2').value;
	var adjective3 = document.getElementById('adjective3').value;
	var adjective4 = document.getElementById('adjective4').value;
	var adjective5 = document.getElementById('adjective5').value;
	var celebrity1 = document.getElementById('celebrity1').value;
	var noun1 = document.getElementById('noun1').value;
	var noun2 = document.getElementById('noun2').value;
	var noun3 = document.getElementById('noun3').value;
	var noun4 = document.getElementById('noun4').value;
	var type_of_food1 = document.getElementById('type_of_food1').value;
	var type_of_food2 = document.getElementById('type_of_food2').value;
	var type_of_food3 = document.getElementById('type_of_food3').value;

	// Set title of story. Use at least one form value in the title. (2 points)
	var title = noun1 + " Chinese Restaurant ";

	// Build story. you can add as many paragraphs as you like. (3 points)
	var paragraph1 = "I recently had dinner at a new Chinese restaurant. The cooking was " + adjective1 + " and the service was " + adjective2 +
          	" the owner, " + celebrity1 + " ,suggested that for my first course I have sweet and " + adjective3 + "spare ribs, which is a specialty of the " + noun1 +
          	" They were " + adjective4 + ". For the next course, I was served a " + adjective5 + noun2 +
          	" soup. The main course consisted of Egg Foo, " + noun3 + " lobster in " + type_of_food1 +
          	" sauce, and pressed " + type_of_food2 + ". For dessert, I ordered those famous Chinese  " + noun4 +
          	" cookies with sliced " + type_of_food3 + ". But whenever I eat Chinese food, an hour later I feel " + adjective5 + " again. ";
	// Display story by putting title & paragraphs into appropriate divs. (3 points)
	document.getElementById('title').innerHTML = title;
	document.getElementById('one').innerHTML = paragraph1;
}
