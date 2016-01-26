var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
//Pike Store
var pikeStore = {
  minCust: 17,
  maxCust: 88,
  avgCookie: 5.2,
  totalSales: 0,
  hourSales: [],
  pStoreRandCust: function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  pStoreHourlySales: function () {
    for (var i = 0; i < hours.length; i++){
      var randCookies = Math.floor(this.avgCookie * this.pStoreRandCust());
      this.hourSales.push(randCookies);
      this.totalSales += randCookies;
    }
  },
  render: function(){
    this.pStoreHourlySales();
    var sectionEl = document.getElementById('pikePlace');
    sectionEl.textContent = 'Pike Place Store';
    var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendChild(liEl);
    }
    var liElTotes = document.createElement('li');
    liElTotes.textContent = 'Total Sales: ' + this.totalSales
    ulEl.appendChild(liElTotes);
    sectionEl.appendChild(ulEl);
  },
};
pikeStore.render();
//SeaTac Airport
var seaTacStore = {
  minCust: 6,
  maxCust: 24,
  avgCookie: 1.2,
  totalSales: 0,
  hourSales: [],
  pStoreRandCust: function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  pStoreHourlySales: function () {
    for (var i = 0; i < hours.length; i++){
      var randCookies = Math.floor(this.avgCookie * this.pStoreRandCust());
      this.hourSales.push(randCookies);
      this.totalSales += randCookies;
    }
  },
  render: function(){
    this.pStoreHourlySales();
    var sectionEl = document.getElementById('seaTac');
    sectionEl.textContent = 'SeaTac Airport Store';
    var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendChild(liEl);
    }
    var liElTotes = document.createElement('li');
    liElTotes.textContent = 'Total Sales: ' + this.totalSales
    ulEl.appendChild(liElTotes);
    sectionEl.appendChild(ulEl);
  },
};
seaTacStore.render();
//Southcenter Mall
var southCenterStore = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 1.9,
  totalSales: 0,
  hourSales: [],
  pStoreRandCust: function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  pStoreHourlySales: function () {
    for (var i = 0; i < hours.length; i++){
      var randCookies = Math.floor(this.avgCookie * this.pStoreRandCust());
      this.hourSales.push(randCookies);
      this.totalSales += randCookies;
    }
  },
  render: function(){
    this.pStoreHourlySales();
    var sectionEl = document.getElementById('southCenter');
    sectionEl.textContent = 'Southcenter Store';
    var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendChild(liEl);
    }
    var liElTotes = document.createElement('li');
    liElTotes.textContent = 'Total Sales: ' + this.totalSales
    ulEl.appendChild(liElTotes);
    sectionEl.appendChild(ulEl);
  },
};
southCenterStore.render();
//Bellevue Square
var bellSquarerStore = {
  minCust: 20,
  maxCust: 48,
  avgCookie: 3.3,
  totalSales: 0,
  hourSales: [],
  pStoreRandCust: function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  pStoreHourlySales: function () {
    for (var i = 0; i < hours.length; i++){
      var randCookies = Math.floor(this.avgCookie * this.pStoreRandCust());
      this.hourSales.push(randCookies);
      this.totalSales += randCookies;
    }
  },
  render: function(){
    this.pStoreHourlySales();
    var sectionEl = document.getElementById('bellevueSquare');
    sectionEl.textContent = 'Bellevue Square Store';
    var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendChild(liEl);
    }
    var liElTotes = document.createElement('li');
    liElTotes.textContent = 'Total Sales: ' + this.totalSales
    ulEl.appendChild(liElTotes);
    sectionEl.appendChild(ulEl);
  },
};
bellSquarerStore.render();
//Alki Store
var alkiStore = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 2.6,
  totalSales: 0,
  hourSales: [],
  pStoreRandCust: function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  pStoreHourlySales: function () {
    for (var i = 0; i < hours.length; i++){
      var randCookies = Math.floor(this.avgCookie * this.pStoreRandCust());
      this.hourSales.push(randCookies);
      this.totalSales += randCookies;
    }
  },
  render: function(){
    this.pStoreHourlySales();
    var sectionEl = document.getElementById('alki');
    sectionEl.textContent = 'Alki Store';
    var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendChild(liEl);
    }
    var liElTotes = document.createElement('li');
    liElTotes.textContent = 'Total Sales: ' + this.totalSales
    ulEl.appendChild(liElTotes);
    sectionEl.appendChild(ulEl);
  },
};
alkiStore.render();
