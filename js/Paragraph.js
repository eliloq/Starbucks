async function Paragraph() {
  let data = await fetch("http://localhost:2000/paragraph");
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
