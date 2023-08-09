class MenuAPI {
  constructor(btnName) {
    this.btn = document.querySelector(`.${btnName}`);
    this.hamb = document.querySelector(".hamb__field");
    this.popup = document.querySelector("#popup");

    this.onBtnClick = this.onBtnClick.bind(this);
    this.closeOnClick = this.closeOnClick.bind(this);

    this.btn.addEventListener("click", this.onBtnClick);
  }

  get menu() {
    const menu = document.createElement("ul");
    menu.classList.add("menu");
    menu.innerHTML = `<li><a class="link-main">Главная</a></li>                        
<li><a class="link-services">Услуги</a></li>            
<li><a class="link-services">Наши работы</a></li>
<li><a class="link-services">Контакты</a></li>`;

    menu.querySelector(".link-main").setAttribute("href", "index.html");
    menu.querySelector(".link-services").setAttribute("href", "services.html");
    //наши работы
    //контакты

    return menu;
  }

  onBtnClick(e) {
    e.preventDefault();
    const menu = this.menu;

    document.body.classList.add("noscroll");
    this.popup.classList.add("open");
    this.hamb.classList.add("active");
    this.popup.append(menu);

    const links = Array.from(menu.children);

    links.forEach((link) => {
      link.addEventListener("click", () => this.closeOnClick.call(this));
    });

    this.activeMenu = menu;
    this.btn.removeEventListener("click", this.onBtnClick);
    this.btn.addEventListener("click", this.closeOnClick);
  }

  closeOnClick(e) {
    e.preventDefault();
    document.body.classList.remove("noscroll");
    this.popup.classList.remove("open");
    this.hamb.classList.remove("active");
    this.activeMenu.remove();
    this.activeMenu = null;

    this.btn.addEventListener("click", this.onBtnClick);
    this.btn.removeEventListener("click", this.closeOnClick);
  }
}

const menu = new MenuAPI("hamb", "menu");
