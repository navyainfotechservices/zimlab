Highcharts.chart('container', {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
   title: {
        text: 'FY 14',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
	   	style: {
            color: '#000',
            font: 'bold 22px "Trebuchet MS", Verdana, sans-serif',
		   	background: '#ffffff'
        }
    },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },
  series: [{
    type: 'pie',
    name: '',
  	innerSize: '50%',	
    data: [
      ['Deemed Export', 20.0],
      ['Govt/ Dom.', 40.0],
      {
        name: 'Export',
        y: 39.00,
        sliced: true,
        selected: true
      }
    ]
  }]
});