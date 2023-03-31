// Hero slider
const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1.25,
  spaceBetween: 20,
  initialSlide: 1,
  centeredSlides: true,

  breakpoints: {
    540: {
      slidesPerView: 2,
      initialSlide: 1,
      centeredSlides: true,
    },
    860: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

// Promotions slider
const promotionsSlider = new Swiper(".promotions-slider", {
  slidesPerView: 1.75,
  spaceBetween: 20,
  initialSlide: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    540: {
      slidesPerView: 2,
      initialSlide: 1,
      centeredSlides: true,
    },
    860: {
      slidesPerView: 3,
      initialSlide: 0,
      centeredSlides: false,
    },
  },
});

// Articles slider
const articlesSlider = new Swiper(".articles-slider", {
  slidesPerView: 1.75,
  spaceBetween: 20,
  initialSlide: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    540: {
      slidesPerView: 2.5,
      initialSlide: 1,
      centeredSlides: true,
    },
    769: {
      slidesPerView: 3,
      initialSlide: 0,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 4,
      initialSlide: 0,
      centeredSlides: false,
    },
  },
});

// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Accordion
class ItcAccordion {
  constructor(target, config) {
    this._el =
      typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".accordion__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".accordion__item_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? this.toggle(elOpenItem)
            : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector(".accordion__body");
    if (
      elBody.classList.contains("collapsing") ||
      el.classList.contains("accordion__item_show")
    ) {
      return;
    }
    elBody.style["display"] = "block";
    const height = elBody.offsetHeight;
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.add("collapsing");
    el.classList.add("accordion__item_slidedown");
    elBody.offsetHeight;
    elBody.style["height"] = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      el.classList.remove("accordion__item_slidedown");
      elBody.classList.add("collapse");
      el.classList.add("accordion__item_show");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector(".accordion__body");
    if (
      elBody.classList.contains("collapsing") ||
      !el.classList.contains("accordion__item_show")
    ) {
      return;
    }
    elBody.style["height"] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style["display"] = "block";
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.remove("collapse");
    el.classList.remove("accordion__item_show");
    elBody.classList.add("collapsing");
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      elBody.classList.add("collapse");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  toggle(el) {
    el.classList.contains("accordion__item_show")
      ? this.hide(el)
      : this.show(el);
  }
}

const faqAccordion = new ItcAccordion(document.querySelector(".accordion"), {
  alwaysOpen: true,
});
