const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  console.log(typeof height)
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.querySelector('#results');
  // console.log(height);
  // console.log(weight);
  // const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  // results.innerHTML=`<span>${bmi}</span>`\
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  console.log(typeof height)
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.querySelector('#results');
  const res=document.querySelector('#res')
  // console.log(height);
  // console.log(weight);
  // const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  // results.innerHTML=`<span>${bmi}</span>`\
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
      res.innerHTML=`<p>Under Weight</p>`
    }else if(bmi>18.6 && bmi<24.9){
      res.innerHTML=`<p>Normal Range</p>`
    }else{
      res.innerHTML=`<p>Over Weight</p>`
    }

  }
});
