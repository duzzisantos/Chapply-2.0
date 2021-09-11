function myTime() {
    // const currentDate = document.getElementById("dateDisplay");
    // const currentTime = document.getElementById("timeDisplay");
    const h3Date = document.getElementById("h3Date");
    const h3Time = document.getElementById("h3Time");
    let today = new Date();
    let unixDay = today.getDate();
    let day = unixDay;
    let unixMonth = today.getMonth();
    let month = parseInt(unixMonth) + 1;
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();

    if (minute < 10) {
        minute = '0' + minute;
    } else if (minute > 10) {
        minute = minute;
    }

    if (hour < 10) {
        hour = '0' + hour;
    } else if (hour > 10) {
        hour = hour;
    }

    let displayDate = `${day}-${month}-${year}`;
    let displayTime = `${hour}:${minute}`;

    h3Date.innerText = displayDate;
    h3Time.innerText = displayTime;

}

myTime();


//FUNCTION FOR FILLING THE CHAT QUESTIONNAIRE

function userChat() {

    //-------------------------------------------------------------------------------------------------------------------------
    //FORM LOCAL VARIABLES ELEMENTS DECLARED FOR ACCESSIBILITY BY OTHER FUNCTIONS

    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';

    const okay5 = document.createElement('button');
    okay5.type = 'button';
    okay5.id = 'okay5';
    okay5.innerText = 'Okay';

    const okay6 = document.createElement('button');
    okay6.type = 'button';
    okay6.id = 'okay6';
    okay6.innerText = 'Okay';

    const okay7 = document.createElement('button');
    okay7.type = 'button';
    okay7.id = 'okay7';
    okay7.innerText = 'Okay';

    const okay8 = document.createElement('button');
    okay8.type = 'button';
    okay8.id = 'okay8';
    okay8.innerText = 'Okay';

    const okay9 = document.createElement('button');
    okay9.type = 'button';
    okay9.id = 'okay9';
    okay9.innerText = 'Okay';

    const okay10 = document.createElement('button');
    okay10.type = 'button';
    okay10.id = 'okay10';
    okay10.innerText = 'Okay';

    const okay11 = document.createElement('button');
    okay11.type = 'button';
    okay11.id = 'okay11';
    okay11.innerText = 'Okay';


    //first
    const label1 = document.createElement('label');
    label1.id = 'label1';
    label1.innerText = 'What is your full name?'
    const fullName = document.createElement('input');
    fullName.type = 'text';
    fullName.placeholder = 'Enter your name'
    fullName.id = 'fullName';


    //second
    const label2 = document.createElement('label');
    label2.id = 'label2';
    label2.innerText = 'What is your email address?';
    const address = document.createElement('input');
    address.type = 'text';
    address.placeholder = 'Enter your address';
    address.id = 'address';


    //third
    const label3 = document.createElement('label');
    label3.id = 'label3';
    const email = document.createElement('input');
    email.type = 'text';
    email.placeholder = 'Enter e-mail';
    email.id = 'email';


    //fourth
    const label4 = document.createElement('label');
    label4.id = 'label4';
    const phone = document.createElement('input');
    phone.type = 'text';
    phone.placeholder = 'Enter phone number'
    phone.id = 'phone';


    //fifth
    const label5 = document.createElement('label');
    label5.id = 'label5';
    const birth = document.createElement('input');
    birth.type = 'date';
    birth.id = 'birth';


    //sixth
    const label6 = document.createElement('label');
    label6.id = 'label6';
    const upload1 = document.createElement('input');
    upload1.id = 'upload1';
    upload1.type = 'file';
    const upload2 = document.createElement('input');
    upload2.id = 'upload2';
    upload2.type = 'file';

    //seventh
    const label7 = document.createElement('label');
    label7.id = 'label7';
    const visa = document.createElement('input');
    visa.type = 'text'
    visa.id = 'visa';


    //eighth
    const label8 = document.createElement('label');
    label8.id = 'label8';
    const startPeriod = document.createElement('input');
    startPeriod.type = 'text';
    startPeriod.id = 'startPeriod';


    //ninth
    const label9 = document.createElement('label');
    label9.id = 'label9';
    const notify = document.createElement('input');
    notify.type = 'text';
    notify.id = 'notify';

    //tenth
    const label10 = document.createElement('label');
    label10.id = 'label10';
    const salary = document.createElement('input');
    salary.type = 'text';
    salary.id = 'salary';

    //eleventh
    const label11 = document.createElement('label');
    label11.id = 'label11';
    const userComment = document.createElement('input');
    userComment.type = 'textarea';
    userComment.id = 'userComment';

    //twelfth
    const label12 = document.createElement('label');
    label12.id = 'label12';
    const rateBtn1 = document.createElement('button');
    const rateBtn2 = document.createElement('button');
    const rateBtn3 = document.createElement('button');
    const rateBtn4 = document.createElement('button');
    const rateBtn5 = document.createElement('button');

    const rateBtns = [rateBtn1, rateBtn2, rateBtn3, rateBtn4, rateBtn5];

    rateBtns.forEach(fiveButtons);

    function fiveButtons(value) {
        value.type = 'button';
    }

    rateBtns[0].id = 'btn1';
    rateBtns[1].id = 'btn2';
    rateBtns[2].id = 'btn3';
    rateBtns[3].id = 'btn4';
    rateBtns[4].id = 'btn5';


    //----------------------------------------------------END OF LOCAL VARIABLES DECLARATIONS-----------------------------------------------

    //THIS AREA HOUSES THE LABELS AND INPUTS THAT WILL BE GENERATED IN THE FORM OF A QUESTIONNAIRE:

    //THE FIRST FORM IS GENERATED  HERE

    const myChat = document.getElementById("chatContainer");
    setTimeout(() => {

        //first
        myChat.appendChild(label1);
        myChat.appendChild(fullName);
        myChat.appendChild(okay);
        myChat.scrollIntoView(true);
        console.log("I waited for two seconds before executing");
    }, 2000);

}

