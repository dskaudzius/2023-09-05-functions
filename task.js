// 1 uzduotis

function humanToDogYears(humanAge) {
    if (humanAge > 0) {
      let dogYears = humanAge * 7;
      let output = `${humanAge} žmogaus metai yra ${dogYears} šuns metai.`;
      return output;
    } 
  
    return 'Blogai įvestas amžius';
  }
  
  console.log(humanToDogYears(5));
  
  // 2 uzduotis
  
  function bookDays(booksPerYear) {
    if (!booksPerYear || booksPerYear < 0) {
      return 'Blogai įvestas skaičius';
    }
  
    let daysPerBook = (365 / booksPerYear);
    let output = `Norint perskaityti ${booksPerYear} knygų per metus, vienai knygai perskaityti reikes ${daysPerBook} dienų.`
    return output;
  }
  
  console.log(bookDays(10));
  
  // 3 uzduotis
  function daysToWeeks(days) {
    let weeks = (days / 7);
    let output = `${days} dienos yra ${weeks} savaitės.`;
    return output;
  }
  
  console.log(daysToWeeks(35));
  
  // 4 uzduotis
  
  function daysToYears(days) {
    let years = (days / 365).toFixed(2);
    let output = `${days} dienos yra ${years} metai.`;
    return output;
  }
  
  console.log(daysToYears(365));
  
  // 5 uzduotis

  function yearsToHours(years) {
    let hours = years * 24 * 365;
    let output = `${years} metai yra ${hours} valandų.`;
    return output;
  }
  
  console.log(yearsToHours(5));
  
  // 6 uzduotis

  function monthsToHours(months) {
    let hours = Math.round(months * 30.45 * 24);
    let output = `${months} mėnesiai yra ${hours} valandų.`;
    return output;
  }
  
  console.log(monthsToHours(3));
  
  // 7 uzduotis

  function monthsToMinutes(months) {
    let minutes = Math.round(months * 31 * 24 * 60);
    let output = `${months} mėnesiai yra ${minutes} minučių.`;
    return output;
  }
  
  console.log(monthsToMinutes(2));