async function FooterMore() {
  let data = await fetch(
    "https://my-json-server.typicode.com/eliloq/Starbucks/footer-more"
  );
  let res = await data.json();
  let icon = "",
    links = "",
    copyright = "";
    
  res.forEach((elem, index) => {
    console.log(elem.src)
     if (index >= 0 && index <= 5) {
       icon += `
       <div>
         <a href="${elem.link}">
         <img src=" ${elem.src}"></img>
         </a>
     </div>
      `;
     } else if (index >= 6 && index <= 11) {
       links += `
         <li>
             <a href="${elem.link}">
              ${elem.content}
             </a>
         </li>
               `;
     } else {
       copyright += `
       <p>${elem.content}</p>
       `;
     }

     document.querySelector(
       "div.wrapper>div.footer>div.social-media"
     ).innerHTML = icon;

     document.querySelector("div.wrapper>div.footer>div.links>ul").innerHTML =
       links;

      document.querySelector("div.wrapper>div.footer>div.copyright").innerHTML=copyright;
  });
}
export default FooterMore;
