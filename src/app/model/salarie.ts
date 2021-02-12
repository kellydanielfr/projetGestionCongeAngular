import { RouterLink } from "@angular/router";
import { Role } from "./role.enum";
import { Service } from "./service";

export class Salarie {
    private _id: number;
    private _mail:String;

    private _nom: String;
    private _prenom: String;
    private _service: Service;
    private _role: Role;
    private _manager: Salarie;
    private _manage: Array<Salarie>;
    
	constructor(id?: number, mail: String = '', nom: String = '', prenom: String = '', service: Service = null, role: Role = null, manager?: Salarie, manage?: Array<Salarie>) {
		this._id = id;
		this._mail = mail;
		this._nom = nom;
		this._prenom = prenom;
		this._service = service;
		this._role = role;
		this._manager = manager;
		this._manage = manage;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter mail
     * @return {String}
     */
	public get mail(): String {
		return this._mail;
	}


    /**
     * Getter nom
     * @return {String}
     */
	public get nom(): String {
		return this._nom;
	}

    /**
     * Getter prenom
     * @return {String}
     */
	public get prenom(): String {
		return this._prenom;
	}

    /**
     * Getter service
     * @return {Service}
     */
	public get service(): Service {
		return this._service;
	}

    /**
     * Getter role
     * @return {Role}
     */
	public get role(): Role {
		return this._role;
	}

    /**
     * Getter manager
     * @return {Salarie}
     */
	public get manager(): Salarie {
		return this._manager;
	}

    /**
     * Getter manage
     * @return {Array<Salarie>}
     */
	public get manage(): Array<Salarie> {
		return this._manage;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter mail
     * @param {String} value
     */
	public set mail(value: String) {
		this._mail = value;
	}


    /**
     * Setter nom
     * @param {String} value
     */
	public set nom(value: String) {
		this._nom = value;
	}

    /**
     * Setter prenom
     * @param {String} value
     */
	public set prenom(value: String) {
		this._prenom = value;
	}

    /**
     * Setter service
     * @param {Service} value
     */
	public set service(value: Service) {
		this._service = value;
	}

    /**
     * Setter role
     * @param {Role} value
     */
	public set role(value: Role) {
		this._role = value;
	}

    /**
     * Setter manager
     * @param {Salarie} value
     */
	public set manager(value: Salarie) {
		this._manager = value;
	}

    /**
     * Setter manage
     * @param {Array<Salarie>} value
     */
	public set manage(value: Array<Salarie>) {
		this._manage = value;
	}
    
   
}
