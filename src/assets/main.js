const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCss5O3OWZtPYJCr0Y4fDJHg&filter=videos_latest&hl=en&gl=US';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '62242d98d7msh56dac99beaa345dp1aa1e6jsn56dfff789088',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.contents.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.video.thumbnails[3].url}" alt= "" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.video.title}
                    </h3>
                </div>
            </div>
            `).slice(0, 8).join('')}
        `;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();