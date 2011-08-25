/*!
 * jQuery Orientation plugin v0.1 alpha
 * http://360fun.net/
 *
 * Copyright 2011, Francesco Marino
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */



jQuery.orientation = function (callback) {
	
	if( window.DeviceOrientationEvent || window.DeviceMotionEvent || window.MozOrientation ){

		if(jQuery.isFunction(callback)) {
			// Safari Mobile
			if (window.DeviceMotionEvent) {
		        window.addEventListener('devicemotion', function (event) {
		            callback.call(this, [-event.accelerationIncludingGravity.x * 2, -event.accelerationIncludingGravity.y * 2, -event.accelerationIncludingGravity.z * 2, ]);
		        }, true);
		    // Chrome
		    } else if (window.DeviceOrientationEvent) {
		        window.addEventListener('deviceorientation', function (event) {
		            callback.call(this, [-event.gamma, -event.beta, -event.alpha]);
		        }, true);
		    // Firefox
		    } else {
		        window.addEventListener('MozOrientation', function (orientation) {
		            callback.call(this, [-orientation.x * 50, -orientation.y * 50, -orientation.z * 50]);
		        }, true);
	  	  	}
	    }
	    
	    return true;
	} else {
		return false;
	}

};