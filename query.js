function getQuery(event) {
    console.log(event);

    var fulll_name=document.getElementById("exampleInputName").value;
    var email=document.getElementById("exampleInputEmail1").value;
    var contact=document.getElementById("exampleInputContact").value;
    var address=document.getElementById("exampleInputAddress").value;
    var query=document.getElementById("exampleFormControlTextarea1").value;

    localStorage.setItem("Full Name",fulll_name);
    localStorage.setItem("Email",email);
    localStorage.setItem("Contact",contact);
    localStorage.setItem("Address",address);
    localStorage.setItem("Query",query);

    document.querySelectorAll("input").forEach(input=>input.value="");
    alert("Query sent successfully");
    
}