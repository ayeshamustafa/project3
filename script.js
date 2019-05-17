

function GetRequestCM(){
  var resultElement = document.getElementById('resultCM1');
  var convToCM = document.getElementById('inch1').value;  
  resultElement.innerHTML = '';

  axios.get('https://statenweb.mockable.io/conversions/')
      params: {
      centimetersInInch: convToCM
    }
  })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
}

function GetRequestInch(){
  var resultElement = document.getElementById('resultInch1');
  var convToInch = document.getElementById('cm1').value;
  resultElement.innerHTML = '';

  axios.get('https://statenweb.mockable.io/conversions/', {
    params: {
      inchesInCm: convToInch
    }
  })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
}

function generateSuccessHTMLOutput(response) {
  return  '<h5>Result:</h5>' +
          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}
