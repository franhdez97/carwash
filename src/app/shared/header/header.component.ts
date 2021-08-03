import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showOptions = "header__mobile";

  constructor() { }

  ngOnInit(): void {
  }

  public showMenu() {
    this.showOptions = this.showOptions === "header__mobile" ? "header__mobile--active" : "header__mobile";
  }

}
