//variables
const fodselsdato = document.getElementById("fodselsdato");
const kjønn = document.getElementById("kjønn");
const wowrace = document.getElementById("wowrace");
const antallGangerRettetGeirSinProg = document.getElementById(
  "antallGangerRettetGeirSinProg"
);
const treningPerUke = document.getElementById("treningPerUke");
const McTjukkasPerManed = document.getElementById("McTjukkasPerManed");
const hasFrokostForSkole = document.getElementById("hasFrokostForSkole");
const hasDrivingFemalePartner = document.getElementById(
  "hasDrivingFemalePartner"
);
const hasMaleDrivingPartner = document.getElementById("hasMaleDrivingPartner");
const isSpillerItimen = document.getElementById("isSpillerItimen");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateExactTimeOfDeath(
    fodselsdato.value,
    kjønn.value,
    wowrace.value,
    antallGangerRettetGeirSinProg.value,
    treningPerUke.value,
    McTjukkasPerManed.value,
    hasFrokostForSkole.value,
    hasDrivingFemalePartner.value,
    hasMaleDrivingPartner.value,
    isSpillerItimen.value,
    form.value
  );
});

/**
 * @param {String} fodselsdato format: ddmmyy
 * @param {number} kjønn //how you identify, hvis du er ikke binær, bruk det tallet som du synes beskriver kjønnet ditt best
 * @param {String} wowRace //other MMO's count too..
 * @param {number} antallGangerRettetGeirSinProg
 * @param {number} treningPerUke //bare kul trening teller.
 * @param {number} McTjukkasPerManed //fatso King also counts
 * @param {boolean} hasFrokostForSkole
 * @param {boolean} hasDrivingFemalePartner or mother/sister
 * @param {boolean} hasMaleDrivingPartner or father/brother
 * @param {boolean} isSpillerItimen
 * @returns age achieved with current lifestyle. Exactly!
 */
function calculateAge(
  kjønn,
  wowRace,
  antallGangerRettetGeirSinProg,
  treningPerUke,
  McTjukkasPerManed,
  hasFrokostForSkole,
  hasDrivingFemalePartner,
  hasMaleDrivingPartner,
  isSpillerItimen
) {
  let calculatedAge;
  if (kjønn) {
    calculatedAge = 81.7;
  } else {
    calculatedAge = 76.1;
  }

  if (wowRace) calculatedAge -= 10.2; //To much sitting still..
  calculatedAge -= McTjukkasPerManed * 4.666;
  calculatedAge = calculatedAge - antallGangerRettetGeirSinProg * 1.2;
  calculatedAge = calculatedAge + treningPerUke * 1.2;
  calculatedAge += hasFrokostForSkole * 4.19;
  calculatedAge -= isSpillerItimen * 4.21;
  calculatedAge += hasDrivingFemalePartner * 3.75;
  calculatedAge -= hasMaleDrivingPartner * 3.71;
  calculatedAge -= isSpillerItimen * 4.62;

  return calculatedAge;
}

//Complete the formulae
//You are supposed to calculate time and date of death, down to the minute!
function calculateExactTimeOfDeath(
  fodselsdato,
  kjønn,
  wowRace,
  antallGangerRettetGeirSinProg,
  treningPerUke,
  McTjukkasPerManed,
  hasFrokostForSkole,
  hasDrivingFemalePartner,
  hasMaleDrivingPartner,
  isSpillerItimen
) {
  let achievedAge = calculateAge(
    kjønn,
    wowRace,
    antallGangerRettetGeirSinProg,
    treningPerUke,
    McTjukkasPerManed,
    hasFrokostForSkole,
    hasDrivingFemalePartner,
    hasMaleDrivingPartner,
    isSpillerItimen
  );

  console.log(achievedAge);

  // let today = new Date();
  // let age = today - fodselsdato;

  // let diffMs = achievedAge - age; // milliseconds
  // let diffDays = Math.floor(diffMs / 86400000); // days
  // let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  // let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  // console.log(
  //   diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes "
  // );

  return; //fullfør funkjsonen
}

