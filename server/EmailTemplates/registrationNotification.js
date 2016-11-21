MoolyaNotifier = {
    moolyaUserRegistrationNotification: function (regId) {

        try {
            var userDetails = MlRegistration.findOne({_id: regId});
            var mail_body = "<html><body style='background:#f5f5f5;'>" +
                "<div style='max-width:900px;margin:0px auto;min-height:350px;border:1px solid #ce1936;font-family:arial;font-size:14px;background:#fff;width:90%'>" +
                " <div style='height:66px;border-bottom:1px solid #ce1936;'>" +
                "<a href='http://www.moolya.in/'><img src='http://www.moolya.in/v1/images/moolya_logo.png' width='142' style='float:left;margin:8px;' alt='moolya' title='moolya'></a>" +
                "<p style='float:right;padding-right:8px;'>" +
                "<a href='https://www.facebook.com/Moolya.in/' target='_blank'><img src='http://www.moolya.in/v1/images/fb.png' alt=''></a> " +
                "<a href='https://twitter.com/MoolyaIndia' target='_blank'><img src='http://www.moolya.in/v1/images/tw.png' alt=''></a> " +
                "<a href='https://plus.google.com/100338294320934125579' target='_blank'><img src='http://www.moolya.in/v1/images/gp.png' alt=''></a> " +
                "<a href='https://www.linkedin.com/company/moolya-india' target='_blank'><img src='http://www.moolya.in/v1/images/li.png' alt=''></a>" +
                " <a href='https://www.instagram.com/moolyaindia/' target='_blank'><img src='http://www.moolya.in/v1/images/ins.png' alt=''></a>" +
                " <a href='https://www.pinterest.com/moolyaindia/' target='_blank'><img src='http://www.moolya.in/v1/images/pi.png' alt=''></a>" +
                " <a href='https://www.youtube.com/channel/UCYWYMIOF3VeS8RTJkcYmXOg' target='_blank><img src='http://www.moolya.in/v1/images/yt.png' alt=''></a>" +
                "</p></div>" +
                "<div style='padding:8px;'>" +
                "<p style='color:#ce1936;font-size:16px;margin-bottom:20px;'><span style='color:#273545;'>hello</span> <b>"+userDetails.fullName+"</b></p>" +
                "  <p style='margin-bottom:8px;'>thanks for contacting us.<br> we will revert as soon as possible.</p>" +
                "<p style='margin-bottom:8px;line-height:22px;margin-bottom:25px;'>If this is an urgent requirement, please contact us at: +91-40-6551 8300 </p>" +
                "<p style='line-height:22px;'>good speed to you and us.,<br>" +
                "<span style='color:#ce1936'>- team moolya (<a style='color:#ce1936;text-decoration:none;' href='http://www.moolya.in/'>www.moolya.in</a>)</span></p>" +
                "<p style='font-size:11px;text-align:center;margin-top:25px;margin-bottom:10px;line-height:18px;'><em> Please do not reply to this email, since this is from an automated email system. <br>Please contact us at: startup@moolya.in, if you want to send us any further queries." +
                // “Please do not reply to this email, since this is from an automated email system. <br>Please contact us at: startup@moolya.in, if you want to send us any further queries.”+
                "</em></p> </div>" +
                "<div style='height:42px;line-height:42px;color:#fff;font-size:12px;background:#ce1936;text-align:center;'> <span>&copy; moolya - A division of raksan consulting private limited. 2016</span>"
            "</div> </div></body> </html>";


            //var fromEmail = "noreply@moolya.in";
            Meteor.setTimeout(function () {                                     // 18
                new MoolyaEmailSys().sendHTML({                                     // 19
                    to: userDetails.eMail,                                 // 21
                    subject: "thanks for contacting us – www.moolya.in.",
                    html: mail_body                                                   // 23
                });                                                                //
            }, 2 * 1000);

        } catch (e) {

        }
    },
    moolyaUserDetailsForAdminNotification: function (regId) {
        try {
            var userDetails = MlRegistration.findOne({_id: regId});
            var mail_body = "<html> <body style='background:#f5f5f5;'>"+
                "<div style='max-width:900px;margin:0px auto;min-height:350px;border:1px solid #ce1936;font-family:arial;font-size:14px;background:#fff;width:90%'>"+
                "<div style='height:66px;border-bottom:1px solid #ce1936;'>"+
                "<a href='http://www.moolya.in/'><img src='http://www.moolya.in/v1/images/moolya_logo.png' width='142' style='float:left;margin:8px;' alt='moolya' title='moolya'></a>"+
                "<p style='float:right;padding-right:8px;'>"+
                "<a href='https://www.facebook.com/Moolya.in/' target='_blank'><img src='http://www.moolya.in/images/fb.png' alt=''></a> <a href='https://twitter.com/MoolyaIndia' target='_blank'><img src='http://www.moolya.in/v1/images/tw.png' alt=''></a> <a href='https://plus.google.com/100338294320934125579' target='_blank'><img src='http://www.moolya.in/v1/images/gp.png' alt=''></a> <a href='https://www.linkedin.com/company/moolya-india' target='_blank'><img src='http://www.moolya.in/v1/images/li.png' alt=''></a> <a href='https://www.instagram.com/moolyaindia/' target='_blank'><img src='http://www.moolya.in/images/ins.png' alt=''></a> <a href='https://www.pinterest.com/moolyaindia/' target='_blank'><img src='http://www.moolya.in/v1/images/pi.png' alt=''></a> <a href='https://www.youtube.com/channel/UCYWYMIOF3VeS8RTJkcYmXOg' target='_blank'><img src='http://www.moolya.in/images/yt.png' alt=''></a>"+
                "  </p> </div>"+
                " <div style='padding:8px;'>"+
                "  <p style='color:#ce1936;font-size:16px;margin-bottom:20px;'><span style='color:#273545;'>hello</span> <b>administrator,</b></p>"+
                "  <p style='margin-bottom:8px;line-height:22px;margin-bottom:25px;'>"+
                "<b>name :</b>"+(userDetails.fullName||"")+"<br>"+
                "<b>mobile:</b>"+(userDetails.mobileNumber||"")+"<br>"+
                " <b>email:</b>"+(userDetails.eMail||"")+"<br>"+
                "<b>city:</b>"+(userDetails.city||"")+"<br>"+
                "<b>company name:</b>"+(userDetails.companyName||"")+"<br>"+
                "<b>company url:</b>"+(userDetails.companyUrl||"")+"<br>"+
                "<b>registration type:</b>"+(userDetails.regType||"")+"<br>"+
                "<b>password:</b>"+(userDetails.password||"")+"<br>"+
                "<b>username:</b>"+(userDetails.userName||"")+"<br>"+
                "<b>remarks:</b>"+(userDetails.message||"")+"<br>"+
                "<b>know about moolya:</b>"+(userDetails.referralType||"")+"</p>"+
                " <p style='line-height:22px;'>thank you,<br><span style='color:#ce1936'>"+userDetails.fullName+"</span></p></div>"+
                "<div style='height:42px;line-height:42px;color:#fff;font-size:12px;background:#ce1936;text-align:center;'><span>&copy; moolya - A division of raksan consulting private limited. 2016</span></div>"+
                "</div> </body> </html>";

            
                var contactTo='contactus@raksan.in';
           // var contactTo='muralidharreddy.kunduru@raksanconsulting.com';
           // var fromEmail = "noreply@moolya.in";
            Meteor.setTimeout(function () {                                     // 18
                new MoolyaEmailSys().sendHTML({                                     // 19
                    to: contactTo,                                 // 21
                    subject: "feedback: moolya.in",
                    html: mail_body                                                   // 23
                });                                                                //
            }, 2 * 1000);


        } catch (e) {

        }


    }
}
