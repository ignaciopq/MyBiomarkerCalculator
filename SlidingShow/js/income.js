    function createMotionChartForIncome(ch) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Income');
        data.addColumn('number', 'year');
        data.addColumn('number', 'Chemical Value');
        
        data.addRows([
          ['Above $5000', 2012,10],
          ['Above $8000', 2012,20],
          ['Above $10000', 2012,45],
          ['Above $12000',  2012,25],
          ['Above $50000', 2012,80],
          ['Above $100000',2012,31]
        ]);

        //new google.visualization.MotionChart(ch.draw(data, {backgroundColor: "transparent"});
        var chart = new google.visualization.MotionChart(ch);
        var options = {};
       
        chart.draw(data, options);
      }
      //createMotionChartForIncome();
/**
 * 
 */