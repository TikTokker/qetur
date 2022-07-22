function generateItems(items) {
  var itemsHtml = '';
  for (var i = 0; i < items.length; i++) {
    itemsHtml += '<li>' + items[i] + '</li>';
  }
  return itemsHtml;
}
