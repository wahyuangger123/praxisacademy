  function cafebar (name ,age ,money){

    if (name=="") {
        console.log("anda tidak boleh masuk");
    }else if (name != "" && age <=17 || money === 5000) {
    if (money >= 5000) {
        var sisa = money - 5000
        console.log(`anda bisa beli jus .dan sisa uang anda ${sisa}`)
    } else{ 
        console.log('uang anda belum cukup,silahkan pulang')
    }
}else if (name !="" && age >=17 || money ===300000) {

    if (money >= 300000) {
        var sisa = money - 300000
        console.log(`anda bisa minum anggur,dan sisa uang anda ${sisa}`);
        
    } else {
        console.log("Uang Anda Tidak Cukup, Mohon pulang dulu ya")     
    }
  }
}

  cafebar ("" ,15 ,5000);
  cafebar ("eko" ,16 ,80000);
  cafebar ("wahyu" ,18 ,300000);
  cafebar ("bayu" ,18 ,50000);

function bengkel (motor ,servie ,total){

  if (motor ==="") {
      console.log('anda boleh masuk tapi hanya cek');
      
  } else if (motor !='' && servie <=30 ||total === 80000 ) {
      if (total >= 80000) {
          var bayar = total - 5000
          console.log(`anda hanya bisa service saja ${bayar}`);
      } else {
          console.log('uang anda kurang mas')
      }
  } else if (motor !='' && servie >=30 || total === 81000) {
      if (total >= 81000) {
          var bayar = total - 30000
          console.log(`anda bisa servie dan ganti oli ${bayar}`);
      } else {
          console.log('uang anda kurang mas')
          
      }
  }
}

bengkel ('', 30, 4000);
bengkel ('beat', 29, 80000)
bengkel ('supra', 31, 81000)
bengkel ('vario' ,31 ,3000)
