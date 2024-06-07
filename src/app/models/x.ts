export class X {
    xId?: string;
    text?: string;
    username?: string;
    date?: number;

    constructor(id?: string, text?: string, username?: string, date?: number) {
        this.xId = id;
        this.text = text;
        this.username = username;
        this.date = date;
    }
}