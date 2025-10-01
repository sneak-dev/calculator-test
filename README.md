# 🧮 Calculator Web Application

A modern, responsive calculator built with vanilla HTML, CSS, and JavaScript. This calculator provides a clean and intuitive interface for performing basic mathematical operations....

## ✨ Features

- **Basic Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (/)
- **Decimal Support**: Handle decimal numbers with proper validation
- **Real-time Display**: Shows both the calculation process and result
- **Smart Input Handling**: Prevents invalid operations and manages state properly
- **Clear Functions**: 
  - `CE` (Clear Entry) - Clears all data and resets calculator
  - `⌫` (Backspace) - Deletes the last entered character
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, dark theme with smooth animations

## 🚀 Live Demo

You can view the live calculator by opening `calculator.html` in your web browser.

## 📁 Project Structure

```
calculator/
├── calculator.html      # Main HTML structure
├── calculator.css       # Styling and responsive design
├── calculator.js        # Calculator logic and functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with flexbox, transitions, and responsive design.
- **Vanilla JavaScript**: Pure JavaScript without external dependencies.
- **Responsive Design**: Mobile-first approach with flexible layouts.

## 🎯 How It Works

### Core Functionality

The calculator uses a state-based approach to manage calculations:

1. **State Variables**:
   - `currentInput`: Currently entered number
   - `operator`: Selected mathematical operation
   - `previousInput`: Previously entered number
   - `shouldResetDisplay`: Flag to reset display after calculation

2. **Calculation Flow**:
   - Numbers are accumulated in `currentInput`
   - Operators are stored and previous input is saved
   - When `=` is pressed, `eval()` performs the calculation
   - Result becomes the new `currentInput` for chaining operations

3. **Input Validation**:
   - Prevents multiple decimal points
   - Handles operator precedence
   - Manages display reset after calculations

### Key Functions

- `calculation(inputValue)`: Main function handling all button inputs
- `clearAll()`: Resets calculator to initial state
- `backspace()`: Removes last entered character with smart state management

## 🎨 Design Features

- **Dark Theme**: Professional dark color scheme
- **Rounded Corners**: Modern 15px border radius on buttons
- **Box Shadows**: Subtle depth with `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3)`
- **Smooth Transitions**: 0.2s ease transitions on button interactions
- **Responsive Layout**: Adapts to different screen sizes
- **Visual Feedback**: Button press animations and hover effects

## 📱 Responsive Design

The calculator is fully responsive and works on:
- Desktop computers (300px max-width)
- Tablets (scales appropriately)
- Mobile phones (maintains usability)

## 🔧 Installation & Usage

1. **Clone or Download** the repository
2. **Open** `calculator.html` in any modern web browser
3. **Start calculating!**

No build process or dependencies required - it's ready to run immediately.

## 🎮 How to Use

1. **Enter Numbers**: Click number buttons (0-9) to input values
2. **Select Operation**: Click +, -, ×, or / for mathematical operations
3. **Calculate**: Press = to see the result
4. **Chain Operations**: Continue with more operations using the result
5. **Clear**: Use CE to clear everything or ⌫ to delete last character
6. **Decimals**: Use . button for decimal numbers

## 🔒 Security Note

This calculator uses JavaScript's `eval()` function for calculations. While this is fine for a simple calculator, in production applications, consider using a more secure mathematical expression parser.

## 🚀 Future Enhancements

Potential improvements for future versions:
- [ ] Keyboard support
- [ ] History of calculations
- [ ] Scientific calculator functions
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Theme switching
- [ ] Error handling for division by zero
- [ ] More advanced mathematical operations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ using vanilla web technologies.

---

**Happy Calculating! 🧮✨**
