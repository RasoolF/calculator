import { useState } from "react";
import "./components/pages/Button";
import Button from "./components/pages/Button";
import "./components/pages/ButtonBox";
import ButtonBox from "./components/pages/ButtonBox";
import "./components/pages/Header";
import Header from "./components/pages/Header";
import Screen from "./components/pages/Screen";
const keyValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
];
function App() {
  const [currentTheme, setCurrentTheme] = useState("theme1");
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  let cName = "";
  const themeHandler = (theme) => {
    setCurrentTheme(theme);
  };
  const clickHandler = (e) => {
    let value = e.target.innerHTML;

    switch (value) {
      case "DEL":
        if ( Number(calc.num) !== 0) {
          setCalc({
            ...calc,
            num: Number(calc.num.toString().slice(0, -1)),
          });
        }
        break;

      case "+":
      case "-":
      case "x":
      case "/":
        if (calc.num !== 0) setCalc({ sign: value, res: calc.num, num: 0 });
        else if (calc.res !== 0) setCalc({ ...calc, sign: value, num: 0 });
        break;
      case "=":
        console.log(calc);
        switch (calc.sign) {
          case "+":
            setCalc({
              sign: "",
              res: Number(calc.res) + Number(calc.num),
              num: 0,
            });

            break;
          case "-":
            setCalc({
              sign: "",
              res: parseInt(Number(calc.res) - Number(calc.num)),
              num: 0,
            });

            break;
          case "x":
            setCalc({
              sign: "",
              res: calc.res * calc.num,
              num: 0,
            });

            break;
          case "/":
            if (calc.num === 0 || calc.num === "0")
              setCalc({
                sign: "",
                res: "Cannot Divide By zero",
                num: 0,
              });
            else if (calc.num !== 0 || calc.num !== "0")
              setCalc({
                sign: "",
                res: Number(calc.res) / Number(calc.num),
                num: 0,
              });

            break;
        } //end of switch case "="

        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        setCalc({
          ...calc,
          num:
            calc.num === 0 && value === "0"
              ? "0"
              : calc.num % 1 === 0
              ? Number(calc.num + value)
              : calc.num + value,
        });
        console.log(calc);
        break;
      case ".":
        console.log(Number(calc.num));
        setCalc({
          ...calc,
          num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
        });
        break;
      case "RESET":
        setCalc({ sign: "", num: 0, res: 0 });
        break;
    }
  };
  return (
    <div className="container">
      <div className={"App"} data-color-mode={currentTheme}>
        <Header themeHandler={themeHandler} />
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {keyValues.flat().map((btn, index) => {
            switch (btn) {
              case "RESET":
                cName = "key reset";
                break;
              case "DEL":
                cName = "key del";
                break;
              case "=":
                cName = "key equals";
                break;
              default:
                cName = "key common";
                break;
            }

            return (
              <Button
                clickHandler={clickHandler}
                key={index}
                classname={cName}
                value={btn}
              />
            );
          })}
        </ButtonBox>
      </div>
    </div>
  );
}

export default App;
