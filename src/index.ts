import { log } from "./util";
import './css/main.scss';
import './css/secondary.scss';

import './images/audi.jpg';

function notificationRegister(email: string) {
    log("registering... " +  email)
}

notificationRegister("test@mail.com");