// UI element
let email = document.querySelector('#email');
let phnNumber = document.querySelector('#phnNumber');
let postCode = document.querySelector('#postCode');

// event listeners
email.addEventListener('click', emailVal);
phnNumber.addEventListener('click', numVal);
postCode.addEventListener('click', codeVal);

// functions
function emailVal() {
	let email = prompt('Enter your email');
	const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email === '') {
		showAlert('Please fill the fields!', 'error');
	} else if (email.match(mailformat)) {
		showAlert('Valid Email Address!', 'success');
	} else {
		showAlert('You have entered an invalid email address!', 'error');
	}
}
function numVal() {
	let phnNumber = prompt('Enter your Phone Number');
	const numFormat = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;

	if (phnNumber === '') {
		showAlert('Please fill the fields!', 'error');
	} else if (phnNumber.match(numFormat)) {
		showAlert('Valid Phone Number!', 'success');
	} else {
		showAlert('Phone Number is not valid!', 'error');
	}
}
function codeVal() {
	let postCode = prompt('Enter your Postal Code');
	const postCodeFormat = /^\d{4}$/;

	if (postCode === '') {
		showAlert('Please fill the fields!', 'error');
	} else if (postCode.match(postCodeFormat)) {
		showAlert('Valid Postal Code!', 'success');
	} else {
		showAlert('Postal Code is not valid!', 'error');
	}
}

function showAlert(message, className) {
	let div = document.createElement('div');
	div.className = `alert ${className}`;
	div.appendChild(document.createTextNode(message));
	let container = document.querySelector('.container');
	let home = document.querySelector('.topnav');
	insertAfter(div, home);

	setTimeout(() => {
		document.querySelector('.alert').remove();
	}, 3000);
}

function insertAfter(newNode, existingNode) {
	existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
