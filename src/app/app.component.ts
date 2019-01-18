import {Component} from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      //className: 'col-sm-4',
      type: 'input',
      key: 'investmentName2',
      templateOptions: {
        label: 'Name of Investment:',
        required: true,
      },
    },
    {
      key: 'formly-tabs',
      type: 'card',
      fieldGroup: [
        {
          templateOptions: {
            label: 'First tab'
          },
          fieldGroup: [
            {
              //className: 'col-sm-4',
              type: 'input',
              key: 'investmentName',
              templateOptions: {
                label: 'Name of Investment:',
                required: true,
              },
            },
          ],
        },
        {
          templateOptions: {
            label: 'Second tab'
          },
          fieldGroup: [
            {
              type: 'input',
              key: 'investmentDate',
              //className: 'col-sm-3',
              templateOptions: {
                type: 'date',
                label: 'Date of Investment:',
              },
            },
          ],
        }
      ],
    },
  ];

  submit(model) {
    console.log(model);
  }
}
