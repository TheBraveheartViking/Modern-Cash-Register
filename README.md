# Braveheart Viking's Modern Cash Register

This project is a simple yet functional cash register that simulates real-world scenarios such as calculating the total cost of a purchase, checking the cash received from the customer, and giving the appropriate amount of change. The design and implementation are done using HTML, CSS, and JavaScript.

## Features

- **Price Display**: Shows the total cost of the item.
- **Cash Received Input**: Allows the user to input the cash amount received from the customer.
- **Change Calculation**: Automatically calculates the correct change to be given back to the customer based on the cash received and the price.
- **Drawer Display**: Displays the amount of money available in each denomination in the cash drawer.
- **Dynamic UI Updates**: Updates the cash in the drawer and reflects any changes in real-time as transactions occur.
- **Number Pad Interface**: Includes a number pad for input, adding a realistic touch to the user interaction.

## How It Works

- The price of the item is fixed at `$3.26`.
- The cash drawer (`cid`) holds a predefined amount of money in various denominations such as pennies, nickels, dimes, quarters, ones, fives, tens, twenties, and hundreds.
- When the user enters the amount of cash received and presses the "Purchase" button, the system checks if enough cash has been provided, calculates the change due, and updates the cash drawer accordingly.
- If the exact amount of money is provided, no change is due, and the transaction is completed.
- If insufficient funds are provided or the cash drawer doesn’t have enough money to give the correct change, an error message will be displayed.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the layout and design of the cash register interface.
- **JavaScript**: For implementing the functionality of the cash register, including change calculations and UI updates.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the cash register interface.
- `styles.css`: The stylesheet used to style the cash register, making it visually appealing and user-friendly.
- `script.js`: The JavaScript file responsible for all the logic related to the cash register operations such as calculating change, updating the display, and managing cash transactions.

## How to Use

1. Open the `index.html` file in any modern browser.
2. Enter the amount of cash received in the input field.
3. Press the "Purchase" button to simulate a transaction.
4. The cash register will calculate and display the change due and update the cash drawer with the remaining amounts.

## Future Improvements

- None


