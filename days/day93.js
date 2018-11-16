/* codes for learning, not used on the pages */

/* rebuilt the mario pyramid from CS50's challenge, that was originally built in C. Guys from the slack community helped me with the code */
// That taught me about the 'padStart' and 'padEnd' methods
// padStart requires 2 parameters: the desired length and what must be included to fill the length. What is included comes first.
// padEnd what is included comes after

var height = 8;
for (let i = 0; i < height; i++) {
    var output = '#'.padEnd(i + 1, '#').padStart(height, ' ');
    var output2 = '#'.padStart(i + 1, '#');
    console.log(`${output}  ${output2}`);
}
