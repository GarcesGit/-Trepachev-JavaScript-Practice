


//Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
//Сделайте калькулятор, который будет находить площадь круга и длину окружности.
//Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
<input id="input1" input value="length">
<input id="input2" input value="width">
<input id="input3" style="border: 3px solid green;" input value="rectangle square">
<input id="input4" style="border: 3px solid green;" input value="perimeter"> <br><br><br>
<input id="input5" input value="radius">
<input id="input6" style="border: 3px solid green;" input value="circle square">
<input id="input61" style="border: 3px solid green;" input value="circle length"> <br><br><br>
<input id="input7" input value="1 side">
<input id="input8" input value="2 side">
<input id="input9" input value="3 side">
<input id="input10" style="border: 3px solid green;" input value="triangle square">

<script>
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let input5 = document.querySelector('#input5');
let input6 = document.querySelector('#input6');
let input61 = document.querySelector('#input61');
let input7 = document.querySelector('#input7');
let input8 = document.querySelector('#input8');
let input9 = document.querySelector('#input9');
let input10 = document.querySelector('#input10');

input1.addEventListener('focus', function(){
  (input1.value = ''); });
input2.addEventListener('focus', function(){
  (input2.value = ''); });
input2.addEventListener('blur', function() {
input3.value = +input1.value * +input2.value;
input4.value = (+input1.value + +input2.value)*2;
});

input5.addEventListener('focus', function(){
  (input5.value = '');  });
input5.addEventListener('blur', function(){
  input6.value = (Number(input5.value**2)) *3.14;
  input61.value = (Number(input5.value*2)) *3.14 ;
});

input7.addEventListener('focus', function(){
  (input7.value = '');  });
input8.addEventListener('focus', function(){
  (input8.value = '');  });
input9.addEventListener('focus', function(){
  (input9.value = '');  });
input9.addEventListener('blur', function(){
  let pp = (Number(input7.value)+Number(input8.value)+Number(input9.value))/2;
  input10.value = Math.sqrt(pp*(pp-Number(input7.value))*(pp-Number(input8.value))*(pp-Number(input9.value)));
});
</script>
