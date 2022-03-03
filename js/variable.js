var age = document.getElementById("age");
  var pt = document.getElementById("pt");
  function f1(){
    if(age.value <= 18)
    {
      pt.value=age.value;
        pt.innerHTML="under teenage age";
    }
    else
    {
      pt.value=age.value;
      pt.innerHTML=" teenage age";
    }
  }