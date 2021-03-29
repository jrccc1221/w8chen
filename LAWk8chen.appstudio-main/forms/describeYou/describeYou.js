
rdoPersonalityType.onchange=function(){
  let userChoice = $("input[name=rdoPersonalityType]:checked").prop("value")
  if (rdoPersonalityType.value == 0)
    lblPrompt2.value = (`You are a ${userChoice} person`)
  else if (rdoPersonalityType.value == 1)
    lblPrompt2.value = (`you are a ${userChoice} person`)
  else if (rdoPersonalityType.value == 2)
    lblPrompt2.value = (`You are a ${userChoice} person`)
  else (rdoPersonalityType.value == 3)
    lblPrompt2.value = (`You are a ${userChoice} person`)
}

btnFavExercises.onclick = function() {
  ChangeForm(favExercises)
}




