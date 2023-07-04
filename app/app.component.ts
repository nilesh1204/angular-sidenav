import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './sidenav/sidenav.service';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'title';
	
	@ViewChild('rightSidenav') public sidenav: MatSidenav;

	constructor(private sidenavService: SidenavService) {	}

	ngOnInit(): void {
	//	this.sidenavService.setSidenav(this.sidenav);
	}
}