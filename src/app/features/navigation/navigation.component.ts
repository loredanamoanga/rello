import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MenuItem, NavigationService} from "./services/navigation.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  mainMenuItems;
  activeMenuItem$: Observable<MenuItem>;

  constructor(private toolbarService: NavigationService) {
    this.mainMenuItems = this.toolbarService.getMenuItems();
    this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
  }

  // constructor(private breakpointObserver: BreakpointObserver) {}

}
