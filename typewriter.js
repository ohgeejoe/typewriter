const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {

//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000); // <= 1s delay to make it noticeable. Can dial it down later.
// }

let timeInterval = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeInterval);
  timeInterval += 200;
}
//ASYNCHRONUS!!!! this runs before the loop is done
//console.log("\n");

//runs after timeInterval variable has occured.
setTimeout(() => {
  console.log("\n");
}, timeInterval);
