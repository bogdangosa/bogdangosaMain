// initalize variables
var newDescriptionsArray = new Array();
var newUsersArray = new Array();
var newPriorityArray = new Array();
var cont = 0;


function SwitchMode(clicked_element){

    // Switch selected buttons
    if(document.getElementById(clicked_element).classList[1] != 'selected'){
        document.getElementById('addIssueBtn').classList.toggle('selected');
        document.getElementById('curentIssuesBtn').classList.toggle('selected');
    }

    //change visible container
    if(document.getElementById('addIssueBtn').classList[1] == 'selected'){
        document.getElementById('add_issue_form').style.display = 'block';
        document.getElementById('curent_issues').style.display = 'none';
    }
    else {
        document.getElementById('add_issue_form').style.display = 'none';
        document.getElementById('curent_issues').style.display = 'block';
        CreateCurentIssuesList();
    }

}

function AddIssue(){
    // get the data from the user
    var NewDescription = document.getElementById('description').value; 
    var NewUser = document.getElementById('assign_to').value; 
    var NewPriority = document.getElementById('priority').value; 

    // reset the form
    document.getElementById('description').value = '';
    document.getElementById('assign_to').value = '';
    document.getElementById('priority').value = 'Low';

    //put the data into arrays
    newDescriptionsArray.push(NewDescription);
    newUsersArray.push(NewUser);
    newPriorityArray.push(NewPriority);


}

function CreateCurentIssuesList(){
    var Container = document.getElementById("curent_issues");

    for(var i=0; i<newDescriptionsArray.length;i++){
        
        var issueContainer = document.createElement('div');
        var DescriptionLabel = document.createElement('p');
        var AssignLabel = document.createElement('span');
        var PriorityLabel = document.createElement('span');
        var issueDescription = document.createElement('p');
        var issueUser = document.createElement('p');
        var issuePriority = document.createElement('p');
        var Line = document.createElement('hr');
        var DeleteBtn = document.createElement('p');

        issueContainer.setAttribute('id',"issue"+ (++cont));

        AssignLabel.textContent = "Assiged to:  "; 
        PriorityLabel.textContent = "Priority:  ";
        DescriptionLabel.textContent = "Description:";
        AssignLabel.setAttribute('class',"stand_out");
        PriorityLabel.setAttribute('class',"stand_out");
        DescriptionLabel.setAttribute('class',"stand_out");
        
        DeleteBtn.textContent="Delete"
        DeleteBtn.setAttribute('class',"delete_button");
        DeleteBtn.setAttribute('onclick',"DeleteIssue("+cont+")");

        issueUser.appendChild(AssignLabel);
        issueUser.appendChild(document.createTextNode(newUsersArray[i]));

        issuePriority.appendChild(PriorityLabel);
        issuePriority.appendChild(document.createTextNode(newPriorityArray[i]));
        
        issueDescription.textContent = newDescriptionsArray[i];

        issueContainer.appendChild(issueUser);
        issueContainer.appendChild(issuePriority);
        issueContainer.appendChild(DescriptionLabel);
        issueContainer.appendChild(issueDescription);
        issueContainer.appendChild(Line);
        issueContainer.appendChild(DeleteBtn);

        issueContainer.setAttribute('class',"issueContainer");

        Container.appendChild(issueContainer);


    }

    newDescriptionsArray = new Array();
    newUsersArray = new Array();
    newPriorityArray = new Array();
}

function DeleteIssue(i){
    var Container = document.getElementById("curent_issues");
    var curentIssue = document.getElementById("issue"+i);
    Container.removeChild(curentIssue);
}
