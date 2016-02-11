var hours = ['10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm '];
var pikeStore = new Stores ('Pike Place', 17, 88, 5.2);
var seaTacStore = new Stores ('SeaTac Airport', 6, 24, 1.2);
var southCenterStore = new Stores ('South Center Mall', 11, 38, 1.9);
var bellSquareStore = new Stores ('Bellevue Square', 20, 48, 3.3);
var alkiStore = new Stores ('Alki', 3, 24, 2.6);
//Store Object
function Stores (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalSales = 0;
  this.hourSales = [];
}
//Random Customer
Stores.prototype.storeRandomCust = function () {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
}
//Hourly Sales
Stores.prototype.storeHourlySales = function() {
  for (var i = 0; i < hours.length; i++){
    var randCookies = Math.floor(this.avgCookie * this.storeRandomCust());
    this.hourSales.push(randCookies);
    this.totalSales += randCookies;
    }
}
//Table with projected sale data
var dataTable = document.getElementById('salesTable');
var createRowEl = document.createElement('tr');
dataTable.appendChild(createRowEl);
function tableHead(){
  var storeNames = document.createElement('th');
  storeNames.textContent = 'Stores';
  createRowEl.appendChild(storeNames);
  for (var i = 0; i < hours.length; i++) {
    var storeHours = document.createElement('th');
    storeHours.textContent = hours [i];
    createRowEl.appendChild(storeHours);
  }
  var storeTotal = document.createElement('th');
  storeTotal.textContent = 'Total Sales';
  createRowEl.appendChild(storeTotal);
}
tableHead();
Stores.prototype.render = function() {
  this.storeHourlySales();
  var shopsEl = document.createElement('tr')
  shopsEl.textContent = this.name;
  dataTable.appendChild(shopsEl);
  for (var i = 0; i < hours.length; i++) {
    var dataEl = document.createElement('td');
    dataEl.textContent = this.hourSales[i];
    shopsEl.appendChild(dataEl);
  };
  var totalsEl = document.createElement('td');
  totalsEl.textContent = this.totalSales
  shopsEl.appendChild(totalsEl);
}
//Add new store button
var button = document.getElementById('addStoreButton');
var nameInput = document.getElementById('name');
var minInput = document.getElementById('minCust');
var maxInput = document.getElementById('maxCust');
var avgInput = document.getElementById('avgCookie');
function clearForm(event){
  nameInput.value = null;
  minInput.value = null;
  maxInput.value = null;
  avgInput.value = null;
}
button.addEventListener("click", function(event) {
event.preventDefault();
var getName = nameInput.value;
var getMin = minInput.value;
var getMax = maxInput.value;
var getAvg = avgInput.value;
var addStore = new Stores(getName, getMin, getMax, getAvg);
addStore.render();
clearForm(event);
});
//Display store data in table 
pikeStore.render();
seaTacStore.render();
southCenterStore.render();
bellSquareStore.render();
alkiStore.render();
