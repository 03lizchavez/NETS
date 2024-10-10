function viewClaim(claim_number_id){
    var progress_graph = document.getElementById("claim_progress_svg");
    var claim_number = claim_number_id.split("-");
    var selected_claim_node = document.getElementById(claim_number_id).parentNode;
    
    deselectClaimSteps()
    progress_graph.setAttribute('visibility','visible');
    progress_graph.getElementById("claim-number-text").innerHTML = "Claim #" + claim_number[1];
    progress_graph.getElementById("claim-step2-text").lastChild.innerHTML = selected_claim_node.parentNode.childNodes[5].innerHTML + " is reviewing your claim";
    progress_graph.getElementById("claim-step1-text").lastChild.innerHTML = "Your claim was filed on" + selected_claim_node.parentNode.childNodes[3].innerHTML;
}