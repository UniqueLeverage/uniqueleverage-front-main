import {useEffect} from 'react';

const HomeVideoHolderTwo = () => {
    useEffect(() => {
        const playerScript = document.createElement('script');
        playerScript.src = 'https://fast.wistia.com/player.js';
        playerScript.async = true;
        document.body.appendChild(playerScript);

        const embedScript = document.createElement('script');
        embedScript.src = 'https://fast.wistia.com/embed/bjh2n2x74t.js';
        embedScript.async = true;
        embedScript.type = 'module';
        document.body.appendChild(embedScript);

        return () => {
            document.body.removeChild(playerScript);
            document.body.removeChild(embedScript);
        };
    }, []);

    return (
        <div className="mx-auto w-[340px] max-w-full">
            <style>{`
        wistia-player[media-id='bjh2n2x74t']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/bjh2n2x74t/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 177.71%;
          border-radius: 30px;
          overflow: hidden;
        }
        wistia-player[media-id='bjh2n2x74t'] {
          border-radius: 30px; /* Apply radius when defined */
          overflow: hidden;
        }
      `}</style>
            <wistia-player media-id="bjh2n2x74t" seo="false"></wistia-player>
        </div>
    );
};

export default HomeVideoHolderTwo;
