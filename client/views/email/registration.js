Template.registration.events({
    "click .register_btn":function(e, t)
    {
        var adminUsersInfo={};
        var editAdminId = "";
    }

});

Template.registration.rendered=function(){

    $('.register_link').click(function () {
        $('.register_btn').click();
    });
    setTimeout(function () {
        $('.register_btn').show();
    }, 100);

    $('.register_btn').click(function () {
        if ($(this).hasClass('btn_form_open')) {
            $(this).removeClass('btn_form_open');
            $('.form_container').removeClass('register_form_open');
        } else {
            $(this).addClass('btn_form_open');
            $('.form_container').addClass('register_form_open');
        }
    });
    var theForm = document.getElementById('theForm');
    new stepsForm(theForm, {
        onSubmit: function (form) {
            new MlUtils().getFormValues($('#theForm'),function(data){
                var adminUsersInfo = {};
                adminUsersInfo.profile = {};
                adminUsersInfo.eMail            = data.q3;
                adminUsersInfo.password         = data.q7;
                adminUsersInfo.fullName         = data.q1;
                adminUsersInfo.mobileNumber     = data.q2;
                adminUsersInfo.userName         = data.q6;
                adminUsersInfo.city             = data.q4;
                adminUsersInfo.regType  = data.q5;
                adminUsersInfo.referralType = data.q8;
                Meteor.call("registerMoolyaUser", adminUsersInfo, function (err,res) {
                    if(!err){
                        document.getElementById("theForm").reset();
                        classie.addClass(theForm.querySelector('.simform-inner'), 'hide');
                        var messageEl = theForm.querySelector('.final-message');
                        messageEl.innerHTML = 'thank you! for registering with moolya.<br/>we will contact you shortly<br/>check for our email in your mailbox. ';
                        classie.addClass(messageEl, 'show');
                    }else{
                        toastr.error(err.reason);
                    }
                });
            });
        }
    });
}