document.addEventListener('DOMContentLoaded', () => {
	const quoteBtn = document.querySelector('.nav_contact');

	quoteBtn.addEventListener('click', (e) => {
		e.preventDefault();

		// Get exact button position
		const rect = quoteBtn.getBoundingClientRect();

		// Center of the button
		const originX = (rect.left + rect.width / 2) / window.innerWidth;
		const originY = (rect.top + rect.height / 2) / window.innerHeight;

		// Fire the confetti with a high zIndex
		const bursts = 6;
		for (let i = 0; i < bursts; i++) {
			setTimeout(() => {
				confetti({
					particleCount: 60,
					startVelocity: 30,
					spread: 70,
					origin: { x: originX, y: originY },
					zIndex: 2000,
					colors: ['#ffffff', '#008000', '#ff0000ed'],
					disableForReducedMotion: true,
				});
			}, i * 1);
		}

		// Smooth scroll to footer
		const contactSection = document.querySelector('#contacts');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
