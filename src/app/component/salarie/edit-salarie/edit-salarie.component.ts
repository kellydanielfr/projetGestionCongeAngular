import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/model/role.enum';
import { Salarie } from 'src/app/model/salarie';
import { Service } from 'src/app/model/service';
import { SalarieService } from 'src/app/service/salarie.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: '[edit-salarie]',
  templateUrl: './edit-salarie.component.html',
  styleUrls: ['./edit-salarie.component.css']
})
export class EditSalarieComponent implements OnInit {
  private _salarie: Salarie = new Salarie();
  services: Service[]=[];
  managers: Salarie[]=[];
  nomCtrl: FormControl;
  mailCtrl: FormControl;
  roleCtrl: FormControl;
  serviceCtrl:FormControl;
  managerCtrl:FormControl;
  form: FormGroup;
  serviceTmp : Service = new Service();
  managerTmp : Salarie = new Salarie();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private salarireService: SalarieService,
    private serviceService:ServiceService,
    private fb: FormBuilder) { 

    this.nomCtrl = this.fb.control('',Validators.required);
    this.mailCtrl = this.fb.control('',Validators.required);
    this.roleCtrl = this.fb.control('', Validators.required);
    this.serviceCtrl= this.fb.control('',Validators.required);
    this.managerCtrl= this.fb.control('',Validators.required);
    this.form = this.fb.group({
      mail: this.mailCtrl,
      nom: this.nomCtrl,
      role: this.roleCtrl,
      service: this.serviceCtrl,
      manager : this.managerCtrl,
    })
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.salarireService.findById(params.id).subscribe((data) => {
          this._salarie = data;
          this.mailCtrl.setValue(this.salarie.mail);
          this.nomCtrl.setValue(this.salarie.nom);
          this.roleCtrl.setValue(this.salarie.role);
          this.serviceCtrl.setValue(this.salarie.service);
          this.managerCtrl.setValue(this.salarie.manager.nom);
        });
      }
    });

    this.serviceService.allService().subscribe((data) => {
      this.services = data;
    });

    this.salarireService.allSalarieLazy().subscribe((data) => {
      this.managers = data;
    });
    
  }


  public send() {

    this.salarie.mail=this.mailCtrl.value;
    this.salarie.nom=this.nomCtrl.value;
    this.salarie.role=this.roleCtrl.value;
    this.salarie.service=this.serviceTmp;
    this.salarie.manager=this.managerTmp;



    this.salarireService.update(this.salarie).subscribe((result)=>{
      this.router.navigate(['/salarie/list'], {  });
    })
      
  }

  public serviceSelect(evt){
    this.serviceService.findById(evt).subscribe((data) => {
      this.serviceTmp = data;
    });
  }

  public managerSelect(evt){
    console.log(evt);
    this.salarireService.findById(evt).subscribe((data) => {
      this.managerTmp = data;
    });
  }
  public cancel() {
    this.router.navigate(['/salarie/list'], {  });
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
