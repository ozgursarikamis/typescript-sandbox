import { log } from "./util";
import './css/main.scss';

function notificationRegister(email: string) {
    log("registering... " +  email)
}

notificationRegister("test@mail.com");