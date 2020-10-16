export const imageloader = (url) => {
  return new Promise((resolved) => {
    const img = new Image();
    img.onload = () => resolved(url);
    img.onerror = () => resolved("./images/noimage.png");
    img.src = url;
  });
};
