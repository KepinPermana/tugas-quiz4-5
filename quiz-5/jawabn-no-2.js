function deretAngka(n){
    var hasilderetAngka = ''
    for(i=1;i<=n;i++){
      if(i%3 ===0){hasilderetAngka +='OK'}
      else if(i%4 ===0){hasilderetAngka +='Yes'}
      else if(i%3&4 ===0){hasilderetAngka +='OKYES'}
      else{hasilderetAngka += i+''}
    }
    return hasilderetAngka
  }
  console.log(deretAngka(10))
  console.log(deretAngka(2))
  console.log(deretAngka(3))