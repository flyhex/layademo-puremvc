/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.smile {
    export class LoadUI extends Laya.Scene {
		public logoMovie:Laya.FrameAnimation;
		public logoImage:Laya.Image;
		public bar:Laya.ProgressBar;
		public versionText:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("smile/Load");
        }
    }
    REG("ui.smile.LoadUI",LoadUI);
    export class MainUI extends Laya.Scene {
		public titleText:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("smile/Main");
        }
    }
    REG("ui.smile.MainUI",MainUI);
}