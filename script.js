// Fizz Buzz test: Scrivi un programma che
// stampi i numeri da 1 a 100 ma per i multipli di
// 3 stampi “Fizz” al posto del numero e per i
// multipli di 5 stampi Buzz. Per i numeri che
// sono sia multipli di 3 che di 5 stampi
// FizzBuzz.

var stringa;

for (var i = 0; i < 100; i++) {

   if (i % 3 == 0 && i % 5 != 0){
    stringa = "Fizz";
  }  else if (i % 5 == 0 && i % 3 != 0) {
     stringa = "Buzz";
   } else if (i % 3 == 0 && i % 5 == 0){
     stringa = "FizzBuzz"
   }

    document.writeln(i + " " + stringa + "<br>");
    stringa = "";
}
