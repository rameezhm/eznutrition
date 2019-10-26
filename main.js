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
    console.log(age);
}