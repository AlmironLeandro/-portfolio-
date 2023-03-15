import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('menu') item!: ElementRef;

  openMenu() {
    const menuChildren = this.item.nativeElement.childNodes;
    const menu = this.item.nativeElement
    menuChildren.forEach((child: any, i: any) => {
      if (i !== 0) {
        child.classList.toggle('open__navbar')
      }
    },
    menu.classList.toggle('menuVisible'));
  }
}
