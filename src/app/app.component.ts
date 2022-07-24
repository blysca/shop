import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>;
  title = 'shop';
  currentTask = 2;

  ngAfterViewInit(): void { 
    this.appTitle.nativeElement.textContent = `Task ${this.currentTask}`;
  }
}