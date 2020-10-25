// initalize variables
var newDescriptionsArray = new Array();
var newUsersArray = new Array();
var newPriorityArray = new Array();


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
    document.getElementById('priority').value = 'low';

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
        var issueDescription = document.createElement('p');
        var issueUser = document.createElement('p');
        var issuePriority = document.createElement('p');
        var Line = document.createElement('hr');

        issueContainer.setAttribute('id',"issue"+Container.childElementCount);

        issueUser.textContent = `Asign: ${newUsersArray[i]} `;
        issuePriority.textContent = `Priority: ${newPriorityArray[i]} `;
        DescriptionLabel.textContent = "Description:"
        issueDescription.textContent = newDescriptionsArray[i];

    
        issueContainer.appendChild(issueUser);
        issueContainer.appendChild(issuePriority);
        issueContainer.appendChild(DescriptionLabel);
        issueContainer.appendChild(issueDescription);
        issueContainer.appendChild(Line);

        issueContainer.setAttribute('class',"issueContainer");

        Container.appendChild(issueContainer);

    }

    newDescriptionsArray = new Array();
    newUsersArray = new Array();
    newPriorityArray = new Array();
}

