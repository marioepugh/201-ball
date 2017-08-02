'use strict';

var userName = [];

function handleClick(e) {
  if (e.target.id === 'nameSubmit')
};

localStorage.ProductImage = JSON.stringify(ProductImage.all);

if(localStorage.length) {
  console.log('There is local storage!');
  ProductImage.all = JSON.parse(localStorage.ProductImage);
} else {
  for(var i = 0; i < ProductImage.allNames.length; i++) {
    new ProductImage(ProductImage.allNames[i]);
  }
  console.log('There is no local storage!');
};

function handleClick(e) {
  ProductImage.totalClicks += 1;

  if (e.target.id === 'imageSection') {
    return alert('Click on an image!');
  }

  for(var i = 0; i < ProductImage.all.length; i++) {
    if(e.target.alt === ProductImage.all[i].name) {
      ProductImage.all[i].votes += 1;
    }
  }
  if(ProductImage.totalClicks === 25) {
    ProductImage.container.removeEventListener('click', handleClick);

    updateChartArrays();
    return drawChart();
    return displayList();
  }
//AFTER EACH CLICK THIS STORES THAT DATA
  localStorage.ProductImage = JSON.stringify(ProductImage.all);

  displayProductImages();
};
