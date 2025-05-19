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

const colorsByOrder = [
  ['white', 'black'],
	[	'--midnight',	'--matins', '--dusk'],
	['--deep', '--poseidon', '--thetis', '--air', '--powder', '--puff'],
	['--burnt-out', '--burnt-jaywalk', '--jaywalk'],
	['--blossom', '--pudding', '--summer', '--peach', '--cider'],
	['--george', '--ulysses', '--benjamin', '--abraham', '--harriet', '--alexander']
];

document.addEventListener('DOMContentLoaded', () => {

  // Create color elements in order, with breaks between groups
  const colorContainer = document.getElementById('color-container');
  colorsByOrder.forEach((group, groupIdx) => {
    group.forEach((colorName) => {
      // Find the type(s) whose value matches this colorName
      const colorType = Object.keys(colorsByType).filter(
        (type) => colorsByType[type] === colorName
      );
      // Find the token(s) whose value matches this type
      const colorToken = Object.keys(colorsByToken)
        .filter((token) => {
          const value = colorsByToken[token];
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
          const value = colorsByToken[token];
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
          `<h3>Tokens</h3>
          <ul>
            <li class="copyValue">${colorToken.join('</li><li class="copyValue">')}</li>
          </ul>` : ''}
        ${colorType.length ? 
          `<h3>Types</h3>
          <ul>
            <li class="copyValue">${colorType.join('</li><li class="copyValue">')}</li>
          </ul>` : ''}`;
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

  const colorElements = document.querySelectorAll('.color');
  const tokenElements = document.querySelectorAll('.token');

  colorElements.forEach((element) => {
    const colorName = element.getAttribute('data-color');
    if (colorsByName[colorName]) {
      element.style.backgroundColor = colorsByName[colorName];
    }
  });

  tokenElements.forEach((element) => {
    const tokenName = element.getAttribute('data-token');
    if (colorsByToken[tokenName]) {
      element.style.backgroundColor = colorsByToken[tokenName];
    }
  });

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
});