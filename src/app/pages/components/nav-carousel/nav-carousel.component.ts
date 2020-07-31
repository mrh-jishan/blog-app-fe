import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nav-carousel',
  templateUrl: './nav-carousel.component.html',
  styleUrls: ['./nav-carousel.component.scss']
})
export class NavCarouselComponent implements OnInit {

  navItems = [
    'Popular',
    'Momentum',
    'Coronavirus',
    'OneZero',
    'Elemental',
    'GEN',
    'Zora',
    'Forge',
    'Human Parts',
    'Marker',
    'Level',
    'Heated'
  ]

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;


  constructor() {
  }

  ngOnInit(): void {
  }

  scrollLeft = () => {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

  scrollRight = () => {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });

  }
}
