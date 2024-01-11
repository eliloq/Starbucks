async function Paragraph() {
  let data = await fetch("https://my-json-server.typicode.com/eliloq/Starbucks/paragraph");
  let res = await data.json();
  let paragraph = "";

  res.forEach((elem) => {
    paragraph += `
    <p>${elem.content}
    </p>
         `;

    document.querySelector(
      "div.wrapper>div.paragraph"
    ).innerHTML = paragraph;
  });
}
export default Paragraph;
