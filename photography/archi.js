const venise = [
    'archi/venise/01.JPG',
    'archi/venise/02.JPG',
    'archi/venise/03.JPG',
    'archi/venise/04.JPG',
    'archi/venise/05.JPG',
    'archi/venise/06.JPG',
    'archi/venise/07.JPG',
    'archi/venise/08.JPG',
    'archi/venise/09.JPG',
    'archi/venise/10.JPG',
    'archi/venise/11.JPG',
    'archi/venise/12.JPG',
    'archi/venise/13.JPG',
    'archi/venise/14.JPG',
            ];
const passages = [
    'archi/passages/01.JPG',
    'archi/passages/02.JPG',
    'archi/passages/03.JPG',
    'archi/passages/04.JPG',
    'archi/passages/05.JPG',
    'archi/passages/06.JPG',
    'archi/passages/07.JPG',
    'archi/passages/08.JPG',
    'archi/passages/09.JPG',
    'archi/passages/10.JPG'
]
     
            const venisecontainer = document.getElementById('venise-photos');
            venise.forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                venisecontainer.appendChild(img);
            })
            const passagecontainer = document.getElementById('passages-photos');
            passages.forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                passagecontainer.appendChild(img);
            })
