'use strict';
console.log('This linked js file is working')

////global variables
let workHours= 14;
let timeTable =  ['6:00am', '7:00am', '8:00am', '9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

/////global functions
function randomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
} //closing function randomNumber

function sumTotal(arr){
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total += arr[i]; 
  }
  return total;
};

///////////////The constructor function
function CitySales (name, minCustomer, maxCustomer, aveCookies) {
  this.name =name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveCookies = aveCookies;
  this.storeSales = []; //store sales by the hour

  this.customerPerHour = function (arr = this.storeSales) {
    let distribution = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
    for (let hour=0; hour < workHours; hour++) {
      let citySales = randomNumber(this.minCustomer,this.maxCustomer);
      //console.log(citySales);
      citySales = Math.round(distribution[hour]*Math.round(citySales * this.aveCookies));
      arr.push(citySales);
      };
      return(arr);
    }; //closing CustomerPerHour function

  
  //calculate daily total of the store
  this.totalSales = function(arr = this.storeSales) {
    let totalSum = 0;
    for (let i=0; i < workHours; i++) {
      totalSum += arr[i];
    }//close for-loop
    //console.log(totalSum);
    return totalSum;
  }; //close function totalSales

  //render the tbody data
  this.locationData = function(arr = this.storeSales) {
    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    let tdCity = document.createElement('td')
    tbody.appendChild(tr);
    tr.appendChild(tdCity);
    tdCity.textContent = this.name;   //City added to table
  

    //sales data by the hour appended to table
    for (let i = 0; i < arr.length; i++) {
      let childElement = document.createElement('td');
      tr.appendChild(childElement);
      childElement.textContent = arr[i];
    }

    //total sales of the day added to table
    let trTotal = document.createElement('td');
    trTotal.textContent = this.totalSales();
    tr.appendChild(trTotal);
  }

  this.customerPerHour() //initialize the function when the object is created
  this.locationData(); //initialize the function when a new city is added
};
//////////////////close the constructor

//////////function to create a header
function renderTableHeader(arr = timeTable) {
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
}; /////closing rrendering header function

///////////// render table footer///////////////////
function tfootFunction(arr) {
  let tfoot = document.querySelector('tfoot');
  let tr = document.createElement('tr');
  let total = document.createElement('td');
  total.textContent = 'Total';
  tr.appendChild(total);
  tfoot.appendChild(tr);

  function hourlyTotal(arr) {
    let storeTotal = [];
    let sum = 0;
      for (let i =0; i < timeTable.length; i++) {
        for (let j=0; j < arr.length; j++) {
          sum += arr[j][i];
          };
        storeTotal.push(sum)
        sum=0;       
      }
    return storeTotal
  }
  console.log(hourlyTotal(hourlySales))

  //Sum up all locations sale by the hour
  for (let i = 0; i < timeTable.length; i++) {
    let td_foot = document.createElement('td');
    td_foot.textContent = hourlyTotal(arr)[i];
    tr.appendChild(td_foot);
  }

  //Find the daily total of ALL locations
  sumTotal(arr)
   let grandTotal = document.createElement('td');
   grandTotal = tr.appendChild(grandTotal);
   grandTotal.textContent = sumTotal(hourlyTotal(arr))
};///////closing rendering footer function


/////////////create new instances of city sales
let seattleSales = new CitySales('Seattle', 23, 64, 6.3);
let tokyoSales = new CitySales('Tokyo', 3, 24, 1.2);
let dubaiSales = new CitySales('Dubai', 11, 38, 3.7);
let parisSales = new CitySales('Paris', 20, 38, 2.3);
let limaSales = new CitySales('Lima', 2, 16, 4.6);

//make an array for all the city object
let allCitySalesArray = [seattleSales, tokyoSales, dubaiSales, parisSales, limaSales];

let hourlySales =[
  seattleSales.storeSales, 
  tokyoSales.storeSales, 
  dubaiSales.storeSales, 
  parisSales.storeSales, 
  limaSales.storeSales];
//console.log(hourlySales)
renderTableHeader(timeTable);
tfootFunction(hourlySales);


//////////////Create a form////////////////////////
// get element from the DOM
let newStoreForm = document.querySelector('form');

//define event handler
let handleSubmit = function(event) {
  event.preventDefault(); //prevent refreshing and add the event into the URL
  //event.target.<HTML element>.value
  let newCity = event.target.storeLocation.value;
  let newMin = event.target.minCustomer.value;
  let newMax = event.target.maxCustomer.value;
  let newAve = event.target.aveCookies.value;
  let newLocation = new CitySales(newCity, newMin, newMax,newAve);

  hourlySales.push(newLocation.storeSales)
  document.querySelector('tfoot tr').remove();
  tfootFunction(hourlySales);
  console.log(event.target.storeLocation.value)
  console.log(allCitySalesArray)
}

//add event listener
newStoreForm.addEventListener('submit', handleSubmit);


