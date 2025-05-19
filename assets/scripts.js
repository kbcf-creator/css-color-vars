const colorsByName = {
	'--burnt-out': '#662108',
	'--burnt-jaywalk': '#a3340d',
	'--jaywalk': '#d85427',
	'--blossom': '#f9a241',
	'--pudding': '#f9cf62',
	'--summer': '#ffe49d',
	'--peach': '#fff1d0',
	'--cider': '#fff7e3',
	'--midnight': '#172d35',
	'--matins': '#234652',
	'--dusk': '#405c67',
	'--deep': '#09a098',
	'--poseidon': '#00b3ab',
	'--thetis': '#77e6e0',
	'--air': '#d0efec',
	'--powder': '#e3f8f8',
	'--puff': '#f1fcfc',
	'--george': '#1e4e44',
	'--ulysses': '#347208',
	'--benjamin': '#94cc3f',
	'--abraham': '#d1ed7e',
	'--harriet': '#e7f5be',
	'--alexander': '#f6fbe5',
	'--ansel': '#55727b',
	'--platon': '#798f8f',
	'--casablanca': '#92b8b8',
	'--hitchcock': '#bdcccc',
	'--lange': '#d0dbdb',
	'--brady': '#dfeaea',
	'--mapplethorpe': '#edf4f4',
	'--arnold': '#f7fafa',
  'black': 'black',
  'white': 'white'
}

const colorsByType = {
  '--shade-1': 'white',
	'--shade-2': '--arnold',
	'--shade-3': '--mapplethorpe',
	'--shade-4': '--brady',
	'--shade-5': '--lange',
	'--shade-6': '--hitchcock',
	'--shade-7': '--casablanca',
	'--shade-8': '--platon',
	'--shade-9': '--ansel',
	'--shade-10': '--matins',
	'--shade-11': '--midnight',
	'--accent-1': 'white',
	'--accent-2': '--puff',
	'--accent-3': '--powder',
	'--accent-4': '--air',
	'--accent-5': '--thetis',
	'--accent-6': '--poseidon',
	'--accent-7': '--deep',
	'--nav-1': 'white',
	'--nav-2': '--alexander',
	'--nav-3': '--harriet',
	'--nav-4': '--abraham',
	'--nav-5': '--benjamin',
	'--nav-6': '--ulysses',
	'--alert-1': 'white',
	'--alert-2': '--cider',
	'--alert-3': '--peach',
	'--alert-4': '--summer',
	'--alert-5': '--pudding',
	'--alert-6': '--blossom',
	'--alert-7': '--jaywalk',
	'--alert-8': '--burnt-jaywalk',
	'--alert-9': '--burnt-out',
	'--green-1': '--alexander',
	'--green-2': '--harriet',
	'--green-3': '--abraham',
	'--green-4': '#c0e483',
	'--green-5': '--benjamin',
	'--green-6': '--ulysses',
	'--yellow-1': '--cider',
	'--yellow-2': '--pudding',
	'--red-1': '#ffeff0',
	'--red-2': '#f9d7d9',
	'--red-3': '#ffb2b7',
	'--red-4': '#c5151d'
}

const colorsByTypeDarkMode = {
		'--shade-1': '--midnight',
		'--shade-2': '--matins',
		'--shade-3': '--dusk',
		'--shade-4': '--ansel',
		'--shade-5': '--platon',
		'--shade-6': '--casablanca',
		'--shade-7': '--hitchcock',
		'--shade-8': '--hitchcock',
		'--shade-9': '--brady',
		'--shade-10': '--mapplethorpe',
		'--shade-11': 'white',
		'--accent-1': '--midnight',
		'--accent-2': 'color-mix(in srgb, var(--poseidon) 15%, var(--matins))',
		'--accent-3': 'color-mix(in srgb, var(--poseidon) 40%, var(--matins))',
		'--accent-4': 'color-mix(in srgb, var(--poseidon) 60%, var(--matins))',
		'--accent-5': 'color-mix(in srgb, var(--poseidon) 80%, var(--matins))',
		'--accent-6': '--poseidon',
		'--accent-7': '--thetis',
		'--nav-1': '--midnight',
		'--nav-2': '--george',
		'--nav-3': '--ulysses',
		'--nav-4': '--benjamin',
		'--nav-5': '--abraham',
		'--nav-6': '--harriet',
		'--alert-1': '--burnt-out',
		'--alert-2': '--burnt-jaywalk',
		'--alert-3': '--jaywalk',
		'--alert-4': '#e96f1b',
		'--alert-5': '--blossom',
		'--alert-6': '--pudding',
		'--alert-7': '#ffd76f',
		'--alert-8': '--summer',
		'--alert-9': 'white',
		'--green-1': '--ulysses',
		'--green-2': '--benjamin',
		'--green-3': '#c0e483',
		'--green-4': '--abraham',
		'--green-5': '--harriet',
		'--green-6': '--alexander',
		'--yellow-1': '--pudding',
		'--yellow-2': '--peach',
		'--red-1': '#c5151d',
		'--red-2': '#ffa9af',
		'--red-3': '#f9c5c9',
		'--red-4': '#f9d7d9'
}

