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
	
	$("#SaveQuestionButton").click(function() {
		questionaryArea = document.getElementById('questionary-area');
		$(questionaryArea).removeClass('show');
		currentDraggable = null;
	});
	
	$("#calculate-button").click(function() {
		window.location = "../SlidingShow/index.html";
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
	
	/* Button for displaying categories section */
	$("#ContinueButton").click(function() {
		// display section smoothly
		
		$( "#banner" ).slideUp( 1000, function() {
			$("#categories").slideDown(1000);
		  });

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#categories").offset().top
		}, 1000);
	});
	
	$("#TopButton").click(function() {
		// display section smoothly
		
		
		$( "#categories" ).slideUp( 1000, function() {
			$("#banner").slideDown(1000);
		  });

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#banner").offset().top
		}, 1000);
	});
	
	/* making every category a draggable object */
	enableDraggable();
	var draggables = document.querySelectorAll('#grid .grid__item');
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
		if (currentDraggable != null)
			return;
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
	
	function enableDraggable() {
		var draggables = document.querySelectorAll('#grid .grid__item');
		for (var i = 0; i < draggables.length; i++) {
			$(draggables[i]).draggable({
				containment: '#categories',
				revert : true,
			});
			$(draggables[i]).draggable( 'enable' );
		}
	}
	
	function disableDraggable() {
		var draggables = document.querySelectorAll('#grid .grid__item');
		for (var i = 0; i < draggables.length; i++) {
			$(draggables[i]).draggable( 'disable' );
		}
	}
};
