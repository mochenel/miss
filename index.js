$(document).ready(function(){
    let random = Math.floor(Math.random() * 10) +1;
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    drawBoard(numbers);
    $('#dimension').on('change', (e)=>{
        const dimension = e.target.value;
        numbers = [];
        for(let i = 1; i <= dimension; i++){
            numbers.push(i);
        }
        drawBoard(numbers);
       
    })
    $('#mode').on('change', (e)=>{
        drawBoard();

    })

    $('#reveal').on('click', ()=>{
        alert(random);
    })
    $('#font_size').on('change', (e)=>{
        let fontSize = e.target.value < 50 ? 50 : e.target.value > 300 ? 300 :e.target.value;
        $('.number').css('fontSize',fontSize+"%")
        $('#font_size').val(fontSize)
    })

    function drawBoard(){
        
        const mode = $('#mode').val();
        if(mode =="order"){
            numbers.sort(function(a, b) {
                return a - b;
              });
            console.log(numbers)
        }
        else{
            shuffle();
        }
        random = Math.floor(Math.random() * numbers.length) +1;
        $("#board").html("")
        for(let i = 0; i < numbers.length; i++){
            if(random != numbers[i])
            $("#board").append(`<div class='col number' > ${numbers[i]} </div>`)
        }
 
        $('#reveal').css('display','block');
        $('.number').css('fontSize',$('#font_size').val()+"%");
    }
    function shuffle() {
        let j, x, i;
        for (i = numbers.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = x;
        }
    
    }
    

  
  });