//track if both demographic info have been entered
var ageEntered = false;
var genderEntered = false;

//functions to handle gender select click
//track selected gender
var gender = "none";
function getGender(g) {
    gender = g;
    console.log("Entered Gender " + g);
    genderEntered = true;
    checkBothDemoInputs();
}

//get users age
var age = -1;
function getAge(a) {
    age = a;
    console.log("Entered Age " + a);
    ageEntered = true;
    checkBothDemoInputs();
}

//checks if both demographic info was entered upon either button click
function checkBothDemoInputs() {
    if (genderEntered && ageEntered) {
        presentData();
    }
}

//finds the group the person belongs too based on their age and gender
let findGroup = function() {
    let g = 0;
    if (age <= 3 && age >= 0) {
        g = 1;
    } else if (gender == "male" ){
        if (bounded(4,8)) {
            g = 3;
        } else if (bounded(9,13)) {
            g = 5;
        } else if (bounded(14,18)) {
            g = 7;
        } else if (bounded(19,30)) {
            g = 9;
        } else if(bounded(31,50)) {
            g = 11;
        } else {
            g = 13;
        }
    } else if (gender == "female"){
        if (bounded(4,8)) {
            g = 3;
        } else if (bounded(9,13)) {
            g = 5;
        } else if (bounded(14,18)) {
            g = 7;
        } else if (bounded(19,30)) {
            g = 9;
        } else if(bounded(31,50)) {
            g = 11;
        } else {
            g = 13;
        }
        //lazy shortcut
        g = g -1;
    } else {

    }
    return g;
}

//bring up all relevant data to given demographics and populate page with nutritional data
let group = -1;
let presentData = function() {
    group = findGroup();
    window.location.href='#dailyNutrition';
    populatePotassium();
    //populateProtein();
    populatevitaminA();
    populatevitaminC();
    populatevitaminD();
    populatefiber();
    populateiron();
    populatecalcium();
    populatecalorie();

    //fill in rest of populate functions
}

let populatePotassium = function() {
    potassiumSection.style.visibility = "visible";
    potassiumNav.style.visibility = "visible";
    document.getElementById('potassiumAmount').innerHTML = potassium[group-1] + " mg";
    for ( let i = 0; i < potassiumFoods.length; i++) {
        document.getElementById('potassiumFoodList').innerHTML += "<li>" + potassiumFoods[i] + "</li>";
    }
}

let populatevitaminA = function() {
    vitaminASection.style.visibility = "visible";
    vitaminANav.style.visibility = "visible";
    document.getElementById('vitaminAAmount').innerHTML = vitaminA[group-1] + " g";
    for ( let i = 0; i < vitaminAFoods.length; i++) {
        document.getElementById('vitaminAFoodList').innerHTML += "<li>" + vitaminAFoods[i] + "</li>";
    }
}

let populatevitaminC = function() {
    vitaminCSection.style.visibility = "visible";
    vitaminCNav.style.visibility = "visible";
    document.getElementById('vitaminCAmount').innerHTML = vitaminC[group-1] + " g";
    for ( let i = 0; i < vitaminCFoods.length; i++) {
        document.getElementById('vitaminCFoodList').innerHTML += "<li>" + vitaminCFoods[i] + "</li>";
    }
}

let populatevitaminD = function() {
    vitaminDSection.style.visibility = "visible";
    vitaminDNav.style.visibility = "visible";
    document.getElementById('vitaminDAmount').innerHTML = vitaminD[group-1] + " g";
    for ( let i = 0; i < vitaminDFoods.length; i++) {
        document.getElementById('vitaminDFoodList').innerHTML += "<li>" + vitaminDFoods[i] + "</li>";
    }
}

let populatefiber = function() {
    fiberNav.style.visibility = "visible";
    fiberSection.style.visibility = "visible";
    document.getElementById('fiberAmount').innerHTML = fiber[group-1] + " g";
    for ( let i = 0; i < fiberFoods.length; i++) {
        document.getElementById('fiberFoodList').innerHTML += "<li>" + fiberFoods[i] + "</li>";
    }
}

