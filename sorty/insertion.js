const tablica = []

for(let i = 0; i < 100; i++){
    tablica.push(Math.floor(Math.random() * 100));
}

//function InsertionSort(array) {
  //  for (let i = 1; i < array.length; i++) {
    //    let j = i - 1;
      //  while (j >= 0) {
        //    if (array[j+1] <array[j]) {
          //  let temp = array [i];
            //array[i] = array[j];
            //array[j] = temp;
        //}else{
          //  break;
        //}
        //j--;
    //}
  //  
//}

function bubbleSort(tablica){
    for (let i = 0; i < tablica.length - 1; i++){
        for (let j = 0; j < tablica.length - i - 1; j++){
            if (tablica[j] > tablica[j + 1]) {
                let temp = tablica[j];
                tablica[j] = tablica[j + 1];
                tablica[j + 1] = temp;
            }
        }
    }
}
bubbleSort(tablica);
console.log(tablica);