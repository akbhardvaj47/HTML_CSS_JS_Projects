// Function to calculate age based on the date of birth entered by the user
function calculateAge() {
  // Get the date of birth input value from the user
  const dobInput = document.getElementById('dob').value;

  // Check if the user has entered a valid date of birth
  if (dobInput) {
      // Create a Date object from the entered date of birth
      const birthDate = new Date(dobInput);

      // Create a Date object for the current date and time
      const currentDate = new Date();

      // Calculate the difference in years between the current year and the year of birth
      let age = currentDate.getFullYear() - birthDate.getFullYear();

      // Calculate the difference in months between the current month and the birth month
      const monthDifference = currentDate.getMonth() - birthDate.getMonth();

      // Calculate the difference in days
      let dayDifference = currentDate.getDate() - birthDate.getDate();

      // Adjust the age if the birthday hasn't occurred yet this year
      if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
          // Decrease the age by one if the birthday hasn't occurred yet this year
          age--;
      }

      // Adjust months and days
      let months = monthDifference;
      let days = dayDifference;

      // Handle month overflow (if current month is before the birth month)
      if (months < 0) {
          months += 12; // Add 12 months to account for the year difference
      }

      // Handle day overflow (if the current day is before the birth day)
      if (dayDifference < 0) {
          // Get the previous month to calculate how many days to subtract
          const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
          days = prevMonth.getDate() + dayDifference; // Adjust days by the number of days in the previous month
      }

      // Display the calculated age, months, and days on the webpage
      document.getElementById('age').innerText = `You are ${age} years, ${months} months, and ${days} days old.`;
  } else {
      // If no date of birth is entered, show a message to prompt the user
      document.getElementById('age').innerText = 'Please enter a valid date of birth.';
  }
}
