const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    // const results = document.querySelector('#results'); 
    const results = document.getElementById('results'); // both method is good
    
    
    if(height === '' || height < 0 || isNaN(height)){ // height != NaN is a old technique
        results.innerHTML = `<span>please give a valid height</span>`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `<span>please give a valid weight</span>`
    } else {
        const bmi = (weight / (height * height / 10000)).toFixed(2)

        //show output
        const abc = (results.innerHTML = `<span>Your BMI is ${bmi} </span>`)

        if (bmi < 18.6) {
            results.innerHTML = `<span>${abc}<br>And you are under weight </span>` // one method
        } else if (bmi > 18.6 && bmi < 24.9){
            
            results.innerHTML = `<span>Your BMI is ${bmi} <br>And you are normal. </span>` // another method
        } else {
            results.innerHTML = `<span>Your BMI is ${bmi} <br>And you are overweight. </span>`
        }
        
    }
    
})