
export class Comment {

private _author: string;
private _content: string;

private _id: number;
private _date: Date;

static nbId = 1;

constructor(author: string, content: string) {
    this._author = author;
    this._content = content;

    this._id = Comment.nbId;
    Comment.nbId++;

    this._date = new Date();
}

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }


    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }


    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

}
