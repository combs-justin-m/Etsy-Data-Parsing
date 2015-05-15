console.log(items);

///////// Question 1 /////////
var allPrices = items.map(function(item){
  return item.price;
});
// Sum //
var sum = allPrices.reduce(function(a, b){
  return a + b;
});
// Average //
var avg = sum / allPrices.length;
// Answer //
var answer1 = avg.toFixed(2);

document.querySelector('#answer1').textContent = '$' + answer1;

///////// Question 2 /////////
var costBetween = items.filter(function(item){
  return (item.price > 14 && item.price < 18);
})

var $answer2 = document.querySelector('#answer2');
$answer2.textContent = '';

costBetween.forEach(function(list){
  $answer2.textContent += (list.title + '\n' + '\n');
});

///////// Question 3 /////////
var gbp = items.filter(function(item){
  return item.currency_code === "GBP";
});

document.querySelector('#answer3').textContent = gbp[0].title + ' costs £' + gbp[0].price;

///////// Question 4 /////////
var wood = items.filter(function(item){
  if (item.materials.indexOf('wood') >= 0)
    return item;
});

var $answer4 = document.querySelector('#answer4');
$answer4.textContent = '';

wood.forEach(function(list){
  $answer4.textContent += (list.title + '\n' + '\n');
});

///////// Question 5 /////////
var eightMats = items.filter(function(item){
  if (item.materials.length >= 8)
    return item;
});

var $answer5 = document.querySelector('#answer5');
$answer5.textContent = '';

eightMats.forEach(function(list){
  $answer5.textContent += '\n' + list.title + ' has ' + list.materials.length + ' materials.' + '\n' + '\n';
  list.materials.forEach(function(matList){
    $answer5.textContent += matList + '\n';
  });
});

// $answer5.appendChild(document.createTextNode(list.title + '\n'))


//   $answer5.textContent += (list.title + ' has ' + list.materials.length + ' materials ' + '\n') +
//     list.materials;
// });

