function profile() {
    alert("hii");
    let first=document.getElementById("fname").value;
    let last=document.getElementById("lname").value;
    let dob=document.getElementById("dob").value;
    let eid=document.getElementById("eid").value;
    let signemail=document.getElementById("email").value;
    let pimage=document.getElementById("pimage").value;
    let pass=document.getElementById("pass").value;

    document.getElementById("sname").replaceWith(first+last);
    document.getElementById("sdesig").replaceWith(desig);
    document.getElementById("sadd").replaceWith(add);
    document.getElementById("smobile").replaceWith(mobile);
    document.getElementById("smail").replaceWith(signemail);
    document.getElementById("slink").replaceWith(link);
    document.getElementById("slang").replaceWith(language);
    document.getElementById("simage").replaceWith(pimg);
}

