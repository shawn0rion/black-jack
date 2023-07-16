import c10 from "./images/10-C.png";

const dataset = [
  { suit: "C", value: "10", imageFile: "/src/images/10-C.png", image: null },
  { suit: "S", value: "2", imageFile: "/src/images/2-S.png", image: null },
  { suit: "H", value: "4", imageFile: "/src/images/4-H.png", image: null },
  { suit: "D", value: "6", imageFile: "/src/images/6-D.png", image: null },
  { suit: "C", value: "8", imageFile: "/src/images/8-C.png", image: null },
  { suit: "S", value: "9", imageFile: "/src/images/9-S.png", image: null },
  { suit: "J", value: "J", imageFile: "/src/images/J-C.png", image: null },
  { suit: "H", value: "K", imageFile: "/src/images/K-H.png", image: null },
  { suit: "D", value: "10", imageFile: "/src/images/10-D.png", image: null },
  { suit: "C", value: "3", imageFile: "/src/images/3-C.png", image: null },
  { suit: "S", value: "4", imageFile: "/src/images/4-S.png", image: null },
  { suit: "H", value: "6", imageFile: "/src/images/6-H.png", image: null },
  { suit: "D", value: "8", imageFile: "/src/images/8-D.png", image: null },
  { suit: "C", value: "A", imageFile: "/src/images/A-C.png", image: null },
  { suit: "J", value: "J", imageFile: "/src/images/J-D.png", image: null },
  { suit: "S", value: "K", imageFile: "/src/images/K-S.png", image: null },
  { suit: "H", value: "10", imageFile: "/src/images/10-H.png", image: null },
  { suit: "D", value: "3", imageFile: "/src/images/3-D.png", image: null },
  { suit: "C", value: "5", imageFile: "/src/images/5-C.png", image: null },
  { suit: "S", value: "6", imageFile: "/src/images/6-S.png", image: null },
  { suit: "H", value: "8", imageFile: "/src/images/8-H.png", image: null },
  { suit: "D", value: "A", imageFile: "/src/images/A-D.png", image: null },
  { suit: "J", value: "J", imageFile: "/src/images/J-H.png", image: null },
  { suit: "C", value: "Q", imageFile: "/src/images/Q-C.png", image: null },
  { suit: "S", value: "10", imageFile: "/src/images/10-S.png", image: null },
  { suit: "H", value: "3", imageFile: "/src/images/3-H.png", image: null },
  { suit: "D", value: "5", imageFile: "/src/images/5-D.png", image: null },
  { suit: "C", value: "7", imageFile: "/src/images/7-C.png", image: null },
  { suit: "S", value: "8", imageFile: "/src/images/8-S.png", image: null },
  { suit: "H", value: "A", imageFile: "/src/images/A-H.png", image: null },
  { suit: "J", value: "R", imageFile: "/src/images/J-R.png", image: null },
  { suit: "D", value: "Q", imageFile: "/src/images/Q-D.png", image: null },
  { suit: "C", value: "2", imageFile: "/src/images/2-C.png", image: null },
  { suit: "S", value: "3", imageFile: "/src/images/3-S.png", image: null },
  { suit: "H", value: "5", imageFile: "/src/images/5-H.png", image: null },
  { suit: "D", value: "7", imageFile: "/src/images/7-D.png", image: null },
  { suit: "C", value: "9", imageFile: "/src/images/9-C.png", image: null },
  { suit: "S", value: "A", imageFile: "/src/images/A-S.png", image: null },
  { suit: "J", value: "S", imageFile: "/src/images/J-S.png", image: null },
  { suit: "H", value: "Q", imageFile: "/src/images/Q-H.png", image: null },
  { suit: "D", value: "2", imageFile: "/src/images/2-D.png", image: null },
  { suit: "C", value: "4", imageFile: "/src/images/4-C.png", image: null },
  { suit: "S", value: "5", imageFile: "/src/images/5-S.png", image: null },
  { suit: "H", value: "7", imageFile: "/src/images/7-H.png", image: null },
  { suit: "D", value: "9", imageFile: "/src/images/9-D.png", image: null },
  {
    suit: "BACK",
    value: "BACK",
    imageFile: "/src/images/BACK.png",
    image: null,
  },
  { suit: "K", value: "C", imageFile: "/src/images/K-C.png", image: null },
  { suit: "Q", value: "S", imageFile: "/src/images/Q-S.png", image: null },
  { suit: "H", value: "2", imageFile: "/src/images/2-H.png", image: null },
  { suit: "D", value: "4", imageFile: "/src/images/4-D.png", image: null },
  { suit: "C", value: "6", imageFile: "/src/images/6-C.png", image: null },
  { suit: "S", value: "7", imageFile: "/src/images/7-S.png", image: null },
  { suit: "H", value: "9", imageFile: "/src/images/9-H.png", image: null },
  { suit: "J", value: "B", imageFile: "/src/images/J-B.png", image: null },
  { suit: "K", value: "D", imageFile: "/src/images/K-D.png", image: null },
];

function loadImages() {
  // map across all cards, create a promise
  const imagePromises = dataset.map((card) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = card.imageFile;

      image.onload = () => {
        card.image = image;
        resolve();
      };
      image.onerror = () => {
        console.log(`image is ${card.image}`);
        reject(new Error(`Could not load image ${card.imageFile}}`));
      };
    });
  });

  return Promise.all(imagePromises);
}

export { dataset, loadImages };