let populateiron = function() {
    ironNav.style.visibility = "visible";
    ironSection.style.visibility = "visible";
    document.getElementById('ironAmount').innerHTML = iron[group-1] + " g";
    for ( let i = 0; i < ironFoods.length; i++) {
        document.getElementById('ironFoodList').innerHTML += "<li>" + ironFoods[i] + "</li>";
    }
}

let populatecalcium = function() {
    calciumNav.style.visibility = "visible";
    calciumSection.style.visibility = "visible";
    document.getElementById('calciumAmount').innerHTML = calcium[group-1] + " g";
    for ( let i = 0; i < calciumFoods.length; i++) {
        document.getElementById('calciumFoodList').innerHTML += "<li>" + calciumFoods[i] + "</li>";
    }
}

let populatecalorie = function() {
    calorieNav.style.visibility = "visible";
    calorieSection.style.visibility = "visible";
    document.getElementById('calorieAmount').innerHTML = calorie[group-1] + " g";
    for ( let i = 0; i < calorieFoods.length; i++) {
        document.getElementById('ccalorieFoodList').innerHTML += "<li>" + calorieFoods[i] + "</li>";
    }
}
//create the rest of the populate functions(just copy paste and replace vitamin name with new name)


let bounded = function(x, y) {
    if (age >= x && age <= y) {
        return true;
    }
    return false;
}

//bunch of nutritional data arrays
//ordered in corresponding group numbers, starting with 1

//just copy rows of vitamin from excel sheet
let protein = [13,19,19,34,34,46,52,46,56,46,56,46,56]; //g of protien per day
let potassium = ["3,000","3,800","3,800","4,500","4,500","4,700","4,700","4,700","4,700","4,700","4,700","4,700","4,700"]; //mg
let vitaminD = [600,600,600,600,600,600,600,600,600,600,600,600,600];
let calcium = ["700","1,000","1,000","1,300","1,300","1,300","1,300","1,000","1,000","1,000","1,000","1,200","1,000"];
let iron = [7,10,10,8,8,15,11,18,8,18,8,8,8];
let fiber = [14,15,16,17,18,19,20,21,22,23,24,25,26];

//put a few example foods
let ironFoods = ["Spinach", "Tofu", "Broccoli"]

