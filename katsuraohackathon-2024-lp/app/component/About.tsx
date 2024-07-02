import ButtonGroup from './ButtonGroup';

const About = () => (
    <div className="flex flex-col item-centerflex flex-col items-center md:justify-center">
        <p className="md:text-2xl  mb-0 md:ml-32 md:mr-32 break-words">
            福島にある<span className="text-green-400 md:text-3xl text-xl">葛尾村</span>という集落を舞台に<span className="text-green-400 md:text-3xl text-xl">地域密着型</span>のハッカソンを開催します！
            村でエビの養殖をしている<span className="text-red-500">株式会社HANERU葛尾様</span>での業務体験・ヒアリングから<span className="text-red-500">要件定義</span>を行い、ユーザーを意識した<span className="text-red-500 md:text-3xl text-xl">実践的な開発経験</span>を積むことができます！
        </p>
        <ButtonGroup/>
    </div>
)
export default About;