window.onload = function() {
//	Enable clickable buttons
	var buttons = document.querySelectorAll('.grid__item');
	var selectedCategory = null;
	var selectedChemical = null;
	
	/* enable buttons as clickables*/ 
	for (var i = 0; i < buttons.length; i++) {
		$(buttons[i]).click(activateButton(i));
	}
	
	/* i is an int with the position in the array of the item to activate */
	function activateButton(i) {
		return function() {
			// For chemicals
			if (buttons[i].parentNode.id == "chemicals-list") {
				if (selectedChemical != null) {
					$(selectedChemical).removeClass("active");
					/*when clicking the same button already activated, deactivate*/
					if (selectedChemical == buttons[i]) {
						selectedChemical = null;
						return;
					}
				}
				//	activate new button 
				$(buttons[i]).addClass("active");
				selectedChemical = buttons[i];
			}
			// For categories
			else {
				if (selectedCategory != null) {
					$(selectedCategory).removeClass("active");
					/*when clicking the same button already activated, deactivate*/
					if (selectedCategory == buttons[i]) {
						selectedCategory = null;
						return;
					}
				}
				//	activate new button 
				$(buttons[i]).addClass("active");
				selectedCategory = buttons[i];
			}
		};
	}
	
};