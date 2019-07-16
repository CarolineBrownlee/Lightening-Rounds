// Console.log the GOT characters that died using a function.
// -hint you will need a for loop or a foreach.

const got = ["Theon Greyjoy", "The Night King", "Varys", "Jaime Lannister", "Cersei Lannister", "John Snow"]



const isNotAlive = (array) => {
    array.forEach(player => {
        if (player !== "John Snow") {
            console.log(player)
        }
        
    });

}
isNotAlive(got)


