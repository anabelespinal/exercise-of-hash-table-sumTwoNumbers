

/*
Ahora haremos un ejercicio practico, recordar que el uso de hashtables nos da la posibilidad de poder tener acceso a un elemento en tiempo
constante o(1)
haremos un problema que ya conocemos "TWOSUM"
You have two integer arrays, a and b, and an integer target value v.
Determine whether there is a pair of numbers, where one number is
taken from a and the other from b, that can be added together to
get a sum of v. Return true if such a pair exists, otherwise return false.
Example
For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.
*/

/*
  Explanation :
  Usaremos un hash para guardar las diferencias entre el target y todos los valores de uno de los arreglos.
  Al hacer esto tendriamos los valores que deberian estar en el otro arreglo para conseguir la suma requerida.
  Por lo tanto recorremos el segundo arreglo y preguntamos si nuestro HASH tiene ese elemento, de tenerlo abremos encontrado
  unb a y un b que satisface a + b = v. Por lo tanto retornaremos "true" y el programa concluye.
  En el caso que no encontremos ningun valor a y b que sumados den v, retornaremos false.
*/
function MyHash( obj ){

 this.size = 0;
 this.items = {};

  // esta linea de codigo construye tu Hash Table con un objeto que le pasas, si no le pasas nada, construye el hash
 // con 0 elementos.
  if ( obj )
   for ( var item in obj ){
     if ( obj.hasOwnProperty( item ) ){
        this.items[ item ] = obj[ item ];
        this.size++;
     }
   }


 this.set = function( key, value ){
       var resp;
       if ( this.hasItem( key ) ){
         resp = this.items[key];
       }else{
         this.size++;
       }
      this.items[ key ] = value;
      return resp;
    }


 this.hasItem = function( value ){
   return this.items.hasOwnProperty( value );
 }


 this.get= function( key ){
   return this.hasItem( key ) ? this.items[ key ] : false;
 }

 this.removeItem = function(key){
   if ( this.hasItem( key ) ){
     //si tiene el elemento , ENTONCES LO ELIMINO.
     var resp = this.items[ key ];
     this.size--;
     delete this.items[key];
     return resp;
   }
   //en caso que no tenga el elmento puedo retornar false;
   return false;

 }

 this.clear = function(){
   this.items = {};
   this.size = 0;
 }


}

var myhash = new MyHash();


function sumOfTwo(a, b, v) {
    var hash = new MyHash();
    for ( var i = 0; i < a.length; i++ ){
        hash.set(v - a[i], true );
    }

    for ( var i = 0; i < b.length; i++ ){
        if ( hash.get( b[i] ) ) return true;
    }
    return false;
}

sumOfTwo( [1, 2, 3] ,[10, 20, 30, 40] , 42 );
sumOfTwo( [1, 2, 3] ,[10, 20, 30, 40] , 50 );