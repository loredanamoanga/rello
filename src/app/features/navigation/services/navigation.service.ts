import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class MenuItem {
  path: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeMenuItem$: Observable<MenuItem>;

  constructor(private router: Router, private titleService: Title) {
    this.activeMenuItem$ = this.router.events.pipe(
      filter((e: any) => e instanceof NavigationEnd),
      map((_: any) => this.router.routerState.root),
      map((route: any) => {
        let active = this.lastRouteWithMenuItem(route.root);
        this.titleService.setTitle(active.title);
        return active;
      }));
  }
  getMenuItems(): { path: any; title: any }[] {
    return this.router.config
      .filter(route => route.data && route.data['title'])
      .map(route => {
        return {
          path: route.path,
          title: route.data!['title']
        };
      });
  }

  private lastRouteWithMenuItem(route: ActivatedRoute | null): MenuItem {
    let lastMenu: MenuItem = {path: "", title: ""};
    do { lastMenu = this.extractMenu(route) || lastMenu; }
    while ((route = route!.firstChild));
    return lastMenu;
  }
  private extractMenu(route: ActivatedRoute | null): { path: any; title: any } | undefined {
    let cfg = route!.routeConfig;
    return cfg && cfg.data && cfg.data['title']
      ? { path: cfg.path, title: cfg.data['title']}
      : undefined
  }
}
