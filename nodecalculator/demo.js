const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 4000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FinalCalculator</title>
</head>

<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #222;
    }

    .calculator {
        background: #333;
        padding: 20px;
        border-radius: 10px;
    }

    #display {
        width: 96%;
        height: 50px;
        font-size: 1.5em;
        margin-bottom: 10px;
        padding: 5px;
    }

    button {
        height: 60px;
        width: 65px;
        margin-bottom: 10px;
        margin-left: 4px;
        font-size: 1.2em;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    button:hover {
        background: #555;
        color: white;
        transition: all 0.3s ease;
    }

    .equal {
        width: 140px;
    }
</style>
<body>
    <div class="calculator">
        <input type="text" id="display" placeholder="0">
        <br>
        <button onclick="clearDisplay()">AC</button>
        <button onclick="clearsingle()">DEL</button>
        <button onclick="calculateSqrt()">sqr</button>
        <button onclick="printvalue('/')">/</button>
        <button onclick="calculatetri('sin')">sin</button>
        <br>
        <button onclick="printvalue('7')">7</button>
        <button onclick="printvalue('8')">8</button>
        <button onclick="printvalue('9')">9</button>
        <button onclick="printvalue('*')">*</button>
        <button onclick="calculatetri('cos')">cos</button>
        <br>
        <button onclick="printvalue('4')">4</button>
        <button onclick="printvalue('5')">5</button>
        <button onclick="printvalue('6')">6</button>
        <button onclick="printvalue('-')">-</button>
        <button onclick="calculatetri('tan')">tan</button>
        <br>
        <button onclick="printvalue('1')">1</button>
        <button onclick="printvalue('2')">2</button>
        <button onclick="printvalue('3')">3</button>
        <button onclick="printvalue('+')">+</button>
        <button onclick="calculatePow()">^</button>
        <br>
        <button onclick="printvalue('(')">(</button>
        <button onclick="printvalue(')')">)</button>
        <button onclick="printvalue('0')">0</button>
        <button class="equal" onclick="calculate()">=</button>
    </div>

    <script>
        let display = document.getElementById("display");

        function printvalue(value) {
            display.value += value;
        }

        function calculate() {
            try {
                let expr = display.value;

                if (expr.includes("^")) {
                    let parts = expr.split("^");
                    let base = parseFloat(parts[0]);
                    let exp = parseFloat(parts[1]);
                    display.value = Math.pow(base, exp);
                    return;
                }

                let parts = expr.match(/(\\d+|\\+|\\-|\\*|\\/)/g);
                if (!parts){
                    console.log("Error");
                }

                for (let i = 0; i < parts.length; i++) {
                    if (parts[i] === "*") {
                        parts[i - 1] = Number(parts[i - 1]) * Number(parts[i + 1]);
                        parts.splice(i, 2);
                        i--;
                    }
                    else if (parts[i] === "/") {
                        parts[i - 1] = Number(parts[i - 1]) / Number(parts[i + 1]);
                        parts.splice(i, 2);
                        i--;
                    }
                }

                let result = Number(parts[0]);
                for (let i = 1; i < parts.length; i += 2) {
                    if (parts[i] === "+") result += Number(parts[i + 1]);
                    if (parts[i] === "-") result -= Number(parts[i + 1]);
                }

                display.value = result;
            } catch {
                display.value = "Error";
            }
        }

        function calculatetri(func) {
            let value = parseFloat(display.value);
            let radian = value * Math.PI / 180;
            try {
                if (func === "sin") display.value = Math.sin(radian);
                if (func === "cos") display.value = Math.cos(radian);
                if (func === "tan") display.value = Math.tan(radian);
            } catch {
                display.value = "Error";
            }
        }

        function calculateSqrt() {
            try {
                let value = parseFloat(display.value);
                display.value = Math.sqrt(value);
            } catch {
                display.value = "Error";
            }
        }

        function calculatePow() {
            display.value += "^";
        }

        function clearDisplay() {
            display.value = "";
        }

        function clearsingle() {
            display.value = display.value.slice(0, -1);
        }
    </script>
</body>
</html>`);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`);
});
