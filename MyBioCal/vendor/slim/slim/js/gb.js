
var finalRoot = JSON.parse('{"name":"result","children":[]}');

var finalCountryRoot = JSON.parse('{"name":"Country","children":[]}');
var finalAgeRoot = JSON.parse('{"name":"Age","children":[]}');
var finalIncomeRoot = JSON.parse('{"name":"Income","children":[]}');
var finalGenderRoot = JSON.parse('{"name":"Gender","children":[]}');
var finalEducationRoot = JSON.parse('{"name":"Education","children":[]}');
var finalSmokeRoot = JSON.parse('{"name":"Smoking","children":[]}');
var finalRaceRoot = JSON.parse('{"name":"Race","children":[]}');
var finalLandUSRoot = JSON.parse('{"name":"US","children":[]}');
var infoMap = {"age-1":"0 to 20 Years","age-2":"21 to 40 Years","age-3":"41 to 60 Years","age-4":"Above 60 Years",
               "country-1":"Born In USA","country-2":"Rest of the World",
               "gender-1":"Female","gender-2":"Male",
               "income-1":"0$ -34,999$","income-2":"35,000$-74,999$","income-3":"Above 75,000$",
               "education-1":"9 - 11th grade( with no diploma)","education-2":"College or AA grade",
               "education-3":"Graduate or Above","education-4":"High School Grad or equivalent",
               "education-5":"Less than 9th Grade",
               "smoking-1":"Every day","smoking-2":"Not at all","smoking-3":"Some days",
               "race-1":"Mexican American","race-2":"Non-Hispanic Black","race-3":"Non-Hispanic White",
               "race-4":"Other Hispanic","race-5":"Other Race",
               "stayus-1":"1 to 20 years","stayus-2":"20 to 40 years","stayus-3":"40 to 50 years","stayus-4":"Above 50 years",
               "stayus-5":"Less than 1 year"};
function loadData()
{
  for(i = 1; i <= 63; i++ ){
    mergeData(sendUrl("http://localhost/MyBioCal/vendor/slim/slim/index.php/"+i));
  }
  finalRoot.children.push(finalCountryRoot);
  finalRoot.children.push(finalAgeRoot);
  finalRoot.children.push(finalGenderRoot);
  finalRoot.children.push(finalIncomeRoot);
  finalRoot.children.push(finalEducationRoot);
  finalRoot.children.push(finalRaceRoot);
  finalRoot.children.push(finalSmokeRoot);
  showbubble(finalRoot);
}

function sendUrl(urlString){
  return JSON.parse($.ajax({
            type: "GET",
            url: urlString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error: function (msg){
              alert("Faild: " + msg.status + ": " + msg.statusText);
          }
        }).responseText);  
}

function mergeData(tempRoot){

  switch(tempRoot.name){

    case "country":
      for(var k in tempRoot.children){
        finalCountryRoot.children.push(tempRoot.children[k]);
      }
      // console.log(JSON.stringify(finalCountryRoot));
      break;
    case "age":
      for(var k in tempRoot.children){
        finalAgeRoot.children.push(tempRoot.children[k]);
      }
      // console.log(JSON.stringify(finalCountryRoot));
      break;
    case "gender":
      for(var k in tempRoot.children){
        finalGenderRoot.children.push(tempRoot.children[k]);
      }
      break;
    case "income":
      for(var k in tempRoot.children){
        finalIncomeRoot.children.push(tempRoot.children[k]);
      }
      break;
    case "education":
      for(var k in tempRoot.children){
        finalEducationRoot.children.push(tempRoot.children[k]);
      }
      break;
    case "race":
      for(var k in tempRoot.children){
        finalRaceRoot.children.push(tempRoot.children[k]);
      }
      break;
    case "smoking":
      for(var k in tempRoot.children){
        finalSmokeRoot.children.push(tempRoot.children[k]);
      }
      break;
  }
}

function getCookies(name){
  var value = "; "+document.cookie;
  var parts = value.split("; "+name+"=");
  if(parts.length == 2) return parts.pop().split(";").shift();
}
function showbubble(root){

var age = getCookies("age");
var country = getCookies("country");
var gender = getCookies("gender");
var income = getCookies("income");
var education = getCookies("education");
var smoking = getCookies("smoking");
var race = getCookies("race");
var stayus = getCookies("stayus");

console.log("cookies: "+age+gender+education+income+race+stayus+smoking+country);
console.log(infoMap[age]);
var margin = 20,
    diameter = 960;

var color = d3.scale.linear()
    .domain([-1, 5])
    .range(["hsl(264,3%,69%)", "hsl(250,19%,24%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.layout.pack()
    .padding(2)
    .size([diameter - margin, diameter - margin])
    .value(function(d) { return d.size; })
//$(function(){var svg = d3.select("#chart").append("svg:svg");});
var svg = d3.select("#big-chart").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

  var focus = root,
      nodes = pack.nodes(root),
      view;

  var circle = svg.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) { 
        if(d.children){
          return color(d.depth);
        }else if(d.name === infoMap[age]){
          console.log("age detect" + infoMap[age]);
          return "lightgoldenrodyellow";
        }else if(d.name === infoMap[country]){
          return "lightgoldenrodyellow";
        }else if(d.name === infoMap[gender]){
          return "lightgoldenrodyellow";
        }else if(d.name === infoMap[income]){
          return "lightgoldenrodyellow";
        }else if(d.name === infoMap[education]){
          return "lightgoldenrodyellow";
        }else if(d.name === infoMap[stayus]){
          return "lightgoldenrodyellow";
        }else if(d.name === infoMap[race]){
          return "lightgoldenrodyellow";
        }else if(d.name === infoMap[smoking]){
          return "lightgoldenrodyellow";
        }else{
          return null;
        }
        // return d.children ? color(d.depth) : d.name === infoMap[]; 
      })
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  var text = svg.selectAll("text")
      .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? null : "none"; })
      .text(function(d) { return d.parent === root ? d.name : d.size ? d.name +" : "+ d.size : d.name; });

  var node = svg.selectAll("circle,text");

  d3.select("#big-chart")
      .style("background", "transparent")
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }

  d3.select(self.frameElement).style("height", diameter + "px");
}
loadData();