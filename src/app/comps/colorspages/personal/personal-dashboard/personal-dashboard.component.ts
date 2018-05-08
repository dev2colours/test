import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $: any;

@Component({
    selector: 'personal-dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'personal-dashboard.component.html'
})

export class PersonalDashboardComponent implements OnInit{
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
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [60, 50, 30, 50, 57, 60, 64]
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

    /*   **************** PSline1 Chart ********************    */


    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      series: [
        [242, 434, 610, 800],
        [230, 503, 710, 805]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "90px",

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

    var PSline1 = new Chartist.Line('#PSline1', data, options, responsiveOptions);

    /*   ************************************** Colours Projects line Charts **************************************    */

    /*  **************** Chart Total Downloads - single line ******************** */

    var dataDownloads = {
      labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
      series: [
        [100, 130, 66, 226, 83]
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
