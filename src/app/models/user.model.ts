export class User {
/**we set up the our getter and setter in this file ,
 * and also we define the attribut here so wen can push our data
 */
    private _username: string;
    private _password: string;

    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}