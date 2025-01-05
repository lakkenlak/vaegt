import { base } from '$app/paths';

export async function GET() {
	return new Response(JSON.stringify(getManifestWithBasePath(base)), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

function getManifestWithBasePath(basePath: string) {
	return {
		name: 'Vaegt',
		short_name: 'Vaegt',
		start_url: basePath,
		display: 'standalone',
		orientation: 'portrait',
		scope: basePath,
		icons: [
			{
				src: basePath + '/icons/192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: basePath + '/icons/384x384.png',
				sizes: '384x384',
				type: 'image/png'
			},
			{
				src: basePath + '/icons/512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		]
	};
}
