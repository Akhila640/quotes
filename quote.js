let quote=document.getElementById("quote")
const quotes=[
    "తప్పు చేయడం తప్పు కాదు, కానీ తప్పుని ఒప్పుకోకపోవడం తప్పు.",
    "కష్టపడి పని చేసినప్పుడు అందిన ఫలితం అమూల్యం.",
    "ప్రతి కొత్త పాఠం మన జీవితాన్ని మారుస్తుంది.",
    "The future belongs to those who believe in the beauty of their dreams.", 
    "The only thing we have to fear is fear itself.",
    "Be yourself; everyone else is already taken. ",
    "Well done is better than well said.",

];
function getQuote(){
    let b=Math.floor(Math.random()*quotes.length)
    console.log(b);
    quote.textContent=quotes[b]

}