import { Component } from '@angular/core';
import { RightSidenavComponent } from '../right-sidenav/right-sidenav.component';
import { SidenavService } from '../sidenav/sidenav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	
	constructor(private sidenav: SidenavService) {

   }
	toggleActive:boolean = false;

	toggleRightSidenav() {
		this.toggleActive = !this.toggleActive;
		this.sidenav.toggle();

    console.log('Clicked');
	}
	
}