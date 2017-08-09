var caffeLuna = {name: "Caffe Luna", type:"italian", address:"136 E Hargett St, Raleigh, NC 27601"};
var jimmy= {name: "Jimmy V's Osteria + Bar",type:"italian", address:"420 Fayetteville St, Raleigh, NC 27601"};
var mulino = {name: "Mulino Italian Kitchen & Bar", type:"italian", address:"136 E Hargett St, Raleigh, NC 27601"};
var bella = {name: "Bella Monica", type:"italian", address:"3121 Edwards Mill Rd, Raleigh, NC 27612"};
var bocci = {name: "Bocci Trattoria & Pizzeria", type:"italian", address:"5850 Fayetteville Rd, Durham, NC 27713"};

var panda = {name: "Panda King", type:"asian", address:"3626 Rogers Rd, Wake Forest, NC 27587"};
var mura = {name: "Mura at North Hills", type:"asian", address:"4121 Main St #110, Raleigh, NC 27609"};
var sake = {name: "Sake House", type:"asian", address:"1141 Falls River Ave # 128, Raleigh, NC 27614"};
var sono = {name: "Sono Japanese Restaurant", type:"asian", address:"319 Fayetteville St #101, Raleigh, NC 27601"};
var sushi = {name: "Sushi Thai Restaurant", type:"asian", address:"2434 Wycliff Rd, Raleigh, NC 27613"};
var buku = {name: "Buku Global Street Food", type:"asian", address:"10 E Davie St, Raleigh, NC 27601"};

var bigEds = {name: "Big Ed's City Market Restaurant", type:"American", address:"220 Wolfe St, Raleigh, NC 27601"};
var carolina = {name: "Carolina Ale House", type:"American", address:"500 Glenwood Ave, Raleigh, NC 27603"};
var deans = {name: "Dean's Kitchen + Bar", type:"American", address:"1080 Darrington Dr, Cary, NC 27513"};
var cinema = {name: "Raleighwood Cinema Grill", type:"American", address:"6609 Falls of Neuse Rd, Raleigh, NC 27615"};
var fork = {name: "The Twisted Fork", type:"American", address:"3751 Sumner Blvd #170, Raleigh, NC 27616"};
var zinburger = {name: "Zinburger", type:"American", address:"8030 Renaissance Pkwy #905, Durham, NC 27713"};

var margaritas = {name: "Las Margaritas Mexican Restaurant", type:"Mexican", address:"7431 Six Forks Rd, Raleigh, NC 27615"};
var cerro = {name: "El Cerro Bar and Grill", type:"Mexican", address:"1331 E Main St, Havelock, NC 28532"};
var taquitos = {name: "Dos Taquitos", type:"Mexican", address:"6101 Glenwood Ave, Raleigh, NC 27612"};
var centro = {name: "Centro", type:"Mexican", address:"106 S Wilmington St, Raleigh, NC 27601"};
var armadillo = {name: "Armadillo Grill", type:"Mexican", address:"439 Glenwood Ave, Raleigh, NC 27603"};
var cafe = {name: "Cafe Capistrano", type:"Mexican", address:"8471 Garvey Dr #113, Raleigh, NC 27616"};

var crepes = {name: "Coffee & Crepes", type:"Coffee", address:"315 Crossroads Blvd, Cary, NC 27518"};
var deja = {name: "DejaBrew", type:"Coffee", address:"5001 Falls of Neuse Rd, Raleigh, NC 27609"};
var brew = {name: "BREW", type:"Coffee", address:"1st Floor, 122 E Chatham St, Cary, NC 27511"};
var liquid = {name: "Liquid State", type:"Coffee", address:"1908 Hillsborough St, Raleigh, NC 27607"};

var tropical = {name: "Tropical Smoothie Cafe", type:"Smoothie", address:"1028 Oberlin Rd #232, Raleigh, NC 27605"};
var juice = {name: "Juice Vibes", type:"Smoothie", address:"1369 Kildaire Farm Rd, Cary, NC 27511"};
var smoothie = {name: "Smoothie King", type:"Smoothie", address:"3001 Hillsborough St Suite 112, Raleigh, NC 27607"};

var uncorked = {name: "Uncorked Wine & Coffee Cafe", type:"Booze", address:"10511 Shadowlawn Dr #111, Raleigh, NC 27617-8445"};
var flex = {name: "Flex Nightclub", type:"Booze", address:"2 S West St, Raleigh, NC 27603"};
var solas = {name: "Solas", type:"Booze", address:"419 Glenwood Ave, Raleigh, NC 27603"};
var jack = {name: "Jack's Tap", type:"Booze", address:"2920 Fort Bragg Rd, Fayetteville, NC 28303"};
var pinhook = {name: "The Pinhook", type:"Booze", address:"117 W Main St, Durham, NC 27701"};
var ponysaurus = {name: "Ponysaurus Brewing Company", type:"Booze", address:"219 Hood St, Durham, NC 27701"};
var cider = {name: "Bull City Ciderworks", type:"Booze", address:"305 S Roxboro St, Durham, NC 27701"};

function americanFood() {

  var american = [bigEds, carolina, deans, cinema, fork, zinburger];
  var names="";
  for (var x=0; x<american.length;x++){
      names = names + "<li>" + american[x].name + "</li>" + american[x].address ;
  }
  document.getElementById("list").innerHTML=names;
}

function italianFood(){

  var italian = [caffeLuna, jimmy, mulino, bella, bocci];
  var names1="";
    for (var x=0; x<italian.length;x++){
        names1 = names1 + "<li>" + italian[x].name + "</li>" + italian[x].address ;
  }
  document.getElementById("list").innerHTML=names1;
}

function asianFood(){

  var asian = [panda, mura, sake, sono, sushi, buku];
  var names2="";
  for (var x=0; x<asian.length;x++){
      names2 = names2 + "<li>" + asian[x].name + "</li>" + asian[x].address;
  }
  document.getElementById("list").innerHTML=names2;
}

function mexicanFood(){
  var mexican = [margaritas, cerro, taquitos, centro, armadillo,cafe];
  var names3="";
  for (var x=0; x<mexican.length;x++){
      names3 = names3 + "<li>" + mexican[x].name + "</li>" + mexican[x].address ;
  }
  document.getElementById("list").innerHTML=names3;
}

function coffeeDrink() {

  var coffee = [crepes, brew, liquid, deja];
  var names4="";
  for (var x=0; x<coffee.length;x++){
      names4 = names4 + "<li>" + coffee[x].name + "</li>" + coffee[x].address;
  }
  document.getElementById("list").innerHTML=names4;
}

function smoothieDrink() {

  var smoothies = [tropical, juice, smoothie];
  var names5="";
  for (var x=0; x<smoothies.length;x++){
      names5 = names5 + "<li>" + smoothies[x].name + "</li>" + smoothies[x].address;
  }
  document.getElementById("list").innerHTML=names5;
}

function boozeDrink() {

  var booze = [uncorked, flex, solas, jack, pinhook, ponysaurus, cider];
  var names6="";
  for (var x=0; x<booze.length;x++){
      names6 = names6 + "<li>" + booze[x].name + "</li>" + booze[x].address;
  }
  document.getElementById("list").innerHTML=names6;
}
