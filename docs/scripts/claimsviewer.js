

function viewClaim(claim_number_id){
    var progress_graph = document.getElementById("claim_progress_svg");
    var claim_number = claim_number_id.split("-");
    var steps = document.getElementsByClassName("claim_progress_graphic");
    
    var selected_claim_node = document.getElementById(claim_number_id).parentNode;
    
    for (var i = 0; i < steps.length; i++){
        steps[i].classList.add("claim_progress_graphic_unavailable")
    }
    
    switch (document.getElementById(claim_number_id).getAttribute("data-progress")){
        case "1":
            steps[0].classList.remove("claim_progress_graphic_unavailable");
            break;
        case "2":
            steps[0].classList.remove("claim_progress_graphic_unavailable");
            steps[1].classList.remove("claim_progress_graphic_unavailable");
            break;
        case "3":
            steps[0].classList.remove("claim_progress_graphic_unavailable");
            steps[1].classList.remove("claim_progress_graphic_unavailable");
            steps[2].classList.remove("claim_progress_graphic_unavailable");
            break;
        case "4a":
            steps[0].classList.remove("claim_progress_graphic_unavailable");
            steps[1].classList.remove("claim_progress_graphic_unavailable");
            steps[2].classList.remove("claim_progress_graphic_unavailable");
            steps[3].classList.remove("claim_progress_graphic_unavailable");
            progress_graph.getElementById("claim-step-4-text").firstChild.innerHTML = "Finalized investigation!"
            
            break;
        case "4b":
            steps[0].classList.remove("claim_progress_graphic_unavailable");
            steps[1].classList.remove("claim_progress_graphic_unavailable");
            steps[2].classList.remove("claim_progress_graphic_unavailable");
            steps[3].classList.remove("claim_progress_graphic_unavailable");
            progress_graph.getElementById("claim-step-4-text").firstChild.innerHTML = "Final payout adjusted."
            break;    
            }

    deselectClaimSteps();
    progress_graph.setAttribute('visibility','visible');
    progress_graph.getElementById("claim-extra-info").firstChild.innerHTML = "Claim #" + claim_number[1];
    
/*    progress_graph.getElementById("claim-number-text").lastChild.innerHTML = document.getElementById(claim_number_id).getAttribute("data-filing-date")*/
    
    progress_graph.getElementById("claim-extra-info").lastChild.innerHTML = "Agent: " + document.getElementById(claim_number_id).getAttribute("data-agent") + ", " + document.getElementById(claim_number_id).getAttribute("data-agent-pn");
    
    progress_graph.getElementById("claim-step-2-text").firstChild.innerHTML = document.getElementById(claim_number_id).getAttribute("data-agent") + " is  reviewing your claim.";
    progress_graph.getElementById("claim-step-3-text").firstChild.innerHTML = document.getElementById(claim_number_id).getAttribute("data-agent") + " has processed your claim.";
    progress_graph.getElementById("claim-step-1-text").firstChild.innerHTML = "Your claim was filed.";
    
    
    progress_graph.getElementById("claim-step-4-text").lastChild.innerHTML = "Payout amount: " + document.getElementById(claim_number_id).getAttribute("data-payout");

}