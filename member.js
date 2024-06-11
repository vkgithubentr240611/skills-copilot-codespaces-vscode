function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberSkills = document.getElementById("memberSkills");

    memberSkills.innerHTML = "";

    if (memberValue == "josh") {
        memberSkills.innerHTML = "HTML, CSS, JavaScript, PHP";
    } else if (memberValue == "jane") {
        memberSkills.innerHTML = "HTML, CSS, JavaScript, PHP, MySQL";
    } else if (memberValue == "john") {
        memberSkills.innerHTML = "HTML, CSS, JavaScript, PHP, MySQL, Python";
    } else {
        memberSkills.innerHTML = "No skills available";
    }
}