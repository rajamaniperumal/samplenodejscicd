import express from "express";

const router = express.Router();


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}



//module.exports = { add, subtract };

export { add, subtract };