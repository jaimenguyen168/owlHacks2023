import medication from './med.json' assert {type: "json"};

const button = document.getElementById("btn");
const suggestion = document.getElementById("suggestion");

const drugName = document.getElementById("drugname");
const image = document.getElementById("image");
const drugInfo = document.getElementById("drug-info");

const drugName2 = document.getElementById("drugname2");
const image2 = document.getElementById("image2");
const drugInfo2 = document.getElementById("drug-info2");

button.addEventListener('click', function() {

    var check1= document.getElementById("headache");
    var check2= document.getElementById("fever");
    var check3= document.getElementById("congestion");
    var check4= document.getElementById("vomitting");
    var check5= document.getElementById("soreThroat");
    var check6= document.getElementById("cough");    

    if (check1.checked == true){
        var symp= document.getElementById("headache").value;
        suggestion.textContent = "Your symptom is " + symp;
        showMedication(0);
    }
    if (check2.checked == true){
        var symp= document.getElementById("fever").value;
        suggestion.textContent = "Your symptom is " + symp;
        showMedication(1);
    }
    if (check3.checked == true){
        var symp= document.getElementById("congestion").value;
        suggestion.textContent = "Your symptom is " + symp;
        showMedication(2);
    }
    if (check4.checked == true){
        var symp= document.getElementById("vomitting").value;
        suggestion.textContent = "Your symptom is " + symp;
        showMedication(3);
    }
    if (check5.checked == true){
        var symp= document.getElementById("soreThroat").value;
        suggestion.textContent = "Your symptom is " + symp;
        showMedication(4);
    }
    if (check6.checked == true){
        var symp= document.getElementById("cough").value;
        suggestion.textContent = "Your symptom is " + symp;
        showMedication(5);
    }
});

function showMedication(symptom) {
    const item = medication[symptom];

    image.src = item.medications[0].img;
    drugName.textContent = item.medications[0].drugName;
    drugInfo.textContent = item.medications[0].text;

    image2.src = item.medications[1].img;
    drugName2.textContent = item.medications[1].drugName;
    drugInfo2.textContent = item.medications[1].text;
}
