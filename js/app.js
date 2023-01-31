'use strict';
console.log('This linked js file is working')

//6am: 16 cookies
//seattleSales[]

//Functions stored in object for future use
const salesByLocationFunctions = {
  workHours: 14,
  timeTable: ['6am', '7am', '8am', '9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  customerNumber : //this function is min/max inclusive
  function (minCustomer, maxCustomer) {
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);
    return Math.floor(Math.random() * (maxCustomer - minCustomer + 1) + minCustomer);},

  customerPerHour : function (min, max,aveCookies) {
    let hourlySale = [];
    for (let hour=0; hour < this.workHours; hour++) {
      let citySales = this.customerNumber(min, max);
      citySales = Math.round(citySales*aveCookies);
      hourlySale.push(citySales);
      }
    //console.log(hourlySale);
    return(hourlySale); //randomly generated hourly sales
  },

};

const seattleSales = {
  minCustomer: 23,
  maxCustomer: 64,
  aveCookiesPerCustomer: 6.4
}
const tokyoSales = {
  minCustomer: 23,
  maxCustomer: 64,
  aveCookiesPerCustomer: 6.4
}
const parisSales = {
  minCustomer: 23,
  maxCustomer: 64,
  aveCookiesPerCustomer: 6.4
}
const dubaiSales = {
  minCustomer: 23,
  maxCustomer: 64,
  aveCookiesPerCustomer: 6.4
}
const limaSales = {
  minCustomer: 23,
  maxCustomer: 64,
  aveCookiesPerCustomer: 6.4
}


// function to calculate the total from the array of sales fromt the day
function sumTotal (array) {
  let sum = array.reduce(function(a,b){return a+b;})
  return sum;
} //console.log(sumTotal(salesByLocation.seattleSales));



// function to print the item on Sales Page
function printToPage(city,salesVal) {
  const h3 = document.createElement('h3');
  document.body.appendChild(h3);
  h3.textContent = city;

const ul = document.createElement('ul');
h3.appendChild(ul);
for (let ii = 0; ii < salesByLocationFunctions.workHours; ii++) {
  const li  = document.createElement('li');
  li.textContent = "hi";
  li.textContent = `${salesByLocationFunctions.timeTable[ii]}: ${salesVal[ii]} cookies`;
  ul.appendChild(li);
}

const li = document.createElement('li');
ul.appendChild(li);
li.textContent = (`Total: ${sumTotal(salesVal)} cookies`);
}

// word nightmare... but it's basically putting everything together from all the functions
printToPage('Seattle', salesByLocationFunctions.customerPerHour (seattleSales.minCustomer, seattleSales.maxCustomer, seattleSales.aveCookiesPerCustomer));
printToPage('Tokyo', salesByLocationFunctions.customerPerHour (tokyoSales.minCustomer, tokyoSales.maxCustomer, tokyoSales.aveCookiesPerCustomer));
printToPage('Dubai',salesByLocationFunctions.customerPerHour (dubaiSales.minCustomer, dubaiSales.maxCustomer, dubaiSales.aveCookiesPerCustomer));
printToPage('Paris', salesByLocationFunctions.customerPerHour (parisSales.minCustomer, parisSales.maxCustomer, parisSales.aveCookiesPerCustomer));
printToPage('Lima',salesByLocationFunctions.customerPerHour (limaSales.minCustomer, limaSales.maxCustomer, limaSales.aveCookiesPerCustomer));