userChat();


//second function
function form2() {
    const myChat = document.getElementById("chatContainer");

    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;


    //second
    const label2 = document.createElement('label');
    label2.id = 'label2';
    label2.innerText = 'What is your postal address?'
    const address = document.createElement('input');
    address.type = 'text';
    address.placeholder = 'Enter your address';
    address.id = 'address';

    setTimeout(() => {
        myChat.appendChild(label2);
        myChat.appendChild(address);
        myChat.appendChild(okay2)
        console.log("the second function is working");
        myChat.style.overflowY = 'scroll';
    }, 1000);
}

function form3() {
    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    //third
    const label3 = document.createElement('label');
    label3.id = 'label3';
    label3.innerHTML = 'What is your email address?'
    const email = document.createElement('input');
    email.type = 'text';
    email.placeholder = 'Enter e-mail';
    email.id = 'email';

    setTimeout(() => {
        myChat.appendChild(label3);
        myChat.appendChild(email);
        myChat.appendChild(okay3);
        console.log("the third function is working");
        myChat.style.overflowY = 'scroll';
    }, 1000);

}

function form4() {
    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';
    okay4.onclick = form5;

    //fourth
    const label4 = document.createElement('label');
    label4.id = 'label4';
    label4.innerText = 'Enter phone number';
    const phone = document.createElement('input');
    phone.type = 'text';
    phone.placeholder = 'Enter phone number'
    phone.id = 'phone';

    setTimeout(() => {
        myChat.appendChild(label4);
        myChat.appendChild(phone);
        myChat.appendChild(okay4);
        console.log('the fourth function works');
        myChat.style.overflowY = 'scroll';
    }, 1000);
}

function form5() {
    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';
    okay4.onclick = form5;

    const okay5 = document.createElement('button');
    okay5.type = 'button';
    okay5.id = 'okay5';
    okay5.innerText = 'Okay';
    okay5.onclick = form6;

    //fifth
    const label5 = document.createElement('label');
    label5.id = 'label5';
    label5.innerText = 'What is your date of birth?';
    const birth = document.createElement('input');
    birth.type = 'date';
    birth.id = 'birth';

    setTimeout(() => {
        myChat.appendChild(label5);
        myChat.appendChild(birth);
        myChat.appendChild(okay5);
        console.log('the fifth function works');
        myChat.style.overflowY = 'scroll';
    }, 1000);

}

