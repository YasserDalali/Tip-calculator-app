var value = 0
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.customTip').style.display = 'none';
});



function toggleon() {
    document.querySelector('.customTip').style.display = 'block'
}

function toggleoff() {
    document.querySelector('.customTip').style.display = 'none';
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
    var total2 = document.getElementById('total2')

    if (numpeople == "" || numpeople == 0) {
        total2.innerHTML = '$NaN'
    }
    else {    
        
    total.innerHTML = '$'+((bill*(0.01*value))).toFixed(2)

    total2.innerHTML = '$'+((bill*(0.01*value))/numpeople).toFixed(2)}

}

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    var total = document.getElementById('total')
    var total2 = document.getElementById('total2')
    total.innerHTML = '$'+(0).toFixed(2)
    total2.innerHTML = '$'+(0).toFixed(2)
})