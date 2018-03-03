( function ( $ ) {
    "use strict";


// const brandPrimary = '#20a8d8'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'

function convertHex (hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}



    
     //Obesity 2 Chart
    var ctx = document.getElementById( "obesity2Chart" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['2012','2013','2014','2015','2016','2017','2018','2019','2020'],
            datasets: [
            {
              label: 'Benton County',
              backgroundColor: 'transparent',
              borderColor: brandInfo,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [22,25,26,28,30,32]
          },
          {
              label: 'Nation',
              backgroundColor: 'transparent',
              borderColor: brandSuccess,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              borderDash: [8, 5],
              data: [15,18,20,18,22,28]
          },
          {
              label: '2017 Target',
              backgroundColor: 'transparent',
              borderColor: brandDanger,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 1,
              borderDash: [3, 3],
              data: [40,40,40,40,40,40,40,40,40,40]
          }
          ]
        },
        options: {
            maintainAspectRatio: true,
            legend: {
                display: true
            },
            responsive: true,
            scales: {
                xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Year'
                  },
                  gridLines: {
                    drawOnChartArea: false
                  }
                }],
                yAxes: [ {
                    scaleLabel: {
                      display: true,
                      labelString: 'Percent'
                  },
                      ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(50 / 5),
                        max: 50
                      },
                      gridLines: {
                        display: true
                      }
                } ]
            },
            elements: {
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3
              }
          }


        }
    } );
    
     //Obesity 3 Chart
    var ctx = document.getElementById( "obesity3Chart" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['2012','2013','2014','2015','2016','2017','2018','2019','2020'],
            datasets: [
            {
              label: 'Benton County',
              backgroundColor: 'transparent',
              borderColor: brandInfo,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [4,4.3,4.5,4,5,5]
          },
          {
              label: 'Nation',
              backgroundColor: 'transparent',
              borderColor: brandSuccess,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              borderDash: [8, 5],
              data: [8,7,7.6,7.8,7.2,7.8]
          },
          {
              label: '2017 Target',
              backgroundColor: 'transparent',
              borderColor: brandDanger,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 1,
              borderDash: [3, 3],
              data: [6,6,6,6,6,6,6,6,6,6]
          }
          ]
        },
        options: {
            maintainAspectRatio: true,
            legend: {
                display: true
            },
            responsive: true,
            scales: {
                xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Year'
                  },
                  gridLines: {
                    drawOnChartArea: false
                  }
                }],
                yAxes: [ {
                    scaleLabel: {
                      display: true,
                      labelString: 'Percent'
                  },
                      ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(10 / 5),
                        max: 10
                      },
                      gridLines: {
                        display: true
                      }
                } ]
            },
            elements: {
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3
              }
          }


        }
    } );

} )( jQuery );