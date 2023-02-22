function profile() {
    alert("hii");
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    let eid = document.getElementById("eid").value;
    let signemail = document.getElementById("email").value;
    let pimage = document.getElementById("pimage").value;
    let pass = document.getElementById("pass").value;

    document.getElementById("sname").replaceWith(first + last);
    document.getElementById("sdesig").replaceWith(desig);
    document.getElementById("sadd").replaceWith(add);
    document.getElementById("smobile").replaceWith(mobile);
    document.getElementById("smail").replaceWith(signemail);
    document.getElementById("slink").replaceWith(link);
    document.getElementById("slang").replaceWith(language);
    document.getElementById("simage").replaceWith(pimg);
}

if (localStorage.getItem("loggeduser")) {
    let detail = JSON.parse(localStorage.getItem("users"));
    let logged = JSON.parse(localStorage.getItem("loggeduser"));
    detail.forEach(key => {
        if (key.firstname === logged.username && key.pass === logged.password) {


            let name = key.firstname + key.lastname;
            let desig = key.desig;
            let mobile = key.mobile;
            let email = key.email;
            let link = key.link;
            let language = key.language;
            let pimage = key.pimage;
            location.replace("webpage.html");
            document.getElementById("fname").replaceWith(name);
            document.getElementById("desig").replaceWith(desig);
            document.getElementById("email").replaceWith(email);
            document.getElementById("pimg").replaceWith(pimage);
            console.log(name);
            console.log(desig);
            console.log(email);
            console.log(pimage);




        }
    })
}