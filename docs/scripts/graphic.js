function showText(element_id) {
    var selected = document.getElementById(element_id);
    
    
    var text_of_steps = document.getElementsByClassName("graphic_text");
    for (var i = 0; i < text_of_steps.length; i++){
        text_of_steps[i].setAttribute("visibility", "hidden");
    };
    
    
    var graphics = document.getElementsByClassName("circle_graphic")
    for (var i = 0; i < graphics.length; i++){
        graphics[i].classList.remove("circle_select");;
    };
    
    
    selected.firstElementChild.classList.add("circle_select");
    document.getElementById(String(element_id + "-text")).setAttribute("visibility", "visible");
};