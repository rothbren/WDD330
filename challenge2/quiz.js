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
    }

    //Question 3
    if (HPQuiz.q3[0].checked == true) {
        HouseR += 1;
        HouseG += 1;
    } else if (HPQuiz.q3[1].checked == true) {
        HouseH += 1;
    } else if (HPQuiz.q3[2].checked == true) {
        HouseS += 1;
    } else if (HPQuiz.q3[3].checked == true) {
        HouseS += 1;
        HouseG += 1;
    } else if (HPQuiz.q3[3].checked == true) {
        HouseS += 1;
    } else {
        alert("Please answer question 3.");
    }

    //Question 4
    if (HPQuiz.q4[0].checked == true) {
        HouseH += 1;
        HouseR += 1;
    } else if (HPQuiz.q4[1].checked == true) {
        HouseR += 1;
    } else if (HPQuiz.q4[2].checked == true) {
        HouseH += 1;
    } else if (HPQuiz.q4[3].checked == true) {
        HouseG += 1;
        HouseS += 1;
    } else if (HPQuiz.q4[3].checked == true) {
        HouseS += 1;
    } else {
        alert("Please answer question 4.");
    }

    //Question 5
    if (HPQuiz.q5[0].checked == true) {
        HouseH += 1;
        HouseR += 1;
        HouseG += 1;
    } else if (HPQuiz.q5[1].checked == true) {
        HouseS += 1;
    } else if (HPQuiz.q5[2].checked == true) {
        HouseR += 1;
    } else if (HPQuiz.q5[3].checked == true) {
        HouseG += 1;
    } else if (HPQuiz.q5[3].checked == true) {
        HouseS += 1;
        HouseG += 1;
    } else {
        alert("Please answer question 5.");
    }

    //Question 6
    if (HPQuiz.q6[0].checked == true) {
        HouseS += 1;
    } else if (HPQuiz.q6[1].checked == true) {
        HouseS += 1;
        HouseG += 1;
    } else if (HPQuiz.q6[2].checked == true) {
        HouseR += 1;
    } else if (HPQuiz.q6[3].checked == true) {
        HouseH += 1;
    } else {
        alert("Please answer question 6.");
    }

    //Question 7
    if (HPQuiz.q7[0].checked == true) {
        HouseH += 1;
        HouseR += 1;
        HouseG += 1;
        HouseS += 1;
    } else if (HPQuiz.q7[1].checked == true) {
        HouseR += 1;
        HouseG += 1;
        HouseS += 1;
    } else if (HPQuiz.q7[2].checked == true) {
        HouseH += 1;
        HouseR += 1;
    } else {
        alert("Please answer question 7.");
    }

    //Question 8
    if (HPQuiz.q8[0].checked == true) {
        HouseG += 1;
    } else if (HPQuiz.q8[1].checked == true) {
        HouseS += 1;
        HouseG += 1;
    } else if (HPQuiz.q8[2].checked == true) {
        HouseR += 1;
        HouseH += 1;
    } else {
        alert("Please answer question 8.");
    }

    //Question 9
    if (HPQuiz.q9[0].checked == true) {
        HouseS += 1;
    } else if (HPQuiz.q9[1].checked == true) {
        HouseG += 1;
    } else if (HPQuiz.q9[2].checked == true) {
        HouseR += 1;
    } else if (HPQuiz.q9[3].checked == true) {
        HouseH += 1;
    } else if (HPQuiz.q9[4].checked == true) {
        HouseS += 1;
    } else {
        alert("Please answer question 9.");
    }

    //Question 10
    if (HPQuiz.q10[0].checked == true) {
        HouseH += 1;
    } else if (HPQuiz.q10[1].checked == true) {
        HouseS += 1;
        HouseG += 1;
    } else if (HPQuiz.q10[2].checked == true) {
        HouseR += 1;
    } else if (HPQuiz.q10[3].checked == true) {
        HouseG += 1;
    } else {
        alert("Please answer question 10.");
    }

    //Question 11
    if (HPQuiz.q11[0].checked == true) {
        HouseG += 1;
        HouseH += 1;
    } else if (HPQuiz.q11[1].checked == true) {
        HouseG += 1;
    } else if (HPQuiz.q11[2].checked == true) {
        HouseR += 1;
    } else if (HPQuiz.q11[3].checked == true) {
        HouseS += 1;
    } else {
        alert("Please answer question 11.");
    }

    //Question 12
    if (HPQuiz.q12[0].checked == true) {
        HouseG += 1;
    } else if (HPQuiz.q12[1].checked == true) {
        HouseS += 1;
    } else if (HPQuiz.q12[2].checked == true) {
        HouseR += 1;
    } else if (HPQuiz.q12[3].checked == true) {
        HouseH += 1;
    } else {
        alert("Please answer question 12.");
    }

    if (HouseH > HouseG && HouseH > HouseR && HouseH > HouseS) {
        document.getElementById('sortingResults').innerHTML = '<p style="color:black; background-color:#FFDB00">YOU ARE IN HUFFLEPUFF!</p>';
    } else if (HouseG > HouseH && HouseG > HouseR && HouseG > HouseS) {
        document.getElementById('sortingResults').innerHTML = '<p style="color:#FFDB00; background-color:#740001">YOU ARE IN GRYFFINDORE!</p>';
    } else if (HouseS > HouseH && HouseS > HouseR && HouseS > HouseG) {
        document.getElementById('sortingResults').innerHTML = '<p style="color:#AAAAAA; background-color:#1A472A">YOU ARE IN SLYTHERIN!</p>';
    } else {
        document.getElementById('sortingResults').innerHTML = '<p style="color:#AAAAAA; background-color:#0E1A40">YOU ARE IN RAVENCLAW!</p>';
    }

    console.log('sortingResults');
}