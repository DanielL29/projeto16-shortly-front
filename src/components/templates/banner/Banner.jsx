import { BannerWapper } from "./BannerStyle";
import logo from '../../assets/images/shortly-logo.svg'

export default function Banner() {
    return (
        <BannerWapper>
            <h1>Shortly</h1>
            <img src={logo} alt="shortly" />
        </BannerWapper>
    )
}