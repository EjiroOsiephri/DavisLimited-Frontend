###Calculator Project README

This calculator project is a simple web-based calculator implemented using HTML, CSS, and JavaScript. It provides basic arithmetic functionality such as addition, subtraction, multiplication, and division. Below is a brief explanation of the functionalities provided by the calculator:

Features:
Display Function (display(num))

This function is responsible for displaying the numbers and operators pressed by the user onto the calculator screen.
It takes a parameter num, which represents the number or operator pressed by the user.
The num is then appended to the existing content displayed on the calculator screen.
Clear Function (Clear())

This function clears the content displayed on the calculator screen.
When invoked, it sets the value of the output element (output-go) to an empty string, effectively clearing the screen.
Calculate Function (calculate())

This function evaluates the mathematical expression entered by the user.
It utilizes JavaScript's eval() function to evaluate the expression provided in the output.value.
If the expression is valid, the result is displayed on the calculator screen.
If an error occurs during evaluation (e.g., division by zero), it catches the error and displays an "invalid" alert.
Delete Function (DEL)

This function removes the last character from the content displayed on the calculator screen.
It slices the last character from the output.value and updates the screen accordingly.
Toggle Functionality

The "Toggle" button allows toggling a value between true and false.
When the button is clicked, it changes the value from true to false and vice versa.
Additionally, when the toggle value is false, it changes the class name of certain buttons to toggled-value.
Usage:
Adding Numbers:

Click on the numerical buttons (0-9) to input numbers.
Use the display function (display(num)) to show numbers on the screen.
Performing Operations:

Click on the operation buttons (+, -, \*, /) to perform addition, subtraction, multiplication, and division respectively.
Use the display function (display(num)) to display the chosen operation symbol on the screen.
Clearing the Screen:

Click on the "Clear" button to clear the content displayed on the calculator screen.
The clear function (Clear()) is invoked to reset the calculator screen.
Calculating Result:

Click on the "Equals" button (=) to evaluate the expression entered by the user.
The calculate function (calculate()) is called to compute the result, and it's displayed on the screen.
Deleting Characters:

Click on the "Delete" button to remove the last character entered.
The delete function (DEL) is triggered to delete the last character from the calculator screen.
Note:
This calculator supports basic arithmetic operations.
It may not handle complex expressions or scientific calculations.
Use caution when evaluating expressions, especially those involving parentheses or advanced mathematical functions.
Contributing:
Feel free to contribute to this project by suggesting improvements, fixing bugs, or adding new features.
Fork the repository, make your changes, and submit a pull request.
Enjoy using the calculator!
