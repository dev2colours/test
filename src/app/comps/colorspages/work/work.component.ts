import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var swal: any;
declare var $:any;

@Component({
  selector: 'work-cmp',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit{
  ngOnInit(){
  }
  showSwal(type) {
    if (type == 'input-field') {
      swal({
        title: 'Search user',
        html: '<form class="navbar-form navbar-left navbar-search-form" role="search">' +
          '<div class="input-group text-center" style="width:250px">' +
          '<div class="row">' +
          '<div class="col-md-8 col-md-offset-2">' +
          '<input type="text" value="" class="form-control" placeholder="User">' +
          '<span class="input-group-addon"><i class="fa fa-search"></i></span>' +
          '<div class="spaser" style="height:1em"></div>' +
          '<input type="text" value="" class="form-control" placeholder="Project">' +
          '<span class="input-group-addon"><i class="fa fa-search"></i></span>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</form>',
        // showConfirmButton: false
        // showCancelButton: true,
        // confirmButtonClass: 'btn btn-success',
        // cancelButtonClass: 'btn btn-danger',
        // buttonsStyling: true
      }).then(function (result) {
        swal({
          type: 'success',
          html: 'You entered: <strong>' +
            $('#input-field').val() +
            '</strong>',
          confirmButtonClass: 'btn btn-success',
          buttonsStyling: false

        });
      }).catch(swal.noop)
    }
    else if (type === 'request-message-and-cancel') {
      swal({
        title: 'Project Connection Request',
        text: 'Boomgare Construction',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Accept!',
        cancelButtonText: 'No, Deny',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false
      }).then(function () {
        swal({
          title: 'Accepted!',
          text: 'You have joined the Project.',
          type: 'success',
          confirmButtonClass: 'btn btn-success',
          buttonsStyling: false
        })
      }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
          swal({
            title: 'Deny',
            text: 'Project Request Denied  :)',
            type: 'error',
            confirmButtonClass: 'btn btn-info',
            buttonsStyling: false
          })
        }
      })

    }
  }
}
