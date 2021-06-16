export class Serie {
/**we set up the our getter and setter in this file , 
 * and also we define the attribut here so wen can push our data
 */
    private _id: number;
    private _name: string;
    private _releasedAt: Date;
    private _seasonNumber: string;
    private _description: string;
    private _critic: string;
    private _picture: string;
    private _comment: string;

    static nextId = 1;

    constructor(name: string, releasedAt: string, seasonNumber: string, description: string, critic: string, picture: string, comment: string) {
        this._id = Serie.nextId;
        this._name = name;
        this._releasedAt = new Date();
        this._seasonNumber = seasonNumber;
        this._description = description;
        this._critic = critic;
        this._picture = picture;
        this._comment = comment;

        Serie.nextId++
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get releasedAt(): Date {
        return this._releasedAt;
    }

    set releasedAt(value: Date) {
        this._releasedAt = value;
    }

    get seasonNumber(): string {
        return this._seasonNumber;
    }

    set seasonNumber(value: string) {
        this._seasonNumber = value;
    }


    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }


    get critic(): string {
        return this._critic;
    }

    set critic(value: string) {
        this._critic = value;
    }

    get picture(): string {
        return this._picture;
    }

    set picture(value: string) {
        this._picture = value;
    }


    get comment(): string {
        return this._comment;
    }

    set comment(value: string) {
        this._comment = value;
    }



}