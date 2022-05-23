const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': '55df5fd556mshf36ba70206fac7dp128938jsn5b42f46f6bd2'
	}
};

fetch('https://spotify23.p.rapidapi.com/charts/?type=regional&country=global&recurrence=weekly&date=latest', options)
	.then(response => response.json().then(data =>{
        let tracks = data['content'];
        console.log(tracks);
        let topTracksWeekly = document.querySelector('.top-tracks-weekly');
        console.log(topTracksWeekly);
        for(let i=0;i<18;i++){
            let trackname;
            if(tracks[i].track_title.length>15)
                trackname = tracks[i].track_title.substring(0,8) + `...`;
            else
                trackname = tracks[i].track_title;
            let trackurl = tracks[i].track_url;
            let thumbnailsrc = tracks[i].thumbnail;
            let artist = tracks[i].artists[0];
            let streams = tracks[i].streams;
            //all DOM elements
            let trackCard = document.createElement('div');
            let trackImage = document.createElement('img');
            let trackName = document.createElement('p');
            let artistName = document.createElement('p');
            let trackPlays = document.createElement('p');

            trackCard.className="track-card";

            trackImage.src = thumbnailsrc;
            trackImage.className = "track-card-image";

            
            trackName.className="track-card-track-name";
            artistName.className="track-card-artist-name";
            trackPlays.className="track-card-plays";
            trackName.innerHTML=trackname;
            artistName.innerText=artist;
            trackPlays.innerHTML='<i class="bi bi-play-fill"></i>'+ streams;

            trackCard.append(trackImage,trackName,artistName,trackPlays); 

            let tracklink = document.createElement('a');
            tracklink.href=trackurl;
            tracklink.target="_blank";

            tracklink.append(trackCard);
            console.log(tracklink);
            topTracksWeekly.append(tracklink);                      

        }
    }))
	.catch(err => console.error(err));

    fetch('https://spotify23.p.rapidapi.com/charts/?type=regional&country=global&recurrence=daily&date=latest', options)
	.then(response => response.json().then(data =>{
        let tracks = data['content'];
        console.log(tracks);
        let topTracksDaily = document.querySelector('.top-tracks-daily');
        console.log(topTracksDaily);
        for(let i=0;i<8;i++){
            
            let trackname;
            if(tracks[i].track_title.length>15)
                trackname = tracks[i].track_title.substring(0,8) + `...`;
            else
                trackname = tracks[i].track_title;
            
            let trackurl = tracks[i].track_url;
            let thumbnailsrc = tracks[i].thumbnail;
            let artist = tracks[i].artists[0];
            let streams = tracks[i].streams;
            //all DOM elements
            let trackCard = document.createElement('div');
            let trackImage = document.createElement('img');
            let trackName = document.createElement('p');
            let artistName = document.createElement('p');
            let trackPlays = document.createElement('p');

            trackCard.className="track-card";

            trackImage.src = thumbnailsrc;
            trackImage.className = "track-card-image";

            
            trackName.className="track-card-track-name";
            artistName.className="track-card-artist-name";
            trackPlays.className="track-card-plays";
            trackName.innerHTML=trackname;
            artistName.innerText=artist;
            trackPlays.innerHTML='<i class="bi bi-play-fill"></i>'+ streams;

            trackCard.append(trackImage,trackName,artistName,trackPlays); 

            let tracklink = document.createElement('a');
            tracklink.href=trackurl;

            tracklink.append(trackCard);
            console.log(tracklink);
            topTracksDaily.append(tracklink);                      

        }
    }))
	.catch(err => console.error(err));