import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <label>
        Credit Card Number
        <input
          name="credit-card"
          [value]="foo"
          type="text"
          placeholder="Enter your 16-digit card number"
          credit-card
        />
      </label>
      <label tooltip="123" #myTooltip="tooltip">
        Enter your code
        <span (mouseover)="myTooltip.show()" (mouseout)="myTooltip.hide()"
          >(?)</span
        >
        <input type="text" />
      </label>
    </div>
  `,
})
export class AppComponent {}
