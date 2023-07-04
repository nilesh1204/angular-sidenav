import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {

  @ViewChild('sidenav') public sidenav: MatSidenav;

	constructor(private sidenavService: SidenavService) {	}

	ngOnInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
	}
	
}
