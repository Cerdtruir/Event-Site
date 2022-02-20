const speakersObject = {
  speakerOne: {
    picture: 'images/face1-b.jpg',
    name: 'John Smith',
    bio: 'Professor at Harvard',
    info: 'John studies web-develpment and published his book The Web Of The World in 2012',
  },
  speakerTwo: {
    picture: 'images/face2-b.jpg',
    name: 'Jane Apple',
    bio: 'Professor at Harvard',
    info: 'John studies web-develpment and published his book The Web Of The World in 2012',
  },
  speakerThree: {
    picture: 'images/face3-b.jpg',
    name: 'Fred Prodsis',
    bio: 'Professor at Harvard',
    info: 'John studies web-develpment and published his book The Web Of The World in 2012',
  },
  speakerFour: {
    picture: 'images/face4-b.jpg',
    name: 'Megane Froths',
    bio: 'Professor at Harvard',
    info: 'John studies web-develpment and published his book The Web Of The World in 2012',
  },
  speakerFive: {
    picture: 'images/face5-b.jpg',
    name: 'Ossan Droth',
    bio: 'Professor at Harvard',
    info: 'John studies web-develpment and published his book The Web Of The World in 2012',
  },
  speakerSix: {
    picture: 'images/face6-b.jpg',
    name: 'Roths Mirde',
    bio: 'Professor at Harvard',
    info: 'John studies web-develpment and published his book The Web Of The World in 2012',
  },
};

const speakerArray = Object.keys(speakersObject);

const speakersDiv = document.getElementById('speakers-div');
const speakersHeader = document.createElement('h2');
const speakershr = document.createElement('hr');
const speakersFlex = document.createElement('div');
const showMore = document.createElement('button');

speakersDiv.classList.add(
  'd-flex',
  'flex-column',
  'align-items-center',
  'bg-white',
  'w-100',
  'py-md-5',
);
speakersHeader.classList.add('fw-bold', 'mt-5');
speakershr.classList.add('horizontal-line', 'color-2', 'm-0', 'mb-md-4');
speakersFlex.classList.add(
  'd-flex',
  'flex-wrap',
  'gap-5',
  'container',
  'align-items-center',
  'justify-content-center',
  'my-5',
);
showMore.classList.add('show-more-button', 'd-md-none');

function displaySpeakers() {
  document.querySelector('.d-md-flex').classList.remove('d-none', 'd-md-flex');
  if (document.querySelector('.d-md-flex') === null) {
    showMore.onclick = '';
    showMore.textContent = 'End Of List';
  }
}

speakersHeader.textContent = 'Featured Speakers';
showMore.innerHTML = 'More <span class="color-2">&#9661;</span>';

speakersDiv.append(speakersHeader, speakershr, speakersFlex, showMore);

let i = 0;
speakerArray.forEach((speaker) => {
  const speakerFlexBlock = document.createElement('div');
  const speakerPicture = document.createElement('img');
  const speakerFlexBlockRight = document.createElement('div');
  const speakerName = document.createElement('h3');
  const speakerBio = document.createElement('p');
  const speakerhr = document.createElement('hr');
  const speakerInfo = document.createElement('p');

  speakerFlexBlock.classList.add('d-flex', '0', 'speaker-flex-block', 'gap-3');
  speakerPicture.classList.add('speaker-picture');
  speakerFlexBlockRight.classList.add(
    'd-flex',
    'flex-column',
    'align-items-start',
    'justify-content-center',
    'right-speakers',
    'w-75',
  );
  speakerName.classList.add('color-1', 'm-0');
  speakerBio.classList.add('color-2', 'fst-italic');
  speakerhr.classList.add('horizontal-line', 'color-3', 'mt-0');
  speakerInfo.classList.add('color-1');

  // If there are more than 2 speaker blocks, hide on mobile
  if (i > 1) {
    speakerFlexBlock.classList.add('d-none', 'd-md-flex');
  }

  speakerPicture.src = speakersObject[speaker].picture;
  speakerName.textContent = speakersObject[speaker].name;
  speakerBio.textContent = speakersObject[speaker].bio;
  speakerInfo.textContent = speakersObject[speaker].info;

  showMore.onclick = function () {
    displaySpeakers();
  };
  speakersFlex.append(speakerFlexBlock);
  speakerFlexBlock.append(speakerPicture, speakerFlexBlockRight);
  speakerFlexBlockRight.append(speakerName, speakerBio, speakerhr, speakerInfo);
  i += 1;
});

document.querySelector('.navbar-toggler').onclick = function () {
  const hamburger = document.querySelector('.navbar-toggler');
  if (hamburger.classList.contains('close-button')) {
    hamburger.innerHTML = '<span class="hamburger color-1">&#9776;</span>';
    hamburger.classList.remove('close-button');
  } else {
    hamburger.classList.add('close-button');
    hamburger.innerHTML = '<span class="hamburger color-1">&#10006;</span>';
  }
};
