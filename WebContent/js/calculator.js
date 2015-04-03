/*
 * JavaScript functions to trigger events in main welcome screen
 * 
 */
window.onload = function() {
	
	/* variables with user input */
	var questions = [];
	questions["age"] = null;
	questions["country"] = null;
	questions["gender"] = null;
	questions["income"] = null;
	questions["education"] = null;
	questions["smoking"] = null;
	questions["race"] = null;
	questions["stayus"] = null;
	
	/* Button for displaying categories section */
	$("#CalculateButton").click(function() {
		// display section smoothly
		
		$("#questionary-section").slideDown(1000);
		
		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#questionary-section").offset().top
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
	$("#GoBackButton").click(goTop);
	
	/* Bind buttons to submit and process calculation */
	$("#GoButton").click(
			function() {
				if (questions["age"] != null && questions["country"] != null && questions["gender"] != null
						&& questions["income"] != null && questions["education"] != null
						&& questions["smoking"] != null && questions["race"] != null && questions["stayus"] != null) {
					window.location = 'results.html';
				} 
				else {
					$("#error-msg").removeClass("invisible-error");
				}
			});
	
	/*  Activating selectors */
	$(".dropdown").click(function() {
		var cat = this.id.split("-")[0];
		var currentQuestion = "#" + this.id.split("-")[0] + "-" + "question";
		$(currentQuestion + ' .menu').toggleClass("showMenu");
		$(currentQuestion + ' .menu > li').click(function() {
			$(currentQuestion + ' .dropdown').html($(this).html());
			$(currentQuestion + ' .menu').removeClass("showMenu");
			$("#error-msg").addClass("invisible-error");
			questions[cat] = $(this).attr("id");
		});
	});
	
	// Next buttons definition for questionary section
	
	$("#ShowCountryButton").click(function() {
		// display section smoothly
		$("#country-question").slideDown(1000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#country-question").offset().top
		}, 1000);
	});
	
	$("#ShowGenderButton").click(function() {
		// display section smoothly
		$("#gender-question").slideDown(1000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#gender-question").offset().top
		}, 1000);
	});	
	
	$("#ShowIncomeButton").click(function() {
		// display section smoothly
		$("#income-question").slideDown(1000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#income-question").offset().top
		}, 1000);
	});
	
	$("#ShowEducationButton").click(function() {
		// display section smoothly
		$("#education-question").slideDown(1000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#education-question").offset().top
		}, 1000);
	});	

	$("#ShowSmokingButton").click(function() {
		// display section smoothly
		$("#smoking-question").slideDown(1000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#smoking-question").offset().top
		}, 1000);
	});	
	
	$("#ShowRaceButton").click(function() {
		// display section smoothly
		$("#race-question").slideDown(1000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#race-question").offset().top
		}, 1000);
	});
	$("#ShowStayusButton").click(function() {
		// display section smoothly
		$("#stayus-question").slideDown(1000);

		// Scroll down to section 
		$('html, body').animate({
			scrollTop : $("#stayus-question").offset().top
		}, 1000);
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
	
	function removeQuestions() {
		var questions = document.querySelectorAll('#questionary-questions > div');
		for (var i = 0; i < questions.length; i++) {
			$(questions[i]).addClass("invisible");
		}
	}
	
	function getQuestions() {
		return questions;
	}
};
