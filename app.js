function getValue(num) {
    var input = document.getElementById("input");
    input.value += num;
      console.log(num)
}

function totalValue() {
    var input = document.getElementById("input");
      console.log(eval(input.value));
    input.value = eval(input.value);
  }

  function allClear() {
    var input = document.getElementById("input");
    console.log(input);
    input.value = "";
  }

