import Header from "./Header.js";
Header();

import Container from "./Container.js";
Container();

import Paragraph from "./Paragraph.js";
Paragraph();

import Footer from "./Footer.js";
Footer();

import FooterMore from "./FooterMore.js";
FooterMore();


// when we click on the menu icon in small sizes
let flag = true;
$("div.wrapper>div.header>div.vertical-menu>div.menu").on({
  click: function () {

      $("html,body").css({
      overflow:"hidden"
    });

    if (flag) {
      $(this).css({
        gap: "0",
      });

      // the menu box
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
      // the menu box
      
    $("html,body").css({
        overflow:"visible",
        overflowX:"hidden"
    });

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


// About us footer menu
let flag2 = true;
$("div.wrapper>div.footer>div.f-menu>nav").on(
  "click",
  "li#about-us",
  function () {
    console.log("hi");

    if (flag2) {
      $("div.wrapper>div.footer>div.f-menu>nav>li#about-us>div").slideDown(500);

      $("div.wrapper>div.footer>div.f-menu>nav>li#about-us>i").css({
        transform: "rotate(180deg)",
        transition: "250ms",
      });
      flag2 = false;
    } else {
      $("div.wrapper>div.footer>div.f-menu>nav>li#about-us>div").slideUp(500);

      $("div.wrapper>div.footer>div.f-menu>nav>li#about-us>i").css({
        transform: "rotate(0deg)",
        transition: "250ms",
      });
      flag2 = true;
    }
  }
);

// Careers footer menu
let flag3 = true;
$("div.wrapper>div.footer>div.f-menu>nav").on(
  "click",
  "li#careers",
  function () {
    console.log("hi");

    if (flag3) {
      $("div.wrapper>div.footer>div.f-menu>nav>li#careers>div").slideDown(500);

      $("div.wrapper>div.footer>div.f-menu>nav>li#careers>i").css({
        transform: "rotate(180deg)",
        transition: "250ms",
      });
      flag3 = false;
    } else {
      $("div.wrapper>div.footer>div.f-menu>nav>li#careers>div").slideUp(500);

      $("div.wrapper>div.footer>div.f-menu>nav>li#careers>i").css({
        transform: "rotate(0deg)",
        transition: "250ms",
      });
      flag3 = true;
    }
  }
);

// Social Impact footer menu
let flag4 = true;
$("div.wrapper>div.footer>div.f-menu>nav").on(
  "click",
  "li#social-impact",
  function () {
    console.log("hi");

    if (flag4) {
      $("div.wrapper>div.footer>div.f-menu>nav>li#social-impact>div").slideDown(
        500
      );

      $("div.wrapper>div.footer>div.f-menu>nav>li#social-impact>i").css({
        transform: "rotate(180deg)",
        transition: "250ms",
      });

      flag4 = false;
    } else {
      $("div.wrapper>div.footer>div.f-menu>nav>li#social-impact>div").slideUp(
        500
      );

      $("div.wrapper>div.footer>div.f-menu>nav>li#social-impact>i").css({
        transform: "rotate(0deg)",
        transition: "250ms",
      });
      flag4 = true;
    }
  }
);

// For Business Partners footer menu
let flag5 = true;
$("div.wrapper>div.footer>div.f-menu>nav").on(
  "click",
  "li#business-partners",
  function () {
    console.log("hi");

    if (flag5) {
      $(
        "div.wrapper>div.footer>div.f-menu>nav>li#business-partners>div"
      ).slideDown(500);

      $("div.wrapper>div.footer>div.f-menu>nav>li#business-partners>i").css({
        transform: "rotate(180deg)",
        transition: "250ms",
      });

      flag5 = false;
    } else {
      $(
        "div.wrapper>div.footer>div.f-menu>nav>li#business-partners>div"
      ).slideUp(500);

      $("div.wrapper>div.footer>div.f-menu>nav>li#business-partners>i").css({
        transform: "rotate(0deg)",
        transition: "250ms",
      });

      flag5 = true;
    }
  }
);

// Order and Pick Up footer menu
let flag6 = true;
$("div.wrapper>div.footer>div.f-menu>nav").on(
  "click",
  "li#order-pickup",
  function () {
    console.log("hi");

    if (flag6) {
      $("div.wrapper>div.footer>div.f-menu>nav>li#order-pickup>div").slideDown(
        500
      );

      $("div.wrapper>div.footer>div.f-menu>nav>li#order-pickup>i").css({
        transform: "rotate(180deg)",
        transition: "250ms",
      });

      flag6 = false;
    } else {
      $("div.wrapper>div.footer>div.f-menu>nav>li#order-pickup>div").slideUp(
        500
      );

      $("div.wrapper>div.footer>div.f-menu>nav>li#order-pickup>i").css({
        transform: "rotate(0deg)",
        transition: "250ms",
      });

      flag6 = true;
    }
  }
);
