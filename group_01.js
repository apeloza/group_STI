//This program will take in employee data and transform it into information about their bonus to their salary

//Here the employee data is initialized in arrays.
var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];

//Here the employee data arrays are put into another array.
var employees = [atticus, jem, boo, scout];

//This function will produce the new salary data, put it into an array, and return that array.
function getBonus(employee) {
    var bonusPercent = 0;
    var newArray = [];

//The new array takes in the employee's name and puts it into the first index.
    newArray[0] = employee[0];

/*The function checks the employee's rating which is located in the
final index of the array, and assigns them a bonus percent based on that rating.*/
    switch (employee[3]) {
        case 0:
        case 1:
        case 2:
            break;
        case 3:
            bonusPercent = 4;
            break;
        case 4:
            bonusPercent = 6;
            break;
        case 5:
            bonusPercent = 10;
            break;
        default:
            alert('Invalid rating for employee ' + employee[0]);
    }

    /*The employee's ID # is checked to see if they are a long-time employee.
    If they are, they are given a bonus of 5 additional percent.*/
    if (employee[1].length === 4) {
        bonusPercent += 5;
    }

    /*If the employee's salary is larger than 65,000$ a year, they are penalized
    for one percent of their bonus*/
    if (employee[2] > 65000) {
        bonusPercent--;
    }

    /*An employee can only have a 13% maximum bonus, so this resets the bonus
    if necessary.*/
    if (bonusPercent > 13) {
        bonusPercent = 13;
    }

    /*This makes sure that the employee cannot end up with a negative bonus,
    as a failsafe.*/
    if (bonusPercent < 0) {
        bonusPercent = 0;
    }

/*The other values in the new array are set in order: their bonus percent, their
adjusted salary, and their bonus in a cash amount.*/
    newArray[1] = bonusPercent;
    newArray[2] = (Math.round(employee[2] * ((bonusPercent / 100) + 1) * 100)) / 100;
    newArray[3] = Math.round(employee[2] * (bonusPercent / 100));
    return newArray;
}

//A new array is initialized to store the results of the function above.
var outputArray = [];

/*This for loop runs through the employee list and produces the new arrays,
which are added to the DOM.*/
for (var i = 0; i < employees.length; i++) {
    outputArray = getBonus(employees[i]);
    document.getElementById('table').innerHTML += '<tr> <td> ' + outputArray[0] +
    '</td> <td> ' + outputArray[1] + '</td> <td> ' + outputArray[2] + '</td><td> ' + outputArray[3] + '</td> </tr>';
}