function form6() {
    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';
    okay4.onclick = form5;

    const okay5 = document.createElement('button');
    okay5.type = 'button';
    okay5.id = 'okay5';
    okay5.innerText = 'Okay';
    okay5.onclick = form6;


    const okay6 = document.createElement('button');
    okay6.type = 'button';
    okay6.id = 'okay6';
    okay6.innerText = 'Okay';
    okay6.onclick = form7;

    //sixth
    const label6 = document.createElement('label');
    label6.id = 'label6';
    label6.innerText = 'Upload documents - eg: CV, coverletter.';
    const upload1 = document.createElement('input');
    upload1.id = 'upload1';
    upload1.type = 'file';
    const upload2 = document.createElement('input');
    upload2.id = 'upload2';
    upload2.type = 'file';


    setTimeout(() => {
        myChat.appendChild(label6);
        myChat.appendChild(upload1);
        myChat.appendChild(upload2);
        myChat.appendChild(okay6);
        console.log('the sixth function works');
        myChat.style.overflowY = 'scroll';
    }, 1000);
}


function form7() {

    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';
    okay4.onclick = form5;

    const okay5 = document.createElement('button');
    okay5.type = 'button';
    okay5.id = 'okay5';
    okay5.innerText = 'Okay';
    okay5.onclick = form6;


    const okay6 = document.createElement('button');
    okay6.type = 'button';
    okay6.id = 'okay6';
    okay6.innerText = 'Okay';
    okay6.onclick = form7;

    const okay7 = document.createElement('button');
    okay7.type = 'button';
    okay7.id = 'okay7';
    okay7.innerText = 'Okay';
    okay7.onclick = form8;

    //seventh
    const label7 = document.createElement('label');
    label7.id = 'label7';
    label7.innerText = 'Do you need Visa sponsorship?';
    const visa = document.createElement('input');
    visa.type = 'text'
    visa.id = 'visa';

    setTimeout(() => {
        myChat.appendChild(label7);
        myChat.appendChild(visa);
        myChat.appendChild(okay7)
        console.log('the seventh function works');
        myChat.style.overflowY = 'scroll';
    }, 1000);
}


function form8() {
    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';
    okay4.onclick = form5;

    const okay5 = document.createElement('button');
    okay5.type = 'button';
    okay5.id = 'okay5';
    okay5.innerText = 'Okay';
    okay5.onclick = form6;


    const okay6 = document.createElement('button');
    okay6.type = 'button';
    okay6.id = 'okay6';
    okay6.innerText = 'Okay';
    okay6.onclick = form7;

    const okay7 = document.createElement('button');
    okay7.type = 'button';
    okay7.id = 'okay7';
    okay7.innerText = 'Okay';
    okay7.onclick = form8;

    const okay8 = document.createElement('button');
    okay8.type = 'button';
    okay8.id = 'okay8';
    okay8.innerText = 'Okay';
    okay8.onclick = form9;


    //eighth
    const label8 = document.createElement('label');
    label8.id = 'label8';
    label8.innerText = 'When do you wish to start?'
    const startPeriod = document.createElement('input');
    startPeriod.type = 'date';
    startPeriod.id = 'startPeriod';

    setTimeout(() => {
        myChat.appendChild(label8);
        myChat.appendChild(startPeriod);
        myChat.appendChild(okay8);
        console.log('the eighth function works');
        myChat.style.overflowY = 'scroll';
    }, 1000);
}

function form9() {
    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';
    okay4.onclick = form5;

    const okay5 = document.createElement('button');
    okay5.type = 'button';
    okay5.id = 'okay5';
    okay5.innerText = 'Okay';
    okay5.onclick = form6;


    const okay6 = document.createElement('button');
    okay6.type = 'button';
    okay6.id = 'okay6';
    okay6.innerText = 'Okay';
    okay6.onclick = form7;

    const okay7 = document.createElement('button');
    okay7.type = 'button';
    okay7.id = 'okay7';
    okay7.innerText = 'Okay';
    okay7.onclick = form8;

    const okay8 = document.createElement('button');
    okay8.type = 'button';
    okay8.id = 'okay8';
    okay8.innerText = 'Okay';
    okay8.onclick = form9;

    const okay9 = document.createElement('button');
    okay9.type = 'button';
    okay9.id = 'okay9';
    okay9.innerText = 'Okay';
    okay9.onclick = form10;

    //ninth
    const label9 = document.createElement('label');
    label9.id = 'label9';
    label9.innerText = 'What is your notification period?';
    const notify = document.createElement('input');
    notify.type = 'text';
    notify.id = 'notify';

    setTimeout(() => {
        myChat.appendChild(label9);
        myChat.appendChild(notify);
        myChat.appendChild(okay9)
        console.log('the ninth function works');
        myChat.style.overflowY = 'scroll';
    }, 1000);
}

