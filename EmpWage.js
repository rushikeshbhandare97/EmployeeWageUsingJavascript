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
let empDailyWageMap = new Map();
while (
  totalEmpHours <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHours = getWorkingHours(empCheck);
  totalEmpHours += empHours;
  empDailyWageArray.push(calculateWage(empHours));
  empDailyWageMap.set(totalWorkingDays, calculateWage(empHours));
}
//7a
console.log(empDailyWageMap);
//a

let totalempWage = 0;
function sum(dailyWage) {
  totalempWage += dailyWage;
}

//7a - using foreach
empDailyWageArray.forEach(sum);
console.log(
  "Total days " +
    totalWorkingDays +
    " Total hours " +
    totalEmpHours +
    " Employee Wage " +
    totalempWage
);

//7a - using reduce
//8a - using reduce
function totalWage(totalWage, dailyWage) {
  return (totalWage += dailyWage);
}
//total wage using map
console.log(
  "Total days " +
    totalWorkingDays +
    " Total hours " +
    totalEmpHours +
    " Employee Wage " +
    empDailyWageArray.reduce(totalWage, 0)
  "Total wage using map: " +
    Array.from(empDailyWageMap.values()).reduce(totalWage, 0)
);
//7b-show day along daily wage using array map helper  function.
let dailyCntr = 0;
function mapWithDay(dailyWage) {
  dailyCntr++;
  return dailyCntr + " = " + dailyWage;
}
let mapWithDailyWage = empDailyWageArray.map(mapWithDay);

//8b- show day along daily wage

/*
console.log("Daily Wage Map");
console.log(mapWithDailyWage);
console.log(empDailyWageMap);
*/

//7c - Show days when full time wage of 160 is earned.
//8c - Show days full time wage
function fullTimeWage(dailyWage) {
  return dailyWage.includes("160");
  return dailyWage == 160;
}
let fullDayWageArr = mapWithDailyWage.filter(fullTimeWage);
let fullDayWageArr = Array.from(empDailyWageMap.values()).filter(fullTimeWage);
console.log("Daily Wage Filter With Full Time");
console.log(fullDayWageArr);
//7d - Find first occurence of full time wage using find dunction
//8d - Find first occurence of full time wage
function findFullTimeWage(dailyWage) {
  return dailyWage.includes("160");
  return dailyWage == 160;
}
console.log(
  "First time wage was earned on day : " +
    mapWithDailyWage.find(findFullTimeWage)
);
//7e - check if every element of full time wage is truely holding full time wage
let firstDay =
  Array.from(empDailyWageMap.values()).findIndex(findFullTimeWage) + 1;
console.log("First time employee worked full time: " + firstDay);
//7e - check every full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) {
  return dailyWage.includes("160");
  return dailyWage == 160;
}
console.log(
  "Check all element have full time wage : " +
    fullDayWageArr.every(isAllFullTimeWage)
);
//7f - check if there is any part time wage
//8f - check if there is any part time wage
function isAnypartTime(dailyWage) {
  return dailyWage.includes("80");
  return dailyWage == 80;
}
console.log(
  "Check any part time wage: " + mapWithDailyWage.some(isAnypartTime)
  "Check any part time wage: " +
    Array.from(empDailyWageMap.values()).some(isAnypartTime)
);

//7g - Find number of days the employee worked
//8g - Find number of days employee worked
function totalDaysWorked(numberOfDays, dailyWage) {
  if (dailyWage > 0) {
    return numberOfDays + 1;
  }
  return numberOfDays;
}
console.log(
  "Number of days employee worked: " +
    empDailyWageArray.reduce(totalDaysWorked, 0)
    Array.from(empDailyWageMap.values()).reduce(totalDaysWorked, 0)
);
