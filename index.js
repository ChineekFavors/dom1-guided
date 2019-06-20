//console.log('Connected to the console!');
//query select nav lins and change text color to brown
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(links => links.style.color = 'brown');

//eventListener mouseover logo image disappears
const logoImage = document.querySelector('div.logo-container img');
logoImage.addEventListener('mouseover', () =>{
	logoImage.src = '';
	
});

const btn = document.querySelector('#custom-btn');
btn.addEventListener('click', () =>{
	btn.textContent = 'and We will work with you!';
})
