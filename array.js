

function merge() {
  let one = document.getElementById("arr1").value;
  let firsttArray = one.split(",");
  let two = document.getElementById("arr2").value;
  let secondArray = two.split(",");
  let thirdArray = firsttArray.concat(secondArray);
  
  function sortNumber(a,b) {
		return a - b;
	}

  thirdArray.sort(sortNumber)

  document.getElementById("arr3").innerHTML = thirdArray;
}
