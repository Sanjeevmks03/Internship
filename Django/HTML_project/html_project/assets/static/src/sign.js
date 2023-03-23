
if(localStorage.getItem("loggeduser")){
    location.replace("/webpage.html");
}
const signcall=document.getElementById("signup");
// alert("Inside sign.js")
signcall.addEventListener("click",signfunc);


let imgfile = ""
const fle = document.getElementById("pimage");
const imag = document.getElementById("image");

fle.addEventListener("change", function () {
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            imag.setAttribute("src", reader.result);
            const base64String = reader.result
                .replace('data:', '')
                .replace(/^.+,/, '');

            imgfile = base64String.toString()
        });

        reader.readAsDataURL(choosedFile);
    }
    else {
        imgfile = ""
    }
});



let details = [];
function signfunc() {
    
    // alert("Inside sign function")
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    let eid = document.getElementById("eid").value;
    let signemail = document.getElementById("email").value;
    let pimage =imgfile;
    let pass = document.getElementById("pass").value;
    let mobile = document.getElementById("mob").value;
    let designation = document.getElementById("desig").value;
    let language = document.getElementById("language").value;
    let website = document.getElementById("website").value;
    let address = document.getElementById("address").value;

    check=true;
    if(first==""||last==""||dob==""||eid==""||signemail==""
                ||pimage==""||pass==""||mobile==""||designation==""
                ||language==""||website==""||address==""){
                    alert("Please fill every details...")
                    check=false;
    }
    if (findAge(dob) < 20) {
        check = false;
        alert("Your age must must be atleast 20 Years.....");
    }
    function findAge(dob) {
        let date = new Date(dob);
        let diff = Date.now() - date.getTime();
        let dt = new Date(diff);
    
        let year = dt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        return age;
    }

    if(isNaN(eid)){
        alert("Employee id should be integer...")
        check=false;
    }
    if(mobile.toString().length!=10){
        alert("Mobile number should be of 10 digits...")
        check=false;
    }
    


    function person(first, last, dob, eid, signemail, pimage, pass,designation,mobile,language,website,address) {
        this.firstname = first;
        this.lastname = last;
        this.dob = dob;
        this.eid = eid;
        this.signemail = signemail;
        this.pimage = pimage;
        this.pass = pass;
        this.designation=designation;
        this.mobile=mobile;
        this.language=language;
        this.website=website;
        this.address=address
    }

    


    let users = [];

    if(check){
        if (localStorage.getItem("users")) {
            // alert("user present hai")
            users = JSON.parse(localStorage.getItem("users"));
            // console.log(users);
    
            //array1.forEach(element => console.log(element));
            let flag = false;
    
            users.forEach(element => {
                if (element.eid === eid) {
                    alert("Employee ID already exists");
                    flag = true;
                }
            });
    
            if (flag === false) {
                users.push(new person(first, last, dob, eid, signemail, pimage, pass,designation,mobile,language,website,address));
                localStorage.setItem("users", JSON.stringify(users));
                
                // localStorage.setItem("loggeduser", JSON.stringify(new person(first, last, dob, eid, signemail, pimage, pass,designation,mobile,language,website,address)));
                location.replace("Loginpage.html");
                // alert("inside if condition")
                alert("You have signed in succesfully ! Please login to continue");
    
            }
            
    
        }
        else {
            // alert("user present nhi h")
            users.push(new person(first, last, dob, eid, signemail, pimage, pass,designation,mobile,language,website,address));
            localStorage.setItem("users", JSON.stringify(users));
            alert("You have signed in succesfully ! Please login to continue");
            location.replace("Loginpage.html");
        }
    }
    


}
