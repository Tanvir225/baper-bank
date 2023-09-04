document.getElementById('deposite-btn').addEventListener('click',function () {
    const depositeElement = document.getElementById('deposite');
    const depositeValue = depositeElement.value;
    console.log(depositeValue);

    const totalElement = document.getElementById('total-deposite');
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
    const a = document.getElementById('total-withdraw');
    var wTotal=0;
    wTotal = parseInt(a.innerText) + parseInt(withdrawValue);
    a.innerText = wTotal;
    const tBalance = document.getElementById('tbalance');
    const withdrawAfterB = parseInt(tBalance.innerText-parseInt(withdrawValue));
    tBalance.innerText = withdrawAfterB;




})
