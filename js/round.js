 //@Gray Zhang的"给跪版"，不支持负数
 function round(x) {
     return parseInt(x + 0.5);
 }


 //  //@Gray Zhang的"给跪加深版"，支持正负数
 //  function round(x) {
 //      return ~~(x > 0 ? (x + 0.5) : (x - 0.5));
 //  }


 //  //@强子~Developer的"请收下我的膝盖版"
 //  function round(x) {
 //      return (x > 0 ? x + 0.5 : x - 0.5) | 0;
 //  }

 console.log(round(0.4))