function max(numbers) {
    var ans = 0;
    for(let i=0; i<numbers.length; i++){
      if (ans < numbers[i]){
        ans = numbers[i];
      }
    }
    return ans;
  }
  console.log(max([1, 2, 4, 5])); // expected output: 5 
  console.log(max([5, 2, 7, 1, 6])); // expected output: 7