document.querySelector('.submit_class').addEventListener('click', calculate);
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function generaterandomnumber() {
  return Math.floor(Math.random() * hex.length);
}

// function change() {
//   let hexColor = '#';
//   for (let i = 0; i < 6; i++) hexColor += hex[generaterandomnumber()];
//   // document.querySelector('.color').innerHTML = hexColor;
//   document.querySelector('#pseudotop').style.backgroundColor = hexColor;
// }
function duration() {
  var dob = document.querySelector('#dob').value;
  var array = dob.split('-');
  var year = array[0];
  var month = array[1];
  var date = array[2];
  const birthday = new Date(`${month} ${date}, ${year} 00:00:00`);
  const today = new Date();
  const gap = today - birthday;
  const hundred_years_old = new Date(`${month} ${date}, ${year + 90} 00:00:00`);
  // console.log(gap,hundred_years_old);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  var d_year = today.getYear() - birthday.getYear();
  const textday = Math.floor(gap / day);
  const texthour = Math.floor((gap % day) / hour);
  const textminute = Math.floor((gap % hour) / minute);
  const textsecond = Math.floor((gap % minute) / second);

  if (today.getMonth() >= birthday.getMonth())
    //get months when current month is greater
    var d_month = today.getMonth() - birthday.getMonth();
  else {
    d_year = d_year - 1;
    var d_month = 12 + today.getMonth() - birthday.getMonth();
  }
  //getdays
  if (today.getDate() >= birthday.getDate())
    //get days when the current date is greater
    var d_days = today.getDate() - birthday.getDate();
  else {
    d_month--;
    var d_days = 31 + today.getDate() - birthday.getDate();
  }
  document.querySelector('.d_year h1').innerHTML = d_year;
  document.querySelector('.d_months h1').innerHTML = d_month;
  document.querySelector('.d_days h1').innerHTML = d_days;
  document.querySelector('.d_hours h1').innerHTML = texthour;
  document.querySelector('.d_minutes h1').innerHTML = textminute;
  document.querySelector('.d_seconds h1').innerHTML = textsecond;
}
setInterval(duration, 1000);
setInterval(change, 1000);

function calculate() {
  document.querySelector('.user_input').style.display = 'none';
  document.querySelector('#pseudotop').style.display = 'grid';
  duration();
//   change();
}
