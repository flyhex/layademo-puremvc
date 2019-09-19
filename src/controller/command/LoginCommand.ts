/**
 * Created by jsroads on 2019/6/14 . 17:38
 * Note:
 */
import LoginProxy from "../../model/proxy/LoginProxy";
import SimpleCommand = puremvc.SimpleCommand;

export default class LoginCommand extends SimpleCommand {
    constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        let proxy: LoginProxy = <LoginProxy>this.facade.retrieveProxy(LoginProxy.NAME);
        proxy.login(notification.getBody());
    }
}