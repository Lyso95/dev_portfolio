import HeroSection from '../../components/heroSection';
import data from './maindata';
import img from '../../assets/img/amos_pic_green.jpg'

export default function MainHero() {
    return(
            <HeroSection 
                mainheading={data.mainheading}  
                colorheading={data.colorheading} 
                thirdheading={data.thirdheading}
                text={data.text}
                goto={data.goto}
                more={data.more}
                img={img}
            />
    );
}
