// correctly size gender selector height
let resizeSelector = function() {

    let radius = maleSelection.getBoundingClientRect().width;
    //resize height relative to width
    maleSelection.style.height = radius +"px";
    femaleSelection.style.height = radius +"px";
    //resize icons
    maleIcon.style.fontSize = radius * 0.333 +"px";
    femaleIcon.style.fontSize = radius * 0.333 +"px";
}
//runs the sizing function when the page loads
resizeSelector();

//resizes the selector whenever the page is resized
onresize = function() {
    resizeSelector();
}

//functions to handle gender select click
//track selected gender
let gender = "none";
let mClick = function() {
    gender = "male";
    showAgeForm();
}
let fClick = function() {
    gender = "female";
    showAgeForm();
}

let showAgeForm = function() {
    document.getElementById('ageForm').style.visibility = "visible";
}

//get users age
let age = -1;
let getAge = function() {
    let ageInputElement = document.getElementById('ageInput');
    let ageInput = Number(ageInputElement.value);
    //make error visible if invalid input
    if ( isNaN(ageInput) ) {
        ageError.style.visibility = "visible";
    } else {
        ageError.style.visibility = "hidden";
        age = ageInput;
        presentData();
    }
}

//bring up all relevant data to given demographics and populate page with nutritional data
let presentData = function() {
    let group = findGroup();
    console.log(age);
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

let bounded = function(x, y) {
    if (age >= x && age <= y) {
        return true;
    }
    return false;
}

//bunch of nutritional data arrays
//ordered in corresponding group numbers, starting with 1
let protein = [13,19,19,34,34,46,52,46,56,46,56,46,56]; //g of protien per day
let potassium = ["3,000","3,800","3,800","4,500","4,500","4,700","4,700","4,700","4,700","4,700","4,700","4,700","4,700"]; //mg
let vitd = [600,600,600,600,600,600,600,600,600,600,600,600,600];
let calcium = ["700","1,000","1,000","1,300","1,300","1,300","1,300","1,000","1,000","1,000","1,000","1,200","1,000"];
let iron = [7,10,10,8,8,15,11,18,8,18,8,8,8];

let calciumFoods = ["Fortified ready-to-eat cereals (various)","Pasteurized processed American cheese","Parmesan cheese hard","Plain yogurt nonfat","Romano cheese","Almond milk (all flavors)","Pasteurized processed Swiss cheese","Tofu raw regular prepared with calcium sulfate","Gruyere cheese","Plain yogurt low-fat","Vanilla yogurt low-fat","Pasteurized processed American cheese food","Fruit yogurt low-fat","Orange juice calcium fortified","Soymilk (all flavors)","Ricotta cheese part skim","Swiss cheese","Evaporated milk","Sardines canned in oil drained","Provolone cheese","Monterey cheese","Mustard spinach (tendergreen) raw","Muenster cheese","Low-fat milk (1%)","Mozzarella cheese part-skim","Skim milk (nonfat)","Reduced fat milk (2%)","Colby cheese","Low-fat chocolate milk (1%)","Cheddar cheese","Rice drink","Whole buttermilk","Whole chocolate milk","Whole milk","Reduced fat chocolate milk (2%)","Ricotta cheese whole milk"];



