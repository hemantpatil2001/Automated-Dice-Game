import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiceComponent } from "./dice/dice.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DiceComponent]
})
export class AppComponent {
  title = 'DiceGame';
}
