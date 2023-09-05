document.getElementById('deposite-btn').addEventListener('click',function () {
    const depositeElement = document.getElementById('deposite');
    const depositeValue = depositeElement.value;
    console.log(depositeValue);

    const totalElement = document.getElementById('total-deposite');
    depositeElement.value = ''
    if (isNaN(parseFloat(depositeValue))) {
        alert('you need to input a number');
        return;
    }
    var total =0;
    total = parseInt(totalElement.innerText)+parseInt(depositeValue);
    totalElement.innerText =total;
    depositeElement.value = '';

    const tBalance = document.getElementById('tbalance');

    const totalBalance = parseInt(tBalance.innerText)+ parseInt(depositeValue);
    tBalance.innerText = totalBalance;
})

const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click',function() {
    const withdrawElement = document.getElementById('withdraw');
    const withdrawValue = withdrawElement.value;
    //console.log(withdrawValue)
    withdrawElement.value = ''
    if (isNaN(parseFloat(withdrawValue))) {
        alert('you need to input a number');
        return;
    }
    withdrawElement.value = ''
    const a = document.getElementById('total-withdraw');

    var x = 0;
    var y =0;
    x = parseFloat(withdrawValue);
    y = parseFloat(a.innerText);
    if (x>y) {
        alert("you don't have sufficient balance!");
        return;
    }
    var wTotal=0;
    wTotal = parseFloat(a.innerText) + parseFloat(withdrawValue);
    a.innerText = wTotal;
    const tBalance = document.getElementById('tbalance');
    const withdrawAfterB = parseFloat(tBalance.innerText-parseFloat(withdrawValue));
    tBalance.innerText = withdrawAfterB;




})
