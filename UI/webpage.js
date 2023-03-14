if (!localStorage.getItem("users"))
{
    location.replace("/Loginpage.html");
}
    
if (localStorage.getItem("loggeduser")) {
    let detail = JSON.parse(localStorage.getItem("users"));
    let logged = JSON.parse(localStorage.getItem("loggeduser"));
    detail.forEach(key => {
        if (key.firstname === logged.username && key.pass === logged.password) {

            let name = key.firstname + " "+key.lastname;
            let desig = key.designation;
            let mobile = key.mobile;
            let mail = key.signemail;
            let website = key.website;
            let language = key.language;
            const src = "data:image/png;base64," + key.pimage
            let address=key.address;
            document.getElementById("simage").src = src
            document.getElementById("sname").replaceWith(name);
            document.getElementById("sdesig").replaceWith(desig);
            document.getElementById("smail").replaceWith(mail);
            document.getElementById("smobile").replaceWith(mobile);
            document.getElementById("slang").replaceWith(language);
            document.getElementById("slink").replaceWith(website);
            document.getElementById("sadd").replaceWith(address);
        }
    })
}


let imgFile = ""
const file = document.getElementById("pimg");
const img = document.getElementById("modalimage");

file.addEventListener("change", function () {
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            img.setAttribute("src", reader.result);
            const base64String = reader.result
                .replace('data:', '')
                .replace(/^.+,/, '');

            imgFile = base64String.toString()
        });

        reader.readAsDataURL(choosedFile);
    }
    else {
        imgFile = ""
    }
});

function update() {
    // alert("hii");
    let nme = document.getElementById("fname").value;
    let desig = document.getElementById("desig").value;
    let add = document.getElementById("add").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let link = document.getElementById("link").value;
    let language = document.getElementById("language").value;
    let image=imgFile;
    //let pimg = document.getElementById("pimg").value;
    

    
    


    let detail = JSON.parse(localStorage.getItem("users"));
    let logged = JSON.parse(localStorage.getItem("loggeduser"));
    detail.forEach(key => {
        if (key.firstname === logged.username && key.pass === logged.password) {

            let name = key.firstname + " "+key.lastname;
            key.designation=desig;
            key.mobile=mobile;
            key.signemail=email;
            key.website=link;
            key.language=language;
            key.pimage=image;
            key.address=add;
            parseddetail=JSON.stringify(detail)
            localStorage.setItem("users",parseddetail)
            location.reload();
        }
    })

}


function logout(){
    localStorage.removeItem("loggeduser"); 
}