import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";
(() => {
	const swiper = new Swiper(".swiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				// swiper-pagination-bullet is styled via CSS
				return `<span class="${className}"></span>`;
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			addIcons: false,
		},
	});
})();
