/**
 * Function Name: sendUrl(var)
 * Param Name: urlString
 * Desc: This function is used to make an AJAX call to the given URL which retrieves the JSON
 * Object containing values pertaining to the URL from the DB.
 * OnSuccess: Calls the function showbubble()
 * OnFailure: Calls the function showErrorFromDB()
 */
function sendUrl(urlString){
	$.ajax({
		type: "GET",
		url: urlString,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: showbubble,
		error: function (msg) {
			 // alert("Failed: "+ msg.status + ": " + msg.statusText);
			 showErrorFromDB(); 
		}
	});	
}
/**
 * Function Name: exploreCategoriesVsChemicals()
 * Desc: Create the URL string using the params passed to the funtion
 * Once the URL is created, we call the sendUrl() function as a parameter
 * @param $category
 * @param $chemical
 */
function exploreCategoriesVsChemicals($category,$chemical){
	document.getElementById("chart-area").innerHTML = "";
	var urlString="http://localhost/generalbubble/vendor/slim/slim/explore.php/"+$category+"/"+$chemical;
	sendUrl(urlString);
}

/**
 * Function Name: showErrorFromDB()
 * Desc: This is used to Display the ERROR MESSAGE in the div when JSON is returned 
 * properly from the DB
 */
function showErrorFromDB(){
	/* display error section and fade background*/
	$('*', '#main').fadeTo("slow", 0.4);
	$("#message-area").addClass("show");
//	var chartDiv=document.getElementById("chart-area");
//	chartDiv.className = 'errorChart';
//	chartDiv.innerHTML = "ERROR !!!! Data is not present in the NHANES for this COMBINATION";
	
}

/**
 * Function Name:showbubble()
 * Desc: This is prominent function which receives the JSON object as param
 * and then with the JSON object, the BUBBLE chart is created.
 * Here the charts are created using the D3.JS library. The bubble is created on the DIV which is assigned 
 * in the Front End. (In this case 'chart-area')
 * Code Reference: http://jsfiddle.net/89wbk/
 * @param root
 */

function showbubble(root){

/*	var res=Object.getOwnPropertyNames ( root.children[0] );
	var param1=res[0];
	var param2=res[1];*/
	var diameter = 450,
	format = d3.format(",g");
	//,	color = d3.scale.category20c();
	
	var color = d3.scale.ordinal()
    //.domain([root.children[0], root.children[1], root.children[2],root.children[3],root.children[4],root.children[5]])
    .range(["#353F5A", "#3D3540" , "#BB958A","#B07378","#745E60","#38425B"]);
	
	/*
	Changes for the UNITS */
		var resObj=Object.getOwnPropertyNames ( root.children[0] );
		var factor=resObj[0];
		var chemical=resObj[1];
		var units="";
		if(chemical=='bloodLead'){
			units='(ug/dL)';
		}
		else if(chemical=='cotinine'){
			units='(ng/mL)';
		}
		else if(chemical=='mercury'){
			units='(ug/L)';
		}
		else if(chemical=='diethylthiophosphate'){
			units='(ug/L)';
		}
		else if(chemical=='bisphenol'){
			units='(ng/mL)';
		}
		else if(chemical=='dde'){
			units='(ng/g)';
		}
		else if(chemical=='pde'){
			units='(ng/g)';
		}
		else if(chemical=='pcb153'){
			units='(ng/g)';
		}
		else if(chemical=='hexylphthalate'){
			units='(ng/mL)';
		}
	

	var bubble = d3.layout.pack()
	.sort(null)
	.size([diameter, diameter])
	.padding(1.5);

	var svg = d3.select("#chart-area")
	.append("svg")
	.attr("width", diameter)
	.attr("height", diameter)
	.attr("class", "bubble");
	
	var node= svg.selectAll(".node")
		.data(bubble.nodes(classesAgeLead(root)).filter(function (d) {return !d.children;}))
		.enter()
		.append("g")
		.attr("class", "node")
		.attr("transform", function(d) {
			return "translate(" + d.x + "," + d.y + ")"; });
	
	node.append("title")
	.text(function(d) {
		return d.className + ": " + format(d.value); });
	
	

	node.append("circle")
	.attr("r", function(d) { return d.r; })
	.style("fill", function(d) { return color(d.className); });
	//.style("fill", function(d) { return d.className; });
	
	
	
	node.append("text")
	.attr("dy", ".3em")
	.attr('class','white')
	.style("text-anchor", "middle")
	.text(function(d) { return d.className.substring(0, d.r / 3); });
	
	node.append("text")
	.attr("dy", ".3em")
	.attr('class','white')
	.attr('transform','translate(0,25)')
	.style("text-anchor", "middle")
	.text(function(d) { return format(d.value ); });
	/*
	Changes for the UNIT in the Bubble*/
	node.append("text")
	.attr("dy", ".3em")
	.attr('class','white')
	.attr('transform','translate(0,50)')
	.style("text-anchor", "middle")
	.text(function(d) { return units; });
	
	//.text(function(d) { return d.className.substring(0, d.r / 3) + ; });

	//d3.select(self.frameElement).style("height", diameter + "px");

	function classesAgeLead(root) {
		var classes = [];
		var res=Object.getOwnPropertyNames ( root.children[0] );
		var param1=res[0];
		var param2=res[1];
		function recurse(name, node,param1,param2) {
			if (node.children) node.children.forEach(function (child) {
				recurse(node.name, child,param1,param2);
			});
			else classes.push({
				packageName: name,
				className: eval('node.'+param1),
				value: eval('node.'+param2)
			});
		}
		recurse(null, root,param1,param2);
		return {
			children: classes
		};
	}
}
