const medInfo = [
    {
        drugName: "Tylenol",
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",    
    },
    {
        drugName: 'Ibuprofen',
        img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.', 
    },
]

const medication = [
    {
      id: 1,
      name: [medInfo[0], medInfo[1]],
    },
    {
      id: 2,
      symptom: 'Fever',
      name: [medInfo[0], medInfo[1]]
    },
];

const button = document.getElementById("btn");
const suggestion = document.getElementById("suggestion");

const drugName = document.getElementById("drugname");
const image = document.getElementById("image");
const drugInfo = document.getElementById("drug-info");
const link = document.getElementById("link");
const drugLink = document.getElementById("drug-link");

const drugName2 = document.getElementById("drugname2");
const image2 = document.getElementById("image2");
const drugInfo2 = document.getElementById("drug-info2");
const link2 = document.getElementById("link2");
const drugLink2 = document.getElementById("drug-link2");

button.addEventListener('click', function() {

    var check1= document.getElementById("headache");
    var check2= document.getElementById("fever");
    var check3= document.getElementById("congestion");
    var check4= document.getElementById("vomitting");
    var check5= document.getElementById("inflammation");
    var check6= document.getElementById("soreThroat");
    var check7= document.getElementById("cough");    

    if (check1.checked == true){
        var symp= document.getElementById("headache").value;
        suggestion.textContent = "Your symptom is " + symp;
        showMedication(0);
    }
    if (check2.checked == true){
        var symp2= document.getElementById("fever").value;
        patientSymptom.push(symp2);
    }
    if (check3.checked == true){
        var symp3= document.getElementById("congestion").value;
        patientSymptom.push(symp3);
    }
    if (check4.checked == true){
        var symp4= document.getElementById("vomitting").value;
        patientSymptom.push(symp4);
    }
    if (check5.checked == true){
        var symp5= document.getElementById("inflammation").value;
        patientSymptom.push(symp5);
    }
    if (check6.checked == true){
        var symp6= document.getElementById("soreThroat").value;
        patientSymptom.push(symp6);
    }
    if (check7.checked == true){
        var symp7= document.getElementById("cough").value;
        patientSymptom.push(symp7);
    }
});

function showMedication(med) {
    const item = medication[med];

    image.src = item.name[0].img;
    drugName.textContent = item.name[0].drugName;
    drugInfo.textContent = item.name[0].text;

    image2.src = item.name[1].img;
    drugName2.textContent = item.name[1].drugName;
    drugInfo2.textContent = item.name[1].text;
}

function addOne() {
    count++;
}

function minusOne() {
    count--;
}
// function addSymptoms() {
//     var check1= document.getElementById("headache");
//     var check2= document.getElementById("fever");
//     var check3= document.getElementById("congestion");
//     var check4= document.getElementById("vomitting");
//     var check5= document.getElementById("inflammation");
//     var check6= document.getElementById("soreThroat");
//     var check7= document.getElementById("cough");

//     if (check1.checked == true){
//         //var symp1= document.getElementById("headache").value;
//         loadResultPage();
//         //patientSymptom.push(symp1);
//     }
//     if (check2.checked == true){
//         var symp2= document.getElementById("fever").value;
//         patientSymptom.push(symp2);
//     }
//     if (check3.checked == true){
//         var symp3= document.getElementById("congestion").value;
//         patientSymptom.push(symp3);
//     }
//     if (check4.checked == true){
//         var symp4= document.getElementById("vomitting").value;
//         patientSymptom.push(symp4);
//     }
//     if (check5.checked == true){
//         var symp5= document.getElementById("inflammation").value;
//         patientSymptom.push(symp5);
//     }
//     if (check6.checked == true){
//         var symp6= document.getElementById("soreThroat").value;
//         patientSymptom.push(symp6);
//     }
//     if (check7.checked == true){
//         var symp7= document.getElementById("cough").value;
//         patientSymptom.push(symp7);
//     }
// }