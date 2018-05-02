import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'li[contar-clicks]'
})
export class ContarClicksDirective {
  clickN = 0;
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, 'número de clicks:', this.clickN++);
    this.opacity += .2;
  }
}
