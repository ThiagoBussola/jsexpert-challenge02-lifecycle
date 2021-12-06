class WeirdMathService {
  getWeirdBooleanNumberMath(boolean, number) {
    return boolean + number;
  }

  getWeirdStringBooleanMath(string, boolean) {
    return string + boolean;
  }

  getWeirdStringBooleanMath2(string, boolean) {
    return string - boolean;
  }

  getWeirdStringNumberMath(string, number) {
    // TODO: implement function in order to get the expected result in WeirdMathService.test.js
    return string - number;
  }
}

module.exports = WeirdMathService;
