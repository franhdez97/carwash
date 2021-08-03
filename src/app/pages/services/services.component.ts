import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public option = "";
  public img = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.option = this.route.snapshot.params.service;
    this.getImage();
  }

  private getImage() {
    switch (this.option) {
      case 'tradicional':
        this.img = "../../../assets/img/servicio1.jpg"
        break;
      case 'automatico':
        this.img = "../../../assets/img/servicio2.jpg"
          break;
      case 'mantenimiento':
        this.img = "../../../assets/img/servicio3.jpg"
        break;
      default:
        break;
    }
  }

}