const colorsByToken = {
	'--bg-primary': '--shade-1',
	'--bg-selected': 'color-mix(in srgb, var(--shade-4) 65%, transparent)',
	'--bg-selected-intense': '--accent-7',
	'--bg-selected-alt': '--accent-3',
	'--bg-selected-nav': '--nav-2',
	'--bg-alert': '--alert-7',
	'--bg-cta-intense': '--alert-7',
	'--bg-cta-error': '--red-4',
	'--bg-cta': '--accent-7',
	'--bg-scrollbar': '--shade-4',
	'--bg-pill': '--accent-2',
	'--bg-pill-read-only': '--shade-3',
	'--bg-scrollbar-hovered': '--shade-6',
	'--bg-overlay': 'color-mix(in srgb, black 90%, transparent)',
	'--bg-overlay-subtle': 'color-mix(in srgb, black 50%, transparent)',
	'--bg-error': '--red-1',
	'--bg-warning': '--alert-2',
	'--bg-success': '--green-1',
	'--bg-info': '--accent-2',
	'--bg-progress-incomplete': '--shade-4',
	'--bg-progress-complete': '--accent-6',
	'--bg-range-selected': '--bg-selected-intense',
	'--bg-range-unselected': '--shade-4',
	'--bg-disabled': '--shade-3',
	'--bg-disabled-button': '--shade-6',
	'--bg-hovered': 'color-mix(in srgb, var(--shade-4) 65%, transparent)',
	'--bg-th': '--shade-3',
	'--bg-th-hovered': '--shade-4',
	'--bg-cta-hovered': '--accent-6',
	'--bg-cta-intense-hovered': '--alert-8',
	'--bg-text-button-hovered': '--shade-3',
	'--bg-diff-deletion': '--red-2',
	'--bg-diff-deletion-changed': '--red-3',
	'--bg-diff-addition': '--nav-2',
	'--bg-diff-addition-changed': '--green-4',
	'--bg-loading-bar': '--shade-6',
	'--bg-hover-in-selected': '--shade-2',
	'--bg-input': '--bg-primary',
	'--bg-priority-high': '--red-4',
	'--bg-priority-medium': '--yellow-2',
	'--bg-priority-low': '--green-5',
	'--bg-code': '--shade-10',
	'--bg-switch-off': '--shade-5',
	'--text-primary': '--shade-10',
	'--text-subtle': '--shade-9',
	'--text-selected': '--shade-10',
	'--text-selected-alt': '--shade-10',
	'--text-selected-nav': '--shade-10',
	'--text-alert': '--shade-1',
	'--text-cta': '--shade-1',
	'--text-cta-intense': '--shade-1',
	'--text-cta-error': 'white',
	'--text-disabled': '--shade-8',
	'--text-disabled-button': '--shade-3',
	'--text-placeholder': '--shade-7',
	'--text-error': '--red-4',
	'--text-error-verbose': '--text-primary',
	'--text-warning': '--shade-10',
	'--text-success': '--shade-10',
	'--text-info': '--shade-10',
	'--text-add-item': '--accent-7',
	'--text-link': '--accent-7',
	'--text-helptext': '--shade-9',
	'--text-code': '--accent-4',
	'--icon-subtle': '--shade-8',
	'--icon-subtle-hovered': '--shade-11',
	'--icon-intense': '--accent-7',
	'--icon-selected': '--shade-10',
	'--icon-disabled': '--shade-6',
	'--icon-warning': '--alert-8',
	'--icon-error': '--red-4',
	'--icon-success': '--green-5',
	'--border-primary': '--shade-5',
	'--border-subtle': '--shade-4',
	'--border-selected-intense': '--accent-6',
	'--border-selected-alt': '--alert-6',
	'--border-selected-nav': '--nav-4',
	'--border-selected-nav-intense': '--nav-5',
	'--border-tooltip': '--shade-7',
	'--border-pill': '--accent-4',
	'--border-pill-read-only': '--shade-4',
	'--border-success': '--nav-5',
	'--border-error': '--red-4',
	'--border-warning': '--alert-5',
	'--border-info': '--accent-4',
	'--border-input': '--shade-6',
	'--border-disabled': '--shade-5',
	'--border-entry-grid': '--shade-4',
	'--border-diff-deletion': '--red-4',
	'--border-diff-addition': '--nav-6',
	'--border-table': '--shade-3',
	'--outline-focused': '--shade-7',
	'--select-code': '--shade-9',
}

