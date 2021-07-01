let modalDesc = {
  forest: {
    heading: "Forest",
    content: "Forests have lots of trees. Forests grow in almost every part of the world that get rain. People and other animals need forests to live. Trees help make oxygen for us to breathe.",
    img: "assets/circimage6.png"
  },
  grassland: {
    heading: "Grassland",
    content: "Grassland is open ground covered with grasses. Grass grows longer in places with more rain. In hot areas of the world, grasslands have wet and dry seasons, but they are always warm. In other places, grasslands have cold winters and warm summers with some rain.",
    img: "assets/circimage2.png"
  },
  desert: {
    heading: "Desert",
    content: "changeme",
    img: "assets/circimage2.png"
  },
  mountain: {
    heading: "Mountain",
    content: "changeme",
    img: "assets/circimage2.png"
  },
  poles: {
    heading: "Poles",
    content: "changeme",
    img: "assets/circimage2.png"
  },
  water: {
    heading: "Water",
    content: "changeme",
    img: "assets/circimage2.png"
  }
};

let habitats = {
  forest: {
    locations:
    [
      {
        top: "550",
        left: "1570",
        location: "Daintree Forest, Australia",
        img: "assets/background1.png",
        desc: "The Daintree Forest is a region on the northeast coast of Queensland, Australia. It is a part of the biggest tropical rainforest in the country!",
        gearth: "Now explore more about the Daintree Forest in google earth by selecting the button below. After you finished, close the tab and select the arrow button on the right.",
        gearth_Button: "Daintree Forest Google Earth",
        video : "assets/Daintree Forest_ Australia.mp4",
        animals:
        [
          {
            name: "Boyds forest dragon",
            img: "https://c8.alamy.com/comp/BGBPCR/boyds-forest-dragon-hypsilurus-boydii-queensland-australia-BGBPCR.jpg",
            desc: "The Amethystine Python is one of the biggest snakes in the world. It is named for its blue color. This python eats pigs, possums, birds, and another animals. It squeezes the life out of them!"
          },
          {
            name: "Azure Kingfisher",
            img: "https://sophianugentsiegal.com/wp-content/uploads/2020/02/PastedGraphic-2.jpg",
            desc: "The Amethystine Python is one of the biggest snakes in the world. It is named for its blue color. This python eats pigs, possums, birds, and another animals. It squeezes the life out of them!"
          }
        ]
      },
      {
        top: "80",
        left: "50",
        location: "Daintree Forest, Australia2",
        img: "assets/background1.png",
        desc: "The Daintree Forest is a region on the northeast coast of Queensland, Australia. It is a part of the biggest tropical rainforest in the country!",
        gearth: "Now explore more about the Daintree Forest in google earth by selecting the button below. After you finished, close the tab and select the arrow button on the right.",
        gearth_Button: "Daintree Forest2 Google Earth",
        video : "assets/Daintree Forest_ Australia.mp4",
        animals:
        [
          {
            name: "Boyds forest dragon2",
            img: "https://c8.alamy.com/comp/BGBPCR/boyds-forest-dragon-hypsilurus-boydii-queensland-australia-BGBPCR.jpg",
            desc: "The Amethystine Python is one of the biggest snakes in the world. It is named for its blue color. This python eats pigs, possums, birds, and another animals. It squeezes the life out of them!"
          },
          {
            name: "Azure Kingfisher2",
            img: "https://sophianugentsiegal.com/wp-content/uploads/2020/02/PastedGraphic-2.jpg",
            desc: "The Amethystine Python is one of the biggest snakes in the world. It is named for its blue color. This python eats pigs, possums, birds, and another animals. It squeezes the life out of them!"
          },
          {
            name: "Boyds forest dragon2",
            img: "https://c8.alamy.com/comp/BGBPCR/boyds-forest-dragon-hypsilurus-boydii-queensland-australia-BGBPCR.jpg",
            desc: "The Amethystine Python is one of the biggest snakes in the world. It is named for its blue color. This python eats pigs, possums, birds, and another animals. It squeezes the life out of them!"
          },
        ]
      }
    ],
    background: "#7ED957"
  },
  grassland:{
    locations :
    [
      {
        top: "80",
        left: "80",
        location: "Grassland1, Somewhere",
        img: "assets/background1.png",
        desc: "Grassland1 description",
        gearth: "Now explore more about the Grassland1 in google earth by selecting the button below. After you finished, close the tab and select the arrow button on the right.",
        gearth_Button: "Grassland1 Google Earth",
        video : "assets/Daintree Forest_ Australia.mp4",
        animals:
        [
          {
            name: "Animal1",
            img: "https://c8.alamy.com/comp/BGBPCR/boyds-forest-dragon-hypsilurus-boydii-queensland-australia-BGBPCR.jpg",
            desc: "Animal1 Description"
          },
          {
            name: "Animal2",
            img: "https://sophianugentsiegal.com/wp-content/uploads/2020/02/PastedGraphic-2.jpg",
            desc: "Animal2 description"
          }
        ]
      }
    ],
    background : "#C9E265"
  },
  desert:{
    locations :
    [
      {
        top: "80",
        left: "80",
        location: "Desert1, Somewhere",
        img: "assets/background1.png",
        desc: "Desert Description",
        gearth: "Now explore more about the Desert1 in google earth by selecting the button below. After you finished, close the tab and select the arrow button on the right.",
        gearth_Button: "Desert1 Google Earth",
        video : "assets/Daintree Forest_ Australia.mp4",
        animals:
        [
          {
            name: "Animal1",
            img: "https://c8.alamy.com/comp/BGBPCR/boyds-forest-dragon-hypsilurus-boydii-queensland-australia-BGBPCR.jpg",
            desc: "Animal1 Description"
          },
          {
            name: "Animal2",
            img: "https://sophianugentsiegal.com/wp-content/uploads/2020/02/PastedGraphic-2.jpg",
            desc: "Animal2 description"
          }
        ]
      }
    ],
    background : "#C9E265"
  },
  mountain:{
    locations :
    [
      {
        top: "80",
        left: "80",
        location: "mountain1, somewhere",
        img: "assets/background1.png",
        desc: "mountain1 description",
        gearth: "Now explore more about the mountain1 in google earth by selecting the button below. After you finished, close the tab and select the arrow button on the right.",
        gearth_Button: "mountain1 Google Earth",
        video : "assets/Daintree Forest_ Australia.mp4",
        animals:
        [
          {
            name: "Animal1",
            img: "https://c8.alamy.com/comp/BGBPCR/boyds-forest-dragon-hypsilurus-boydii-queensland-australia-BGBPCR.jpg",
            desc: "Animal1 Description"
          },
          {
            name: "Animal2",
            img: "https://sophianugentsiegal.com/wp-content/uploads/2020/02/PastedGraphic-2.jpg",
            desc: "Animal2 description"
          }
        ]
      }
    ],
    background : "#C9E265"
  },
  poles:{
    locations :
    [
      {
        top: "80",
        left: "80",
        location: "pole1, somewhere",
        img: "assets/background1.png",
        desc: "pole1 description",
        gearth: "Now explore more about the pole1 in google earth by selecting the button below. After you finished, close the tab and select the arrow button on the right.",
        gearth_Button: "pole1 Google Earth",
        video : "assets/Daintree Forest_ Australia.mp4",
        animals:
        [
          {
            name: "Animal1",
            img: "https://c8.alamy.com/comp/BGBPCR/boyds-forest-dragon-hypsilurus-boydii-queensland-australia-BGBPCR.jpg",
            desc: "Animal1 Description"
          },
          {
            name: "Animal2",
            img: "https://sophianugentsiegal.com/wp-content/uploads/2020/02/PastedGraphic-2.jpg",
            desc: "Animal2 description"
          }
        ]
      }
    ],
    background : "#C9E265"
  },
  water:{
    locations :
    [
      {
        top: "80",
        left: "80",
        location: "water1, somewhere",
        img: "assets/background1.png",
        desc: "water1 description",
        gearth: "Now explore more about the water1 in google earth by selecting the button below. After you finished, close the tab and select the arrow button on the right.",
        gearth_Button: "water1 Google Earth",
        video : "assets/Daintree Forest_ Australia.mp4",
        animals:
        [
          {
            name: "Animal1",
            img: "https://c8.alamy.com/comp/BGBPCR/boyds-forest-dragon-hypsilurus-boydii-queensland-australia-BGBPCR.jpg",
            desc: "Animal1 Description"
          },
          {
            name: "Animal2",
            img: "https://sophianugentsiegal.com/wp-content/uploads/2020/02/PastedGraphic-2.jpg",
            desc: "Animal2 description"
          }
        ]
      }
    ],
    background : "#C9E265"
  }

};

