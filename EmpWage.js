const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}
function calculateWage(emphrs) {
    return emphrs * WAGE_PER_HOUR;
  }
  let totalEmpHours = 0;
  let totalWorkingDays = 0;
  let empDailyWageArray = new Array();
while (
  totalEmpHours <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    empDailyWageArray.push(calculateWage(empHours));
  }
  let empWage = calculateWage(totalEmpHours);
console.log(
  "Total working days : " +
    totalWorkingDays +
    " Total working hours : " +
    totalEmpHours +
    " Employee Wage : " +
    empWage
);

