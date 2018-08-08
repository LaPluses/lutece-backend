function getServerUri(protocol : String, path : String) {
	const env = process.env.NODE_ENV;
	const loc = window.location;
	const host = env === 'production' ? loc.host : `${loc.host.split(':')[0]}:8000`;
	let newUri = protocol;
	if (loc.protocol === 'https:') {
		newUri += 's:';
	} else {
		newUri += ':';
	}
	newUri += `//${host}/${path}`;
	return newUri;
}

function getGraphQLUri() {
	return getServerUri('http', 'graphql');
}

function getWebSocketUri() {
	return getServerUri('ws', 'ws');
}

export { getGraphQLUri, getWebSocketUri };
