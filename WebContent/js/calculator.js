/*
 * JavaScript functions to trigger events in main welcome screen
 * 
 */
window.onload = function() {
	
	var currentDraggable = null;
	var availableSlot = [true,true,true,true,true,true,true,true,true];
	
	$("#CancelQuestionButton").click(function() {
		questionaryArea = document.getElementById('questionary-area');
		$(questionaryArea).removeClass('show');
		/* remove all questions from question area*/
		var questions = document.querySelectorAll('#questionary-area > div');
		for (var i = 0; i < questions.length; i++) {
			$(questions[i]).addClass("invisible");
		}
		
		returnDraggable();
	});
	
	/* Return draggable to its initial position*/
	function returnDraggable() {
		var origin = document.getElementById($(currentDraggable).attr("id")+"-origin");
		$(currentDraggable).draggable( 'enable' );
		$(currentDraggable).draggable( 'option', 'revert', true );
		$(currentDraggable).removeClass('grid__item-reduced');
		$(currentDraggable).position( { of: $(origin), my: 'center', at: 'center' } );
		releaseSlot();
		currentDraggable = null;
	}
	
	/* Release one slot */
	function releaseSlot() {
		for (var i= availableSlot.length-1; i >=0 ; i--) {
			if (!availableSlot[i]) {
				availableSlot[i]=true;
			}
		}
	}
	
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
		currentDraggable = ui.draggable;
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
