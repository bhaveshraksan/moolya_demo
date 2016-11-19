 /**
 * Created by Mohammed.Mohasin on 18/11/16.
 */

/* Sample JSON: 
{
 	from: getFromEmailAddress(),
 	to: "mohammed.mohasin@raksanconsulting.com",
 	subject: "Message Subject",
 	text: "Message Body"
 }
 */
 SMTPEmail = (function(){
 	var SMTPEmailClass = function(){

 	};	
 	SMTPEmailClass.prototype.send = function(email){
 		Email.send(this._createEmailJSON(email));
 	};
    
    SMTPEmailClass.prototype.sendHTML = function(email){
        Email.send(this._createEmailHTML(email));
    };

 	SMTPEmailClass.prototype._createEmailJSON = function(email){
		return {

				"from": email.from||"noreply@moolya.in",
				"to": email.to,
				"subject": email.subject,
    			"text": email.text	
		};
	};

	SMTPEmailClass.prototype._createEmailHTML = function(email){
        return {
               "from": email.from||"noreply@moolya.in",
				"to": email.to,
				"subject": email.subject,
    			"html": email.html	
               
            }
    };

 	return SMTPEmailClass;
 })();
 

MoolyaEmailSys = (function(){
    var MoolyaEmailSysClass = function(){
        
    };
    MoolyaEmailSysClass.prototype._smtpSys = new SMTPEmail();
    MoolyaEmailSysClass.prototype.send = function(email){
        if(email){
            this._smtpSys.send(email);
        }
    };
    MoolyaEmailSysClass.prototype.sendHTML = function(email){
        if(email){
            this._smtpSys.sendHTML(email);
        }
    };
    return MoolyaEmailSysClass;
})();



Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://noreply:RakSan123$@smtp.raksanconsulting.com:465';
});

