import {Component, OnDestroy} from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {FormGroup} from "@angular/forms";
import {startWith, takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  onDestroy$ = new Subject<void>();
  form = new FormGroup({});
  model = {sport: '1'};
  fields: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'investmentName2',
      templateOptions: {
        label: 'Name of Investment:',
        required: true,
      },
    },
    {
      key: 'formlyTabs', // if I comment the key, form (form.get('sport')) below become undefined
      type: 'card',
      fieldGroup: [
        {
          templateOptions: {
            label: 'First tab'
          },
          fieldGroup: [
            {
              key: 'sport',
              type: 'select',
              templateOptions: {
                label: 'Sport',
                options: [
                  { id: '1', name: 'Soccer' },
                  { id: '2', name: 'Basketball' },
                ],
                valueProp: 'id',
                labelProp: 'name',
              },
            },
            {
              key: 'team',
              type: 'select',
              templateOptions: {
                label: 'Team',
                options: [],
                valueProp: 'id',
                labelProp: 'name',
              },
              lifecycle: {
                onInit: (form, field) => {
                  const teams = [
                    { id: '1', name: 'Bayern Munich', sportId: '1' },
                    { id: '2', name: 'Real Madrid', sportId: '1' },
                    { id: '3', name: 'Cleveland', sportId: '2' },
                    { id: '4', name: 'Miami', sportId: '2' },
                  ];

                  form.get('sport').valueChanges.pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('sport').value),
                    tap(sportId => {
                      field.formControl.setValue('');
                      field.templateOptions.options = teams.filter(team => team.sportId === sportId);
                    }),
                  ).subscribe();
                },
              },
            },
            {
              key: 'player',
              type: 'select',
              templateOptions: {
                label: 'Player',
                options: [],
                valueProp: 'id',
                labelProp: 'name',
              },
              lifecycle: {
                onInit: (form, field) => {
                  const players = [
                    { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },
                    { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },
                    { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },
                    { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },
                    { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },
                    { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },
                    { id: '7', name: 'Miami (Player 1)', teamId: '4' },
                    { id: '8', name: 'Miami (Player 2)', teamId: '4' },
                  ];

                  form.get('team').valueChanges.pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('team').value),
                    tap(sportId => {
                      field.formControl.setValue('');
                      field.templateOptions.options = players.filter(team => team.teamId === sportId);
                    }),
                  ).subscribe();
                },
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

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
