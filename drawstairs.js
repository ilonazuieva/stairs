function drawStairs(n) {
    let str = '';

    if(n > 1) {
        for (let i = 0; i < n; i++){
            str+=' '.repeat(i) + 'I\n';
        }
        return str.trim();
    } else {
        return 'I';
    }
}

//https://www.codewars.com/kata/5b4e779c578c6a898e0005c5