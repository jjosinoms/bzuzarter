
import Iframe from 'react-iframe'

function InstagramFeed() {

    return (
        <div className='row'>
            {/* <div className='col-md-4'>
            </div> */}
            <div className='col-md-12' >
                {/* <iframe style={{ borderStyle: 'none' }} width='100%' src="https://jonz.com.br/index.php/instagram/"></iframe> */}

                <Iframe url="https://jonz.com.br/index.php/instagram/"
                    width="100%"
                    height="500px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    frameBorder = "0"
                    // allowFullScreen = "allow"
                    position="relative" />
            </div>
        </div>

    )
}



export default InstagramFeed