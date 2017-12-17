import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() result: object;
}