const colorsByTokenDarkModeOverrides = {
	'--border-primary': '--ansel',
	'--border-subtle': '--matins',
	'--text-link': '--thetis',
	'--bg-selected-alt': '--blossom',
	'--text-selected-alt': '--midnight',
	'--bg-priority-medium': '--yellow-1',
	'--bg-priority-high': '--red-2',
	'--bg-code': '--shade-2',
	'--bg-switch-off': '--shade-4',
	'--text-code': '--accent-7',
	'--select-code': '--shade-3',
	'--bg-overlay': 'color-mix(in srgb, var(--shade-3) 90%, transparent)',
	'--bg-overlay-subtle': 'color-mix(in srgb, var(--shade-3) 50%, transparent)',
	'--border-selected-nav-intense': '--benjamin',
	'--icon-subtle': '--casablanca',
	'--border-input': '--ansel',
	'--bg-input': '#1d3944',
	'--text-helptext': '--casablanca',
	'--text-subtle': '--casablanca',
	'--bg-error': '#8e0006',
	'--icon-error': '#ffabb0',
	'--border-error': '#ffabb0',
	'--bg-disabled': '--shade-2',
	'--bg-disabled-button': '--shade-4',
	'--text-disabled': '--shade-5',
	'--text-disabled-button': '--shade-2',
	'--icon-disabled': '--shade-5',
	'--border-disabled': '--shade-3'
}

const colorsByTokenDarkMode = {...colorsByToken, ...colorsByTokenDarkModeOverrides}

const colorsByOrder = [
  ['white', 'black'],
	[	'--midnight',	'--matins', '--dusk'],
	['--ansel', '--platon', '--casablanca', '--hitchcock', '--lange', '--brady', '--mapplethorpe', '--arnold'],
	['--deep', '--poseidon', '--thetis', '--air', '--powder', '--puff'],
	['--burnt-out', '--burnt-jaywalk', '--jaywalk'],
	['--blossom', '--pudding', '--summer', '--peach', '--cider'],
	['--george', '--ulysses', '--benjamin', '--abraham', '--harriet', '--alexander']
];


