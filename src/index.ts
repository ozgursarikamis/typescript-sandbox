import { log } from "./util";

function notificationRegister(email: string) {
    log("registering... " +  email)
}

notificationRegister("test@mail.com");