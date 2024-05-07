function addItemToCart() {
    const boxShopProductName = document.getElementById('product-name').textContent;
    const boxShopPrice = parseFloat(document.querySelector('.price').textContent);
    const boxDescription = document.querySelector('.itemlistdescription').textContent
    const boxShopImg = document.getElementById("product-img").src;

    
    const newItem = document.createElement('div');
    newItem.classList.add('itemshopingbasket');

    const BoxImg = document.createElement('image')
    BoxImg.classList.add('shopitemimg')
    BoxImg.src = boxShopImg;
    newItem.appendChild(BoxImg)


    const itemName = document.createElement('h4');
    itemName.classList.add('itemheadingtext');
    itemName.textContent = boxShopProductName;
    newItem.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('itemlistdescription');
    itemDescription.textContent = boxDescription;
    newItem.appendChild(itemDescription);

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('productlistitemprice ');
    itemPrice.textContent = boxShopPrice.toFixed(2);
    newItem.appendChild(itemPrice);

    const incBtn = document.createElement('button');
    incBtn.classList.add('incbtn');
    incBtn.textContent = '+';
    newItem.appendChild(incBtn);

    const decBtn = document.createElement('button');
    decBtn.classList.add('decbtn');
    decBtn.textContent = '-';
    newItem.appendChild(decBtn);

    // Append new item to shopping list
    const shoppingList = document.querySelector('.shopinglistheader');
    shoppingList.appendChild(newItem);

    // Add corresponding value (quantity) for the new item
    values.push(1);

    // Update totals after adding the new item
    updateTotals();
}