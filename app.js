let calculation = localStorage.getItem('calculation') || '';

      // Display the calculation when the page first loads.
      displayCalculation();
      

      function updateCalculation (value) {
        const button = document.getElementById('buttons');

        button.addEventListener('click', ()=> {
          updateCalculation('');
        })
        
        calculation += value;
        console.log(calculation);
        displayCalculation();

        localStorage.setItem('calculation', calculation);
      }


      function displayCalculation() {
        document.getElementById('showCalculation').innerHTML = calculation;
      }

      function equalsCalculation() {
        calculation = eval(calculation)
      }

      function clearCalculation () {
        calculation = '';
      }


  