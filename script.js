$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
    var food = $(".food").val();
    var times = parseInt($(".times").val()) * 52;
    
    // 2. Use the input text to build the fortune to display.
    var myAnswer = "My name is " + name + " i love seafood" + " i eat seafood 1 time a week even if im allergic to it";
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
});