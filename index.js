document.getElementById("sci").style.display = "none"
document.getElementById("cma").style.display = "none"

function course(){
    var course = document.getElementById("course").value

    if(course == "science"){
        document.getElementById("sci").style.display = "block"
        document.getElementById("cma").style.display = "none"
    }
    else if(course == "art"){
        document.getElementById("cma").style.display = "block"
        document.getElementById("sci").style.display = "none"
    }
    else{
        document.getElementById("sci").style.display = "none"
        document.getElementById("cma").style.display = "none"
    }
}