function form10() {
    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';
    okay4.onclick = form5;

    const okay5 = document.createElement('button');
    okay5.type = 'button';
    okay5.id = 'okay5';
    okay5.innerText = 'Okay';
    okay5.onclick = form6;


    const okay6 = document.createElement('button');
    okay6.type = 'button';
    okay6.id = 'okay6';
    okay6.innerText = 'Okay';
    okay6.onclick = form7;

    const okay7 = document.createElement('button');
    okay7.type = 'button';
    okay7.id = 'okay7';
    okay7.innerText = 'Okay';
    okay7.onclick = form8;

    const okay8 = document.createElement('button');
    okay8.type = 'button';
    okay8.id = 'okay8';
    okay8.innerText = 'Okay';
    okay8.onclick = form9;

    const okay9 = document.createElement('button');
    okay9.type = 'button';
    okay9.id = 'okay9';
    okay9.innerText = 'Okay';
    okay9.onclick = form10;

    const okay10 = document.createElement('button');
    okay10.type = 'button';
    okay10.id = 'okay10';
    okay10.innerText = 'Okay';
    okay10.onclick = form11;

    //tenth
    const label10 = document.createElement('label');
    label10.id = 'label10';
    label10.innerText = 'What is your salary expectation?(EUR)';
    const salary = document.createElement('input');
    salary.type = 'text';
    salary.id = 'salary';


    setTimeout(() => {
        myChat.appendChild(label10);
        myChat.appendChild(salary);
        myChat.appendChild(okay10);
        console.log('the tenth function works');
        myChat.style.overflowY = 'scroll';
    }, 1000);
}


function form11() {
    const myChat = document.getElementById("chatContainer");
    //first okay button
    const okay = document.createElement('button');
    okay.id = 'okayBtn';
    okay.type = 'button';
    okay.innerText = 'Okay';
    okay.onclick = form2;

    //other okay buttons

    const okay2 = document.createElement('button');
    okay2.type = 'button';
    okay2.id = 'okay2';
    okay2.innerText = 'Okay';
    okay2.onclick = form3;

    const okay3 = document.createElement('button');
    okay3.type = 'button';
    okay3.id = 'okay3';
    okay3.innerText = 'Okay';
    okay3.onclick = form4;

    const okay4 = document.createElement('button');
    okay4.type = 'button';
    okay4.id = 'okay4';
    okay4.innerText = 'Okay';
    okay4.onclick = form5;

    const okay5 = document.createElement('button');
    okay5.type = 'button';
    okay5.id = 'okay5';
    okay5.innerText = 'Okay';
    okay5.onclick = form6;


    const okay6 = document.createElement('button');
    okay6.type = 'button';
    okay6.id = 'okay6';
    okay6.innerText = 'Okay';
    okay6.onclick = form7;

    const okay7 = document.createElement('button');
    okay7.type = 'button';
    okay7.id = 'okay7';
    okay7.innerText = 'Okay';
    okay7.onclick = form8;

    const okay8 = document.createElement('button');
    okay8.type = 'button';
    okay8.id = 'okay8';
    okay8.innerText = 'Okay';
    okay8.onclick = form9;

    const okay9 = document.createElement('button');
    okay9.type = 'button';
    okay9.id = 'okay9';
    okay9.innerText = 'Okay';
    okay9.onclick = form10;

    const okay10 = document.createElement('button');
    okay10.type = 'button';
    okay10.id = 'okay10';
    okay10.innerText = 'Okay';
    okay10.onclick = form11;


    const okay11 = document.createElement('button');
    okay11.type = 'button';
    okay11.id = 'okay11';
    okay11.innerText = 'Move-on';
    okay11.onclick = form12;

    //eleventh
    const label11 = document.createElement('label');
    label11.id = 'label11';
    label11.innerText = 'Do you have any comments to make?'
    const userComment = document.createElement('input');
    userComment.type = 'textarea';
    userComment.id = 'userComment';


    setTimeout(() => {
        myChat.appendChild(label11);
        myChat.appendChild(userComment);
        myChat.appendChild(okay11);
        console.log('the eleventh function works');
        myChat.style.overflowY = 'scroll';
    }, 1000);
}