let count = 0;
var msg = new SpeechSynthesisUtterance();
msg.text = "Click on different habitats on the left to see some awesome places and their animals.";
msg.onend = function (){
  count = 0;
}



function showMap(place) {
  document.getElementsByClassName("habitat_model")[0].classList.remove('active')
  let block = document.getElementById("maps");
  let data = habitats[place].locations;
  block.innerHTML =``;
  data.forEach((data, i) => {
    block.innerHTML +=
      `
    <div class="map_location" style="top : ${data.top}px;left : ${data.left}px;" onclick="showlocDet('${place}',${i})">
      <h4 style="background : ${habitats[place].background}">${data.location}</h4>
      <img src="assets/Location_Pin.png" alt="">
    </div>
    `;
  });

}

function showInstruction() {
  document.getElementById('instruction').classList.toggle("active");
}

function speech(n) {
  console.log(count);
  if(count == 0){
    window.speechSynthesis.speak(msg);
    count = 1;
  }
  else if (count == 1){
    window.speechSynthesis.cancel();
    count = 0;
  }
}

function speak(content) {
  msg.text = content;
  if(count == 0){
    window.speechSynthesis.speak(msg);
    count = 1;
  }
  else if (count == 1){
    window.speechSynthesis.cancel();
    count = 0;
  }
}

