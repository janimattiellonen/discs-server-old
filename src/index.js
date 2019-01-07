import axios from 'axios';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import moment from 'moment';
import fs from 'fs';

import config from '../config.server';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const getAuthorizationHeaders = () => {
  return {
    headers: {
      'x-apikey': config.restdb.api_key
    }
  };
};

app.get('/discs', async (req, res, next) => {
  axios.get('https://testdb-8e20.restdb.io/rest/discs', getAuthorizationHeaders())
    .then(response => res.status(200).json(response.data));
});

app.listen(8889, () => {
  console.log(`Listening on port 8889`);
});