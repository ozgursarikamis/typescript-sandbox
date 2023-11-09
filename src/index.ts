import { log } from "./util";
import './css/main.css';

function notificationRegister(email: string) {
    log("registering... " +  email)
}

notificationRegister("test@mail.com");