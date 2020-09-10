let bushel = 0;
let inches = prompt("How many inches of rain fell?");

let star = "";
for (i = 1; i <= inches; i++) {
  i === star;
  star = star + "*";
}
console.log(`Rain: ${star}`);

if (inches < 10) {
  bushel = (50 * .8);
}else if (inches >= 20) {
   bushel = (50 * .9);
} else {
  bushel = 50;
}

let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "no") {
    console.log(`The yield should be ${bushel} bushels per acre.`);
} else if (fertilizer === "yes") {
  let type = prompt("Did you use premium or regular fertilizer?"); 
  if (type === "premium") {
    console.log(`The yield should be ${bushel * 1.15} bushels per acre.`);
} else if (type === "regular") {
     console.log(`The yield should be ${bushel * 1.1} bushels per acre`);
} 
}