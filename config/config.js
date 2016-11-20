
/*
 * 설정
 */


module.exports = {
	server_port: 3000,
	db_url: 'mongodb://52.78.103.203:27017/test',
	db_schemas: [
		{file:'./user_schema', collection:'users', schemaName:'UserSchema', modelName:'UserModel'}
	],
	route_info: [
	],
	facebook: {		// passport facebook
		clientID: '1846965425573878',
		clientSecret: '96f09fb630040d0d318005eaee577918',
		callbackURL: '/auth/facebook/callback',
		profileFields : ['id', 'displayName', 'emails']
	},
	twitter: {		// passport twitter
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: '/auth/twitter/callback'
	},
	google: {		// passport google
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: '/auth/google/callback'
	}
}