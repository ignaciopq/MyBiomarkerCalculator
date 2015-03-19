/*
 * JavaScript functions to trigger events in main welcome screen
 * 
 */
window.onload = function() {
	$("#CancelQuestionButton").click(function() {
		questionaryArea = document.getElementById('questionary-area');
		$(questionaryArea).removeClass('show');
		/* remove all questions from question area*/
		var questions = document.querySelectorAll('#questionary-area > div');
		for (var i = 0; i < questions.length; i++) {
			$(questions[i]).addClass("invisible");
		}
	});
	
	$("#CalculateButton").click(function() {
		// display section smoothly
		$("#categories").slideDown(2000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#categories").offset().top
		}, 1000);
	});
	
	/* making every category a draggable object */
	var draggables = document.querySelectorAll('#grid div');
	for (var i = 0; i < draggables.length; i++) {
		$(draggables[i]).draggable({
			containment: '#categories',
			revert : true,
		});
	}
	
	/* creating the droppable place holders for the categories*/
//	var droppables = document.querySelectorAll('#my-drop-area div');
//	for (var i = 0; i < droppables.length ; i++) {
//		$(droppables[i]).droppable( {
//			accept: '#grid div',
//			hoverClass: 'highlight',
//		    drop: handleDrop
//		});
//	}
	
	var availableSlot = [true,true,true,true,true,true,true,true,true];
	
	/* Define Droppable area*/
	var droppableArea = document.querySelector('#my-drop-area');
	$(droppableArea).droppable( {
		accept: '#grid div',
		hoverClass: 'highlight',
	    drop: handleDrop
	});
	
	function handleDrop( event, ui ) {
		var nextAvailable = getNextAvailable();
		ui.draggable.position( { of: $(nextAvailable), my: 'center', at: 'center' } );
		ui.draggable.draggable( 'option', 'revert', false );
		ui.draggable.addClass('grid__item-reduced');
		var question = document.getElementById($(ui.draggable).attr("id")+"-question");
		$(question).removeClass("invisible");
		$("#questionary-area").addClass("show");
		ui.draggable.draggable( 'disable' );
	}
	
	function getNextAvailable() {
		var slotArray = document.querySelectorAll('#my-drop-area div');
		for (var i=0; i < availableSlot.length; i++) {
			if (availableSlot[i]) {
				availableSlot[i]=false;
				return slotArray[i];
			}
		}
		return null;
	}
	
};
