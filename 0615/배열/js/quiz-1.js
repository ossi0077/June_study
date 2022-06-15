		var numbers = [2, 4, 6, 8, 10];

		addSum(numbers);

		function addSum(arr){
			let sum = 0;
			for(i=0; i<arr.length ; i++){
				sum += arr[i];
			}
			arr.push(sum);
		}

		showArray(numbers);

		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}