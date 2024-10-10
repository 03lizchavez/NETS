function displayTab(button_id) {
    var dropdown_button = document.getElementById(String(button_id));
    var dropdown_element = document.getElementById(String(button_id)).parentNode;
    var children_elements = dropdown_element.children;
    if (dropdown_element.style.height == "7vh"){
        dropdown_element.style.height = "75vh";
        dropdown_button.style.fontWeight = "bold"
        for (var i = 1; i < children_elements.length; i++){
            children_elements[i].style.display = "block";
        };
    }
    else{
        dropdown_button.style.fontWeight = "normal"
        dropdown_element.style.height = "7vh";
        for (var i = 1; i < children_elements.length; i++){
            children_elements[i].style.display = "none";
        };
    };
};