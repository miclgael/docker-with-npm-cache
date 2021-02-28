#!/usr/bin/node

const fetch = require('node-fetch')
const cheerio = require('cheerio')

fetch('https://michaelgale.dev')
  .then(res => res.text())
  .then(body => {
    const $ = cheerio.load(body)
    const hello = $('.mast__hello').text()
    console.log(hello.trim())
  });
