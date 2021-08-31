//Refactored code to write function for daily working hours
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
      case IS_FULL_TIME:
        return FULL_TIME_HOURS;
      default:
        return 0; 
        
}
let empHours = 0;
for (let days = 0; days < NUM_OF_WORKING_DAYS; days++) {
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHours += getWorkingHours(empCheck);
}
let empWage = empHours * WAGE_PER_HOUR;
console.log(
    "Total working hours : " + empHours + " For Employee Wage : " + empWage
  );
}
