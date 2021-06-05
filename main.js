const params =  new URLSearchParams(window.location.search);

// current owner (if known, else default to 0x0)
const owner = params.get('owner') || '0x0000000000000000000000000000000000000000';
// viewer parameter (only if we know about it, else empty so we default to OxO)
const viewer = params.get('viewer') || '0x0000000000000000000000000000000000000000';

const meta = {
	owner,
	viewer,
}

console.log(meta);