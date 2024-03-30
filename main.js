var value = 0

function customTip() {
    console.log('Custom tip')

}

function setTip(percentage) {
    value = percentage
    calculate()
}

function calculate() {
    console.log(value)
    var bill = document.getElementById('bill').value
    var numpeople = document.getElementById('numpeople').value

    
    var total = document.getElementById('total')
    total.innerHTML = '$'+((bill*(0.01*value))).toFixed(2)


    var total2 = document.getElementById('total2')
    total2.innerHTML = '$'+((bill*(0.01*value))/numpeople).toFixed(2)
}