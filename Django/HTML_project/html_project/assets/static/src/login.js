
if (localStorage.getItem("loggeduser"))
    location.replace("/webpage.html");

let form = document.getElementById("form_input")

form.addEventListener("submit", loginfunc)

function loginfunc() {

    function loggeduser(usernm, password) {
        this.username = usernm;
        this.password = password;
    }

    let first = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;


    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));

        let flag = false;

        users.forEach(element => {
            if (element.firstname === first && element.pass === pass) {

                localStorage.setItem("loggeduser", JSON.stringify(new loggeduser(first, pass)));
                alert("welcome");
                location.replace("webpage.html");
                flag=true;

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