export class X {
    xId?: string;
    text?: string;
    username?: string;
    date?: Date;

    constructor(text?: string, username?: string, id?: string, date?: Date) {
        this.text = text;
        this.username = username;
        this.xId = id;
        this.date = date;
    }
}
