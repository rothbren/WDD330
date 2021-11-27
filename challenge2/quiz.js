function sortingHat() {
    var HouseG = 0;
    var HouseR = 0;
    var HouseH = 0;
    var HouseS = 0;

//add up the total for each house to make sure they are all different
//  G-17, R-16, S-18, H-15

    //Question 1
    if (HPQuiz.q1[0].checked == true) {
        HouseG += 1;
        HouseS += 2;
    } else if (HPQuiz.q1[1].checked == true) {
        HouseG += 1;
        HouseS += 1;
    } else if (HPQuiz.q1[2].checked == true) {
        HouseH += 1;
        HouseG += 1;
        HouseR += 1;
    } else if (HPQuiz.q1[3].checked == true) {
        HouseH += 1;
        HouseR += 2;
    } else if (HPQuiz.q1[4].checked == true) {
        HouseH += 1;
        HouseR += 1;
    } else {
        alert("Please answer question 1.");
        return;
    }

    //Question 2
    if (HPQuiz.q2[0].checked == true) {
        HouseS += 1;
    } else if (HPQuiz.q2[1].checked == true) {
        HouseR += 1;
    } else if (HPQuiz.q2[2].checked == true) {
        HouseH += 1;
    } else if (HPQuiz.q2[3].checked == true) {
        HouseG += 1;
    } else {
        alert("Please answer question 2.");
        return;
    }

    //Question 3
    if (HPQuiz.q3[0].checked == true) {
        HouseR += 1; HouseG +=1;
    } else if (HPQuiz.q3[1].checked == true) {
        HouseH += 1;
    } else if (HPQuiz.q3[2].checked == true) {
        HouseS += 1;
    } else if (HPQuiz.q3[3].checked == true) {
        HouseS += 1; HouseG+=1;
    } 
 else if (HPQuiz.q3[3].checked == true) {
    HouseS += 1;
}else {
        alert("Please answer question 3.");
        return;
    }

    //Question 4
    if (HPQuiz.q4[0].checked == true) {
        HouseH+=1; HouseR+=1;
    } else if (HPQuiz.q4[1].checked == true) {
        HouseR+=1;
    } else if (HPQuiz.q4[2].checked == true) {
        HouseH+=1;
    } else if (HPQuiz.q4[3].checked == true) {
        HouseG+=1; HouseS+=1;
    } 
 else if (HPQuiz.q4[3].checked == true) {
    HouseS+=1;
}else {
        alert("Please answer question 4.");
        return;
    } 
    
    //Question 5
    if (HPQuiz.q5[0].checked == true) {
        HouseH+=1; HouseR+=1; HouseG+=1;
    } else if (HPQuiz.q5[1].checked == true) {
        HouseS+=1;
    } else if (HPQuiz.q5[2].checked == true) {
        HouseR+=1;
    } else if (HPQuiz.q5[3].checked == true) {
        HouseG+=1;
    } 
 else if (HPQuiz.q5[3].checked == true) {
    HouseS+=1; HouseG+=1;
}else {
        alert("Please answer question 5.");
        return;
    } 

    //Question 6
    if (HPQuiz.q6[0].checked == true) {
        HouseS+=1;
    } else if (HPQuiz.q6[1].checked == true) {
        HouseS+=1; HouseG+=1;
    } else if (HPQuiz.q6[2].checked == true) {
        HouseR+=1;
    } else if (HPQuiz.q6[3].checked == true) {
        HouseH+=1;
    }else {
        alert("Please answer question 6.");
        return;
    } 

    //Question 7
    if (HPQuiz.q7[0].checked == true) {
        HouseH+=1; HouseR+=1; HouseG+=1; HouseS+=1;
    } else if (HPQuiz.q7[1].checked == true) {
        HouseR+=1; HouseG+=1; HouseS+=1;
    } else if (HPQuiz.q7[2].checked == true) {
        HouseH+=1; HouseR+=1;
}else {
        alert("Please answer question 7.");
        return;
    } 

    //Question 8
    if (HPQuiz.q8[0].checked == true) {
        HouseG+=1;
    } else if (HPQuiz.q8[1].checked == true) {
        HouseS+=1; HouseG+=1;
    } else if (HPQuiz.q8[2].checked == true) {
        HouseR+=1; HouseH+=1;
    } else {
        alert("Please answer question 8.");
        return;
    } 

    //Question 9
    if (HPQuiz.q9[0].checked == true) {
        HouseS+=1;
    } else if (HPQuiz.q9[1].checked == true) {
        HouseG+=1;
    } else if (HPQuiz.q9[2].checked == true) {
        HouseR+=1; 
    } else if (HPQuiz.q9[3].checked == true) {
        HouseH+=1;
    } else if(HPQuiz.q9[4].checked == true){
        HouseS+=1;
    }else {
        alert("Please answer question 9.");
        return;
    } 

    //Question 10
    if (HPQuiz.q10[0].checked == true) {
        HouseH+=1;
    } else if (HPQuiz.q10[1].checked == true) {
        HouseS+=1; HouseG+=1;
    } else if (HPQuiz.q10[2].checked == true) {
        HouseR+=1;
    } else if (HPQuiz.q10[3].checked == true) {
        HouseG+=1;
    }else {
        alert("Please answer question 10.");
        return;
    } 

    //Question 11
    if (HPQuiz.q11[0].checked == true) {
        HouseG+=1; HouseH+=1;
    } else if (HPQuiz.q11[1].checked == true) {
         HouseG+=1;
    } else if (HPQuiz.q11[2].checked == true) {
        HouseR+=1;
    } else if (HPQuiz.q11[3].checked == true) {
        HouseS+=1;
    }else {
        alert("Please answer question 11.");
        return;
    } 

    //Question 12
        if (HPQuiz.q12[0].checked == true) {
        HouseG+=1; 
    } else if (HPQuiz.q12[1].checked == true) {
         HouseS+=1;
    } else if (HPQuiz.q12[2].checked == true) {
        HouseR+=1;
    } else if (HPQuiz.q12[3].checked == true) {
        HouseH+=1;
    }else {
        alert("Please answer question 12.");
        return;
    } 
   
    // var x = location.href;
    // document.getElementById("sortingResults").innerHTML = x;
    // console.log(x);

    location.href = "./Quiz-House-Results.html?" + HouseG + "&" + HouseH + "&" + HouseR + "&" + HouseS;
    console.log(HPQuiz);
}

