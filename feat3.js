function generateItems(items) {
  let itemsHtml = '';
  for (var i = 0; i < items.length; i++) {
    itemsHtml += '<li>' + items[i] + '</li>';
  }
  console.log('work!')
  return itemsHtml;
}
