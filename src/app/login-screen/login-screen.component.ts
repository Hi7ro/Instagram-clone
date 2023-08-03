import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  img = [
    '../../assets/iphoneImg1.png',
    '../../assets/iphoneImg2.png',
    '../../assets/iphoneImg3.png',
    '../../assets/iphoneImg4.png',
  ];

  showImg = true;

  currentImg = 0;

  ngOnInit() {
    this.updateImg();
  }

  updateImg() {
    setInterval(() => {
      this.currentImg++;
      this.currentImg = this.currentImg % this.img.length;
      this.showImg = false;
      setTimeout(() => {
        this.showImg = true;
      }, 1);
    }, 4000);
  }
}
