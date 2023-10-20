/**
 * Converts a Font Awesome icon into a duotone icon by analyzing the SVG path data and breaking it
 * down into separate path elements according to the segments found. This allows each segment to be 
 * styled as desired.
 * @param element The wrapper HTMLElement of the <Fa /> component to be converted.
 * @param segmentPathClassNames An array of class names to be assigned  to each path element found.
 */
export function convertFaIconToDuotone(element: HTMLElement, segmentPathClassNames: string[]) {
	const originalPathElement = element.querySelector('.svelte-fa path')!;
	const originalPathTransformValue = originalPathElement.getAttribute('transform')!;
	const pathParentElement = originalPathElement!.parentElement!;
	const pathString = originalPathElement.getAttribute('d')!;
	const pathSegments = pathString.match(/M[^Mz]*z/g)!; // Match substrings that start with "M" and end with "z".

	if (segmentPathClassNames.length !== pathSegments.length) {
		throw Error(
			`The given number of segment path class names (${segmentPathClassNames.length}) 
			do not match with the number of path segments found (${pathSegments.length}). 
			You must provide one class name per path segment.`
		);
	}

	pathParentElement.removeChild(originalPathElement);

	const newPathElements: SVGPathElement[] = [];

	pathSegments.forEach((path, index) => {
		const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

		pathElement.setAttribute('d', path);
		pathElement.setAttribute('fill', 'currentColor');
		pathElement.setAttribute('transform', originalPathTransformValue);
		pathElement.classList.add(segmentPathClassNames[index]);

		newPathElements.push(pathElement);
		pathParentElement.appendChild(pathElement);
	});
}
