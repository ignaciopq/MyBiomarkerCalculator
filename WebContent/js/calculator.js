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
		removeQuestions();
		returnDraggable();
		$('*', '#categories').fadeTo("slow", 1);
	});
	
	$("#SaveQuestionButton").click(function() {
		questionaryArea = document.getElementById('questionary-area');
		$(questionaryArea).removeClass('show');
		takeNextAvailable();
		removeQuestions();
		currentDraggable = null;
		$('*', '#categories').fadeTo("slow", 1);
	});
	
	$("#calculate-button").click(function() {
		window.location = "../SlidingShow/index.html";
	});
	
	$("#reset-button").click(function() {
		reset();
	});
	
	/* Button for displaying categories section */
	$("#CalculateButton").click(function() {
		// display section smoothly
		
//		$( "#banner" ).slideUp( 1000, function() {
//			$("#categories").slideDown(1000);
//		  });
		$("#categories").slideDown(2000);
		
		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#categories").offset().top
		}, 1000);
	});
	
	$("#ContinueButton").click(function () {
		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#second-section").offset().top
		}, 1000);
	});
	
	/* Bind buttons to go to bottom section */
	$("#GoLastButton").click(goBottom);
	$("#StartCalculationButton").click(goBottom);
	
	/* Bind buttons to go to top section */
	$("#BackTopButton").click(goTop);
	$("#BackButton").click(goTop);
	
	$("#TopButton").click(function() {
		// display section smoothly
		$('*', '#categories').fadeTo("slow", 1);
		reset();
		
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
	
	/* Define Droppable area*/
	var droppableArea = document.querySelector('#my-drop-area');
	$(droppableArea).droppable( {
		accept: '#grid div',
		hoverClass: 'highlight',
	    drop: handleDrop
	});
	
	$(".dropdown").click(function(){
	    $(".menu").toggleClass("showMenu");
	      $(".menu > li").click(function(){
	        $(".dropdown > p").html($(this).html());
	          $(".menu").removeClass("showMenu");
	      });
	  });
	
	/* Function definitions */
	
	/* Scrolling functions*/
	function goBottom() {
		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#third-section").offset().top
		}, 1000);
	}
	function goTop() {
		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#first-section").offset().top
		}, 1000);
	}
	
	/* General purpose functions*/
	function reset() {
		enableDraggable();
		releaseAllSlot();
		returnAllDraggables();
		$(questionaryArea = document.getElementById('questionary-area')).removeClass('show');
		/* remove all questions from question area*/
		removeQuestions();
		currentDraggable = null;
	}
	
	function removeQuestions() {
		var questions = document.querySelectorAll('#questionary-questions > div');
		for (var i = 0; i < questions.length; i++) {
			$(questions[i]).addClass("invisible");
		}
	}
	
	/* Return currentDraggable to its initial position*/
	function returnDraggable() {
		var origin = document.getElementById($(currentDraggable).attr("id")+"-origin");
		$(currentDraggable).draggable( 'enable' );
		$(currentDraggable).draggable( 'option', 'revert', true );
		$(currentDraggable).removeClass('grid__item-reduced');
		$(currentDraggable).position( { of: $(origin), my: 'center', at: 'center' } );
		currentDraggable = null;
	}
	
	/* Return every draggable to its initial position */
	function returnAllDraggables() {
		var draggables = document.querySelectorAll('#grid .grid__item');
		for (var i=0; i < draggables.length ; i++) {
			var origin = document.getElementById($(draggables[i]).attr("id")+"-origin");
			$(draggables[i]).removeClass('grid__item-reduced');
			$(draggables[i]).position( { of: $(origin), my: 'center', at: 'center' } );
		}
	}
	
	/* Release all slots */
	function releaseAllSlot() {
		for (var i= 0; i < availableSlot.length ; i++) {
			availableSlot[i]=true;
		}
	}
	
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
		$('*', '#categories').fadeTo("slow", 0.5);
	}
	
	function getNextAvailable() {
		var slotArray = document.querySelectorAll('#my-drop-area div');
		for (var i=0; i < availableSlot.length; i++) {
			if (availableSlot[i]) {
				return slotArray[i];
			}
		}
		return null;
	}
	
	function takeNextAvailable() {
		var slotArray = document.querySelectorAll('#my-drop-area div');
		for (var i=0; i < availableSlot.length; i++) {
			if (availableSlot[i]) {
				availableSlot[i]=false;
				return;
			}
		}
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
