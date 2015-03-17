/*
 * JavaScript functions to trigger events in main welcome screen
 * 
 */
window.onload = function() {
	$("#CancelQuestionButton").click(function() {
		questionaryArea = document.getElementById('questionary-area');
		classie.remove(questionaryArea,'show');
	});
	
	$("#CalculateButton").click(function() {
		// display section smoothly
		$("#categories").slideDown(2000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#categories").offset().top
		}, 1000);
	});

	// drag and drop functions

	var body = document.body, droppableArr = [], dropAreaTimeout;
	// initialize droppables
	[].slice.call(document.querySelectorAll('#my-drop-area .drop-area__item'))
			.forEach(function(el) {
				droppableArr.push(new Droppable(el, {
					onDrop : function(instance, draggableEl) {
						// show checkmark inside the droppabe element
						classie.add(instance.el, 'drop-feedback');
						clearTimeout(instance.checkmarkTimeout);
						instance.checkmarkTimeout = setTimeout(function() {
//							classie.remove(instance.el,'drop-feedback');
						}, 800);
						// ...
					}
				}));
			});

	// initialize draggable(s)
	[].slice.call(document.querySelectorAll('#grid .grid__item')).forEach(
			function(el) {
				new Draggable(el, droppableArr, {
					draggabilly : {
						containment : document.body
					},
					onStart : function() {
						// add class 'drag-active' to body
						classie.add(body, 'drag-active');
						// clear timeout: dropAreaTimeout (toggle drop area)
//						clearTimeout(dropAreaTimeout);
						// show dropArea
//						 classie.add(dropArea, 'show');
					},
					onEnd : function(wasDropped) {
						inputArea = document.getElementById('two');
						questionaryArea = document.getElementById('questionary-area');
						
						var afterDropFn = function() {
							// show corresponding questionary
							classie.add(questionaryArea, 'show');
							classie.add(inputArea, 'show');
							// hide dropArea
							// classie.remove(dropArea,'show');
							// remove class 'drag-active' from body
//							$("#two").slideDown(2000);
							classie.remove(body, 'drag-active');
						};

						if (!wasDropped) {
							afterDropFn();
						} else {
							// after some time hide drop area and remove class 'drag-active' from body
							clearTimeout(dropAreaTimeout);
							dropAreaTimeout = setTimeout(afterDropFn, 400);
						}
					}
				});
			});
};
