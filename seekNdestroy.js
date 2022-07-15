function destroyer(arr) {

    let list = [...arr]; 
    const args = Object.values(arguments).slice(1,);
    
    return list.filter(item => !args.includes(item));
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
