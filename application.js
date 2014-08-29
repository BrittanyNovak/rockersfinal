function makeMessage() {
	var t1, t2, t3, t4, t5, t6, t7;
	t1 = $("#one").val();
	t2 = $("#two").val();
	t3 = $("#three").val();
	t4 = $("#four").val();
	t5 = $("#five").val();
	t6 = $("#six").val();
	t7 = $("#seven").val();
	
	
	var alertMessage ="";
	if(t1.val() == ""){ alertMessage += " Missing:Input 1, ";t1.addClass("missing"); }
	else { t1.removeClass("missing"); }
	if(t2.val() == ""){ alertMessage += " Missing:Input 2, ";t2.addClass("missing"); }
	else { t2.removeClass("missing"); }
	if(t3.val() == ""){ alertMessage += " Missing:Input 3, ";t3.addClass("missing"); }
	else { t3.removeClass("missing"); }
	if(t4.val() == ""){ alertMessage += " Missing:Input 4, ";t4.addClass("missing"); }
	else { t4.removeClass("missing"); }
	if(t5.val() == ""){ alertMessage += " Missing:Input 5, ";t5.addClass("missing"); }
	else { t5.removeClass("missing"); }
	if(t6.val() == ""){ alertMessage += " Missing:Input 6, ";t6.addClass("missing"); }
	else { t6.removeClass("missing"); }
	if(t7.val() == ""){ alertMessage += " Missing:Input 7, ";t7.addClass("missing"); }
	else { t7.removeClass("missing"); }
	
	if(alertMessage != ""){alert("You are missing\n" + alertMessage);}
	else {
	var message= "One day I will travel to " + t1.val() + "<br>";
	message += " To become a famous " + t2.val() +  "<br>";
	message+= " Live in a " + t3.val() + "<br>";
	message+= " Grow a garden of " + t4.val() + "<br>";
	message+= " Practice swimming in a pool filled with " + t5.val() + "<br>";
	message+= " Then sing this song every night " + t6.val() + "<br>";
	message+= " right before I " + t7.val() "<br>";
	$("#welcomeMessage").append(message);
		}
}










