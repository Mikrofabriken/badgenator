// @ts-expect-error: there are no types for this package
import Session from 'svg-text-to-path/entries/browser-opentypejs.js';

function getSVG(): SVGSVGElement {
	const badgeSvg = document.querySelector('svg');
	if (!badgeSvg) throw new Error('No SVG found');
	return badgeSvg;
}

function createCopy(svg: SVGSVGElement): HTMLDivElement {
	const tempBadgeDiv = document.createElement('div');
	tempBadgeDiv.setAttribute('id', 'temp');
	tempBadgeDiv.innerHTML = svg.outerHTML;
	return tempBadgeDiv;
}

function getReplaceTextWithPathSession(badgeDiv: HTMLDivElement): Session {
	const session = new Session(badgeDiv.innerHTML, {
		fonts: {
			Mikrofabriken: [{ source: 'Mikrofabriken.ttf' }],
			IndustryInc: [{ source: 'IndustryInc.ttf' }]
		}
	});

	return session;
}

function downloadSVG(session: Session, name: string) {
	session.replaceAll().then(() => {
		const svgData = new XMLSerializer().serializeToString(session.svg);
		const blob = new Blob([svgData], { type: 'image/svg+xml' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `badge_${name}.svg`;
		a.click();
		a.remove();
	});
}

export function download(name: string) {
	const badgeSvg = getSVG();
	const tempBadgeDiv = createCopy(badgeSvg);
	const session = getReplaceTextWithPathSession(tempBadgeDiv);
	downloadSVG(session, name);
	document.getElementById('temp')?.remove();
}