let potassiumFoods = ["Potato baked flesh and skin","Prune juice canned","Carrot juice canned","Passion-fruit juice yellow or purple","Tomato paste canned","Beet greens cooked from fresh","Adzuki beans cooked","White beans canned","Plain yogurt nonfat","Tomato puree","Sweet potato baked in skin","Salmon Atlantic wild cooked","Clams canned","Pomegranate juice","Plain yogurt low-fat","Tomato juice canned","Orange juice fresh","Soybeans green cooked","Chard swiss cooked","Lima beans cooked","Mackerel various types cooked","Vegetable juice canned","Chili with beans canned","Great northern beans canned","Yam cooked","Halibut cooked","Tuna yellowfin cooked","Acorn squash cooked","Snapper cooked","Soybeans mature cooked","Tangerine juice fresh","Pink beans cooked","Chocolate milk (1% 2% and whole)","Amaranth leaves cooked","Banana","Spinach cooked from fresh or canned","Black turtle beans cooked","Peaches dried uncooked","Prunes stewed","Rockfish Pacific cooked","Rainbow trout wild or farmed cooked","Skim milk (nonfat)","Refried beans canned traditional","Apricots dried uncooked","Pinto beans cooked","Lentils cooked","Avocado","Tomato sauce canned","Plantains slices cooked","Kidney beans cooked","Navy beans cooked"];
//let proteinFoods = [];
let vitaminDFoods = ["Salmon, sockeye, canned",  "Trout, rainbow, farmed, cooked",  "Salmon, chinook, smoked",  "Swordfish, cooked",  "Sturgeon, mixed species, smoked",  "Salmon, pink, canned",  "Fish oil, cod liver",  "Cisco, smoked",  "Salmon, sockeye, cooked",  "Salmon, pink, cooked",  "Sturgeon, mixed species, cooked",  "Whitefish, mixed species, smoked",  "Mackerel, Pacific and jack, cooked",  "Salmon, coho, wild, cooked",  "Mushrooms, portabella, Exposed to Ultraviolet Light, grilled",  "Tuna, light, canned in oil, drained",  "Halibut, Atlantic and Pacific, cooked",  "Herring, Atlantic, cooked",  "Sardine, canned in oil, drained",  "Rockfish, Pacific, mixed species, cooked",  "Whole milk",  "Whole chocolate milk",  "Tilapia, cooked",  "Flatfish (flounder and sole), cooked",  "Reduced fat chocolate milk (2%)",  "Yogurt (various types and flavors)",  "Milk (non-fat, 1% and 2%)",  "Soymilk",  "Low-fat chocolate milk (1%)",  "Fortified ready-to-eat cereals (various)",  "Orange juice, fortified",  "Almond milk (all flavors)",  "Rice drink",  "Pork, cooked (various cuts)",  "Mushrooms, morel, raw",  "Margarine (various)",  "Mushrooms, Chanterelle, raw",  "Egg, hard-boiled",  ];
let calciumFoods = ["Fortified ready-to-eat cereals (various)","Pasteurized processed American cheese","Parmesan cheese hard","Plain yogurt nonfat","Romano cheese","Almond milk (all flavors)","Pasteurized processed Swiss cheese","Tofu raw regular prepared with calcium sulfate","Gruyere cheese","Plain yogurt low-fat","Vanilla yogurt low-fat","Pasteurized processed American cheese food","Fruit yogurt low-fat","Orange juice calcium fortified","Soymilk (all flavors)","Ricotta cheese part skim","Swiss cheese","Evaporated milk","Sardines canned in oil drained","Provolone cheese","Monterey cheese","Mustard spinach (tendergreen) raw","Muenster cheese","Low-fat milk (1%)","Mozzarella cheese part-skim","Skim milk (nonfat)","Reduced fat milk (2%)","Colby cheese","Low-fat chocolate milk (1%)","Cheddar cheese","Rice drink","Whole buttermilk","Whole chocolate milk","Whole milk","Reduced fat chocolate milk (2%)","Ricotta cheese whole milk"];
let fiberFoods = ["High fiber bran ready-to-eat cereal",  "Navy beans, cooked",  "Small white beans, cooked",  "Yellow beans, cooked",  "Shredded wheat ready-to-eat cereal (various)",  "Cranberry (roman) beans, cooked",  "Adzuki beans, cooked",  "French beans, cooked",  "Split peas, cooked",  "Chickpeas, canned",  "Lentils, cooked",  "Pinto beans, cooked",  "Black turtle beans, cooked",  "Mung beans, cooked",  "Black beans, cooked",  "Artichoke, globe or French, cooked",  "Lima beans, cooked",  "Great northern beans, canned",  "White beans, canned",  "Kidney beans, all types, cooked",  "Pigeon peas, cooked",  "Cowpeas, cooked",  "Wheat bran flakes ready-to-eat cereal (various)",  "Pear, raw",  "Pumpkin seeds, whole, roasted",  "Baked beans, canned, plain",  "Soybeans, cooked",  "Plain rye wafer crackers",  "Avocado",  "Broadbeans (fava beans), cooked",  "Pink beans, cooked",  "Apple, with skin",  "Green peas, cooked (fresh, frozen, canned)",  "Refried beans, canned",  "Chia seeds, dried",  "Bulgur, cooked",  "Mixed vegetables, cooked from frozen",  "Raspberries",  "Blackberries",  "Collards, cooked",  "Soybeans, green, cooked",  "Prunes, stewed",  "Sweet potato, baked in skin",  "Figs, dried",  "Pumpkin, canned",  "Potato, baked, with skin",  "Popcorn, air-popped",  "Almonds",  "Pears, dried",  "Whole wheat spaghetti, cooked",  "Parsnips, cooked",  "Sunflower seed kernels, dry roasted",  "Orange",  "Banana",  "Guava",  "Oat bran muffin",  "Pearled barley, cooked",  "Winter squash, cooked",  "Dates",  "Pistachios, dry roasted",  "Pecans, oil roasted",  "Hazelnuts or filberts",  "Peanuts, oil roasted",  "Whole wheat paratha bread",  "Quinoa, cooked",  ];


let nutritionCategories = ["Protein", "Potassium", "Vitamin D", "Calcium", "Iron", "Fiber"];


