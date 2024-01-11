async function Container() {
  let data = await fetch("https://my-json-server.typicode.com/eliloq/Starbucks/container");
  let res = await data.json();
  let container = "";

  res.forEach((elem) => {
    container += `
    <div>
    <img src=" ${elem.src}" alt=" ${elem.alt}"></img>
    <div class="content">
    <h2>${elem.title}</h2>
    <p>${elem.content}</p>
    <a href="${elem.linkHref}">
    ${elem.linkText}
    </a>
    </div>
     </div>
     `;

    document.querySelector(
      "div.wrapper>div.containers"
    ).innerHTML = container;
  });
}
export default Container;
