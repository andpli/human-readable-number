module.exports = function toReadable (number) {
  
    var names=new Array();
    names[0]='zero';
    names[1]='one';
    names[2]='two';
    names[3]='three';
    names[4]='four';
    names[5]='five';
    names[6]='six';
    names[7]='seven';
    names[8]='eight';
    names[9]='nine';
    names[10]='ten';
    names[11]='eleven';
    names[12]='twelve';
    names[13]='thirteen';
    names[14]='fourteen';
    names[15]='fifteen';
    names[16]='sixteen';
    names[17]='seventeen';
    names[18]='eighteen';
    names[19]='nineteen';
    names[20]='twenty';
    names[30]='thirty';
    names[40]='forty';
    names[50]='fifty';
    names[60]='sixty';
    names[70]='seventy';
    names[80]='eighty';
    names[90]='ninety';
    names[100]='one hundred';
    names[200]='two hundred';
    names[300]='three hundred';
    names[400]='four hundred';
    names[500]='five hundred';
    names[600]='six hundred';
    names[700]='seven hundred';
    names[800]='eight hundred';
    names[900]='nine hundred';

   if (number%100 == 0) {return names[number];}
   if (number%10 == 0 && number < 100) {return names[number];}
   
   if (number > 100) {
      return names[(Math.floor(number/100) * 100)] + ' ' +
        (number%10 == 0 ? names[number%100] : 
            (number - (Math.floor(number/100) * 100) <= 20 ?
              names[number - (Math.floor(number/100) * 100)]
              : (
                names[Math.floor((number - (Math.floor(number/100) * 100))/10)*10]
                + ' ' +  
               names[(number - (Math.floor(number/100) * 100))%10]
              )
            ))
            ;
                             
   }
   else {
    return (number  <= 20 ?
        names[number]
       : (
      names[Math.floor(Math.floor(number/10) * 10)]
      + ' ' +  
      names[(number - Math.floor(number/10) * 10)])
    );

   }
}
