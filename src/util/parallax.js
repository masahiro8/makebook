export const parallax = (selector) => {
  const dom = {
    document: document.getElementsByTagName("body")[0],
    target: document.querySelector(selector)
  };

  let ZINDEX;
  let SHIFT;
  let SPEED;

  const init = (z, shift, speed) => {
    document.addEventListener("scroll", () => {
      update();
    });
    ZINDEX = z;
    SHIFT = shift;
    SPEED = speed;
  };

  const get = {
    scroll: () => {
      return document.scrollingElement.scrollTop;
    },
    rect: (element) => {
      return element.getBoundingClientRect();
    },
    screen: () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  };

  const enter = (target) => {
    const v = ZINDEX; //移動量

    const rect = get.rect(target);
    const bottom = rect.top + rect.height;

    const area_height = get.screen().height + rect.height;
    const l = area_height - bottom;
    const rate = v / area_height;
    const move = -(l * rate * SPEED);

    dom.target.style.transform = "translateY(" + move + "px)";
    dom.target.style.marginTop = SHIFT + "px";
  };

  const update = () => {
    enter(dom.target);
    // console.log(get.scroll(), get.rect(dom.target));
  };

  return (z, shift, speed = 1.0) => {
    init(z, shift, speed);
  };
};
