import {useEffect} from 'react';

const HomeVideoHolderOne = () => {
    useEffect(() => {
        const playerScript = document.createElement('script');
        playerScript.src = 'https://fast.wistia.com/player.js';
        playerScript.async = true;
        document.body.appendChild(playerScript);

        const embedScript = document.createElement('script');
        embedScript.src = 'https://fast.wistia.com/embed/f3ypcy119b.js';
        embedScript.async = true;
        embedScript.type = 'module';
        document.body.appendChild(embedScript);

        return () => {
            document.body.removeChild(playerScript);
            document.body.removeChild(embedScript);
        };
    }, []);

    return (
        <div className="">
            <style>{`
        wistia-player[media-id='f3ypcy119b']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/f3ypcy119b/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
            <wistia-player media-id="f3ypcy119b" seo="false"></wistia-player>
        </div>
    );
};

export default HomeVideoHolderOne;
