var express = require('express');
var router = express.Router();
var MercadoLibre = require('mercadolibre');
var redirectURI = 'https://www.sensacional.com';
var MercadoLibre_API = new MercadoLibre.Meli('5813538412472838', 'ZAzADzd0sNNtANuK0XugTepmZjPycUvE');
var MercadoLibre_AuthURL = MercadoLibre_API.getAuthURL(redirectURI);
//TG-5818d374e4b0e12c9a2948cb-186159953

console.log('>'+MercadoLibre_AuthURL);

MercadoLibre_API.authorize('TG-5818d374e4b0e12c9a2948cb-186159953', redirectURI, function(err, body){
	console.log(err);
	console.log(body);

	/*here is received
	{ access_token: 'APP_USR-5813538412472838-110113-953cc99d19f6d53ab54997d8614fd4b6__A_K__-186159953',
	  token_type: 'bearer',
	  expires_in: 21600,
	  scope: 'offline_access read write',
	  user_id: 186159953,
	  refresh_token: 'TG-5818d55be4b05f92b13b958c-186159953' }
	*/
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/crear', function(req, res, next) {
	res.end();
});

router.get('/listar', function(req, res, next) {
	res.end();
});

router.get('/ver/:id', function(req, res, next) {
	res.end();
});

router.put('/actualizar/:id', function(req, res, next) {
	res.end();
});

router.delete('/eliminar/:id', function(req, res, next) {
	res.end();
});

module.exports = router;
