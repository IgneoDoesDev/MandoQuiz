console.log("Hello, World")
function checkAnswers(){
  
	var counter = 0;

	var correctAnswer1 = 'q1.1';
	var correctAnswer2 = 'q2.3';
	var correctAnswer3 = 'q3.3';
	var correctAnswer4 = 'q4.4';
	var correctAnswer5 = 'q5.2';
	var correctAnswer6 = 'q6.1';
	var correctAnswer7 = 'q7.4';
	var correctAnswer8 = 'q8.1';
	var correctAnswer9 = 'q9.2';
	var correctAnswer10 = 'q10.3';
	var correctAnswer11 = 'q11.3';
  var correctAnswer12 = 'q12.2';

	if (counter == 0){
  	if(document.getElementById(correctAnswer1).checked == true){
  		
  		console.log("Question 1 Correct"); 
      counter += 1
    document.getElementById('Response1').innerHTML
    = "Correct"
    document.getElementById('Question1').style.backgroundColor = "green"
    
  			
  	} else{
  		
  		console.log("Question 1 Incorrect"); 
      
    document.getElementById('Response1').innerHTML
    = "Incorrect, the correct answer was Din Djarin"
      document.getElementById('Question1').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer2).checked == true){
  		
  		console.log("Question 2 Correct"); 
      counter += 1
    document.getElementById('Response2').innerHTML
    = "Correct"
    document.getElementById('Question2').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 2 Incorrect"); 
      
    document.getElementById('Response2').innerHTML
    = "Incorrect, the correct answer was Grogu"
      document.getElementById('Question2').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer3).checked == true){
  		
  		console.log("Question 3 Correct"); 
      counter += 1
    document.getElementById('Response3').innerHTML
    = "Correct"
    document.getElementById('Question3').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 3 Incorrect"); 
      
    document.getElementById('Response3').innerHTML
    = "Incorrect, the correct answer was Peli Motto"
      document.getElementById('Question3').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer4).checked == true){
  		
  		console.log("Question 4 Correct"); 
      counter += 1
    document.getElementById('Response4').innerHTML
    = "Correct"
    document.getElementById('Question4').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 4 Incorrect"); 
      
    document.getElementById('Response4').innerHTML
    = "Incorrect, the correct answer was Beskar"
      document.getElementById('Question4').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer5).checked == true){
  		
  		console.log("Question 5 Correct"); 
      counter += 1
    document.getElementById('Response5').innerHTML
    = "Correct"
    document.getElementById('Question5').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 5 Incorrect"); 
      
    document.getElementById('Response5').innerHTML
    = "Incorrect, the correct answer was Night Owls"
    document.getElementById('Question5').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer6).checked == true){
  		
  		console.log("Question 6 Correct"); 
      counter += 1
    document.getElementById('Response6').innerHTML
    = "Correct"
    document.getElementById('Question6').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 6 Incorrect"); 
      
    document.getElementById('Response6').innerHTML
    = "Incorrect, the correct answer was The Darksaber"
    document.getElementById('Question6').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer7).checked == true){
  		
  		console.log("Question 7 Correct"); 
      counter += 1
    document.getElementById('Response7').innerHTML
    = "Correct"
    document.getElementById('Question7').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 7 Incorrect"); 
      
    document.getElementById('Response7').innerHTML
    = "Incorrect, the correct answer was Fennec Shand"
    document.getElementById('Question7').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer8).checked == true){
  		
  		console.log("Question 8 Correct"); 
      counter += 1
    document.getElementById('Response8').innerHTML
    = "Correct"
    document.getElementById('Question8').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 8 Incorrect"); 
      
    document.getElementById('Response8').innerHTML
    = "Incorrect, the correct answer was Boba Fett"
      document.getElementById('Question8').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer9).checked == true){
  		
  		console.log("Question 9 Correct"); 
      counter += 1
    document.getElementById('Response9').innerHTML
    = "Correct"
    document.getElementById('Question9').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 9 Incorrect"); 
      
    document.getElementById('Response9').innerHTML
    = "Incorrect, the correct answer was Greef Karga"
      document.getElementById('Question9').style.backgroundColor = "red"}
  	
  	if(document.getElementById(correctAnswer10).checked == true){
  		
  		console.log("Question 10 Correct"); 
      counter += 1
    document.getElementById('Response10').innerHTML
    = "Correct"
    document.getElementById('Question10').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 10 Incorrect"); 
      
    document.getElementById('Response10').innerHTML
    = "Incorrect, the correct answer was They didn't die"
      document.getElementById('Question10').style.backgroundColor = "red"}
  	
  	 if(document.getElementById(correctAnswer11).checked == true){
  		
  		console.log("Question 11 Correct");
      counter += 1
    document.getElementById('Response11').innerHTML
    = "Correct"
    document.getElementById('Question11').style.backgroundColor = "green"
  			
  	} else{
  		
  		console.log("Question 11 Incorrect"); 
      
    document.getElementById('Response11').innerHTML
    = "Incorrect, the correct answer was 3"
      document.getElementById('Question11').style.backgroundColor = "red"}
  if(document.getElementById(correctAnswer12).checked == true){
    console.log("Question 12 Correct");
      counter += 1
    document.getElementById('Response12').innerHTML
    = "Correct"
    document.getElementById('Question12').style.backgroundColor = "green"
  
    } else{
    console.log("Question 12 Incorrect");
      
    document.getElementById('Response12').innerHTML
    = "Incorrect, the correct answer was IG-11"
      document.getElementById('Question12').style.backgroundColor = "red"}

   
  }
  document.getElementById('q1.1').disabled = "disabled";
  document.getElementById('q1.2').disabled = "disabled";
  document.getElementById('q1.3').disabled = "disabled";
  document.getElementById('q1.4').disabled = "disabled";
  document.getElementById('q2.1').disabled = "disabled";
  document.getElementById('q2.2').disabled = "disabled";
  document.getElementById('q2.3').disabled = "disabled";
  document.getElementById('q2.4').disabled = "disabled";
  document.getElementById('q3.1').disabled = "disabled";
  document.getElementById('q3.2').disabled = "disabled";
  document.getElementById('q3.3').disabled = "disabled";
  document.getElementById('q3.4').disabled = "disabled";
  document.getElementById('q4.1').disabled = "disabled";
  document.getElementById('q4.2').disabled = "disabled";
  document.getElementById('q4.3').disabled = "disabled";
  document.getElementById('q4.4').disabled = "disabled";
  document.getElementById('q5.1').disabled = "disabled";
  document.getElementById('q5.2').disabled = "disabled";
  document.getElementById('q5.3').disabled = "disabled";
  document.getElementById('q5.4').disabled = "disabled";
  document.getElementById('q6.1').disabled = "disabled";
  document.getElementById('q6.2').disabled = "disabled";
  document.getElementById('q6.3').disabled = "disabled";
  document.getElementById('q6.4').disabled = "disabled";
  document.getElementById('q7.1').disabled = "disabled";
  document.getElementById('q7.2').disabled = "disabled";
  document.getElementById('q7.3').disabled = "disabled";
  document.getElementById('q7.4').disabled = "disabled";
  document.getElementById('q8.1').disabled = "disabled";
  document.getElementById('q8.2').disabled = "disabled";
  document.getElementById('q8.3').disabled = "disabled";
  document.getElementById('q8.4').disabled = "disabled";
  document.getElementById('q9.1').disabled = "disabled";
  document.getElementById('q9.2').disabled = "disabled";
  document.getElementById('q9.3').disabled = "disabled";
  document.getElementById('q9.4').disabled = "disabled";
  document.getElementById('q10.1').disabled = "disabled";
  document.getElementById('q10.2').disabled = "disabled";
  document.getElementById('q10.3').disabled = "disabled";
  document.getElementById('q10.4').disabled = "disabled";
  document.getElementById('q11.1').disabled = "disabled";
  document.getElementById('q11.2').disabled = "disabled";
  document.getElementById('q11.3').disabled = "disabled";
  document.getElementById('q11.4').disabled = "disabled";
  document.getElementById('q12.1').disabled = "disabled";
  document.getElementById('q12.2').disabled = "disabled";
  document.getElementById('q12.3').disabled = "disabled";
  document.getElementById('q12.4').disabled = "disabled";
  document.getElementById('Hover1').style.visibility="hidden";
  document.getElementById('Hover2').style.visibility="hidden";
  document.getElementById('Hover3').style.visibility="hidden";
  document.getElementById('Hover4').style.visibility="hidden";
  document.getElementById('Hover5').style.visibility="hidden";
  document.getElementById('Hover6').style.visibility="hidden";
  document.getElementById('Hover7').style.visibility="hidden";
  document.getElementById('Hover8').style.visibility="hidden";
  document.getElementById('Hover9').style.visibility="hidden";
  document.getElementById('Hover10').style.visibility="hidden";
  document.getElementById('Hover11').style.visibility="hidden";
  document.getElementById('Hover12').style.visibility="hidden";
  document.getElementById('FloatingBox').style.visibility="visible";
  document.getElementById('FloatingBox2').innerHTML = "Your Score:" +    String(counter) + "/12"

  ResponseText="If you can see this the JS is broken"
  if (counter == 0){ResponseText = "You are no Mandalorian"}
  if (counter == 1){ResponseText = "You are no Mandalorian"}
  if (counter == 2){ResponseText = "You are no Mandalorian"}
  if (counter == 3){ResponseText = "One day you will be a great Mandalorian"}
  if (counter == 4){ResponseText = "One day you will be a great Mandalorian"}
  if (counter == 5){ResponseText = "One day you will be a great Mandalorian"}
  if (counter == 6){ResponseText = "Well done, Mandalorian"}
  if (counter == 7){ResponseText = "Well done, Mandalorian"}
   if (counter == 8){ResponseText ="Well done, Mandalorian"}
  if (counter == 9){ResponseText = "This is the Way"}
  if (counter == 10){ResponseText = "This is the Way"}
  if (counter == 11){ResponseText = "This is the Way"}
  if (counter == 12){ResponseText = "You are a true Mandalorian"}
  document.getElementById('FloatingBox3').innerHTML = ResponseText
}