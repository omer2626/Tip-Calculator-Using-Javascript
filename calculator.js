const billinputdiv = document.getElementById('billTotalInput')
const tipinputdiv = document.getElementById('tipInput')
const numberofpeoplediv = document.getElementById('numberOfPeople')
const perpersondiv = document.getElementById('perPersonTotal')


let numberofpeople = Number(numberofpeoplediv.innerText)


const calculateBill = ()=>{
    const bill = Number(billinputdiv.value)

    // console.log({bill})
     const tipPercentage = Number(tipinputdiv.value)/100
     // console.log({tipPercentage})
     const tipamount= bill * tipPercentage
     //console.log({tipamount})
     const total = tipamount + bill
      console.log(total)
    
    //console.log(numberofpeoplediv.innerText)
     const totalperson = total/Number(numberofpeoplediv.innerText)
     perpersondiv.innerText = `$${totalperson.toFixed(2)}`
}

const increasePeople =()=>{
    numberofpeoplediv.innerText = Number( numberofpeoplediv.innerText)+1
    calculateBill()

}

const decreasePeople =()=>{
    if((Number( numberofpeoplediv.innerText)-1) <= 0){
        return;
    }
    numberofpeoplediv.innerText = Number( numberofpeoplediv.innerText)-1
    calculateBill()

}