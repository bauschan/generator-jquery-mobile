require.config({
	paths: {
		jquery: 'libs/jquery',
		jqueryMobile: 'libs/jquery.mobile-1.3.2'
	},
  shim: {
	"libs/jquery.mobile-1.3.2'" : { deps: ["jquery"], exports: 'jquery' },
  }
});

require(["jquery",
	"jqueryMobile",
], function ($) {
  console.log('jQuery version ' + $().jquery + ' installed');
});