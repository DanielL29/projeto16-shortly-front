import Button from "../../templates/button/Button";
import Input from "../../templates/input/Input";
import { HomeWrapper, ShortenCardWrapper } from "./HomeStyle";
import { FaTrashAlt } from 'react-icons/fa'
import { useContext, useEffect, useState } from "react";
import { accessShortenUrl, deleteShortenUrl, generateShortUrl, getShortenUrls } from "../../../functions/home";
import UserContext from '../../../contexts/UserContext'
import { Watch } from 'react-loader-spinner';

function ShortenCard({ accessShortenUrl, url, shortUrl, views, id, index, token, shortenUrls, setShortenUrls }) {
    return (
        <ShortenCardWrapper>
            <div>
                <p>{url}</p>
                <p onClick={() => accessShortenUrl()}>{shortUrl}</p>
                <p>Quantidade de visitantes: {views}</p>
            </div>
            <button onClick={() => deleteShortenUrl(index, id, token, shortenUrls, setShortenUrls)}>
                <FaTrashAlt className="trash" />
            </button>
        </ShortenCardWrapper>
    )
}

export default function Home() {
    const [shortenUrls, setShortenUrls] = useState([])
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const { user } = useContext(UserContext)

    useEffect(() => {
        getShortenUrls(user.token, setShortenUrls, setLoading)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <HomeWrapper>
            <div className="short-url">
                <Input type="text" placeholder="Links que cabem no bolso" value={url} 
                    onChange={(e) => setUrl(e.target.value)} disabled={loading} />
                <Button type="button" 
                    onClick={() => generateShortUrl(url, user.token, setLoading, setShortenUrls, setUrl)}  
                    disabled={loading}
                >
                    {loading ?
                        <Watch height="40" width="40" radius="48" color="#fff" /> :
                        'Encurtar Link'
                    }
                </Button>
            </div>
            <div className="urls">
                {shortenUrls?.length > 0 ? (
                    shortenUrls.filter(shorten => shorten !== undefined).map((shorten, i) => {
                        return (
                            <ShortenCard key={shorten.id}
                                index={i}
                                id={shorten.id}
                                url={shorten.url} 
                                shortUrl={shorten.shortUrl} 
                                views={shorten.visitCount} 
                                token={user.token}
                                shortenUrls={shortenUrls}
                                setShortenUrls={setShortenUrls}
                                accessShortenUrl={() => accessShortenUrl(i, shorten.shortUrl, shortenUrls, setShortenUrls)}
                            />
                        )
                    })
                ) : loading ? (
                        <div className="without-shorten">
                            <Watch height="100" width="100" radius="48" color="#80CC74" />
                        </div>
                    ) : (
                        <div className="without-shorten">
                            <h1>Você ainda não tem nenhum link encurtado, tente criar um!</h1>      
                        </div>
                    )}
            </div>
        </HomeWrapper>
    )
}