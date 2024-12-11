
async function randomQuotesGenerator(){

    const response = await fetch('Quotes.csv');
    const csvText = await response.text();

    const rows = csvText.trim().split("\n").map(row => row.split(';'));
    const headers = rows.shift();
    
    const random_number = Math.floor(Math.random()*rows.length);
    console.log(rows[random_number])

    const quote = rows[random_number][0] || "Unknown Quote";
    const author = rows[random_number][1] || "Unknown Author";
    const genre = rows[random_number][2] || "Unkown Genre";
    console.log(quote)
    console.log(author)
    console.log(genre)

    console.log(document.getElementById("quote")); // Should not be null
    console.log(document.getElementById("author")); // Should not be null
    console.log(document.getElementById("genre")); // Should not be null
    document.getElementById('quote').innerHTML = `"${quote}"`;
    document.getElementById('author').innerHTML = `"--${author}"`;
    document.getElementById('genre').innerHTML = `"Genre: ${genre}"`;
     
}