class Popup {
  constructor() {
    this.btns = [...document.querySelectorAll(".btn")];

    this.onBtnClick = this.onBtnClick.bind(this);
    this.onCloseBtn = this.onCloseBtn.bind(this);

    this.btns.forEach((el) => {
      el.addEventListener("click", this.onBtnClick);
    });
  }

  onBtnClick(e) {
    e.preventDefault();
    console.log("popup click");

    const popup = document.createElement("div");
    popup.classList.add("popup-form");
    popup.innerHTML = `<div class="popup-form-wrapper">
    <div class="popup-form-header">
        <div class="popup-close-wrap">
            <span class="popup-close-btn">&#10006;</span>
        </div>
    </div>
    <div class="popup-form-main">
        <div class="popup-from-title-wrap">
            <h2 class="popup-form-title">Заказать</h2>
        </div>
        <form  class="form__popup">
            <div class="form-name-wrap">
                <label for="input-name" class="form-tool-wrap form-name-tooltip"><span class="name">Ваше Имя</span><span class="name-sp-tooltip">*</span></label>
                <input type="text" name="name" class="input input-name">
            </div>
            <div class="form-name-wrap">
                <label for="input-phone" class="form-tool-wrap form-phone-tooltip"><span class="name">Контактный номер</span><span class="name-sp-tooltip">*</span></label>
                <input type="text" name="phone" class="input input-phone">
            </div>
            <div class="form-name-wrap">
                <label for="input-mail" class="form-tool-wrap form-mail-tooltip"><span class="name">Ваш e-mail</span></label>
                <input type="text" name="mail" class="input input-mail">
            </div>
            <div class="form-name-wrap">
                <label for="input-message" class="form-tool-wrap form-message-tooltip"><span class="name">Комментарий</span></label>
               <textarea class="area-message" name="message"></textarea>
            </div>
            <div class="form-file-wrap">
                <label class="input-file">                            
                    <input type="file" name="file">        
                     <span class="input-file-btn">Выберите файл</span>
              </label>
            </div>
            <div class="form-footer">
                <div class="form-check-wrap"><input type="checkbox" name="checkbox" id="checkbox" class="input-checkbox"></div>
                <div class="form-check-description">Настоящим подтверждаю, что я ознакомлен и согласен с условиями <span class="policy">политики конфидециальности.</span></div>
            </div> 
            <div class="head__forms-wrap">
                <div class="form">
                    <button class="btn btn-first">Заказать</button>
                </div>
                
            </div>                                    
        </form>
    </div>
</div>`;

    document.body.append(popup);

    this.element = popup;
    this.closeBtns = [];
    this.closeBtns.push(this.element.querySelector(".popup-close-btn"));
    this.closeBtns.push(this.element.querySelector(".btn-first"));

    this.closeBtns.forEach((el) =>
      el.addEventListener("click", this.onCloseBtn)
    );
  }

  onCloseBtn(e) {
    this.element.remove();
  }
}

const popup = new Popup();
