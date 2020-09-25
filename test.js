const data_tempalte = {
  device_id: 1234,
  temperature: 'range(20,35)',
  time_stamp: 'date(dd.MM.YYYY, h:mm:ss a)',
  temperature2: 'range(20,85)',
};

const range_re = /range\([-.0-9]+,[-.0-9]+\)/gm;

parseTemplate(data_tempalte);

function parseTemplate(template) {
  console.log(template);
  const string = JSON.stringify(template);
  console.log(string.replace(range_re, replacer));
}

function replacer(match, p1, p2, p3, offset, string) {
  console.log(match);
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return 'moin';
}
