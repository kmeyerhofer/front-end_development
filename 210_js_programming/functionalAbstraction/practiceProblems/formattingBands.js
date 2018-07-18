function processBands(data) {
  return data.forEach(function (band) {
    band['name'] = band['name'].split(' ').map(function (title) {
      var splitTitle = title.split('');
      splitTitle[0] = splitTitle[0].toUpperCase();
      return splitTitle.join('');
    }).join(' ');
    band['country'] = 'Canada';
    band['name'] = band.name.replace('.', '');
  });
}


var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

processBands(bands);
