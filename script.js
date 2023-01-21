const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", addDay)
form.addEventListener("change", saveData)

// funcao que add o dia atual do habito
function addDay() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ⛔")
    return
  }
  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}
// funcao que salva o habito
function saveData() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const dataHabit = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(dataHabit)
nlwSetup.load()

