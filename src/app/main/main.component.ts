import { Component, HostListener, OnInit } from '@angular/core';

import { LayoutService } from 'src/services/layout.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}
  //for make responsive
  isMobileLayout = false;

  ngOnInit() {}

  layout(): boolean {
    return this.layoutService.layout();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileLayout = this.layout();
  }
}
