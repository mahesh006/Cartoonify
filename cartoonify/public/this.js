
deepai.setApiKey('ce09ecb9-5021-49c9-9fe0-6efa52d407a7');


async function Hello() {
    Function();
    var resp = await deepai.callStandardApi("toonify", {
            image: document.getElementById('capture'),
    });
    console.log(resp);
    let hide = document.getElementById('hide');
    hide.style.display = 'none';
    let img = document.getElementById('result');
    img.src = resp.output_url;
    let download = document.getElementById('download');
    download.style.display = 'flex';

}


    
