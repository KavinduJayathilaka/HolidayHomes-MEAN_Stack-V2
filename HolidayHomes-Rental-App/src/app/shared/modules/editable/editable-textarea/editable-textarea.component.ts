import { Component, Input } from '@angular/core';
import { EditableComponent } from '../editable.component';

@Component({
  selector: 'app-editable-textarea',
  templateUrl: './editable-textarea.component.html',
  styleUrls: ['./editable-textarea.component.scss']
})
export class EditableTextareaComponent extends EditableComponent  {

  @Input('rows') rows = 5;
  @Input('cols') cols = 50;
 
}