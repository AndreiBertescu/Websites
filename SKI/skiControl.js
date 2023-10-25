function loadski() {
  let name = localStorage.getItem("name");

  document.title = name;
  document.getElementById('titlu').innerHTML = "- " + name + " -";
  document.getElementById('titlud').innerHTML = "Locatii inchirieri schiuri din " + name;

  for (i = 0; i < data.length; i++) {
    if (data[i].video != undefined)
      if (data[i].id == name) {
        document.getElementById('videoStatiune').src = data[i].video;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[i].lat}&lon=${data[i].lon}&appid=f02881a4eafc4832c09dacd86f0b589e&units=metric&lang=ro`).then((response) => response.json()).then((jsonData) => {
          console.log(jsonData);

          document.getElementById('temp').innerHTML = "Temperatură: " + jsonData.main.temp + " &#176C;";
          document.getElementById('vit').innerHTML = "Viteza vântului: " + jsonData.wind.speed * (3600 / 1000).toFixed() + " Km/h;";
          document.getElementById('prec').innerHTML = "Vreme: " + jsonData.weather[0].description;
        });
        continue;
      }
    if (data[i].id == name)
      add(i);
  }
}

function add(i) {
  var newNode = document.createElement('div');
  newNode.className = 'box';
  document.getElementById('content').appendChild(newNode);

  var name = document.createElement('p');
  name.className = 'boxTitlu';
  name.innerHTML = data[i].name;
  newNode.appendChild(name);

  newNode.appendChild(document.createElement('hr'));

  if (data[i].desc != undefined) {
    var desc = document.createElement('p');
    desc.className = 'boxParagraf';
    desc.innerHTML = 'Descriere:<br>' + data[i].desc;
    desc.setAttribute('align', 'center');
    desc.style.paddingBottom = '15px';
    newNode.appendChild(desc);
  }

  newNode.appendChild(document.createElement('hr'));

  if (data[i].tel != undefined) {
    var tel = document.createElement('p');
    tel.className = 'boxParagraf';
    tel.innerHTML = 'Număr de telefon: ' + data[i].tel;
    newNode.appendChild(tel);
  }


  if (data[i].email != undefined) {
    var email = document.createElement('p');
    email.className = 'boxParagraf';
    email.innerHTML = 'Email: ' + data[i].email;
    newNode.appendChild(email);
  }

  if (data[i].adresa != undefined) {
    var adresa = document.createElement('p');
    adresa.className = 'boxParagraf';
    adresa.innerHTML = 'Adresă: ' + data[i].adresa;
    newNode.appendChild(adresa);
  }

  if (data[i].link != undefined) {
    var link = document.createElement('p');
    link.className = 'boxParagraf';
    link.innerHTML = 'Link: ';
    newNode.appendChild(link);
    var linkin = document.createElement('a');
    linkin.className = 'link';
    linkin.innerHTML = data[i].name;
    linkin.href = data[i].link;
    linkin.target = '_blank';
    link.appendChild(linkin);
  }

  var br = document.createElement('div');
  br.className = 'breakBar';
  document.getElementById('content').appendChild(br);
}
