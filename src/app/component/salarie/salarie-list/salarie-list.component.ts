import { Component, OnInit } from '@angular/core';
import { Salarie } from 'src/app/model/salarie';
import { SalarieService } from 'src/app/service/salarie.service';

@Component({
  selector: 'salarie-list',
  templateUrl: './salarie-list.component.html',
  styleUrls: ['./salarie-list.component.css']
})
export class SalarieListComponent implements OnInit {
  salaries: Salarie[]=[];

  constructor(private salarieService:SalarieService) { }

  ngOnInit(): void {
    this.init();
  }

  public init() {
    this.salarieService.allSalarie().subscribe((data) => {
      this.salaries = data;
      console.log(data);
    });
  }
}
