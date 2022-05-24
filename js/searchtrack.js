const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': '55df5fd556mshf36ba70206fac7dp128938jsn5b42f46f6bd2'
	}
};


let searchQuery = document.querySelector('.searchTerm');

function searchandprint(){
    let query = searchQuery.value;
    console.log(query);
    fetch('https://spotify23.p.rapidapi.com/search/?q='+query+'&type=tracks&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json().then(data =>{
		let area = document.querySelector('.search-results');
		area.innerHTML="";
		let tracks = data['tracks']['items'];
		console.log(tracks);
        for(let i=0;i<10;i++){
            let trackname = tracks[i]['data']['name'];
			let albumname = tracks[i]['data']['albumOfTrack']['name'];
			let albumcover = tracks[i]['data']['albumOfTrack']['coverArt']['sources'][0]['url'];
            
			let result = document.createElement('div');
			result.className="result";

			console.log(albumcover);
			let resultimg = document.createElement('img');
			resultimg.src = albumcover;

			let title = document.createElement('h3');
			title.textContent=trackname;

			let album = document.createElement('p');
			album.textContent=albumname;

			result.append(resultimg,title,album);

			area.append(result);
		}
	}))
	.catch(err => console.error(err));

}

let searchbutton = document.querySelector('.searchButton');


searchbutton.addEventListener("click",searchandprint);
