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

  totalSales : function (array = this.customerPerHour) {
    let sum = array.reduce(function(a,b){return a+b;})
    return sum;
  }

};

//place each location Sales data into its own object
const seattleSales = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 64,
  aveCookiesPerCustomer: 6.3,
  salesByHour: salesByLocationFunctions.customerPerHour(this.minCustomer, this.maxCustomer, this.aveCookiesPerCustomer),
  // total: salesByLocationFunctions.totalSales(),
}
const tokyoSales = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  aveCookiesPerCustomer: 1.2,
}
const dubaiSales = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  aveCookiesPerCustomer: 3.7,
}
const parisSales = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  aveCookiesPerCustomer: 2.3,
}
const limaSales = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  aveCookiesPerCustomer: 4.6,
}


// function to calculate the total from the array of sales fromt the day
function sumTotal (array) {
  let sum = array.reduce(function(a,b){return a+b;})
  return sum;
} 
//console.log(sumTotal(salesByLocation.seattleSales));



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
printToPage(seattleSales.name, salesByLocationFunctions.customerPerHour (seattleSales.minCustomer, seattleSales.maxCustomer, seattleSales.aveCookiesPerCustomer));
printToPage(tokyoSales.name, salesByLocationFunctions.customerPerHour (tokyoSales.minCustomer, tokyoSales.maxCustomer, tokyoSales.aveCookiesPerCustomer));
printToPage(dubaiSales.name,salesByLocationFunctions.customerPerHour (dubaiSales.minCustomer, dubaiSales.maxCustomer, dubaiSales.aveCookiesPerCustomer));
printToPage(parisSales.name, salesByLocationFunctions.customerPerHour (parisSales.minCustomer, parisSales.maxCustomer, parisSales.aveCookiesPerCustomer));
printToPage(limaSales.name,salesByLocationFunctions.customerPerHour (limaSales.minCustomer, limaSales.maxCustomer, limaSales.aveCookiesPerCustomer));









