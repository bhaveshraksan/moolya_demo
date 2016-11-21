/**
 * stepsForm.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

	'use strict';

	var transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function stepsForm( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	stepsForm.prototype.options = {
		onSubmit : function() { return false; }
	};

	stepsForm.prototype._reset =function() {

		this.current = 0;

		// show first question
		for(var i=0;i<this.questionsCount;i++){
			classie.removeClass(this.questions[i], 'current');
		}
		//classie.removeClass(this.questions, 'current');
		classie.addClass( this.questions[0], 'current' );
		// next question control
		this.ctrlNext = this.el.querySelector( 'button.next' );

		// progress bar
		this.progress = this.el.querySelector( 'div.progress' );

		// question number status
		this.questionStatus = this.el.querySelector( 'span.number' );
		// current question placeholder
		this.currentNum = this.questionStatus.querySelector( 'span.number-current' );
		this.currentNum.innerHTML = Number( this.current + 1 );
		// total questions placeholder
		this.totalQuestionNum = this.questionStatus.querySelector( 'span.number-total' );
		this.totalQuestionNum.innerHTML = this.questionsCount;

		this.isFilled=false;

		this._progress();
		$('.form_nav li').removeClass('active_nav');
		$('.form_nav li:nth-of-type(1)').addClass('active_nav');
		$('.prev').removeClass('show');

	};

	stepsForm.prototype._init = function() {
		// current question
		this.current = 0;

		// questions
		this.questions = [].slice.call( this.el.querySelectorAll( 'ol.questions > li' ) );
		// total questions
		this.questionsCount = this.questions.length;
		// show first question
		classie.addClass( this.questions[0], 'current' );

		// next question control
		this.ctrlNext = this.el.querySelector( 'button.next' );

		// next question control
		this.ctrlPrev = this.el.querySelector( 'button.prev' );


		// progress bar
		this.progress = this.el.querySelector( 'div.progress' );

		// question number status
		this.questionStatus = this.el.querySelector( 'span.number' );
		// current question placeholder
		this.currentNum = this.questionStatus.querySelector( 'span.number-current' );
		this.currentNum.innerHTML = Number( this.current + 1 );
		// total questions placeholder
		this.totalQuestionNum = this.questionStatus.querySelector( 'span.number-total' );
		this.totalQuestionNum.innerHTML = this.questionsCount;

		// error message
		this.error = this.el.querySelector( 'span.error-message' );

		// init events
		this._initEvents();
	};

	stepsForm.prototype._initEvents = function() {
		var self = this,
			// first input
			firstElInput = this.questions[ this.current ].querySelector( 'input' ),
			// focus
			onFocusStartFn = function() {
				firstElInput.removeEventListener( 'focus', onFocusStartFn );
				classie.addClass( self.ctrlNext, 'show' );
			};

		// show the next question control first time the input gets focused
		firstElInput.addEventListener( 'focus', onFocusStartFn );

		// show next question
		this.ctrlNext.addEventListener( 'click', function( ev ) {
			ev.preventDefault();
			self._nextQuestion();
		} );

		this.ctrlPrev.addEventListener( 'click', function( ev ) {
			ev.preventDefault();
			self._prevQuestion();
		} );

		// pressing enter will jump to next question
		document.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;
			// enter
			if( keyCode === 13 ) {
				ev.preventDefault();
				self._nextQuestion();
			}
		} );

		// disable tab
		this.el.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;
			// tab
			if( keyCode === 9 ) {
				ev.preventDefault();
			}
		} );
	};

	stepsForm.prototype._nextQuestion = function() {
		if( !this._validade() ) {
			return false;
		}

		// check if form is filled
		if( this.current === this.questionsCount - 1 ) {
			this.isFilled = true;
		}

		// clear any previous error messages
		this._clearError();

		// current question
		var currentQuestion = this.questions[ this.current ];

		// increment current question iterator
		++this.current;

		// update progress bar
		this._progress();

		if( !this.isFilled ) {
			// change the current question number/status
			this._updateQuestionNumber();
			var QNo = this.current + 1;
			$('.form_nav li').removeClass('active_nav');
			$('.form_nav li:nth-of-type('+ QNo +')').addClass('active_nav');
			// add class "show-next" to form element (start animations)
			classie.addClass( this.el, 'show-next' );
			if(QNo > 1){
				$('.prev').addClass('show');
			}else{
				$('.prev').removeClass('show');
			}

			// remove class "current" from current question and add it to the next one
			// current question
			var nextQuestion = this.questions[ this.current ];
			classie.removeClass( currentQuestion, 'current' );
			classie.addClass( nextQuestion, 'current' );
		}

		// after animation ends, remove class "show-next" from form element and change current question placeholder
		var self = this,
			onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				if( self.isFilled ) {
					self._submit();
				}
				else {
					classie.removeClass( self.el, 'show-next' );
					self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
					var elements = self.questionStatus.querySelectorAll(".number-next")||[];

					for(var i=0;i<elements.length;i++){
						self.questionStatus.removeChild(elements[i]);
					}
					//self.questionStatus.removeChild( self.nextQuestionNum );
					// force the focus on the next input
					nextQuestion.querySelector( '.reg_question' ).focus();

				}
			};

		if( support.transitions ) {
			this.progress.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else {
			onEndTransitionFn();
		}
	};


	stepsForm.prototype._prevQuestion = function() {
		/*if( !this._validade() ) {
		 return false;
		 }*/

		// check if form is filled
		/*if( this.current === this.questionsCount - 1 ) {
		 this.isFilled = true;
		 }*/

		// clear any previous error messages
		this._clearError();

		// current question
		var currentQuestion = this.questions[ this.current ];

		// increment current question iterator
		--this.current;


		// update progress bar
		this._progress();

		if( !this.isFilled ) {
			// change the current question number/status
			this._updateQuestionNumber();
			var QNo = this.current + 1;
			$('.form_nav li').removeClass('active_nav');
			$('.form_nav li:nth-of-type('+ QNo +')').addClass('active_nav');
			// add class "show-next" to form element (start animations)
			classie.addClass( this.el, 'show-next' );
			if(QNo > 1){
				$('.prev').addClass('show');
			}else{
				$('.prev').removeClass('show');
			}

			// remove class "current" from current question and add it to the next one
			// current question
			var nextQuestion = this.questions[ this.current ];
			classie.removeClass( currentQuestion, 'current' );
			classie.addClass( nextQuestion, 'current' );
		}

		// after animation ends, remove class "show-next" from form element and change current question placeholder
		var self = this,
			onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				if( self.isFilled ) {
					self._submit();
				}
				else {
					classie.removeClass( self.el, 'show-next' );
					self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
					var elements = self.questionStatus.querySelectorAll(".number-next")||[];

					for(var i=0;i<elements.length;i++){
						self.questionStatus.removeChild(elements[i]);
					}
					//self.questionStatus.removeChild( self.nextQuestionNum );
					// force the focus on the next input
					nextQuestion.querySelector( '.reg_question' ).focus();

				}
			};

		if( support.transitions ) {
			this.progress.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else {
			onEndTransitionFn();
		}
	};

	// updates the progress bar by setting its width
	stepsForm.prototype._progress = function() {
		this.progress.style.width = this.current * ( 100 / this.questionsCount ) + '%';
	}

	// changes the current question number
	stepsForm.prototype._updateQuestionNumber = function() {
		// first, create next question number placeholder
		this.nextQuestionNum = document.createElement( 'span' );
		this.nextQuestionNum.className = 'number-next';
		this.nextQuestionNum.innerHTML = Number( this.current + 1 );
		// insert it in the DOM
		this.questionStatus.appendChild( this.nextQuestionNum );
	}

	// submits the form
	stepsForm.prototype._submit = function() {
		this.options.onSubmit( this.el );
	}

	// TODO (next version..)
	// the validation function
	stepsForm.prototype._validade = function() {
		var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var mobileRegex = /^\+?([0-9]{2,3})?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		// current question´s input
		var input = this.questions[ this.current ].querySelector( '.reg_question' ).value;

		if(this.current===7||this.current===8||this.current===9){
			return true;
		}

		if( input === '' ) {
			this._showError( 'EMPTYSTR' );
			return false;
		}
		if(this.current == 1){
			var mobile = this.questions[ this.current ].querySelector( '.reg_question' ).value;
			if (!mobileRegex.test(mobile)) {
				this._showError( 'NOTVALIDMOB' );
				return false;
			}
		}
		if(this.current == 2){
			var email = this.questions[ this.current ].querySelector( '.reg_question' ).value;
			if (!emailRegex.test(email)) {
				this._showError( 'INVALIDEMAIL' );
				return false;
			}
			$('#q6').val($('#q3').val());
		}

		return true;
	};

	// TODO (next version..)
	stepsForm.prototype._showError = function( err ) {
		var message = '';
		switch( err ) {
			case 'EMPTYSTR' :
				message = 'please fill the field before continuing';
				break;
			case 'INVALIDEMAIL' :
				message = 'please fill a valid email address';
				break;
			case 'NOTVALIDMOB' :
				message = 'please fill a valid phone number';
				break;
			// ...
		};
		this.error.innerHTML = message;
		classie.addClass( this.error, 'show' );
	}

	// clears/hides the current error message
	stepsForm.prototype._clearError = function() {
		classie.removeClass( this.error, 'show' );
	}

	// add to global namespace
	window.stepsForm = stepsForm;

})( window );