const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'music-news-api.p.rapidapi.com',
		'X-RapidAPI-Key': '55df5fd556mshf36ba70206fac7dp128938jsn5b42f46f6bd2'
	}
};


const movieApiMovies = () => {
    let areatoappend = document.querySelector('.news-articles');
    let loader = `<img class="loader" src="images/loading.gif">`;
    areatoappend.innerHTML=loader;
    fetch('https://music-news-api.p.rapidapi.com/news', options)
        .then(response => response.json().then(data => {
            console.log(data);
            areatoappend.innerHTML="";
            for(let i=0;i<15;i++){
                //create news articlediv
                let newsarticle = document.createElement('div');
                newsarticle.className="news-article";

                let newsimg = document.createElement('img');
                newsimg.src="images/announcement.png";
                newsimg.className="megaphone";

                let newstext = document.createElement('div');
                newstext.className='news-text';

                let newsline = document.createElement('h2');
                newsline.textContent=data[i]['title'];

                let readmorelink = document.createElement('a');
                readmorelink.innerHTML="Click to read more...";
                readmorelink.href=data[i]['url'];
                readmorelink.target="_blank";

                let source = document.createElement('p');
                source.className="news-source";
                source.innerHTML="Source: " + data[i]['source'];

                newstext.append(newsline,readmorelink,source);

                newsarticle.append(newsimg,newstext);
                // console.log(newsarticle);


                areatoappend.append(newsarticle);

                
            }
        }))
        .catch(err => console.error(err));
}
movieApiMovies();