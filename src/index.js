import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get("/discs", async (req, res, next) => {
  
  res.json([
    {
      id: 1,
      name: "Mako3",
      type: 'midrange',
      manufacturer: 'innova',
      material: 'star',
      weight: 175,
      speed: 5,
      glide: 5,
      stability: 0,
      fade: 0,
      additional: null,
      image: 'https://testdb-8e20.restdb.io/media/5babdf7981f9ca39000071f7',
      isMissing: false,
      missingDescription: null,
      isSold: false,
      soldAt: null,
      isBroken: false,
      holeInOneCount: 0,
      isCollectionItem: false,
    },
    {
      id: 2,
      name: "Teebird",
      type: 'fairwayDriver',
      manufacturer: 'innova',
      material: 'star',
      weight: 167,
      speed: 7,
      glide: 5,
      stability: 0,
      fade: 2,
      additional: null,
      image: 'https://testdb-8e20.restdb.io/media/56d9dc47011d315d00004c35',
      isMissing: false,
      missingDescription: null,
      isSold: false,
      soldAt: null,
      isBroken: false,
      holeInOneCount: 0,
      isCollectionItem: false,
    },
    {
      id: 3,
      name: "Teebird",
      type: 'fairwayDriver',
      manufacturer: 'innova',
      material: 'star',
      weight: 167,
      speed: 7,
      glide: 5,
      stability: 0,
      fade: 2,
      additional: null,
      image: 'https://testdb-8e20.restdb.io/media/5939739b639cc705000000da',
      isMissing: false,
      missingDescription: null,
      isSold: false,
      soldAt: null,
      isBroken: false,
      holeInOneCount: 0,
      isCollectionItem: false,
    }
  ]);
});

app.listen(8889, () => {
  console.log(`Listening on port 8889`);
});