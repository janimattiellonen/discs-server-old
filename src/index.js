import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from 'mysql2/promise';
import fs from 'fs';

import discService from './services/disc-service'

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/discs', async (req, res, next) => {
    const conn = await mysql.createConnection({host:'localhost', user: 'root', database: 'discs_db'});

  discService.getDiscs(conn).then(
      discs => res.json(discs.rows)
  );
});

app.get('/import', async (req, res, next) => {

  fs.readFile('./testdb-8e20_discs.json', 'UTF-8', (err, contents) => {
    JSON.parse(contents).map(row => {

      const disc = {
        name: row.name,
        type: row.type,
        color: row.color,
        material: row.material,
        speed: row.speed,
        glide: row.glide,
        stability: row.stability,
        fade: row.fade,
        weight: row.weight,
        isMissing: row.missing,
        missingDescription: row.missing_description,
        isSold: row.sold,
        isBroken: row.broken,
        holeInOneAt: null,
        isCollectionItem: row.collection_item,
        soldAt: null,
        additional: row.additional,
      };

      /*
          disc.name,
          disc.type,
          disc.manufacturer,
          disc.color,
          disc.material,
          disc.speed,
          disc.glide,
          disc.stability,
          disc.fade,
          disc.weight,
          disc.isMissing,
          disc.missingDescription,
          disc.isSold,
          disc.isBroken,
          disc.holeInOneAt,
          disc.isCollectionItem,
          disc.soldAt,
          disc.additional
       */

      discService.addDisc(disc);

    });

    res.json({'ok': JSON.parse(contents)[0]});
  })


});

app.listen(8889, () => {
  console.log(`Listening on port 8889`);
});