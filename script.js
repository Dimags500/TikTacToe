

let x = 'x';
let o = 'o';
var cell = [];
let counterX = [];
let counterO = [];

document.querySelectorAll('.btns').forEach(item => {
    item.addEventListener('click', event => {
      if(item.innerHTML == ' ')
      {
          if(cell.length == 0)
          {
            item.innerHTML = x;
            var elem = document.getElementById(item.id) ;
            var backColor = elem.style.backgroundColor = "cyan";
            cell.push( { id :item.id ,value: item.innerHTML ,color : backColor }) ;
            document.getElementById('info').innerHTML = 'X has started !'
            counterX.push(item.id+0);

          }
          else
                check1(item);
                check2();
            
      
      }
    })
  })

  function check1(item)
  {

    let last = cell.slice(-1).pop();
      
    if(last.value  == o )
    {
        item.innerHTML = x;
        var elem = document.getElementById(item.id) ;
        var backColor = elem.style.backgroundColor = "cyan";
        cell.push( { id :item.id ,value: item.innerHTML ,color : backColor }) ;
        document.getElementById('info').innerHTML = 'next move is O'

        counterX.push(item.id+0);
    }
    if(last.value == x )
    {
        item.innerHTML = o;
        var elem = document.getElementById(item.id) ;
        var backColor = elem.style.backgroundColor = "orange";
        cell.push( { id :item.id ,value: item.innerHTML ,color : backColor }) ;
        document.getElementById('info').innerHTML = 'next move is X'

        counterO.push(item.id);
    }


  }

  function check2(){

    if(counterX.length >= 3)
    {

        // for (a = 0; a < counterX.length; a++)
        //  {
            
        //     for (b = 0; b < counterX.length; b++)
        //     {

        //         for (c = 0; c < counterX.length; c++)
        //         {

        //             if(counterX[a] == 1 && counterX[b] || counterX[c]  )
        //             {

        //                 document.getElementById('info').innerHTML = 'X is Winner ';
        //             }
        //         }

        //     }
       // }

       let x = 0 ;

       for (i = 0; i < counterX.length; i++){
           x = x+ parseInt(counterX[i]);
       }
       if (x == 60 ||x == 150 || x == 240 || x == 120 || x == 180 || x == 140  )
       {
        document.getElementById('info').innerHTML = ' Winner X';   
       }
           
    }

    if(counterO.length >= 3)
    {

   
      let o = 0 ;

       for (i = 0; i < counterO.length; i++){
           o = o+ parseInt(counterO[i]);
       }
       if (o == 6 ||o == 15 || o == 24 || o == 12 || o == 18 || o == 14  ){
        document.getElementById('info').innerHTML = ' Winner O ';   
       }
           
    }

    if(counterO.length > 9 || counterX.length >9){
        document.getElementById('info').innerHTML = 'Noo is Winner ';   

    }
   

  }