const dis = document.querySelector("#disp")

const div = document.querySelector("#sdiv")
const mul = document.querySelector("#smul")
const add = document.querySelector("#sadd")
const min = document.querySelector("#smin")

const eqa = document.querySelector("#seqa")

const bt1 = document.querySelector("#n1")
const bt2 = document.querySelector("#n2")
const bt3 = document.querySelector("#n3")
const bt4 = document.querySelector("#n4")
const bt5 = document.querySelector("#n5")
const bt6 = document.querySelector("#n6")
const bt7 = document.querySelector("#n7")
const bt8 = document.querySelector("#n8")
const bt9 = document.querySelector("#n9")
const bt0 = document.querySelector("#n0")

const reset = document.querySelector('#reset')

let firstnum = ''
let secondnum = ''
let thesign = ''


reset.addEventListener('click', () => {
    dis.value = ''
    firstnum = ''
    secondnum = ''
    thesign = ''
})


div.addEventListener('click', () => {
    dis.value = `${firstnum + " " + div.value}`
    thesign = div.value
    console.log(dis.value)
})

mul.addEventListener('click', () => {
    dis.value = `${firstnum + " " + mul.value}`
    thesign = mul.value
    console.log(dis.value)
})

add.addEventListener('click', () => {
    dis.value = `${firstnum + " " + add.value}`
    thesign = add.value
    console.log(dis.value)
})

min.addEventListener('click', () => {
    dis.value = `${firstnum + " " + min.value}`
    thesign = min.value
    console.log(dis.value)
})





eqa.addEventListener('click', () => {

    console.log(eqa.value)

    if (thesign === div.value) {
        dis.value = `${firstnum / secondnum}`
        console.log(dis.value)
    }
    else if (thesign === mul.value) {
        dis.value = `${firstnum * secondnum}`
        console.log(dis.value)
    }
    else if (thesign === min.value) {
        dis.value = `${firstnum - secondnum}`
        console.log(dis.value)
    }
    else if (thesign === add.value) {
        dis.value = `${parseInt(firstnum) + parseInt(secondnum)}`
        console.log(dis.value)
    }
    else {
        dis.value = `wrong`
        console.log(dis.value)
    }

    firstnum = ''
    secondnum = ''
    thesign = ''

})




bt1.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt1.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt1.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt2.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt2.value

        dis.value = firstnum
        console.log(dis.value)
    } else {
        secondnum = secondnum + bt2.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt3.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt3.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt3.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt4.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt4.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt4.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt5.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt5.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt5.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt6.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt6.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt6.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt7.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt7.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt7.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt8.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt8.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt8.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt9.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt9.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt9.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

bt0.addEventListener('click', () => {
    if (thesign === '') {
        firstnum = firstnum + bt0.value

        dis.value = firstnum
        console.log(dis.value)
    }
    else {
        secondnum = secondnum + bt0.value

        dis.value = `${firstnum + " " + thesign + " " + secondnum}`
        console.log(dis.value)
    }
})

