function sideChecker (num1, num2, num3) {
  var sides = [num1, num2, num3].sort();

  if (isNaN(sides[2])) {
      return "nothing of value";
    } else if (sides[2] > (sides[0] + sides[1])) {
      return "a thing that's not a triangle";
    } else if (num1 === num2 && num2 === num3 && num3 === num1) {
      return "an equilateral triangle";
    } else if ((num1 === num2) || (num2 === num3) || (num3 === num1)) {
      return "an isosceles triangle";
    } else if ((num1 !== num2) && (num2 !== num3) && (num3 !== num1)) {
      return "a scalene triangle";
    }
}

$(function() {
  $("#sides").change(function() {
    var sideOne   = parseInt($("input[name|='side-one']").val());
    var sideTwo   = parseInt($("input[name|='side-two']").val());
    var sideThree = parseInt($("input[name|='side-three']").val());
    // console.log("Change occurred! Sides are: " + [sideOne, sideTwo, sideThree])
    var result = sideChecker(sideOne, sideTwo, sideThree);

    $(".output").text("The numbers you have selected create " + result + "!");
  });
});

// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
