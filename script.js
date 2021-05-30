

let x = 'x';
let o = 'o';

arrX = "";
arrO = "";
let usedBoxes =[];

// first checks if all boxes empty , if so adds first move as X and change background color
// adds addEventListener for all boxes  
document.querySelectorAll('.btns').forEach(box => {
    box.addEventListener('click', event => {
      if(box.innerHTML == ' ')
      {
          if(usedBoxes.length == 0)
          {
            box.innerHTML = x;
            var currBox = document.getElementById(box.id) ;
            var backColor = box.style.backgroundColor = "cyan";
            
            usedBoxes.push( { id :currBox.id ,value: currBox.innerHTML ,color : backColor }) ;
            document.getElementById('info').innerHTML = 'next move is O'
            arrX += box.id;

          }
          else
          {
                check1(box);
                check2();
            
      
          }
        }
    })
  })

  function check1(box)
  {

    let last = usedBoxes.slice(-1).pop();
      
    if(last.value  == o )
    {
        box.innerHTML = x;
        var elem = document.getElementById(box.id) ;
        var backColor = elem.style.backgroundColor = "cyan";
        usedBoxes.push( { id :box.id ,value: box.innerHTML ,color : backColor }) ;
        document.getElementById('info').innerHTML = 'next move is O'

        arrX += box.id;

    }
    if(last.value == x )
    {
        box.innerHTML = o;
        var elem = document.getElementById(box.id) ;
        var backColor = elem.style.backgroundColor = "orange";
        usedBoxes.push( { id :box.id ,value: box.innerHTML ,color : backColor }) ;
        document.getElementById('info').innerHTML = 'next move is X'

        arrO += box.id;

    }


  }

  function check2(){


  let arr = [arrX,arrO]; 

    for (i = 0; i < arr.length; i++){
       
        if((arr[i] == "ABC" || arr[i] == "ACB" || arr[i] == 'BCA' || arr[i] == 'BAC' || arr[i] == 'CBA' || arr[i] == 'CAB' )
        || (arr[i] == 'DEF' || arr[i] == 'DFE' || arr[i] == 'EFD' || arr[i] == 'EDF' || arr[i] == 'FED' || arr[i] == 'FDE' )
        || (arr[i] == 'GHI' || arr[i] == 'GIH' || arr[i] == 'HGI' || arr[i] == 'HIG' || arr[i] == 'IHG' || arr[i] == 'IGH' ) )
        {

          if(arr[i] == arrO){
            document.getElementById('info').innerHTML = " O is Win ";
            return;
          }
          if(arr[i] == arrX){
            document.getElementById('info').innerHTML = " X is Win ";
            return;

          }

        }
      
    }

  }



    

  