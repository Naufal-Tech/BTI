//Conditional and Looping

const Bintang = (n) => {
    let deretAngka = n+3;
    for(let i = 1; i<= n; i++){
        let result = ""
        for(let b = 1; b <= deretAngka; b++){
            if (b == i+1) result += "*"
            if (b+1 == i+2) result += "*"
            else result += b;
        }
        console.log(result)
    }
}

Bintang(5)
Bintang(4)