import ButtonGroup from './ButtonGroup';
import FormButton from './FormButton';

const About = () => (
    <div className="flex flex-col item-centerflex flex-col items-center md:justify-center">
        <p className="md:text-xl  mb-0 md:ml-32 md:mr-32 break-words">
            <br/>
            福島にある<span className="md:text-2xl text-xl"><ruby>葛尾<rt>かつらお</rt></ruby>村</span>という集落を舞台に、<br/>
            <span className="md:text-2xl text-xl">地域密着型</span>のハッカソンを開催します！<br/>
            <br/>
            自然豊かな葛尾村で３日間合宿後、<br/>プロのエンジニアからのフィードバック。<br/>
            <br/>
            <span className="md:text-2xl text-xl underline-text">&nbsp;賞金は最大<span className="md:text-3xl">２４万円！</span>&nbsp;</span><br/>
            <span className="md:text-2xl text-xl underline-text">&nbsp;宿泊費全額補助、交通費一部補助！</span><br/>
        </p>
        <br/>
        <br/>
        <FormButton/>
    </div>
)
export default About;