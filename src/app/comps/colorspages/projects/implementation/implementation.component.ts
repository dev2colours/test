import { Component, OnInit } from '@angular/core';

declare var require: any;
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-company-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.css']
})
export class CompanyImplComponent implements OnInit {


  public tableDataC: TableData;

  constructor() { }

  ngOnInit() {

    var noUiSlider = require('nouislider');
    var sliderDouble = document.getElementById('sliderDouble');

    noUiSlider.create(sliderDouble, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider_n1 = document.getElementById('slider_n1');
    noUiSlider.create(slider_n1, {
      start: [10, 100],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider_n2 = document.getElementById('slider_n2');
    noUiSlider.create(slider_n2, {
      start: [10, 100],
      connect: true,
      range: {
        min: 0,
        max: 500
      }
    });

    var slider_n3 = document.getElementById('slider_n3');
    noUiSlider.create(slider_n3, {
      start: [10, 70],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider_n4 = document.getElementById('slider_n4');
    noUiSlider.create(slider_n4, {
      start: [10, 40],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });

    // var slider_n5 = document.getElementById('slider_n5');
    // noUiSlider.create(slider_n5, {
    //   start: [10, 100],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    this.tableDataC = {
      headerRow: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      dataRows: []
    };

  }

}
