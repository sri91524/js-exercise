// Exercise: "Movie Ticket Pricing App"

// Objective:
// Learners will create a simple app that calculates the ticket price for a movie based on the customer's age and time of the show. This exercise will help them practice using variables, if-else, elseif statements, and logical/comparison operators.

// Scenario
// Imagine you're designing a basic movie ticketing system. The app calculates the ticket price based on these rules:

// 1. Age-based pricing:
//    - Children (0–12 years): $5
//    - Teenagers (13–17 years): $7
//    - Adults (18–59 years): $10
//    - Seniors (60+ years): $6

// 2. Showtime discount:
//    - Morning shows (before 12 PM): 10% off all ticket prices.

// Steps for Learners:
// 1. Ask the user to input:
//    - Their age.
//    - The showtime (in 24-hour format, e.g., 9 for 9 AM, 14 for 2 PM).

// 2. Use `if`, `elseif`, and `else` statements to determine the base ticket price based on age.

// 3. Apply a 10% discount if the showtime is before 12 PM.

// 4. Output the final ticket price.

// Starter Code Template

// Step 1: Define variables
let age = parseInt(prompt("Enter your age:")); // Get age from user
let showtime = parseInt(prompt("Enter the showtime (in 24-hour format):")); // Get showtime

// Step 2: Initialize ticket price variable
let ticketPrice = 0;

let discount = 10/100;
let discountPrice = 0;
let flag = true;

//  Format pricing

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// Todo: Step 3: Determine base ticket price using if-else statements

if(Number.isInteger(age))
{
    if(age >= 0 && age <= 12)
    {
        ticketPrice = 5;
    }
    else if(age <= 17)
    {
        ticketPrice = 7;
    }
    else if(age <= 59)
    {
        ticketPrice = 10;
    }
    else if(age <= 120)
    {
        ticketPrice = 6;
    }
    else
    {
        flag = false;        
    }
}
else
{    
    flag = false;
}

if(!flag)
{
    console.log("Invalid age entered");
}

// Todo: Step 4: Apply discount for morning shows
if(flag && Number.isInteger(showtime) && showtime <= 24)
{    
    if(showtime < 12)
        {    
            discountPrice = ticketPrice * discount;    
            ticketPrice -= discountPrice;
        }
        
        ticketPrice = USDollar.format(ticketPrice);
        console.log(`Your ticket price will be: ${ticketPrice}`);
}
else
{
    console.log("Invalid entry.")
}

// Todo: Step 5: Output the final price

// Expected Behavior:
// - For age 10 and showtime 9: The output should be `$4.50`.
// - For age 25 and showtime 14: The output should be `$10.00`.
// - For age 65 and showtime 11: The output should be `$5.40`.
// - For invalid age: Display "Invalid age entered."