function showModel(model) {
  document.getElementById("maps").innerHTML="";
  let content = document.getElementsByClassName("habitat_model")[0];
  content.classList.remove('active');
  setTimeout(() => {}, 1000);
  content.innerHTML = `
  <div class="speaker">
    <img src="assets/SpeakerIcon.png" alt="" onclick="speak('${modalDesc[model].content}')">
  </div>
  <div class="habitat_model_content">

    <div class="left_container">
      <h1>${modalDesc[model].heading}</h1>
      <p>${modalDesc[model].content}</p>
      <p class="next" onclick="showMap('${model}')">NEXT <span><i class="fas fa-arrow-alt-right"></i></span> </p>
    </div>
    <div class="right_container">
      <img src=${modalDesc[model].img} alt="">
    </div>
  </div>
  `;
  content.classList.add('active');

}

function checkEnded(){
  document.getElementById('myvideo').addEventListener('ended',myHandler,false);
      function myHandler(e) {
        closeVideo();
        document.getElementById("location_description").classList.add('active');
        document.getElementById("location_description_back").classList.add('active')
      }
}

function showlocDet(place, n) {
  let location = habitats[place].locations[n];
  let videoblock = document.getElementById("video");

  videoblock.innerHTML =
  `
  <div class="location_description_heading" style="background:${habitats[place].background}">
    <h1>${location.location}</h1>
  </div>

  <div class="desc_cross" onclick="closeVideo()">
    <h1>X</h1>
  </div>

  <video src="${location.video}"  controls id="myvideo">
    Video Not supported
  </video>

  `;

  checkEnded();
  document.getElementById('myvideo').play();
  let container = document.getElementById("location_description");
  container.innerHTML = `

  <div class="location_description_containerr">
    <div class="next_button" style="border : 2px solid ${habitats[place].background}" onclick="showAnimals()">
      <i class="far fa-chevron-right" style="color:${habitats[place].background}"></i>
    </div>
  <div class="location_description_heading" style="background : ${habitats[place].background}">
    <h1>${location.location}</h1>
  </div>

  <div class="desc_cross" onclick="closeLocDesc()">
    <h1>X</h1>
  </div>
  <div class="location_description_content">
    <div class="location_left_container">
      <img src="${location.img}" alt="">
    </div>
    <div class="location_right_container">
      <p>
        ${location.desc}
      </p>
    </div>
  </div>
  <div class="google_earth">
    <h4>${location.gearth}</h4>
  <a target="_blank" href="https://earth.google.com/web/search/${location.location}" class="google_earth_button">${location.gearth_Button}</a>
  </div>
</div>

  `;

  container = document.getElementById("location_animals");
  container.innerHTML =
    `
  <div class="location_description_containerr">
    <div class="prev_button" style="border : 2px solid ${habitats[place].background}" onclick="showLocDesc()">
      <i class="far fa-chevron-right" style="color:${habitats[place].background}"></i>
    </div>
<div class="location_description_heading" style="background : ${habitats[place].background}">
  <h1>${location.location}</h1>
</div>
<div class="desc_cross" onclick="closeLocAni()">
  <h1>X</h1>
</div>
<div class="animals" id="animals">

</div>
</div>

  `;

  container = document.getElementById("animals");
  let anii = location.animals;
  anii.forEach((animal, i) => {
    container.innerHTML +=
      `
    <div class="animal_animal" onclick="showAniDesc('${place}',${n},${i})">
      <img src="${animal.img}" alt="">
      <h4>${animal.name}</h4>
    </div>
    `;
  });

  document.getElementById("video").classList.add("active");
  document.getElementById("videoBack").classList.add("active");

}

