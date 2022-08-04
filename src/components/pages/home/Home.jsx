import Button from "../../templates/button/Button";
import Input from "../../templates/input/Input";
import { HomeWrapper, ShortenCardWrapper } from "./HomeStyle";
import { FaTrashAlt } from 'react-icons/fa'

function ShortenCard({ shortenInfo, accessShorten, url, shortenUrl, views }) {
    return (
        <ShortenCardWrapper>
            <div>
                <p onClick={() => shortenInfo()}>{url}</p>
                <p onClick={() => accessShorten()}>{shortenUrl}</p>
                <p>Quantidade de visitantes: {views}</p>
            </div>
            <button><FaTrashAlt className="trash" /></button>
        </ShortenCardWrapper>
    )
}

export default function Home() {
    return (
        <HomeWrapper>
            <div className="short-url">
                <Input type="text" placeholder="Links que cabem no bolso" />
                <Button type="button">Encurtar link</Button>
            </div>
            <div className="urls">
                <ShortenCard />
            </div>
        </HomeWrapper>
    )
}