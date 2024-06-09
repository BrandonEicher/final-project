export class X {
    xId?: string;
    text?: string;
    username?: string;
    date?: number;

    constructor(text?: string, username?: string, id?: string, date?: number) {
        this.text = text;
        this.username = username;
        this.xId = id;
        this.date = date;
    }
}
