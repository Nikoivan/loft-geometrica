class MenuAPI {
  constructor(btnName, menuName) {
    this.btn = document.querySelector(`.${btnName}`);
    this.menu = document.querySelector(`.${menuName}`);
    this.popup = document.querySelector("#popup");

    this.onBtnClick = this.onBtnClick.bind(this);

    this.btn.addEventListener("click", this.onBtnClick);
  }

  onBtnClick(e) {
    e.preventDefault();
    const menu = document.querySelector("#menu").cloneNode(1);
    this.activeMenu = menu;

    this.popup.classList.toggle("open");
    this.btn.classList.toggle("active");
    document.body.classList.toggle("noscroll");
    this.renderPopup(menu);

    const links = Array.from(menu.children);

    links.forEach((link) => {
      link.addEventListener("click", () => this.closeOnClick.call(this));
    });
  }

  renderPopup(menu) {
    this.popup.append(menu);
  }

  closeOnClick() {
    this.popup.classList.remove("open");
    this.btn.classList.remove("active");
    document.body.classList.remove("noscroll");
    this.activeMenu.remove();
    this.activeMenu = null;
  }
}

const menu = new MenuAPI("hamb", "menu");
