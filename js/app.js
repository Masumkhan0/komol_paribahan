
let availableSeat = 36;
let selectedSeat = 0;
let totalPrice = 0;
let grandTotal =0;
const allSeat = document.getElementsByClassName('kbd');

for (const seat of allSeat) {

    seat.addEventListener('click', function(e){
        
        
        const remainSeat = document.getElementById('aseat');
        const noOfSeat = document.getElementById('seat');
        selectedSeat += 1;
        availableSeat -=1;
        if(selectedSeat > 4){
            seat.removeEventListener();
        }
        remainSeat.innerText = availableSeat;
        const price =document.getElementById('tprice');
        const grandTotalPrice =document.getElementById('gtotal');

        totalPrice += 550;
        grandTotal +=550;
        price.innerText = totalPrice;
        grandTotalPrice.innerText = grandTotal;
        noOfSeat.innerText = selectedSeat;
        e.target.classList.add('bg-[#1DD100]','text-white');
        // e.target.setAttribute("disabled", true);
        

        // seatPlan append
        const seatPlan = document.getElementById('tbody');
        const tr = document.createElement('tr');
        const seatNumber = e.target.innerText;
        const td1 =document.createElement('td');
        const td2 =document.createElement('td');
        const td3 =document.createElement('td');

        td1.innerText = seatNumber;
        td2.innerText = 'Economy';
        td3.innerText = 550;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        seatPlan.appendChild(tr);
        

        
    })
   
}

const couponButton = document.getElementById('apply-btn');
    couponButton.addEventListener('click', function(){
        const couponCode = document.getElementById('couponInput').value

        
        const grandTotalPrice =document.getElementById('gtotal');
        const discountSection =document.getElementById('coupon');

        if(couponCode ==='NEW15'){
            
            const discount15 = totalPrice * .15;
            grandTotalPrice.innerText = parseInt(totalPrice - discount15);
            discountSection.classList.add('hidden');

        }else if(couponCode ==='Couple 20'){
            const discount20 = totalPrice * .20;
            grandTotalPrice.innerText = parseInt(totalPrice - discount20);
            discountSection.classList.add('hidden');
        }else{
            alert('Invalid Coupon Code');

        }

        
    })
    
    



   
    

   

