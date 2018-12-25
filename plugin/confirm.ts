import "../style/plugin/confirm.less";
export const Confirm = (str: string, cb: (result: boolean) => void) => { // tslint:disable-line:variable-name
    const confirmDomModel = document.querySelector(".confirmModel");
    if (!confirmDomModel) {
        const a = `<div class="model-dialog confirmModel">
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
                            <button class="btn btn-info btn-cancel">否</button>
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
        confirmDomModel.querySelector(".confirmModel .dialog-content").innerHTML = str;
    }
    //显示
    const alertDom = document.querySelector(".confirmModel");
    alertDom.classList.add("dialog-fadeIn");
    //确定按钮和点击空白处消失
    const btnSubmit: HTMLButtonElement = document.querySelector(".confirmModel .btn-submit");
    const btnCancel: HTMLButtonElement = document.querySelector(".confirmModel .btn-cancel");
    const iconClose: HTMLSpanElement = document.querySelector(".confirmModel .close_icon");
    const overlay: HTMLButtonElement = document.querySelector(".confirmModel .model-overlay");
    const inReg = new RegExp("dialog-fadeIn");
    let result = false;
    overlay.onclick = () => {
        alertDom.className = alertDom.className.replace(inReg, "");
        if (typeof cb === "function") {
            cb(result);
        }
    };
    btnSubmit.onclick = () => {
        result = true;// tslint:disable-line:no-param-reassign
        overlay.click();
    };
    btnCancel.onclick = () => {
        result = false; // tslint:disable-line:no-param-reassign
        overlay.click();
    };
    iconClose.onclick = () => {
        result = false;
        overlay.click();
    };
};
