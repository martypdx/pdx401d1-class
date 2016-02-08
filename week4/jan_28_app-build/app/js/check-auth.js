var token = window.sessionStorage.token || window.localStorage.token;

if ( !token ) {
	redirectToLogin();
}

export default function redirectToLogin() {
	window.location.assign( 'login.html' );
}