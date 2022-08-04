import { RankingWrapper } from "./RankingStyle";
import trophy from '../../assets/images/trophy.png'

export default function Ranking() {
    return (
        <RankingWrapper>
            <div class="ranking-title">
                <img src={trophy} alt="trophy" />
                <h1>Ranking</h1>
            </div>
            <div className="ranking-scores">
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
                <h2>{}. {} - {} links - {} visualizações</h2>
            </div>
            <h3>Crie sua conta para usar nosso serviço!</h3>
        </RankingWrapper>
    )
}