// Created by: Alex Nelson
// Created on: Jan 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-ASSIGNMENT-4-CANDY-STORE/sw.js", {
    scope: "/ICS2O-ASSIGNMENT-4-CANDY-STORE/",
  })
}

/**
 * This function to change the selectors options when a selection is made.
 */
function candyType() {

//Referencing the first selector
let candyType = document.getElementById("candy-type").value
  
// Changes the brand options to lollipop brands
  if (candyType == "lollipops") {
    document.lollipopBrand.brand.options[0]=new Option("Tootsie Pops", "tootsie", true, false)
    document.lollipopBrand.brand.options[1]=new Option("Whirly Pops", "whirly-pops", false, false)
    document.lollipopBrand.brand.options[2]=new Option("Chupa Chups", "chupa-chups", false, false)
    document.lollipopBrand.brand.options[3]=new Option("Original Gourmets", "original-gourmets", false, false)
    document.lollipopBrand.brand.options[4]=new Option("Push Pops", "push-pops", false, false)
    document.lollipopBrand.brand.options[5]=new Option("Ring Pops", "ring-pops", false, false)
    document.lollipopBrand.brand.options[6]=new Option("Blow Pops", "blow-pops", false, false)
  }
    
// Changes the brand options to gum brands
else if (candyType == "gum") {
document.lollipopBrand.brand.options[0]=new Option("Hubba Bubba", "hubba-bubba", true, false)
document.lollipopBrand.brand.options[1]=new Option("Excel Gum", "excel", false, false)
document.lollipopBrand.brand.options[2]=new Option("Juicy Fruit", "juicy-fruit", false, false)
document.lollipopBrand.brand.options[3]=new Option("Dentyne", "dentyne", false, false)
document.lollipopBrand.brand.options[4]=new Option("Double Bubble", "double-bubble", false, false)
document.lollipopBrand.brand.options[5]=new Option("Trident", "trident", false, false)
document.lollipopBrand.brand.options[6]=new Option("Extra Gum", "extra-gum", false, false)
  }

// Changes the brand options to chewy candy brands
else if (candyType == "chewy-candy") {
document.lollipopBrand.brand.options[0]=new Option("Starburst", "starburst", true, false)
document.lollipopBrand.brand.options[1]=new Option("Mike and Ikes", "mike-ikes", false, false)
document.lollipopBrand.brand.options[2]=new Option("Maynards", "skittles", false, false)
document.lollipopBrand.brand.options[3]=new Option("Airheads", "airheads", false, false)
document.lollipopBrand.brand.options[4]=new Option("Laffy Taffy", "laffy-taffy", false, false)
document.lollipopBrand.brand.options[5]=new Option("Trolli", "trolli", false, false)
document.lollipopBrand.brand.options[6]=new Option("Hi-Chew", "hi-chew", false, false)
  }

// Changes the brand options to candy bar brands
else if (candyType == "candy-bars") {
document.lollipopBrand.brand.options[0]=new Option("Hershey's", "hershey's", true, false)
document.lollipopBrand.brand.options[1]=new Option("Snickers", "snickers", false, false)
document.lollipopBrand.brand.options[2]=new Option("Oh Henry", "oh-henry", false, false)
document.lollipopBrand.brand.options[3]=new Option("Reese", "reese", false, false)
document.lollipopBrand.brand.options[4]=new Option("Mars ", "mars", false, false)
document.lollipopBrand.brand.options[5]=new Option("Twix", "twix", false, false)
document.lollipopBrand.brand.options[6]=new Option("Kitkat", "kitkat", false, false)
  }

// Changes the brand options to hard candy brands
else {
document.lollipopBrand.brand.options[0]=new Option("Gobstoppers", "gobstoppers", true, false)
document.lollipopBrand.brand.options[1]=new Option("Jolly Ranchers", "jolly-ranchers", false, false)
document.lollipopBrand.brand.options[2]=new Option("Nerds", "nerds", false, false)
document.lollipopBrand.brand.options[3]=new Option("Sixlets", "sixlets", false, false)
document.lollipopBrand.brand.options[4]=new Option("Life Savers ", "life-savers", false, false)
document.lollipopBrand.brand.options[5]=new Option("Pez", "pez", false, false)
document.lollipopBrand.brand.options[6]=new Option("Rockets", "rockets", false, false)
  }
}

//function to calculate the cost
function price() {

//Referencing the first selector
  let candyType = document.getElementById("candy-type").value

//Referencing the third selector
  let candySize = document.getElementById("candy-size").value

//All price variables 
  var price = 0
  const LOLLIPOPPRICE = 0.80
  const GUMPRICE = 0.30
  const CHEWYPRICE = 0.60
  const HARDPRICE = 0.60
  const BARPRICE = 1.5
  const SMALL = 0.75
  const REGULAR = 1
  const LARGE = 1.5
  const EXTRA = 2

//Lollipop price
  if (candyType == "lollipops") {
    price = LOLLIPOPPRICE
    console.log(price)
  }
    
//Gum price
  else if (candyType == "gum") {
    price = GUMPRICE
    console.log(price)
  }
    
//Chewy candy price
  else if (candyType == "chewy-candy") {
    price = CHEWYPRICE
    console.log(price)
  }

//Candy bar price
  else if (candyType == "candy-bars") {
    price = BARPRICE
    console.log(price)
  }
    
//Hard candy price
  else {
    price = HARDPRICE
    console.log(price)
  }

//Multiplier if the size is small
  if (candySize == "small") {
    price = price * SMALL
    console.log(price)
  }   
    
//Multiplier if the size is large
  else if (candySize == "large") {
    price = price * LARGE
    console.log(price)
  }
//Multiplier if the size is extra large
  else if (candySize == "extra-large") {
    price = price * EXTRA
    console.log(price)
  }
    
//Multiplier if the size is regular
  else {
    price == price
  }

//Processes for the tax percentage and total cost
  const tax = price * 0.13
  const total = price + tax

//Output of all the information
  document.getElementById("output").innerHTML = "Price before tax: $" + price.toFixed(2) + "<br>" + "<br>" + "Amount paid in tax: $" + tax.toFixed(2) + "<br>" + "<br>" + "Price with 13% taxrate: $" + total.toFixed(2) 
}