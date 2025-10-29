let arr="abracadabra";

let freq = new Array(26).fill(0);

    for (let i = 0; i < arr.length; i++){
        let index = arr.charCodeAt(i) - 97;
        freq[index]++;
    }
    console.log(freq);

