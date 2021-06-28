const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelector(".result").addEventListener("click", cal);
document.querySelector(".clear").style.display = "none";

function cal() {
    var yN = document.querySelector(".yourName").value;
    var yourName = yN.toLowerCase();
    var pN = document.querySelector(".partnerName").value;
    var partnerName = pN.toLowerCase();
    if ((yN.length == 0) | (pN.length == 0)) {
        alert("Invalid input");
    } else {
        var n = Math.floor(Math.random() * 100);
        // n = 14;
        var a = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100,10];
        var myn = a[Math.floor(Math.random() * 10)];

        if ((partnerName === "akash") | (partnerName === "akash katuri") | (partnerName === "katuri akash")) {
            document.querySelector(".answer").innerHTML = "Your Love percentage is " + myn + "%." + "<br>" + "<strong>icheyyandi madam... mee manasuni icheyyandi anthey...</strong>";
        } else if (((partnerName === "arjun") & (yourName === "praharshitha")) | ((partnerName === "praharshitha") & (yourName === "arjun"))) {
            document.querySelector(".answer").innerHTML = "Your Love percentage is " + myn + "%." + "<br>" + "<strong>Nagila nagila nagila ohoho biguvu chale nagila....</strong>";
        } else {
            if (n > 95) {
                document.querySelector(".answer").innerHTML =
                    " Your Love Percentage is " +
                    n +
                    "%." +
                    "<br>" +
                    '<strong>"Oka Romeo, Juliet.. Oka Laila, Majnu.. Oka </strong>' +
                    yourName.bold().toUpperCase() +
                    "," +
                    partnerName.bold().toUpperCase() +
                    '"...';
            } else if (n > 90) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Janma Janmala Bandham Mowa meedhi.."</strong>';
            } else if (n > 85) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Oka vargaanikey inspiration mowa meeru..."</strong>';
            } else if (n > 80) {
                document.querySelector(".answer").innerHTML =
                    " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Meeru food lekapoyina brathakagalaremo kani.. Prema lekunda brathakaleru..."</strong>';
            } else if (n > 75) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Prema Pichi pattindhi mowa meeku.."</strong>';
            } else if (n > 70) {
                document.querySelector(".answer").innerHTML =
                    " Your Love Percentage is " +
                    n +
                    "%." +
                    "<br>" +
                    '<strong>"Pani paata maanukoni mariii preminchakkarledhu mowa...Gundello Prema untey chalu.. adhi meelo chaala undhi.. adhi nak ardam avuthundhii.."</strong>';
            } else if (n > 65) {
                document.querySelector(".answer").innerHTML =
                    " Your Love Percentage is " +
                    n +
                    "%." +
                    "<br>" +
                    '<strong>"Alaa kadhu mowa.. Love aithey chesthunnav.. Mari tarvatha enti?? Kaali ga unnappudu chesedhi love kadhu mowa... Enno Panulu cheyyadaniki inspiration ivvadamey love antey.."</strong>';
            } else if (n > 60) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Phone pakkana petti, velli nee lover tho time spend cheyyi mowa.."</strong>';
            } else if (n > 55) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Unnay.. Mee Love story lo chaala twists unnayy.."</strong>';
            } else if (n > 50) {
                document.querySelector(".answer").innerHTML =
                    " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Love annaka problems shahajamey eh mowa.. Solve cheskuntuu vellali.."</strong>';
            } else if (n > 45) {
                document.querySelector(".answer").innerHTML =
                    " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Enti fevikwik kantey strong relation ah.. antha ledhu.. edho ala workout aipoindhi anthey.. "</strong>';
            } else if (n > 40) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Nijam cheppu mowa asala mana face ki love avasaram antavaa??"</strong>';
            } else if (n > 35) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Adhi kadhu mowa.. Manakendhuku cheppu ee love uu??"</strong>';
            } else if (n > 30) {
                document.querySelector(".answer").innerHTML =
                    " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Monna RX100, Ninna Colour Photo, eeroju Uppena.. Rep mee Love Story eh.."</strong>';
            } else if (n > 25) {
                document.querySelector(".answer").innerHTML =
                    " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Enti mari idhi kuda breakup aidhi antaga..."</strong>' + "<br>" + "ah antey bayata talk uu...".bold();
            } else if (n > 20) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Bus stand eh Bus stand eh... ika brathukey Bus stand ehh.."</strong>';
            } else if (n > 15) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Bus stand eh Bus stand eh... ika brathukey Bus stand ehh.."</strong>';
            } else if (n > 10) {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Chadhuvkondi firstuu...""</strong>';
            } else {
                document.querySelector(".answer").innerHTML = " Your Love Percentage is " + n + "%." + "<br>" + '<strong>"Chadhuvkondi firstuu..."</strong>';
            }
        }
        document.querySelector(".result").removeEventListener("click", cal);
        document.querySelector(".subheading").innerHTML = "";
        document.querySelector(".clear").style.display = "block";
        document.querySelector("#top-container").style.fontFamily = "sans-serif";
        document.querySelector("#top-container h1").innerHTML = yourName + "     💕     " + partnerName;
        document.querySelector(".result").innerHTML = "";
    }
}
