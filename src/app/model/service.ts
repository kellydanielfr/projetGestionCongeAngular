export class Service {
    private _id: number;
    private _libelle:String;


	constructor(id?: number, libelle: String = '') {
		this._id = id;
		this._libelle = libelle;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter libelle
     * @return {String}
     */
	public get libelle(): String {
		return this._libelle;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter libelle
     * @param {String} value
     */
	public set libelle(value: String) {
		this._libelle = value;
	}

}
