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
  let totalEmpHours = 0;
let totalWorkingDays = 0;

while (
  totalEmpHours <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {totalEmpHours += getWorkingHours(empCheck);
    totalWorkingDays++;
  }
  let empWage = totalEmpHours * WAGE_PER_HOUR;
console.log(  "Total working days : " +
totalWorkingDays +
" Total working hours : " +
totalEmpHours +
" Employee Wage : " +
empWage
);
}
