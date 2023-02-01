'use strict';
console.log('This linked js file is working')


let workHours= 14;
let timeTable =  ['6:00am', '7:00am', '8:00am', '9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

function CitySales (name, minCustomer, maxCustomer, aveCookies) {
  this.city = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveCookies = aveCookies;
  this.storeSales = [];

  this.randomNumber = function () {
    minCustomer = Math.ceil(this.minCustomer);
    maxCustomer = Math.floor(this.maxCustomer);
    let result = Math.floor(Math.random() * (maxCustomer - minCustomer + 1) + minCustomer);
    return result;
  }, //closing function randomNumber

  this.customerPerHour = function (arr = this.storeSales) {
    for (let hour=0; hour < workHours; hour++) {
      let citySales = this.randomNumber();
      //console.log(citySales);
      citySales = Math.round(citySales * this.aveCookies);
      arr.push(citySales);
      };
      return(arr);
      
    };//closing CustomerPerHour function

  this.totalSales = function(arr = this.storeSales) {
    let totalSum = 0;
    for (let i=0; i < workHours; i++) {
      totalSum += arr[i];
    }//close for-loop
    //console.log(totalSum);
    return totalSum;
  }; //close function totalSales

  this.locationData = function(arr = this.storeSales) {
    //let table = document.getElementById('salesData');
    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    tr.textContent = this.city;

    for (let i = 0; i < arr.length; i++) {
      let childElement = document.createElement('td');
      tr.appendChild(childElement);
      childElement.textContent = arr[i];
    }

    let trTotal = document.createElement('tr');
    trTotal.textContent = this.totalSales();
    tr.appendChild(trTotal);
  }
  this.customerPerHour()
};

function thFunction(arr) {
  let thead = document.querySelector('thead');
  let tr = document.createElement('tr');
  let blank = document.createElement('th');
  let localtionTotal = document.createElement('th');
  blank.textContent = '';
  tr.appendChild(blank);
  thead.appendChild(tr);

  for (let i = 0; i < arr.length; i++) {
    let th = document.createElement('th');
    th.textContent = arr[i];
    tr.appendChild(th);
  }

  localtionTotal.textContent = 'Location Total';
  tr.appendChild(localtionTotal);

};

let seattleSales = new CitySales('Seattle', 23, 64, 6.3);
let tokyoSales = new CitySales('Tokyo', 3, 24, 1.2);
let dubaiSales = new CitySales('Dubai', 11, 38, 3.7);
let parisSales = new CitySales('Paris', 20, 38, 2.3);
let limaSales = new CitySales('Lima', 2, 16, 4.6);

function sumTotal(arr){
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total += arr[i]; 
  }
  return total;
};

let sumSalesByHour = sumTotal(hourlyTotal(seattleSales.storeSales,
  tokyoSales.storeSales, dubaiSales.storeSales, parisSales.storeSales, limaSales.storeSales));

let sumSalesByLocation = sumTotal([seattleSales.totalSales(),tokyoSales.totalSales(),dubaiSales.totalSales(),parisSales.totalSales(),limaSales.totalSales()]);

function tfootFunction(arr) {
  let tfoot = document.querySelector('tfoot');
  let tr = document.createElement('tr');
  let total = document.createElement('td');
  //let localtionTotal = document.createElement('th');
  total.textContent = 'Total';
  tr.appendChild(total);
  tfoot.appendChild(tr);

  for (let i = 0; i < arr.length; i++) {
    let td_foot = document.createElement('td');
    td_foot.textContent = arr[i];
    tr.appendChild(td_foot);
  }

  let grandTotal = document.createElement('td')
  if (sumSalesByHour === sumSalesByLocation) {
  grandTotal.textContent = sumSalesByHour;
  };
  tr.appendChild(grandTotal);
}




function hourlyTotal (arr1, arr2, arr3, arr4, arr5) {
  let storeTotal = [];
  let sum = 0;
  for (let i =0; i < arr1.length; i++) {
    sum = arr1[i] + arr2[i] +arr3[i] + arr4[i] + arr5[i];
    storeTotal.push(sum);
  };
  return storeTotal
}










let hourlyData = hourlyTotal(seattleSales.storeSales, 
  tokyoSales.storeSales, 
  dubaiSales.storeSales, 
  parisSales.storeSales, 
  limaSales.storeSales);

//console.log(seattleSales.storeSales);

thFunction(timeTable);

seattleSales.locationData();
tokyoSales.locationData();
dubaiSales.locationData();
parisSales.locationData();
limaSales.locationData();

tfootFunction(hourlyData);








