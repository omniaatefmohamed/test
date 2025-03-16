import {
  Component,
  signal,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  counter = signal(0);
  handleIncrease(): void {
    this.counter.set(this.counter() + 1);
  }
}
