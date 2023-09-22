function splitDate(dateString: string) {
  // Split the date string using '/' as the delimiter
  const dateParts = dateString.split("/");

  if (dateParts.length === 3) {
    // Extract day, month, and year
    const day = parseInt(dateParts[0], 10);
    const month: string = dateParts[1];
    const year = parseInt(dateParts[2], 10);

    // Check if the parts are valid
    if (!isNaN(day) && month && !isNaN(year)) {
      return { day, month, year };
    }
  }

  // Return null if the input format is not valid
  return null;
}

//Change date format
function formatDate(date: Date): string {
  const day: string | number = String(date.getDate()).padStart(2, "0");
  const month: string = String(date.getMonth() + 1).padStart(2, "0");
  const year: number | string = date.getFullYear();

  return `${day}/${month}/${year}`;
}

//Check if date has passed
function hasDatePassed(targetDate: string) {
  // Parse the targetDate string to a Date object
  const targetDateObj = new Date(targetDate);

  // Get the current date
  const currentDate = new Date();

  // Compare targetDate with currentDate
  return targetDateObj < currentDate;
}

export { splitDate, hasDatePassed, formatDate };
