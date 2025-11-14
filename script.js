(() => {
	const formSection = document.querySelector("#form");
	const tabsWrapper = formSection.querySelector(".tabs");
	const tabHeaders = tabsWrapper.querySelector(".tab-headers");
	const tabsContent = tabsWrapper.querySelector(".tabs-content");

	// using event delegation
	formSection.addEventListener("click", ({ target }) => {
		if (!target.classList.contains("tab-header")) return;
		const { toggle } = target.dataset;
		if (!toggle) {
			throw new Error(
				"The data-toggle attribute expected for a tab-header, instead got " +
					(toggle !== "" ? toggle : "an empty string")
			);
		}

		const content = tabsContent.querySelector(toggle);
		if (!content) {
			throw new Error(
				`Failed to find ${toggle} in the tabs-content div. Please ensure you have provided a valid CSS selector for the data-toggle attribute.`
			);
		}

		removeActiveClasses(tabHeaders.children);
		removeActiveClasses(tabsContent.children);

		target.classList.add("active");
		content.classList.add("active");
	});

	function removeActiveClasses(elementList) {
		Array.from(elementList).forEach((node) => node.classList.remove("active"));
	}
})();
