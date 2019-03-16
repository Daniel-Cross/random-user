const btn = document.querySelector('#btn');
const name = document.querySelector('#name');
const img = document.querySelector('#avatar');
const login = document.querySelector('#username');
const mail = document.querySelector('#email');
const locale = document.querySelector('#city');

btn.addEventListener('click', () => {
	fetch('https://randomuser.me/api/', {
		method: 'GET',
	})
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			const fullName = data.results[0].name.first + ' ' + data.results[0].name.last;
			const photo = data.results[0].picture.large;
			const user = data.results[0].login.username;
			const email = data.results[0].email;
			const city = data.results[0].location.city;

			name.innerText = fullName.toUpperCase();
			img.src = photo;
			login.innerText = user;
			mail.innerText = 'Email: ' + email;
			locale.innerText = 'City: ' + city;
		})
		.catch(function(err) {
			console.log(err);
		});
});
