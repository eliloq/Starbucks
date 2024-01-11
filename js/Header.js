async function Header() {
  let data = await fetch("https://my-json-server.typicode.com/eliloq/Starbucks/header");
  let res = await data.json();
  let logo = "",
    menu = "",
    location = "",
    buttons = "";

  res.forEach((elem, index) => {
    if (index == 0) {
      logo += `
                <a href="${elem.link}">
                <img src=" ${elem.src}"></img>
                </a>

                `;
    } else if (index >= 1 && index <= 3) {
      menu += `
                <li>
                    <a href="${elem.link}">
                    ${elem.content}
                    </a>
                </li>
            `;
    } else if (index == 4) {
      location += `
            <a href="${elem.link}" >
            <i class="${elem.class}"></i>
            ${elem.content}
            </a>
    `;
    } else {
      buttons += `
            <a href="${elem.link}" >
            ${elem.content}
            </a>
    `;
    }
    // horizontal-menu
    document.querySelector(
      "div.wrapper>div.header>div.horizontal-menu>div.logo"
    ).innerHTML = logo;

    document.querySelector(
      "div.wrapper>div.header>div.horizontal-menu>div.menu-items>nav>ul"
    ).innerHTML = menu;

    document.querySelector(
      "div.wrapper>div.header>div.horizontal-menu>div.links>div.location"
    ).innerHTML = location;

    document.querySelector(
      "div.wrapper>div.header>div.horizontal-menu>div.links>div.buttons"
    ).innerHTML = buttons;

    //vertical-menu
    document.querySelector(
      "div.wrapper>div.header>div.vertical-menu>div.logo"
    ).innerHTML = logo;

    document.querySelector(
      "div.wrapper>div.header>div.vertical-menu>div.menu>div.s-menu>div.menu-items>nav>ul"
    ).innerHTML = menu;

    document.querySelector(
      "div.wrapper>div.header>div.vertical-menu>div.menu>div.s-menu>div.links>div.location"
    ).innerHTML = location;

    document.querySelector(
      "div.wrapper>div.header>div.vertical-menu>div.menu>div.s-menu>div.links>div.buttons"
    ).innerHTML = buttons;

  });
}
export default Header;
