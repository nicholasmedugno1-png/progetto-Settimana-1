 const btnOpenModal = document.querySelector('#btnOpenModal');
 const btnCloseModal = document.querySelector('#btnCloseModal');
const overlay = document.querySelector('.overlay');
const btnInvia = document.querySelector('#btnInvia');
 const myForm = document.querySelector('form')
btnOpenModal.addEventListener('click', (e) => {
  overlay.style.display = 'block';
});

btnCloseModal.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

const nameUser = document.querySelector('#nameUser')
const emailUser = document.querySelector('#emailUser')
const dataRisposta = document.querySelector('#dataRisposta')
const userDati = document.querySelector('#userDati')
const nameRes = document.querySelector('#nameRes')
const emailRes = document.querySelector('#emailRes')
const dateRes = document.querySelector('#dateRes')
const datiUser = {
        userName : '',
    userEmail : '',
    rispData :'',
    }

  myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	datiUser.userName = nameUser.value;
	datiUser.userEmail = emailUser.value;
	datiUser.rispData = dataRisposta.value;

	userDati.style.display = 'block';
	nameRes.textContent = datiUser.userName;
	emailRes.textContent = datiUser.userEmail;
	dateRes.textContent = datiUser.rispData;
	myForm.reset();
	overlay.style.display = 'none';
});