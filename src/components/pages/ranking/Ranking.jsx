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
                {loading ? (
                    <>
                        <Skeleton width="100%" height="20px" style={{ marginBottom: '20px' }} /> 
                        <Skeleton width="100%" height="20px" style={{ marginBottom: '20px' }} /> 
                        <Skeleton width="100%" height="20px" style={{ marginBottom: '20px' }} /> 
                        <Skeleton width="100%" height="20px" style={{ marginBottom: '20px' }} /> 
                        <Skeleton width="100%" height="20px" style={{ marginBottom: '20px' }} /> 
                    </> 
                ) : (
                    ranking.length > 0 ? (
                        ranking.map((score, i) => {
                            return (
                                    
                                 <h2 key={score.id}>{i + 1}. {score.name} - {score.linksCount} links - {score.visitCount} visualizações</h2>
                            )
                        })
                    ) : <h2>Nenhum usuario cadastrado ainda...</h2>   
                )}
            </div>
            <h3>{user.token ? '' : 'Crie sua conta ou entre para usar nosso serviço!'}</h3>
        </RankingWrapper>
    )
}