// var aHouseName = new Array(4);
// var aHouseVal = new Array(4);

// function Init()
// {
// var cParameter = location.search.substring(1);
// var aParameters = cParameter.split("&");

// // I empty parameter, go back to quiz.
// if(cParameter == "")
// {
//     location.href = "./Quiz-House.html";
// }

// var i = 0;
// var j = 0;
// var nVal = 0;
// var cName = "";

// aHouseName[0] = "Gryffindor";
// aHouseName[1] = "Hufflepuff";
// aHouseName[2] = "Ravenclaw";
// aHouseName[3] = "Slytherin";
// aHouseVal[0] = parseInt(aParameters[0]);
// aHouseVal[1] = parseInt(aParameters[1]);
// aHouseVal[2] = parseInt(aParameters[2]);
// aHouseVal[3] = parseInt(aParameters[3]);

// for(i=0; i<3; i++)
// {
//     for(j=i; j<4; j++)
//     {
//         if(aHouseVal[i] < aHouseVal[j])
//         {
//             cName = aHouseName[i];
//             nVal = aHouseVal[i];
//             aHouseName[i] = aHouseName[j];
//             aHouseVal[i] = aHouseVal[j];
//             aHouseName[j] = cName;
//             aHouseVal[j] = nVal;
//         }
//     }
// }
// }

// Init();
// document.write('<p style="text-align:center;"><img src="./Quizzes/HP-' + aHouseName[0] + '.jpg" style="border-width:1px; border-style:solid; border-color:#000000; width:256px; height:106px;" title="' + aHouseName[0] + '"></p>'); 
// document.write('<br><p style="text-align:center; font-weight:bold;">To put this result on your web page, copy this text and paste it into your html code.</p>');
// document.write('<p style="text-align:center;"><textarea style="width:500px; height:80px;"><p style="font-size:8pt;"><a href="http://www.thealmightyguru.com/Reviews/HarryPotter/Docs/Quiz-House.html"><img src="http://www.thealmightyguru.com/Reviews/HarryPotter/Docs/Quizzes/HP-' + aHouseName[0] + '.jpg" style="border:none; width:256px; height106px;" title="' + aHouseName[0] + '"></a><br><a href="http://www.thealmightyguru.com/Reviews/HarryPotter/Docs/Quiz-House.html">Which Hogwarts house will you be sorted into?</a></p></textarea></p>');
// document.write('<br><br><p style="text-align:center; font-weight:bold;">Your in-depth results are:</p>');
// document.write('<p style="text-align:center;">');
// for(i=0; i<4; i++)
// {
//     document.write(aHouseName[i] + ' - ' + aHouseVal[i] + '<br>');
// }
// document.write('</p>');

