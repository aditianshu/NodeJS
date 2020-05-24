const add = (x,y,z, callback) => {
    sum = x+y+z

    callback(sum)
}

add(1,4,5, (getSum)=> {
    console.log(getSum)
})