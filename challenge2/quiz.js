function Sort() {
    var HouseG = 0;
    var HouseR = 0;
    var HouseH = 0;
    var HouseS = 0;

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
        Houses+=1;
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
    location.href = "./Quiz-House-Results.html?" + nHouseG + "&" + nHouseH + "&" + nHouseR + "&" + nHouseS;
}



