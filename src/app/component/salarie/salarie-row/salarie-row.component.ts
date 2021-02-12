import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salarie } from 'src/app/model/salarie';

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
  consultation: boolean = true;

  constructor(private aR: ActivatedRoute) {
    aR.params.subscribe((params) => {
      if (params.index) {
        this.index = params.index;
      }
    });
  }

  ngOnInit(): void {
    console.log("test" + this._salarie);
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
    this.consultation = true;
  }

  public delete(){

  }

  public save() {
    this.consultation = true;
  }

  public cancel() {
    this.consultation = true;
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
