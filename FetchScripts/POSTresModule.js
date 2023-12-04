

const Button1 = document.getElementById("RectangleStep1");

//const { response } = require('express'); 

let Button = [];

for (let i = 1; i<=5; i++) {
    Button[i] = document.getElementById(`RectangleStep${i}`);
}

const command = [ 
function () {
    let date = {
        FirstName: FirstNameTextField.value,
        SecondName: SecondNameTextField.value,
        ThirddName: TreeNameTextField.value,
        Group: Group.value,
        Direction: Direction.value,
        PracticeSort: PracticeSort.value,
        PracticeType: PracticeType.value,
        FirstTime: FirstTime.value,
        LastTime: LastTime.value};
    fetch("/PersonInfoForm", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })
},

undefined, 

function () {
    let date = {
        FactoryNameTextField: FactoryNameTextField.value,
        RegionNameTextField: RegionNameTextField.value,
        DistrictNameTextField: DistrictNameTextField.value,
        LocalityNameTextField: LocalityNameTextField.value,
        StreetTextField: StreetTextField.value,
        buildingNumberTextField: buildingNumberTextField.value,
        MailPostNumberTextField: MailPostNumberTextField.value,
    };
    fetch("/FactoryInfoForm", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })
},

function () {
    let date = {
        WorkLeaderFirstNameTextField: WorkLeaderFirstNameTextField.value,
        WorkLeaderSecondNameTextField: WorkLeaderSecondNameTextField.value,
        WorkLeaderTreeNameTextField: WorkLeaderTreeNameTextField.value,
        CafedralLeaderFirstNameTextField: CafedralLeaderFirstNameTextField.value,
        CafedralLeaderSecondNameTextField: CafedralLeaderSecondNameTextField.value,
        CafedralLeaderTreeNameTextField: CafedralLeaderTreeNameTextField.value 
    };
    fetch("/LeaderInfoForm", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })
},

undefined
];



let LastCommand = 1;

for (let i = 1; i<6; ++i){
    (function(index) {
        try {
        Button[index].addEventListener('click', function() {
            command[LastCommand-1]();
            LastCommand = index;
        })
        }
        catch {
        }

    }(i));
}








