function school(nm){
    this.name=nm;

};

function employee(nm,sname){
    this.name=nm;
    this.school=sname;
}

function teacher(nm,sname,desig){
    this.name=nm;
    this.school=sname;
    this.designation=desig;
}

school.prototype.getname=function(){
    return this.name;
}

const obj=new school("Cambridge public school");
console.log(obj.getname());
document.getElementById("main").innerHTML="The name of school is: "+"obj.getname()";