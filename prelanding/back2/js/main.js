function getCookie(t) {
	var e = document.cookie.match(
		new RegExp(
			"(?:^|; )" +
				t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
				"=([^;]*)"
		)
	);
	return e ? decodeURIComponent(e[1]) : void 0;
}
function randRange(t) {
	return t[Math.floor(t.length * Math.random())];
}
function lastpack(t) {
	var e = $(".lastpack"),
		o = getCookie("lastpack"),
		a = new Array(2e3, 13e3, 15e3, 7e3, 6e3, 11e3);
	if (null == o) document.cookie = t;
	else t = o;
	1 < t ? (t--, (document.cookie = "lastpack=" + t), e.text(t)) : e.text(1),
		clearInterval(timer),
		(timer = setInterval(lastpack, randRange(a), t));
}
$(document).ready(function () {
	$(function () {
		var t = "healthpeak_countdownReset",
			e = "healthpeak_countdownEnd",
			o = new Date().getTime(),
			a = localStorage.getItem(t);
		if (null == a) localStorage.setItem(t, o);
		else if (36e4 < o - a) {
			var n = new Date().getTime() + 3e5;
			localStorage.setItem(e, n), localStorage.setItem(t, o);
		}
		if (localStorage.getItem(e)) n = localStorage.getItem(e);
		else n = new Date().getTime() + 3e5;
		$(".countdown")
			.countdown(n, function (t) {
				$(this).html(
					t.strftime(
						'<div class="countdown__item hour">%H</div><div class="countdown__item minute">%M</div><div class="countdown__item second">%S</div>'
					)
				);
			})
			.on("update.countdown", function (t) {
				(n = t.finalDate.getTime()), localStorage.setItem(e, n);
			})
			.on("finish.countdown", function (t) {
				$(".countdown").countdown("stop");
			});
	}),
		$(".my_btn").click(function () {
			var t = $(this).attr("href"),
				e = $(t).offset().top;
			return (
				jQuery("html:not(:animated),body:not(:animated)").animate(
					{ scrollTop: e },
					1e3
				),
				!1
			);
		}),
		$(function () {
			var t = $("[data-gif]");
			$.each(t, function (t, e) {
				var o = $(e).data("gif");
				$(e).attr("src", o);
			});
		});
});
var timer = setInterval(lastpack, 0, 265);
$(".click").click(function () {
	$(".blackout").addClass("active"), $(".popup").addClass("active");
}),
	$(".blackout").click(function () {
		$(".blackout").removeClass("active"), $(".popup").removeClass("active");
	});
