import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public photos: Array<string> = [];

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
    this.createGallery();
  }

  private createGallery() {
    for(let i = 1; i <= 7; i++) {
      this.photos.push(`../../../assets/img/gallery/thumbnail/thumbnail_gallery${i}.jpg`);
    }
  }

  public showGallery(index: number) {
    let prop = {
      images: [
        {path: '../../../assets/img/gallery/gallery1.jpg'},
        {path: '../../../assets/img/gallery/gallery2.jpg'},
        {path: '../../../assets/img/gallery/gallery3.jpg'},
        {path: '../../../assets/img/gallery/gallery4.jpg'},
        {path: '../../../assets/img/gallery/gallery5.jpg'},
        {path: '../../../assets/img/gallery/gallery6.jpg'},
        {path: '../../../assets/img/gallery/gallery7.jpg'}
      ],
      index 
    };
    this.gallery.load(prop);
  }

}
