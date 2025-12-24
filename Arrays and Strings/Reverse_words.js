let s="Love is programming";
let words = s.split(" ");
    let reversed = "";

    for (let i = words.length - 1; i >= 0; i--) {
        reversed += words[i];
        if (i !== 0) reversed += " ";
    }
    console.log(reversed);
    