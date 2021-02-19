module.exports = function toReadable (number) {
    let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '', 'eleven', 'twelve', 
             'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let ten = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 
                    'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    
    let newString = '';
    
    let hundredNum = Math.floor(number / 100);
    let tenToTwenty = number % 100;
    let tenNum = Math.floor((number % 100) / 10 );
    let oneNum = number % 10;
    
    console.log(tenToTwenty);
    
    if (hundred[hundredNum] === '' && ten[tenNum] === '' && one[oneNum] === '') {
        newString = 'zero';
     } else if (tenToTwenty > 10 && tenToTwenty < 20) {
      if (hundred[hundredNum] === '') {
        newString = one[tenToTwenty];
      } else {
        newString = hundred[hundredNum] + ' ' + one[tenToTwenty];
      }    
    } else if (hundred[hundredNum] === '') {
      if (one[oneNum] === '') {
        newString = ten[tenNum];
      } else if (ten[tenNum] === ''){
        newString = one[oneNum];
      } else {
        newString = ten[tenNum] + ' ' + one[oneNum];
      }
    } else if (ten[tenNum] === '') {
      if (one[oneNum] === '') {
        newString = hundred[hundredNum];
      } else {
        newString = hundred[hundredNum] + ' ' + one[oneNum];
      }    
    } else if (one[oneNum] === '') {    
        newString = hundred[hundredNum] + ' ' + ten[tenNum];           
    } else {
      newString = hundred[hundredNum] + ' ' + ten[tenNum] + ' ' + one[oneNum];
    }
  
  
  return newString;

}
