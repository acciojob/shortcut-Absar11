function shortcut(s1, s2) {
  if(s1.length === 0 || s2.length === 0){
	  return "";
  }
  
	let a1 = s1[0];
	let a2 = s2[0];

	return a1+a2;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
