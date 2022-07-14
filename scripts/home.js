const projectCardContainer = document.querySelector('.project-container');

projectCardContainer.addEventListener('mouseover', function(e){
  const cardClicked = e.target.closest('.project-card');
  if(!cardClicked) return;
  cardClicked.querySelector('.card-overlay').classList.remove('hidden');
  cardClicked.querySelector('.hover-show-wrapper').classList.remove('hidden');
});

projectCardContainer.addEventListener('mouseout', function(e){
  const cardClicked = e.target.closest('.project-card');
  if(!cardClicked) return;
  cardClicked.querySelector('.card-overlay').classList.add('hidden');
  cardClicked.querySelector('.hover-show-wrapper').classList.add('hidden');
});