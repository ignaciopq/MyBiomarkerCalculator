
var finalRoot = JSON.parse('{"name":"result","children":[]}');

var finalCountryRoot = JSON.parse('{"name":"Country","children":[]}');
var finalAgeRoot = JSON.parse('{"name":"Age","children":[]}');
var finalIncomeRoot = JSON.parse('{"name":"Income","children":[]}');
var finalGenderRoot = JSON.parse('{"name":"Gender","children":[]}');
var finalEducationRoot = JSON.parse('{"name":"Education","children":[]}');
var finalSmokeRoot = JSON.parse('{"name":"Smoking","children":[]}');
var finalRaceRoot = JSON.parse('{"name":"Race","children":[]}');
var finalLandUSRoot = JSON.parse('{"name":"US","children":[]}');
var infoMap = {"age-1":"0-20","age-2":"21-40","age-3":"41-60","age-4":"above60",
               "country-1":"bornInUS","country-2":"others",
               "gender-1":"female","gender-2":"male",
               "income-1":"0-34999","income-2":"35000-74999","income-3":"above 75000",
               ""};
function loadData()
{
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/1"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/2"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/3"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/4"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/5"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/6"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/7"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/8"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/9"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/10"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/11"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/12"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/13"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/14"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/15"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/16"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/17"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/18"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/19"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/20"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/21"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/22"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/23"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/24"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/25"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/26"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/27"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/28"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/29"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/30"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/31"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/32"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/33"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/34"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/35"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/36"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/37"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/38"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/39"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/40"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/41"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/42"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/43"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/44"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/45"));
  // mergeData(sendUrl("http://localhost/generalbubble/vendor/slim/slim/index.php/46"));
  // finalRoot.children.push(finalCountryRoot);
  // finalRoot.children.push(finalAgeRoot);
  // finalRoot.children.push(finalGenderRoot);
  // finalRoot.children.push(finalIncomeRoot);
  // finalRoot.children.push(finalEducationRoot);
  // finalRoot.children.push(finalRaceRoot);
  // finalRoot.children.push(finalSmokeRoot);
  // showbubble(finalRoot);
  var age = getCookies("age");
  var country = getCookies("country");
  var gender = getCookies("gender");
  var income = getCookies("income");
  var education = getCookies("education");
  var smoking = getCookies("smoking");
  var race = getCookies("race");
  var stayus = getCookies("stayus");
  console.log("cookies are :"+age+country+gender+income+education+smoking+race+stayus);
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
      .style("fill", function(d) { return d.children ? color(d.depth) : null; })
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