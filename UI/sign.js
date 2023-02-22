let details = [];


function sign() {
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    let eid = document.getElementById("eid").value;
    let signemail = document.getElementById("email").value;
    let pimage = document.getElementById("pimage").value;
    let pass = document.getElementById("pass").value;



    function person(first, last, dob, eid, signemail, pimage, pass) {
        this.firstname = first;
        this.lastname = last;
        this.dob = dob;
        this.eid = eid;
        this.signemail = signemail;
        this.pimage = pimage;
        this.pass = pass;
    }

    let users = [];

    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
        console.log(users);

        //array1.forEach(element => console.log(element));
        let flag = false;

        users.forEach(element => {
            if (element.eid === eid) {
                alert("User already exists");
                flag = true;
            }
        });

        if (flag === false) {
            users.push(new person(first, last, dob, eid, signemail, pimage, pass));
            localStorage.setItem("users", JSON.stringify(users));

            alert("You have signed in succesfully ! Please login to continue");
            location.replace("Loginpage.html");

        }

    }
    else {
        users.push(new person(first, last, dob, eid, signemail, pimage, pass));
        localStorage.setItem("users", JSON.stringify(users));
        alert("You have signed in succesfully ! Please login to continue");
        location.replace("Loginpage.html");
    }


}



function loginfunc() {

    function loggeduser(usernm, password) {
        this.username = usernm;
        this.password = password;
    }

    let first = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem("loggeduser")) {
        location.replace("webpage.html");
        // let detail = JSON.parse(localStorage.getItem("users"));
        // let logged = JSON.parse(localStorage.getItem("loggeduser"));
        // detail.forEach(key => {
        //     if (key.firstname === logged.username && key.pass === logged.password) {


        //         let name = key.firstname + key.lastname;
        //         let desig = key.desig;
        //         let mobile = key.mobile;
        //         let email = key.email;
        //         let link = key.link;
        //         let language = key.language;
        //         let pimage = key.pimage;
        //         location.replace("webpage.html");
        //         document.getElementById("fname").replaceWith(name);
        //         document.getElementById("desig").replaceWith(desig);
        //         document.getElementById("email").replaceWith(email);
        //         document.getElementById("pimg").replaceWith(pimage);
        //         console.log(name);
        //         console.log(desig);
        //         console.log(email);
        //         console.log(pimage);




        //     }
        // })
    }
    else {

        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));

            let flag = false;

            users.forEach(element => {
                if (element.firstname === first && element.pass === pass) {

                    localStorage.setItem("loggeduser", JSON.stringify(new loggeduser(first, pass)));
                    alert("welcome");
                    location.replace("webpage.html");


                    flag = true;
                    let detail = JSON.parse(localStorage.getItem("users"));
                    detail.forEach(key => {
                        if (key.firstname === first && key.pass === pass) {
                            let name = key.firstname + key.lastname;
                            let desig = key.desig;
                            let mobile = key.mobile;
                            let email = key.email;
                            let link = key.link;
                            let language = key.language;
                            let pimage = key.pimage;

                            document.getElementById("fname").replaceWith(name);
                            document.getElementById("desig").replaceWith(desig);
                            document.getElementById("email").replaceWith(email);
                            document.getElementById("pimg").replaceWith(pimage);

                        }
                    })


                }
            });

            if (flag === false) {
                alert("username or password is incorrect!");
            }

        }
        else {
            alert("User doesn't exists! please sign up first");
        }
    }



}