// import { Component, OnInit } from '@angular/core';
// import * as Chartist from 'chartist';

// declare var $:any;

// @Component({
//     selector: 'dashboard-cmp',
//     moduleId: module.id,
//     templateUrl: 'dashboard.component.html'
// })

// export class DashboardComponent implements OnInit{
//     ngOnInit(){
//         var dataSales = {
//           labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
//           series: [
//              [287, 385, 490, 562, 594, 626, 698, 895, 952],
//             [67, 152, 193, 240, 387, 435, 535, 642, 744],
//             [23, 113, 67, 108, 190, 239, 307, 410, 410]
//           ]
//         };

//         var optionsSales = {
//           low: 0,
//           high: 1000,
//           showArea: true,
//           height: "245px",
//           axisX: {
//             showGrid: false,
//           },
//           lineSmooth: Chartist.Interpolation.simple({
//             divisor: 3
//           }),
//           showLine: true,
//           showPoint: false,
//         };

//         var responsiveSales: any[] = [
//           ['screen and (max-width: 640px)', {
//             axisX: {
//               labelInterpolationFnc: function (value) {
//                 return value[0];
//               }
//             }
//           }]
//         ];

//         new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


//         var data = {
//           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//           series: [
//             [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
//             [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
//           ]
//         };

//         var options = {
//             seriesBarDistance: 10,
//             axisX: {
//                 showGrid: false
//             },
//             height: "245px"
//         };

//         var responsiveOptions: any[] = [
//           ['screen and (max-width: 640px)', {
//             seriesBarDistance: 5,
//             axisX: {
//               labelInterpolationFnc: function (value) {
//                 return value[0];
//               }
//             }
//           }]
//         ];

//         new Chartist.Line('#chartActivity', data, options, responsiveOptions);

//         var dataPreferences = {
//             series: [
//                 [25, 30, 20, 25]
//             ]
//         };

//         var optionsPreferences = {
//             donut: true,
//             donutWidth: 40,
//             startAngle: 0,
//             total: 100,
//             showLabel: false,
//             axisX: {
//                 showGrid: false
//             }
//         };

//         new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

//         new Chartist.Pie('#chartPreferences', {
//           labels: ['62%','32%','6%'],
//           series: [62, 32, 6]
//         });
//     }
// }



import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $: any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  initCirclePercentage() {
    $('#chartDashboard, #chartOrders, #chartNewVisitors, #chartSubscriptions, #chartDashboardDoc, #chartOrdersDoc').easyPieChart({
      lineWidth: 6,
      size: 160,
      scaleColor: false,
      trackColor: 'rgba(255,255,255,.25)',
      barColor: '#FFFFFF',
      animate: ({ duration: 5000, enabled: true })
    });
  }

  ngOnInit() {
    /*   ************************************** Colours Projects line Charts **************************************    */

    /*  **************** Chart Total Earnings - single line ******************** */
    var dataPrice = {
      labels: ['Jan', 'feb', 'March'],
      series: [
        [340, 300, 570]
      ]
    };

    var optionsPrice = {
      showPoint: false,
      lineSmooth: true,
      height: "90px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
        showGrid: false
      },
      low: 0,
      // high: 'auto',
      //   classNames: {
      //       line: 'ct-line ct-green'
      //   }
    };

    var chartTotalEarnings = new Chartist.Line('#chartTotalEarnings', dataPrice, optionsPrice);


    /*  **************** Chart Subscriptions - single line ******************** */

    var dataDays = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S'],
      series: [
        [60, 50, 30, 70, 60, 100]
      ]
    };

    var optionsDays: any = {
      showPoint: false,
      lineSmooth: true,
      height: "90px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
        showGrid: false
      },
      low: 0,
      high: 'auto',
      classNames: {
        line: 'ct-line ct-red'
      }
    };

    var chartTotalSubscriptions = new Chartist.Line('#chartTotalSubscriptions', dataDays, optionsDays);

    /*   ************************************** Colours Projects line Charts **************************************    */

    /*  **************** Chart Total Downloads - single line ******************** */

    var dataDownloads = {
      labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
      series: [
        [1000, 3300, 3966, 5256, 8345]
      ]
    };

    var optionsDownloads: any = {
      showPoint: false,
      lineSmooth: true,
      height: "90px",
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
        showGrid: false
      },
      low: 0,
      high: 'auto',
      classNames: {
        line: 'ct-line ct-orange'
      }
    };

    var chartTotalDownloads = new Chartist.Line('#chartTotalDownloads', dataDownloads, optionsDownloads);

    /*   **************** 2014 Sales - Bar Chart ********************    */

    var data = {
      labels: ['Jan', 'Feb', 'Mar'],
      series: [
        [542, 443, 320],
        [412, 243, 280]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "90px"
    };

    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    var chartActivity = new Chartist.Bar('#chartActivity', data, options, responsiveOptions);

    /*   ************************************** Enterprise line Charts **************************************    */

    /*   **************** Ent1line Chart ********************    */


    var data = {
      labels: ['Jan', 'Feb', 'Mar'],
      series: [
        [542, 434, 610,],
        [230, 503, 710]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "90px"
    };

    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    var chartEnt1 = new Chartist.Line('#chartEnt1', data, options, responsiveOptions);

    /*   **************** Ent2line Chart ********************    */

    var dataSales: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S'],
      series: [
        [287, 385, 562, 698, 895, 952],
        [67, 152, 387, 435, 642, 744],
        [23, 113, 67, 307, 410, 410]
      ]
    };

    var optionsSales: any = {
      lineSmooth: false,
      low: 0,
      high: 1000,
      showArea: true,
      height: "90px",
      axisX: {
        showGrid: false,
      },
      showLine: true,
      showPoint: false,
    };

    var responsiveSales: any[] = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[1];
          }
        }
      }]
    ];

    var chartEnt2 = new Chartist.Line('#chartEnt2', dataSales, optionsSales, responsiveSales);


    /* ********************************************************** End of Charts ********************************************************** */

  }
  ngAfterViewInit() {
    this.initCirclePercentage();
  }
}
