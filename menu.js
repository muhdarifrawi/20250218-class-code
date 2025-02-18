document.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM LOADED");

    // let calculateBtn = document.getElementById("calculate-btn");
    let calcualteForm = document.getElementById("calculator");
    calcualteForm.addEventListener("submit", (event) => {
        event.preventDefault();
        calculateTotal();
    });
});

function calculateTotal(){
    let totalCost = 0;

    let appetizer = document.getElementsByName("appetizer");
    let mains = document.getElementsByName("mains");
    let dessert = document.getElementsByName("dessert");

    for (i of appetizer){
        if(i.checked){
            if(i.value == "salad"){
                totalCost += 2.00
            }
            if(i.value == "potato-salad"){
                totalCost += 2.50
            }
            if(i.value == "chicken-salad"){
                totalCost += 3.00
            }
        }
    } 
    for (i of mains){
        if(i.checked){
            if(i.value == "chicken-chop"){
                totalCost += 2.00
            }
            if(i.value == "fish-chips"){
                totalCost += 2.50
            }
            if(i.value == "grilled-chicken"){
                totalCost += 3.00
            }
        }
    }
    for (i of dessert){
        if(i.checked){
            if(i.value == "oreo-cake"){
                totalCost += 2.00
            }
            if(i.value == "vanilla-ice"){
                totalCost += 2.50
            }
            if(i.value == "lava-cake"){
                totalCost += 3.00
            }
        }
    }
    // console.log(totalCost);
    calculateTax(totalCost);
}

function calculateTax(totalCost){
    const gst = 0.09;
    const serviceTax = 0.05;

    let gstCost = totalCost * gst;
    let serviceCost = totalCost * serviceTax;
    let finalCost = totalCost + gstCost + serviceCost;
    loadTotal(finalCost, gstCost, serviceCost);
}

function loadTotal (finalCost, gstCost, serviceCost) {
    document.body.innerHTML += `
    <div class="container mt-3">
    <div class="row">
        <div class="col-3">
            <p class="h5">
                <strong>Total</strong>
            </p>
        </div>
        <div class="col-3">
            <p>
                <strong>$${finalCost.toFixed(2)}</strong>
            </p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p>
                GST
            </p>
        </div>
        <div class="col-3">
            <p>
                $${gstCost.toFixed(2)}
            </p>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <p>
                Service Tax
            </p>
        </div>
        <div class="col-3">
            <p>
                $${serviceCost.toFixed(2)}
            </p>
        </div>
    </div>
    </div>
    `;
}
