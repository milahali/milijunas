var upitnik = [
    {
        pitanje: "Koji je glavni grad BiH?",
        o1: "Sarajevo",
        o2: "Tuzla",
        o3: "Zenica",
        o4: "Mostar"
    },
    {
        pitanje: "Izbacite uljeza",
        o1: "Banana",
        o2: "Krompir",
        o3: "Jabuka",
        o4: "Ananas"
    },
    {
        pitanje: "Ko je naslikao Mona Lisu",
        o1: "Johannes Vermeer",
        o2: "Vincent van Gogh",
        o3: "Frida Kahlo",
        o4: "Leonardo da Vinci"

    },
    {
        pitanje: "Naziv prvog albuma Michael Jacksona je: ",
        o1: "Ben",
        o2: "Thriller",
        o3: "Got to be there",
        o4: "Invincible"
    },


];

var TacniOdgovori = ["1", "2", "4", "3"];

function kviz(broj) {
    document.getElementById("pitanje").innerHTML = upitnik[broj].pitanje;
    document.getElementById("q0").innerHTML = upitnik[broj].o1;
    document.getElementById("q1").innerHTML = upitnik[broj].o2;
    document.getElementById("q2").innerHTML = upitnik[broj].o3;
    document.getElementById("q3").innerHTML = upitnik[broj].o4;
}

kviz(0);

var trenutnoPit = 0;
var bodovi = 0;
var k = 0;
function provjera() {
    var odgovor = TacniOdgovori[k];
    var radios = document.getElementsByName("odg");
    for (var j = 0; j < radios.length; j++) {
        var radio = radios[j];
        if (radio.value == odgovor && radio.checked) {
            bodovi++;
            trenutnoPit++;
            k++;
            if (trenutnoPit < TacniOdgovori.length) {
                kviz(trenutnoPit);
            } else {
                alert("Kviz je završen!");
            }
        }
        else if (radio.value != odgovor && radio.checked) {
            alert("Vaš odgovor je netačan, počnite ispočetka!");
            trenutnoPit = 0;
            k = 0;
            bodovi = 0;
            kviz(trenutnoPit);
        }
    }

    alert("Vaši bodovi: " + bodovi);


}
