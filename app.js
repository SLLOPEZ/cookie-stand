var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];

function Stores (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalSales = 0;
  this.hourSales = [];
}
Stores.prototype.storeRandomCust = function () {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};
Stores.prototype.storeHourlySales = function() {
  for (var i = 0; i < hours.length; i++){
    var randCookies = Math.floor(this.avgCookie * this.storeRandomCust());
    this.hourSales.push(randCookies);
    this.totalSales += randCookies;
    }
};
Stores.prototype.render = function() {
  this.storeHourlySales();
  var storeEl = document.getElementById('shops');
  var newStoreEl = document.createElement('section');
  storeEl.appendChild(newStoreEl);
  var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendChild(liEl);
  };
  var liElTotes = document.createElement('li');
  liElTotes.textContent = 'Total Sales: ' + this.totalSales
  ulEl.appendChild(liElTotes);
  newStoreEl.textContent = this.name;
  newStoreEl.appendChild(ulEl);
};

var pikeStore = new Stores ('Pike Place', 17, 88, 5.2);
var seaTacStore = new Stores ('SeaTac Airport', 6, 24, 1.2);
var southCenterStore = new Stores ('South Center Mall', 11, 38, 1.9);
var bellSquareStore = new Stores ('Bellevue Square', 20, 48, 3.3);
var alkiStore = new Stores ('Alki', 3, 24, 2.6);

pikeStore.render();
seaTacStore.render();
southCenterStore.render();
bellSquareStore.render();
alkiStore.render();
