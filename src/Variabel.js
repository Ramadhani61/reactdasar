import React from 'react'

//deklarasi variabel harga dengan const 
//tidak dapat diubah (global scope)
// const harga =3000;

//deklarasi variabel harga dengan var 
//dapat diubah (tidak global scope)
// var harga =20000;
// if(true){
//     var harga=1;
// }


//deklarasi variabel harga dengan let
//dapat diubah (global scope) gak bisa
//diakses dengan scope percabangan kurung-wal
let harga =20000;
if(true){
    let harga=1;
}
 const Variabel = () => {
    return (
        <div>
            <h2>harga = {harga}</h2>
        </div>
    )
}
export default Variabel