import "../style/plugin/confirm.less";
export const Alert = (str: string) => { // tslint:disable-line:variable-name
    const alertDomModel = document.querySelector(".alertModel");
    if (!alertDomModel) {
        const a = `<div class="model-dialog alertModel">
                        <div class="model-overlay"></div>
                        <div class= "dialog-container">
                            <div class="dialog" >
                                <div class="dialog-title">
                                     <h4>提示</h4>
                                     <span class="close_icon"><i class="iconfont icon-close-a"></i></span>
                                </div>
                                <div class="dialog-content">`;
        const b = `</div>
                        <div class="dialog-action">
                            <button class="btn btn-info btn-submit">确定</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        const _html = a + str + b;
        const _dom = document.createElement("div");
        _dom.className = "alert_layout";
        _dom.innerHTML = _html;
        document.querySelector("body").appendChild(_dom);
    } else {
        alertDomModel.querySelector(".alertModel .dialog-content").innerHTML = str;
    }
    //显示
    const alertDom = document.querySelector(".alertModel");
    alertDom.classList.add("dialog-fadeIn");
    //确定按钮和点击空白处消失
    const btn: HTMLButtonElement = document.querySelector(".alertModel .btn-submit");
    const overlay: HTMLButtonElement = document.querySelector(".alertModel .model-overlay");
    const iconClose: HTMLSpanElement = document.querySelector(".alertModel .close_icon");
    const inReg = new RegExp("dialog-fadeIn", "g");
    btn.addEventListener("click", () => {
        alertDom.className = alertDom.className.replace(inReg, "");
    });
    overlay.addEventListener("click", () => {
        btn.click();
    });
    iconClose.addEventListener("click", () => {
        btn.click();
    });
};
