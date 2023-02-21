function update() {
    alert("hii");
    let nme = document.getElementById("fname").value;
    let desig = document.getElementById("desig").value;
    let add = document.getElementById("add").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let link = document.getElementById("link").value;
    let language = document.getElementById("language").value;
    let pimg = document.getElementById("pimg").value;

    document.getElementById("sname").replaceWith(nme);
    document.getElementById("sdesig").replaceWith(desig);
    document.getElementById("sadd").replaceWith(add);
    document.getElementById("smobile").replaceWith(mobile);
    document.getElementById("smail").replaceWith(email);
    document.getElementById("slink").replaceWith(link);
    document.getElementById("slang").replaceWith(language);
    document.getElementById("simage").replaceWith(pimg);
}

