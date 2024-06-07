export class User {
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;

    constructor(username?: string, password?: string, firstName?: string, lastName?: string, city?: string, state?: string) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
    }
}