// sort last character

function last(x){
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1))
  }
  
  
  console.log(last("Mic Whit Conor Sam")); // ["Mic", "Sam", "Conor", "Whit"]
  
  