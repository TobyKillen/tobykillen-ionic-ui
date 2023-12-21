import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  array_images: string[] = [
    '../../../assets/images/me_1.jpg',
    '../../../assets/images/me_2.jpg',
    '../../../assets/images/me_3.jpeg',
    '../../../assets/images/me6.jpeg',
  ];
  
  current_index: number = 0;
  image_interval: number = 3000;
  current_image: string = this.array_images[this.current_index];

  constructor() { }

  ngOnInit() {
    this.changeImage();
  }

  changeImage() {
    setInterval(() => {
      this.current_index++;
      if (this.current_index > this.array_images.length - 1) {
        this.current_index = 0;
      }
      this.current_image = this.array_images[this.current_index];
    }, this.image_interval);
  }

}
