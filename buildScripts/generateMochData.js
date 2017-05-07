/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {
  schema
} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf(schema).then(function (result) {
  const json = JSON.stringify(result);

  fs.writeFile("./src/api/db.json", json, function (err) {
    if (err) {
      return console.log(chalk.red(err));
    } else {
      console.log(chalk.green("Moch data generated."));
    }
  });
});
