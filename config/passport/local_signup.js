
/*
 * Passport - Local 회원가입 설정
 */

var LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
	usernameField : 'email',
	passwordField : 'password',
	passReqToCallback : true 
}, function(req, email, password, done) {
	var paramName = req.param('name');
	console.log('passport의 local-signup 호출됨 : ' + email + ', ' + password + ', ' + paramName);
	
	process.nextTick(function() {
		var database = req.app.get('database');
		database.UserModel.findOne({'email': email}, function (err, user) {
			// 에러 발생 시
			if (err) {
				return done(err);
			}

			var reg = /[\w]+@[\w]+/g;
			var result = email.match(reg);
			// 이메일이 아닌 string인 경우
			if(!result){
				console.log('올바른 계정 형식이 아닙니다!');
				return done(null, false, req.flash('signupMessage', '올바른 계정을 입력해주세요.'));
			}
			result = result[0].split('@');
			if(result[1] == "ajou" || result[1] || "naver" || result[1] == "google" || result[1]== "hanmail"){
				console.log('올바른 계정');
			}
			else{
				console.log('올바른 계정 형식이 아닙니다!');
				return done(null, false, req.flash('signupMessage', '허용된 메일 계정이 아닙니다.'));
			}

			// 기존에 이메일이 있는 경우
			if (user) {
				console.log('계정이 중복되었습니다!');
				return done(null, false, req.flash('signupMessage', '계정이 이미 존재합니다.'));
			} else {
				//닉네임 검사
				database.UserModel.findOne({'name': paramName}, function (err, user) {
					if (user) {
						console.log('닉네임이 중복되었습니다!');
						return done(null, false, req.flash('signupMessage', '닉네임이 이미 존재합니다.'));
					}

					// 모델 인스턴스 객체 만들어 저장
					else {
						var user = new database.UserModel({'email': email, 'password': password, 'name': paramName});
						user.save(function (err) {
							if (err) {
								throw err;
							}
							console.log("사용자 데이터 추가함.");
							return done(null, user);
						});
					}
				});
			} // else
		}); // findOne
	}); // tick
});
