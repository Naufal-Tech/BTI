const kiriKanan = (n) => {
    let start = 1;
    for(let i=0; i < n.length; i++){
        for(let j = n.length-1; j > i; j--){
            let count = n[j] - n[i];
            start = Math.max(count, start);
        }
    }
    console.log(start);
}

let n = [10, 7, 5, 8, 11, 9, 1]
kiriKanan(n);