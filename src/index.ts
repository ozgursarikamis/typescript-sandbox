import { log } from "./util";
import './css/main.scss';
import './css/secondary.scss';

import './images/audi.jpg';

function notificationRegister(email: string) {
    log("registering... " +  email)
}

function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => json)
        .then(users => {
            console.log(users[0].name);
        })
}

// getUsers();

notificationRegister("test@mail.com");