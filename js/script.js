// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function candyType() {
let candyType = document.getElementById("candy-type").value
  if (candyType == "lolipops") {
    document.lolipopBrand.brand.options[0]=new Option("Tootsie Pops", "tootsie", true, false)
    document.lolipopBrand.brand.options[1]=new Option("Whirly Pops", "whirly-pops", false, false)
    document.lolipopBrand.brand.options[2]=new Option("Chupa Chups", "chupa-chups", false, false)
    document.lolipopBrand.brand.options[3]=new Option("Original Gourmets", "original-gourmets", false, false)
    document.lolipopBrand.brand.options[4]=new Option("Push Pops", "push-pops", false, false)
    document.lolipopBrand.brand.options[5]=new Option("Ring Pops", "ring-pops", false, false)
    document.lolipopBrand.brand.options[6]=new Option("Blow Pops", "blow-pops", false, false)
  }

else if (candyType == "gum") {
document.lolipopBrand.brand.options[0]=new Option("Hubba Bubba", "hubba-bubba", true, false)
document.lolipopBrand.brand.options[1]=new Option("Excel Gum", "excel", false, false)
document.lolipopBrand.brand.options[2]=new Option("Juicy Fruit", "juicy-fruit", false, false)
document.lolipopBrand.brand.options[3]=new Option("Dentyne", "dentyne", false, false)
document.lolipopBrand.brand.options[4]=new Option("Double Bubble", "double-bubble", false, false)
document.lolipopBrand.brand.options[5]=new Option("Trident", "trident", false, false)
document.lolipopBrand.brand.options[6]=new Option("Extra Gum", "extra-gum", false, false)
  }
else if (candyType == "chewy-candy") {
document.lolipopBrand.brand.options[0]=new Option("Starburst", "starburst", true, false)
document.lolipopBrand.brand.options[1]=new Option("Mike and Ikes", "mike-ikes", false, false)
document.lolipopBrand.brand.options[2]=new Option("Maynards", "skittles", false, false)
document.lolipopBrand.brand.options[3]=new Option("Airheads", "airheads", false, false)
document.lolipopBrand.brand.options[4]=new Option("Laffy Taffy", "laffy-taffy", false, false)
document.lolipopBrand.brand.options[5]=new Option("Trolli", "trolli", false, false)
document.lolipopBrand.brand.options[6]=new Option("Hi-Chew", "hi-chew", false, false)
  }
else if (candyType == "candy-bars") {
document.lolipopBrand.brand.options[0]=new Option("Hershey's", "hershey's", true, false)
document.lolipopBrand.brand.options[1]=new Option("Snickers", "snickers", false, false)
document.lolipopBrand.brand.options[2]=new Option("Oh Henry", "oh-henry", false, false)
document.lolipopBrand.brand.options[3]=new Option("Reese", "reese", false, false)
document.lolipopBrand.brand.options[4]=new Option("Mars ", "mars", false, false)
document.lolipopBrand.brand.options[5]=new Option("Twix", "twix", false, false)
document.lolipopBrand.brand.options[6]=new Option("Kitkat", "kitkat", false, false)
  }
else {
document.lolipopBrand.brand.options[0]=new Option("Gobstoppers", "gobstoppers", true, false)
document.lolipopBrand.brand.options[1]=new Option("Jolly Ranchers", "jolly-ranchers", false, false)
document.lolipopBrand.brand.options[2]=new Option("Nerds", "nerds", false, false)
document.lolipopBrand.brand.options[3]=new Option("Sixlets", "sixlets", false, false)
document.lolipopBrand.brand.options[4]=new Option("Life Savers ", "life-savers", false, false)
document.lolipopBrand.brand.options[5]=new Option("Pez", "pez", false, false)
document.lolipopBrand.brand.options[6]=new Option("Rockets", "rockets", false, false)
  }
}
