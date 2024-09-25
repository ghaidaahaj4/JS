function addField() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Enter value';  
    const form = document.getElementById('dynamicForm');
    form.insertBefore(newInput, form.querySelector('button[type="button"]'));
  }
  
  function submitForm() {
    const inputs = document.querySelectorAll('#dynamicForm input');
    let allFilled = true;
    let message = '';
    inputs.forEach((input, index) => {
      if (input.value.trim() === '') {
        allFilled = false; 
      }
      message += input.value + (index < inputs.length - 1 ? ', ' : ''); 
    });
  
    if (!allFilled) {
      alert('Please fill all fields.');
    } else {
      alert('Submitted values: ' + message);
    }
  }
  