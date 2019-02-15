var alki = {
  name : 'Alki',
  minCustomers : '23',
  maxCustomers : '65',
  avgCookies : '6.3',
  cookiesPerHour : [],
  totalSale : 0
};

var capitolHill = {
  name : 'Capital Hill',
  minCustomers : '20',
  maxCustomers : '38',
  avgCookies : '2.3',
  cookiesPerHour : [],
  totalSale : 0
};

var seattleCenter = {
  name : 'Seattle Center',
  minCustomers : '11',
  maxCustomers : '38',
  avgCookies : '3.7',
  cookiesPerHour : [],
  totalSale : 0
};

var seatacAirport = {
  name : 'Seatac Airport',
  minCustomers : '3',
  maxCustomers : '24',
  avgCookies : '1.2',
  cookiesPerHour : [],
  totalSale : 0
};

var firstAndPike = {
  name : '1st and Pike',
  minCustomers : 23,
  maxCustomers : 65,
  avgCookies : 6.3,
  cookiesPerHour : [],
  totalSale : 0
};
//Cookie Functions
function generateCookieSales(x){
  var c = Math.floor(Math.random() * (x.maxCustomers - x.minCustomers) + x.minCustomers);
  return Math.floor(c * x.avgCookies);
}

function cookiesPerDay(x){
  for(var i = 0;i < 15;i++){
    var j = generateCookieSales(x);
    x.cookiesPerHour.push(j);
  }
  var cookieSum = x.cookiesPerHour.reduce(sumHourlyCookies,0);
  function sumHourlyCookies(d,e){
    return d + e;
  }
  x.totalSale = cookieSum;
}

//Rendering Function
var renderStore = function (x) {
  //Calls Cookie Math
  cookiesPerDay(x);
  //Create Elements
  var article_el = document.createElement('article');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');
  var liOne = document.createElement('li');
  var liTwo = document.createElement('li');
  var liThree = document.createElement('li');
  var liFour = document.createElement('li');
  var liFive = document.createElement('li');
  var liSix = document.createElement('li');
  var liSeven = document.createElement('li');
  var liEight = document.createElement('li');
  var liNine = document.createElement('li');
  var liTen = document.createElement('li');
  var liEleven = document.createElement('li');
  var liTwelve = document.createElement('li');
  var liThirteen = document.createElement('li');
  var liFourteen = document.createElement('li');
  var liFifteen = document.createElement('li');
  var liSum = document.createElement('li');


  //Fill Elements
  h2_el.textContent = x.name + ' Location';
  liOne.textContent = '6am: ' + x.cookiesPerHour[0];
  liTwo.textContent = '7am: ' + x.cookiesPerHour[1];
  liThree.textContent = '8am: ' + x.cookiesPerHour[2];
  liFour.textContent = '9am: ' + x.cookiesPerHour[3];
  liFive.textContent = '10am: ' + x.cookiesPerHour[4];
  liSix.textContent = '11am: ' + x.cookiesPerHour[5];
  liSeven.textContent = '12pm: ' + x.cookiesPerHour[6];
  liEight.textContent = '1pm: ' + x.cookiesPerHour[7];
  liNine.textContent = '2pm: ' + x.cookiesPerHour[8];
  liTen.textContent = '3pm: ' + x.cookiesPerHour[9];
  liEleven.textContent = '4pm: ' + x.cookiesPerHour[10];
  liTwelve.textContent = '5pm: ' + x.cookiesPerHour[11];
  liThirteen.textContent = '6pm: ' + x.cookiesPerHour[12];
  liFourteen.textContent = '7pm: ' + x.cookiesPerHour[13];
  liFifteen.textContent = '8pm: ' + x.cookiesPerHour[14];
  liSum.textContent = 'Total: ' + x.totalSale;

  //Attach Elements to Parents

  ul_el.appendChild(liOne);
  ul_el.appendChild(liTwo);
  ul_el.appendChild(liThree);
  ul_el.appendChild(liFour);
  ul_el.appendChild(liFive);
  ul_el.appendChild(liSix);
  ul_el.appendChild(liSeven);
  ul_el.appendChild(liEight);
  ul_el.appendChild(liNine);
  ul_el.appendChild(liTen);
  ul_el.appendChild(liEleven);
  ul_el.appendChild(liTwelve);
  ul_el.appendChild(liThirteen);
  ul_el.appendChild(liSum);

  article_el.appendChild(h2_el);
  article_el.appendChild(ul_el);

  var target_element = document.getElementById('Shop-Location');
  target_element.appendChild(article_el);

};

//Making the magic happen. Calling all functions and objects.

firstAndPike.render = renderStore(firstAndPike);
seatacAirport.render = renderStore(seatacAirport);
seattleCenter.render = renderStore(seattleCenter);
capitolHill.render = renderStore(capitolHill);
alki.render = renderStore(alki);


