async function Footer() {
  let data = await fetch(
    "https://my-json-server.typicode.com/eliloq/Starbucks/footer-links"
  );
  let res = await data.json();
  let footer = "";

  res.forEach((elem) => {
    if (elem.content) {
      footer += `
     </ul> 
     </div> 
     </li>
     <li class="titr" id="${elem.liID}">
      ${elem.content}
     <i class="${elem.iClass}"></i>
     <div> 
     <ul>    
     `;
    } else {
      footer += `
       <li>
       <a href="${elem.linkHref}">
       ${elem.linkText}
       </a> 
       </li>
       `;
    }
  });
  footer += `</ul></div></li>`;
  document.querySelector("div.wrapper>div.footer>div.f-menu>nav").innerHTML =
    footer;
}
export default Footer;
