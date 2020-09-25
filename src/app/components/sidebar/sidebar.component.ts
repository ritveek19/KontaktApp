import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/settings",
    title: "Settings",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/channels",
    title: "Channels",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },
  {
    path: "/questions",
    title: "Questions",
    icon: "icon-puzzle-10",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
