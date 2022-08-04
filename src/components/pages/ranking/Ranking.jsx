import { RankingWrapper } from "./RankingStyle";
import trophy from '../../assets/images/trophy.png'
import { useContext, useEffect, useState } from "react";
import { getRanking } from "../../../functions/ranking";
import UserContext from "../../../contexts/UserContext";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Ranking() {
    const [ranking, setRanking] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = useContext(UserContext)

    useEffect(() => {
        getRanking(setLoading, setRanking)
    }, [])

    return (
        <RankingWrapper>
            <div className="ranking-title">
                <img src={trophy} alt="trophy" />
                <h1>Ranking</h1>
            </div>
            <div className="ranking-scores">
                {ranking.map(score => {
                    return (
                        loading ? 
                            <Skeleton width="100%" height="30px" /> : 
                            <h2 key={score.id}>{score.id}. {score.name} - {score.linksCount} links - {score.visitCount} visualizações</h2>
                    )
                })}
            </div>
            <h3>{user.token ? '' : 'Crie sua conta ou entre para usar nosso serviço!'}</h3>
        </RankingWrapper>
    )
}