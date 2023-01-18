

 function myfunc () {
     var quotes = [

        {
            quote: " Resentment is like drinking poison and waiting for your enemies to die.   " ,
            writer: " --Nelson Mandela ",
        },
        {
            quote: " Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.  " ,
            writer: " --Albert Einstein ",
        },

    ] ;

    let arrayIndex = Math.floor(Math.random() * quotes.length );
    document.getElementById("quotes").innerHTML= quotes[arrayIndex].quote;
    document.getElementById("writer").innerHTML= quotes[arrayIndex].writer;
}

 