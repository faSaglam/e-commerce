import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor() {}

  layout1400(): boolean {
    const width = document.documentElement.clientWidth;
    const breakpoint = 1400;

    if (width < breakpoint) {
      return true;
    } else {
      return false;
    }
  }
  layout1200(): boolean {
    const width = document.documentElement.clientWidth;
    const breakpoint = 1200;

    if (width < breakpoint) {
      return true;
    } else {
      return false;
    }
  }
  layout990(): boolean {
    const width = document.documentElement.clientWidth;
    const breakpoint = 990;

    if (width < breakpoint) {
      return true;
    } else {
      return false;
    }
  }
  layout(): boolean {
    const width = document.documentElement.clientWidth;
    const breakpoint = 760;

    if (width < breakpoint) {
      return true;
    } else {
      return false;
    }
  }
}
