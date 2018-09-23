class Sorter {
  constructor() {
  }

  add(element) {
    let i =0;
    for (let key in this) {
      i ++;  
    }
    this[i]= element;
  }


  at(index) {
    // your implementation
  }

  get length() {
    let count = 0;
    for (var key in this) {
      count++;
    }
    return count;
  }

  toArray() {
    let arr = [];
    for (var key in this) {
      arr.push(this[key]);
    }
    return arr;
  }

  sort(indices) {
    let arrSort= [];
    for(let i =0; i< indices.length; i++) {
      arrSort[i] = this[indices[i]];
    } console.log(arrSort);
    
    var n = arrSort.length;
    for (let i = 0; i < n-1; i++)
     { for (let j = 0; j < n-1-i; j++)
      { if (arrSort[j+1] < arrSort[j])
       { let t = arrSort[j+1]; arrSort[j+1] = arrSort[j]; arrSort[j] = t;}
     }
   } console.log(arrSort);                    
   for(let i =0; i< indices.length; i++) {
    this[indices[i]] = arrSort[i];

  } 
}

setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;