function form12() {
    const myChat = document.getElementById("chatContainer");
    const okay10 = document.createElement('button');
    okay10.type = 'button';
    okay10.id = 'okay10';
    okay10.innerText = 'Okay';
    okay10.onclick = form11;


    const okay11 = document.createElement('button');
    okay11.type = 'button';
    okay11.id = 'okay11';
    okay11.innerText = 'Okay';
    okay11.onclick = form12;


    //THE RATING BUTTONS 
    const rateBtn1 = document.createElement('button');
    const rateBtn2 = document.createElement('button');
    const rateBtn3 = document.createElement('button');
    const rateBtn4 = document.createElement('button');
    const rateBtn5 = document.createElement('button');

    const rateBtns = [rateBtn1, rateBtn2, rateBtn3, rateBtn4, rateBtn5];
    rateBtns[0].id = 'btn1';
    rateBtns[1].id = 'btn2';
    rateBtns[2].id = 'btn3';
    rateBtns[3].id = 'btn4';
    rateBtns[4].id = 'btn5';

    //set all the rating buttons to callback formSubmit()
    for (let i = 0; i < rateBtns.length; i++) {
        rateBtns[i].onclick = formSubmit; //callback that generates the Submit button
    }

    //set element properties with a loop

    for (let i = 0; i < rateBtns.length; i++) {
        rateBtns[i].type = 'button';
        rateBtns[i].innerHTML = '<i class="far fa-star"></i>';
    }


    //EVENT LISTENERS FOR WHEN THE RATING BUTTONS ARE CLICKED


    rateBtn1.addEventListener('click', () => {
        rateBtn1.style.color = '#f6f930';
        console.log(`User clicked ${rateBtn1.id}`);
    });

    rateBtn2.addEventListener('click', () => {
        rateBtn1.style.color = '#f6f930';
        rateBtn2.style.color = '#f6f930';
        console.log(`User clicked ${rateBtn2.id}`);
    });

    rateBtn3.addEventListener('click', () => {
        rateBtn1.style.color = '#f6f930';
        rateBtn2.style.color = '#f6f930';
        rateBtn3.style.color = '#f6f930';
        console.log(`User clicked ${rateBtn3.id}`);
    });

    rateBtn4.addEventListener('click', () => {
        rateBtn1.style.color = '#f6f930';
        rateBtn2.style.color = '#f6f930';
        rateBtn3.style.color = '#f6f930';
        rateBtn4.style.color = '#f6f930';
        console.log(`User clicked ${rateBtn4.id}`);
    });

    rateBtn5.addEventListener('click', () => {
        rateBtn1.style.color = '#f6f930';
        rateBtn2.style.color = '#f6f930';
        rateBtn3.style.color = '#f6f930';
        rateBtn4.style.color = '#f6f930';
        rateBtn5.style.color = '#f6f930';
        console.log(`User clicked ${rateBtn5.id}`);
    });

    //EVENT LISTENERS FOR THE BUTTONS END HERE


    //twelfth
    const label12 = document.createElement('label');
    label12.id = 'label12';
    label12.innerText = 'Please, could you rate your experience?';

    setTimeout(() => {
        myChat.appendChild(label12);
        myChat.appendChild(rateBtn1)
        myChat.appendChild(rateBtn2)
        myChat.appendChild(rateBtn3)
        myChat.appendChild(rateBtn4)
        myChat.appendChild(rateBtn5)
        console.log('the twelfth function works');
    }, 1000);
}


//THIS CREATES THE SUBMIT BUTTON

function formSubmit() {
    const myChat = document.getElementById("chatContainer");
    const submitForm = document.createElement('button');
    submitForm.id = 'submitForm';
    submitForm.type = 'sumbit';
    const submitLink = document.createElement('a');
    submitLink.href = './chapply-confirm.html';
    submitLink.innerText = 'Submit Application';
    submitForm.appendChild(submitLink);
    setTimeout(() => {
        myChat.appendChild(submitForm);
    }, 1000);
}