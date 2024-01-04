import Header from "./Header.js";
Header();

// when we click on the menu icon in small sizes
let flag = true;
$("div.wrapper>div.header>div.vertical-menu>div.menu").on({
  click: function () {
    if (flag) {
      $(this).css({
        gap: "0",
      });

      // thhe menu box
      setTimeout(() => {
        $(
          "div.wrapper > div.header > div.vertical-menu > div.menu > div.s-menu"
        ).css({
          right: "0",
          transition: "650ms",
        });
      }, 0);

      $(
        "div.wrapper > div.header > div.vertical-menu > div.menu > div.s-menu"
      ).css({
        display: "block",
      });

      // the cover box
      $(
        "div.wrapper > div.header > div.vertical-menu > div.menu > div.cover"
      ).css({
        display: "block",
      });

      // menu icon change
      $(
        "div.wrapper>div.header>div.vertical-menu>div.menu>div:nth-of-type(2)"
      ).css({
        display: "none",
      });
      $(
        "div.wrapper>div.header>div.vertical-menu>div.menu>div:nth-of-type(1)"
      ).css({
        position: "absolute",
        transform: "rotate(45deg)",
        transition: "500ms",
      });
      $(
        "div.wrapper>div.header>div.vertical-menu>div.menu>div:nth-of-type(3)"
      ).css({
        position: "absolute",
        transform: "rotate(135deg)",
        transition: "500ms",
      });
      flag = false;
    } else {
      // thhe menu box

      setTimeout(() => {
        $(
          "div.wrapper > div.header > div.vertical-menu > div.menu > div.s-menu"
        ).css({
          display: "none",
        });
      }, 650);

      // the menu box
      $(
        "div.wrapper > div.header > div.vertical-menu > div.menu > div.s-menu"
      ).css({
        right: "-800px",
        transition: "650ms",
      });

      // the cover box
      $(
        "div.wrapper > div.header > div.vertical-menu > div.menu > div.cover"
      ).css({
        display: "none",
      });
      // menu icon change

      $(
        "div.wrapper>div.header>div.vertical-menu>div.menu>div:nth-of-type(1)"
      ).css({
        transform: "rotate(0)",
        transition: "500ms",
      });
      $(
        "div.wrapper>div.header>div.vertical-menu>div.menu>div:nth-of-type(3)"
      ).css({
        transform: "rotate(0)",
        transition: "500ms",
      });

      setTimeout(() => {
        $(this).css({
          gap: "5px",
        });

        $(
          "div.wrapper>div.header>div.vertical-menu>div.menu>div:nth-of-type(1)"
        ).css({
          position: "relative",
        });
        $(
          "div.wrapper>div.header>div.vertical-menu>div.menu>div:nth-of-type(3)"
        ).css({
          position: "relative",
        });

        $(
          "div.wrapper>div.header>div.vertical-menu>div.menu>div:nth-of-type(2)"
        ).css({
          display: "block",
        });
      }, 250);

      flag = true;
    }
  },
});
