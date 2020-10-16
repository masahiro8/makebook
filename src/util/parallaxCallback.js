export const parallaxCallback = (selector) => {
  const dom = {
    document: document.getElementsByTagName("body")[0],
    target: document.querySelector(selector)
  };

  let SPEED;
  let CALLBACK;
  let POS_Y;

  const init = (speed, posY, callback) => {
    SPEED = speed;
    CALLBACK = callback;
    POS_Y = posY;
    document.addEventListener("scroll", () => {
      update();
    });
    update();
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
    let scale_rate = 1;
    //画面内に入った時だけスケールかける
    const EnterAreaBottom = get.scroll() + get.screen().height + 100;
    const EnterAreaTop = get.scroll() - 100;
    // console.log(
    //   "POS_Y,EnterAreaTop,EnterAreaBottom = ",
    //   POS_Y,
    //   EnterAreaTop,
    //   EnterAreaBottom
    // );
    if (POS_Y == 0) {
      const rect = get.rect(target);
      const bottom = 0 - get.scroll() + rect.height;
      const area_height = get.screen().height + rect.height;
      const l = area_height - bottom;
      const rate = SPEED / area_height;
      scale_rate = Math.abs(l * rate);
    } else if (EnterAreaTop < POS_Y && EnterAreaBottom > POS_Y) {
      // console.log("Enter!", get.scroll());
      const rect = get.rect(target);
      const bottom = POS_Y - get.scroll() + rect.height;
      const area_height = get.screen().height + rect.height;
      const l = area_height - bottom;
      const rate = SPEED / area_height;
      scale_rate = Math.abs(l * rate);
    } else {
      scale_rate = null;
    }
    CALLBACK(scale_rate);
  };

  const update = () => {
    enter(dom.target);
  };

  return (speed = 1.0, posY, callback) => {
    init(speed, posY, callback);
  };
};
