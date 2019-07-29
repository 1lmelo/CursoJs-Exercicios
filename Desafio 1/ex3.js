function temHabilidade(skills) {

    var resultado = skills.indexOf("Javascript");

    if(resultado >= 0){
        console.log("true")
    }else{
        console.log("false")
    }
    
   }
   var skills = ["Javascript", "ReactJS", "React Native"];
   temHabilidade(skills); // true ou false
   