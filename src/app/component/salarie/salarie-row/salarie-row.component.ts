import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salarie } from 'src/app/model/salarie';
import { Service } from 'src/app/model/service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: '[salarie-row]',
  templateUrl: './salarie-row.component.html',
  styleUrls: ['./salarie-row.component.css']
})
export class SalarieRowComponent implements OnInit {
  @Input('salarie')
  private _salarie: Salarie = new Salarie();
  private index: number = -1;
  private salarieBeforeChange;
  
 

  constructor(private aR: ActivatedRoute,) {
    aR.params.subscribe((params) => {
      if (params.index) {
        this.index = params.index;
      }
    });


    
  }

  ngOnInit(): void {
    
    this.salarieBeforeChange = new Salarie(
      this._salarie.id,
      this._salarie.mail,
      this._salarie.nom,
      this._salarie.prenom,
      this._salarie.service,
      this._salarie.role,
      this._salarie.manager,
    )

    
  }

  public edit(){
    console.log("edit");
  }

  public delete(){

  }

  public save() {
  }

  public cancel() {
  }

  

    /**
     * Getter salarie
     * @return {Salarie }
     */
	public get salarie(): Salarie  {
		return this._salarie;
	}

    /**
     * Setter salarie
     * @param {Salarie } value
     */
	public set salarie(value: Salarie ) {
		this._salarie = value;
	}

}
