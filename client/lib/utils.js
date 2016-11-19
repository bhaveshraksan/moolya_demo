PAGE_LIMIT = 10; 
this.MlUtils = function () {
    var MlUtilsClass = function () {
        
    };
    
    MlUtilsClass.prototype.cleanFieldName = function (field) {
        // for field names with a dot, we just need
        // the top level field name
        var dot = field.indexOf(".");
        if (dot !== -1) {
            field = field.slice(0, dot);
        }

        // If it's referencing an array, strip off the brackets
        field = field.split('[')[0];

        return field;
    };
    
    MlUtilsClass.prototype.showMoreButtonVisible = function (opts, limit, selectorClass,templateInstance) {
        var force = opts.force || false;
        var threshold, target = $(selectorClass);
        if (!target.length) return;
        threshold = $(window).scrollTop() + $(window).height() - target.height();
        if (force || target.offset().top < threshold + 1) {
            $(selectorClass).find("button").attr("disabled", true);
            templateInstance.pageLimit.set("count", templateInstance.pageLimit.get("count") + PAGE_LIMIT);
        }
    };
    
    MlUtilsClass.prototype.stickFooterAtBottom = function () {
        $('.smart_admin .main_menu').height($(window).height()-$('.smart_admin .header').outerHeight(true)-$('.smart_admin .footer').outerHeight(true)-1).css({});
        $('.smart_admin .swiper_tab_content').height($(window).height()-$('.smart_admin .header').outerHeight(true)-$('.smart_admin .swiper_tabs').outerHeight(true)-$('.smart_admin .Calphabets').outerHeight(true)-$('.smart_admin .footer').outerHeight(true)-18).css({'overflow':'auto'});
        $('.smart_admin .main_content_div.with_no_tabs').height($(window).height()-$('.smart_admin .header').outerHeight(true)-$('.smart_admin .swiper_tabs').outerHeight(true)-$('.smart_admin .Calphabets').outerHeight(true)-$('.smart_admin .footer').outerHeight(true)-18).css({'overflow':'auto'});
    };

    MlUtilsClass.prototype.updateFloatingLabel = function () {
        setInterval(function () {
            $('.floating-labe1 .form-control').each(function () {
                if( $(this).val() && $(this).val()!= "" && $(this).val().length > 0){
                    $(this).parents('.form-group').toggleClass('focused', true);
                }
            })
        })
        $('.floating-labe1 .form-control').on('focus blur', function (e) {
            $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus'));
        }).trigger('blur');

        $('.floating-labe1 .form-control').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'))
                .attr('placeholder', '');
        }).blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    };
    
    MlUtilsClass.prototype.swiperTab = function () {
        var mySwiper = new Swiper('.swiper_tabs,.Calphabets,.global_customer_tabs', {
            speed: 400,
            slidesPerView: 'auto',
            loop: false,
            spaceBetween: 1
        });
        var RM = new Swiper('.RM', {
            pagination: '.swiper-pagination1',
            paginationClickable: true,
            spaceBetween: 30
        });
    };
    MlUtilsClass.prototype.attachSelect2 = function (element,options) {
        if(options){
            element.select2(options)    
        }else{
            element.select2({});
        }
        
    };
    MlUtilsClass.prototype.getFormValues = function (formObject, submitCallback) {
        
            var values = {};
            formObject.find("input,select,textarea").each(function () {
                var inputObject = $(this);
                var fieldName = inputObject.attr("name");
                var fieldValue = $.trim(inputObject.val());
                if (inputObject.attr("type") == "checkbox") {
                    // auto set data type for checkbox
                    if (!inputObject.attr("data-type")) {

                        // single checkbox with that name means dataType="BOOL" else it is "ARRAY"
                        if (formObject.find("input[name='" + fieldName + "']").length == 1 && !inputObject.attr("data-custom")) {
                            dataType = "BOOL";
                        }
                        else {
                            dataType = "ARRAY";
                        }
                    }
                    if (dataType == "BOOL") fieldValue = inputObject.is(":checked");
                    if (dataType == "ARRAY") fieldValue = inputObject.is(":checked") ? fieldValue : "off";
                    if (dataType == "ARRAY") {
                        if ($.isArray(values[fieldName]) && values[fieldName].length != 0) {
                            if (fieldValue != "") {
                                values[fieldName].push(fieldValue)
                            }
                        } else {
                            values[fieldName] = [];
                            if (fieldValue != "") {
                                values[fieldName].push(fieldValue)
                            }

                        }
                    } else {
                        values[fieldName] = fieldValue;
                    }

                } else if (inputObject.attr("type") == "radio") {
                    if (inputObject.is(":checked")) {
                        values[fieldName] = $.trim(fieldValue);
                    }
                } else {
                    if(!inputObject.attr("data-custom") ){
                        values[fieldName] = $.trim(fieldValue);
                    }else{
                        dataTypeInput = "ARRAY";
                        if(dataTypeInput == "ARRAY"){
                            if ($.isArray(values[fieldName]) && values[fieldName].length != 0) {
                                values[fieldName].push($.trim(fieldValue))

                            } else {
                                values[fieldName] = [];

                                values[fieldName].push($.trim(fieldValue))


                            }
                        }else{
                            values[fieldName] = $.trim(fieldValue);
                        }
                    }

                }
            });
            if (submitCallback) {
                submitCallback(values);
            }

        
    };

    MlUtilsClass.prototype.attachdatepicker = function (element,config) {
        element.datepicker(config).on('hide.bs.modal', function(event) {
            // prevent datepicker from firing bootstrap modal "show.bs.modal"
            event.stopPropagation();
        }).on("show.bs.modal", function (event) {
            event.stopPropagation();
        });


    };
    MlUtilsClass.prototype.mytest = function (o) {
        var oo = {}, t, parts, part;
        for (var k in o) {
            t = oo;
            parts = k.split('.');
            var key = parts.pop();
            while (parts.length) {
                part = parts.shift();
                t = t[part] = t[part] || {};
            }
            t[key] = o[k]
        }
        return oo;
    };

    MlUtilsClass.prototype.getFormValuesBySchema = function (formObject, submitCallback) {
        formObject.find("input,select,textarea").each(function () {
            var inputObject = $(this);
            var fieldName = inputObject.attr("name");
            var fieldValue = $.trim(inputObject.val());
            if (inputObject.attr("type") == "checkbox") {
                // auto set data type for checkbox
                if (!inputObject.attr("data-type")) {

                    // single checkbox with that name means dataType="BOOL" else it is "ARRAY"
                    if (formObject.find("input[name='" + fieldName + "']").length == 1 && !inputObject.attr("data-custom")) {
                        dataType = "BOOL";
                    }
                    else {
                        dataType = "ARRAY";
                    }
                }
                if (dataType == "BOOL") fieldValue = inputObject.is(":checked");
                if (dataType == "ARRAY") fieldValue = inputObject.is(":checked") ? fieldValue : "off";
                if (dataType == "ARRAY") {
                    if ($.isArray(values[fieldName]) && values[fieldName].length != 0) {
                        if (fieldValue != "") {
                            values[fieldName].push(fieldValue)
                        }
                    } else {
                        values[fieldName] = [];
                        if (fieldValue != "") {
                            values[fieldName].push(fieldValue)
                        }

                    }
                } else {
                    values[fieldName] = fieldValue;
                }

            } else if (inputObject.attr("type") == "radio") {
                if (inputObject.is(":checked")) {
                    values[fieldName] = $.trim(fieldValue);
                }
            } else {
                if(!inputObject.attr("data-custom") ){
                    values[fieldName] = $.trim(fieldValue);
                }else{
                    dataTypeInput = "ARRAY";
                    if(dataTypeInput == "ARRAY"){
                        if ($.isArray(values[fieldName]) && values[fieldName].length != 0) {
                            values[fieldName].push($.trim(fieldValue))

                        } else {
                            values[fieldName] = [];

                            values[fieldName].push($.trim(fieldValue))


                        }
                    }else{
                        values[fieldName] = $.trim(fieldValue);
                    }
                }

            }
        });
        if (submitCallback) {
            submitCallback(this.mytest(values));
        }

    }

    MlUtilsClass.prototype.mrSwiperTab = function () {
        var swiperLib = new Swiper('.swiperLib', {
            pagination: '.swiper-pagination1',
            slidesPerView: 10,
            paginationClickable: true,
            spaceBetween: 5,
        });
        var swiperAlphas = new Swiper('.swiperAlphas', {
            scrollbar: $(this).find('.swiper-scrollbar')[0],
            direction: 'vertical',
            slidesPerView: 20,
            mousewheelControl: true,
            freeMode: true
        })
    };

    MlUtilsClass.prototype.fixedContainer = function (){
        $('.moolya-container').height($(window).outerHeight(true)-85).css({'overflow':'auto'}).css({'overflow-x':'hidden'});
    }
    return MlUtilsClass;
}();
