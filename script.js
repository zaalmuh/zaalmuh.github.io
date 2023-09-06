const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const name3 = document.querySelector('.name3');

name1.addEventListener('mouseenter', () => {
  name1.style.color = '#ffff00';
  name1.addEventListener('mouseleave', () => {
    name1.style.color = 'white';
  });
});

name2.addEventListener('mouseenter', () => {
  name2.style.color = '#ffff00';
  name2.addEventListener('mouseleave', () => {
    name2.style.color = 'white';
  });
});
name3.addEventListener('mouseenter', () => {
  name3.style.color = '#ffff00';
  name3.addEventListener('mouseleave', () => {
    name3.style.color = 'white';
  });
});
