import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
// import { BigComponent } from '../../comps/colorspages/big/big.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NavbarModule {}
