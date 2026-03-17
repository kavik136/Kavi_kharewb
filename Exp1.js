function calculateResult(){
    const n=document.getElementById("Subjects").value;
    let total = 0;
    let i;
    for(i=0; i<n; i++){
        let x=parseFloat(prompt("enter the subject number" + (i+1)));
        total += x;
    }
    let avg=total/n;
    let grade;
    if(avg>90)
    {
        grade='A+';
    }
    else if(avg>75)
    {

    }




    let result;
    if(avg>40)
    {
        result = "pass";
    }
    else{
        result = "fail";
    }
    result = document.getElementById("result").innerHTML="Total Marks" + total+"<br/>"+ "Average" +avg;
}