document.addEventListener('DOMContentLoaded', () => {
	let colorElements;

  const colorContainer = document.getElementById('color-container');
	const searchInput = document.getElementById('search');

  // Create color elements in order, with breaks between groups
	const initColors = () => {
		const storedDarkMode = localStorage.getItem('dark-mode');
		colorContainer.innerHTML = ''; // Clear previous colors
		searchInput.value = ''; // Clear search input
		let useColorsByType = colorsByType;
		let useColorsByToken = colorsByToken;
		if (storedDarkMode === 'dark') {
			useColorsByType = colorsByTypeDarkMode;
			useColorsByToken = colorsByTokenDarkMode;
		}
		colorsByOrder.forEach((group, groupIdx) => {
			group.forEach((colorName) => {
				// Find the type(s) whose value matches this colorName
				const colorType = Object.keys(useColorsByType).filter(
					(type) => {
						//useColorsByType[type] === colorName
						const value = useColorsByType[type];
						// Direct match to a color name
						if (colorName === value) return true;
						// color-mix or other string containing a var reference
						if (typeof value === 'string') {
							// Check for var(--name)
							if (value.includes(`var(${colorName})`)) return true;
							// Check for direct color name (for 'black', 'white', etc.)
							if (colorName === 'black' || colorName === 'white') {
								return value.includes(colorName);
							}
						}
					}
				).map((type) => {
					const value = useColorsByType[type];
					if (typeof value === 'string' && value.includes('color-mix')) {
						return `${type}<br><small>(mix: ${value.replace('color-mix(in srgb, ', '')}</small>`;
					}
					return type;
				});
				// Find the token(s) whose value matches this type
				const colorToken = Object.keys(useColorsByToken)
					.filter((token) => {
						const value = useColorsByToken[token];
						// Direct match to a type
						if (colorType.includes(value)) return true;
						// color-mix or other string containing a var reference
						if (typeof value === 'string') {
							// Check for var(--type)
							if (colorType.some(type => value.includes(`var(${type})`))) return true;
							// Check for direct color name (for 'black', 'white', etc.)
							if (colorName === 'black' || colorName === 'white') {
								return value.includes(colorName);
							}
						}
						return false;
					})
					.map((token) => {
						const value = useColorsByToken[token];
						if (typeof value === 'string' && value.includes('color-mix')) {
							return `${token}<br><small>(mix: ${value.replace('color-mix(in srgb, ', '')}</small>`;
						}
						return token;
					});
				const colorDiv = document.createElement('div');
				colorDiv.classList.add('color');
				colorDiv.setAttribute('data-color', colorName);
				colorDiv.style.backgroundColor = colorsByName[colorName];
				colorDiv.innerHTML = `
					<h2 class="copyValue">${colorName}</h2>
					${colorToken.length ? 
						`<div>
						<h3>Tokens</h3>
						<ul>
							<li class="copyValue">${colorToken.join('</li><li class="copyValue">')}</li>
						</ul>` : ''}
					${colorType.length ? 
						`<h3>Types</h3>
						<ul>
							<li class="copyValue">${colorType.join('</li><li class="copyValue">')}</li>
						</ul>` : ''}
						</div>`;
				colorContainer.appendChild(colorDiv);
			});
			// Add a break between groups, except after the last group
			if (groupIdx < colorsByOrder.length - 1) {
				const groupBreak = document.createElement('hr');
				/* groupBreak.style.gridColumn = '1 / -1';
				groupBreak.style.height = '24px'; */
				colorContainer.appendChild(groupBreak);
			}
		});
	colorElements = document.querySelectorAll('.color');
	}

	initColors();

  // Copy value to clipboard
  const copyValueElements = document.querySelectorAll('.copyValue');
  copyValueElements.forEach((element) => {
    element.addEventListener('click', () => {
      //const value = element.innerText;
      // Copy value without the "color-mix" part
      console.log(element.innerText);
      const value = element.innerText.replace(/\n\(mix:.*/, '');
      console.log(value);
      navigator.clipboard.writeText(value).then(() => {
        // Show toast message
        const toast = document.createElement('div');
        toast.classList.add('toast', 'fade-in');
        toast.innerText = `Copied: ${value}`;
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.classList.remove('fade-in');
          toast.classList.add('fade-out');
          setTimeout(() => {
            document.body.removeChild(toast);
          }, 500);
        }, 1000);
      }).catch((err) => {
        console.error('Error copying text: ', err);
      });
    });
  });

	// Search functionality
	searchInput.addEventListener('input', function() {
			const searchTerm = this.value.toLowerCase();
			colorElements.forEach((colorElement) => {
					const colorName = colorElement.getAttribute('data-color').toLowerCase();
					// Get tokens and types text from inside the color element
					const tokensText = Array.from(colorElement.querySelectorAll('ul li'))
							.map(li => li.textContent.toLowerCase())
							.join(' ');
					// Match if search term is in color name, tokens, or types
					if (
							colorName.includes(searchTerm) ||
							tokensText.includes(searchTerm)
					) {
							colorElement.style.display = '';
					} else {
							colorElement.style.display = 'none';
					}
			});

			// Hide <hr>s that have no visible .color after them
			const container = document.getElementById('color-container');
			const children = Array.from(container.children);
			let foundVisible = false;
			for (let i = children.length - 1; i >= 0; i--) {
					const el = children[i];
					if (el.classList && el.classList.contains('color') && el.style.display !== 'none') {
							foundVisible = true;
					}
					if (el.tagName === 'HR') {
							el.style.display = foundVisible ? '' : 'none';
							foundVisible = false;
					}
			}
	});

	// Background Toggle Local Storage
	const storedBackground = localStorage.getItem('background');
	const backgroundColorToggle = document.getElementById('background-color-toggle');
	backgroundColorToggle.addEventListener('click', function() {
		const body = document.body;
		if (body.classList.contains('dark-bg')) {
			body.classList.remove('dark-bg');
			localStorage.setItem('background', 'light');
		} else {
			body.classList.add('dark-bg');
			localStorage.setItem('background', 'dark');
		}
	});
	backgroundColorToggle.checked = storedBackground === 'dark';
	if (storedBackground === 'dark') {
		document.body.classList.add('dark-bg');
	} else {
		document.body.classList.remove('dark-bg');
	}

	// Darkmode Color Toggle Local Storage
	const darkModeToggle = document.getElementById('dark-mode-color-toggle');
	const storedDarkMode = localStorage.getItem('dark-mode');
	darkModeToggle.addEventListener('click', function() {
		const body = document.body;
		if (body.classList.contains('dark-mode')) {
			body.classList.remove('dark-mode');
			localStorage.setItem('dark-mode', 'light');
		} else {
			body.classList.add('dark-mode');
			localStorage.setItem('dark-mode', 'dark');
		}
		initColors();
	});
	darkModeToggle.checked = storedDarkMode === 'dark';
	if (storedDarkMode === 'dark') {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}

	// Set the initial dark mode color based on the toggle state
	if (darkModeToggle.checked) {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}
});