function closeVideo(){
  document.getElementById('myvideo').pause();
  document.getElementById('video').classList.remove("active");
  document.getElementById("videoBack").classList.remove("active");
}

function showAnimals() {
  document.getElementById("location_description").classList.remove("active");
  document.getElementById("location_description_back").classList.remove('active')
  document.getElementById("location_animals").classList.add("active");
    document.getElementById("location_animals_back").classList.add("active");
}

function showLocDesc() {
  document.getElementById("location_description").classList.add("active");
  document.getElementById("location_description_back").classList.add('active')
  document.getElementById("location_animals").classList.remove("active");
  document.getElementById("location_animals_back").classList.remove("active");

}

function showAniDesc(place, n, i) {
  let animal = habitats[place].locations[n].animals[i];
  let block = document.getElementById("animal_description");
  block.style.background = `${habitats[place].background}`;
  block.innerHTML =
    `
  <div class="animal_cross" onclick="closeAniDesc()">
    <h1>X</h1>
  </div>
  <div class="animal_description_content">
    <div class="animal_image">
      <img src="${animal.img}" alt="">
    </div>
    <div class="animal_desc">
      <div class="animal_speaker" onclick="speak('${animal.desc}')">
        <img src="assets/SpeakerIcon.png" alt="">
      </div>
    <h2>${animal.name}</h2>
    <p>${animal.desc}</p>
    </div>
  </div>
  `;
  document.getElementById("animal_description").classList.add("active");
}

function closeLocDesc() {
  document.getElementById("location_description").classList.remove("active");
  document.getElementById("location_description_back").classList.remove("active");
}


function closeLocAni() {
  document.getElementById("location_animals").classList.remove("active");
  document.getElementById("location_animals_back").classList.remove("active");

}


function closeAniDesc() {
  document.getElementById("animal_description").classList.remove("active");
  document.getElementById("bg_dark").classList.remove("active");

}
