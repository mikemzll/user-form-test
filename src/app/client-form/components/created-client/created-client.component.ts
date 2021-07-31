import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { clientFormParams } from '../../constants/client-form.constants';
import { ADDRESS } from '../../constants/address.constants';
import { IDENTITY } from '../../constants/identity.constants';
import { CLIENT } from '../../constants/client.constants';
import { ROUTES } from '../../constants/routes.constants';

export interface TableItem {
  name: string;
  value: any;
}

@Component({
  selector: 'app-created-client',
  templateUrl: './created-client.component.html',
  styleUrls: ['./created-client.component.scss']
})
export class CreatedClientComponent implements OnInit {
  displayedColumns: string[] = ['name', 'value'];
  dataSource = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();
  private params;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(takeUntil(this.destroy$))
    .subscribe((params) => {
      this.params = params;
      this.dataSource = this.generateTableData(this.params.params);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private generateTableData(params): TableItem[] {
    let dataArray = [];
    
    for (let param in params) {
      dataArray.push({
        name: clientFormParams[param].name,
        value: this.getValue(param, params[param])
      })
    }
    
    return dataArray;
  }

  private getValue(param, value: string): string | boolean {
    switch (param) {
      case 'country':
        return ADDRESS.countries[value];
      case 'city':
        return ADDRESS.cities[value];
      case 'documentType':
        return IDENTITY.documentTypes[value];
      case 'clientGroup':
        return CLIENT.clientGroups[value];
      case 'gender':
        return CLIENT.genders[value];
      case 'file':
        return !!value;
      case 'birthDate':
      case 'dateOfIssue':
        let date = new Date(value);
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
      default:
        return value;
    }
  }

  public navigateToStartPage(): void {
    this.router.navigate([ROUTES.CLIENT]);
  }
}
