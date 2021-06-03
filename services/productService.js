const Cube = require("../models/cube");
const uniqid = require("uniqid");
const fs = require("fs");
const path = require("path");

let productData = require("../config/products.json");

function getAll() {
  return productData;
}

function create(data) {
  let cube = new Cube(
    uniqid(),
    data.name,
    data.description,
    data.imageUrl,
    data.difficultyLevel
  );

  productData.push(cube);

  fs.writeFile(
    __dirname + "/../config/products.json",
    JSON.stringify(productData),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
}

module.exports = {
  create,
};