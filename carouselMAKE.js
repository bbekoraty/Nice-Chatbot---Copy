const createCarousel = () => {
  return [
    {
      type: "flex",
      altText: "Carousel",
      contents: {
        type: "carousel",
        contents: [],
      }
    }];
};

module.exports = createCarousel;