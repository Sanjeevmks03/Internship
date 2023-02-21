let details = [];


function sign() {
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    let eid = document.getElementById("eid").value;
    let signemail = document.getElementById("email").value;
    let pimage = document.getElementById("pimage").value;
    let pass = document.getElementById("pass").value;

    function logged(usernm, password) {
        this.username = usernm;
        this.password = password;
    }

    function person(first, last, dob, eid, signemail, pimage, pass) {
        this.firstname = first;
        this.lastname = last;
        this.dob = dob;
        this.eid = eid;
        this.signemail = signemail;
        this.pimage = pimage;
        this.pass = pass;
    }

    // localStorage.setItem(first,JSON.stringify(new person(first,last,dob,eid,signemail,pimage,pass)));
    if (localStorage.getItem(first)) {
        let user = JSON.parse(localStorage.getItem(first));
        let username = user.firstname;
        let passw = user.pass;
        if (passw === pass) {
            alert("user already exists");
        }
        else {
            alert("signin succesfull");
            localStorage.setItem(first, JSON.stringify(new person(first, last, dob, eid, signemail, pimage, pass)));
            window.location.replace("/loginpage.html");
        }
    }
    else{

    }

    if (username === undefined) {
        localStorage.setItem(first, JSON.stringify(new person(first, last, dob, eid, signemail, pimage, pass)));
    }
    else 


}



function loginfunc() {

    let first = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;

    let user = JSON.parse(localStorage.getItem(first));
    console.log(user.length());
    if (JSON.stringify(user).length === 0) {
        alert("user doesn't exist")
    }
    else {
        let username = user.firstname;
        let passw = user.pass;
        console.log(passw);

        if (passw === pass) {
            alert("welcome" + username);
            window.location.replace("weppage.html");
        }
        else {
            alert("username or password is not correct");

        }
    }


}