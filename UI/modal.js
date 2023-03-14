// function update() {
//     // alert("hii");
//     let nme = document.getElementById("fname").value;
//     let desig = document.getElementById("desig").value;
//     let add = document.getElementById("add").value;
//     let mobile = document.getElementById("mobile").value;
//     let email = document.getElementById("email").value;
//     let link = document.getElementById("link").value;
//     let language = document.getElementById("language").value;
//     let pimg = document.getElementById("pimg").value;
//     console.log(nme);
//     console.log(desig);
   

//     let detail = JSON.parse(localStorage.getItem("users"));
//     let logged = JSON.parse(localStorage.getItem("loggeduser"));
//     detail.forEach(key => {
//         if (key.firstname === logged.username && key.pass === logged.password) {

//             let name = key.firstname + " "+key.lastname;
//             key.designation=desig;
//             key.mobile=mobile;
//             key.signemail=email;
//             key.website=link;
//             key.language=language;
//             let pimage = key.pimage;
//             key.address=add;
//             parseddetail=JSON.stringify(detail)
//             localStorage.setItem("users",parseddetail)
           
//         }
//     })

// }


