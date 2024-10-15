function fileClaim(){
    var fileClaim_panel = document.getElementById("file-claim-panel")
    var fileClaim_panel_form = document.getElementById("file-claim-form")
    if (fileClaim_panel.style.height == "22vh"){
        fileClaim_panel.style.height = "95vh";
        fileClaim_panel.style.width = "30vw";
        fileClaim_panel.style.border = "1px solid black";
        fileClaim_panel_form.style.display = "block";
    }
    else{
        fileClaim_panel.style.height = "22vh"
        fileClaim_panel.style.width = "11vh"
        fileClaim_panel.style.border = "none";
        fileClaim_panel_form.style.display = "none";
    }
}

function closeFileClaim(){
    var fileClaim_panel = document.getElementById("file-claim-panel")
    fileClaim_panel.style.height = "20vh"
    fileClaim_panel.style.width = "15vw"
}