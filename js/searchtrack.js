const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': '55df5fd556mshf36ba70206fac7dp128938jsn5b42f46f6bd2'
	}
};

let searchbar = document.querySelector('.wrap-noresult');

let searchQuery = document.querySelector('.searchTerm');

function searchandprint(){
	if(searchbar.className=="wrap-noresult")
		searchbar.className="wrap";
    let query = searchQuery.value;
    console.log(query);
    fetch('https://spotify23.p.rapidapi.com/search/?q='+query+'&type=tracks&offset=0&limit=100&numberOfTopResults=5', options)
	.then(response => response.json().then(data =>{
		let area = document.querySelector('.search-results');
		area.innerHTML="";
		let tracks = data['tracks']['items'];
		console.log(tracks);
        for(let i=0;i<tracks.length;i++){
            let trackname = tracks[i]['data']['name'];
			let albumname = "Album: "+tracks[i]['data']['albumOfTrack']['name'];
			let albumcover = tracks[i]['data']['albumOfTrack']['coverArt']['sources'][0]['url'];
            let artistName = tracks[i]['data']['artists']['items'][0]['profile']['name'];
			let trackUrl = tracks[i]['data']['uri'];

			let result = document.createElement('div');
			result.className="result";

			let resultimg = document.createElement('img');
			resultimg.src = albumcover;

			let tracklink = document.createElement('a');
			tracklink.href=trackUrl;
			tracklink.target="_blank";
			
			let title = document.createElement('h3');
			title.textContent=trackname;
			title.className="track-title";

			tracklink.append(title);

			let album = document.createElement('p');
			album.textContent=albumname;

			let artistname = document.createElement('p');
			artistname.textContent = artistName;

			result.append(resultimg,tracklink,album,artistname);

			area.append(result);
		}
	}))
	.catch(err => console.error(err));

}

let searchbutton = document.querySelector('.searchButton');


searchbutton.addEventListener("click",searchandprint);
