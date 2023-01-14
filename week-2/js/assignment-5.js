function twoSum(nums, target) {
  let ans = [];
  let diff;
  for(let i=0; i< nums.length; i++){  
    if(nums[i]<target){                     //確認陣列數字比目標數字小，否則跳過
      diff = target - nums[i];              //計算差值
      for(let j=i+1; j< nums.length; j++){ 
        if(nums[j] === diff){               //確認剩餘陣列數字與差值一致，是則記錄下此組數字
          ans.push(`[${i}, ${j}]`);         //輸出答案（可有多組答案）
        }
      }
    }
  }
  if(ans == 0){
    return 'There is no solution.';
  } else {
    return `Solutions are ${ans}.`;
  }
}
  
console.log(twoSum([2, 7, 11, 15], 9));

// console.log(twoSum([2, 7, 11, 15], 14));
// console.log(twoSum([2, 7, 11, 15, 3, 6], 9));

/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because:

nums[0] + nums[1] is 9
*/