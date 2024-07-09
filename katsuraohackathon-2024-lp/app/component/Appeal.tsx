import ButtonGroup from './ButtonGroup';
import FormButton from './FormButton';

const Appeal = () => (
    <div className="flex flex-col item-centerflex flex-col items-center md:justify-center">
        <p className="md:text-xl  mb-0 md:ml-32 md:mr-32 break-words">
            <br/>
            エビの養殖をしている<br/>
            株式会社HANERU葛尾様で<br/>
            実際に業務体験をし、ヒアリングを行います。<br/>
            <br/>
            <span className="md:text-2xl text-xl underline-text">リアルな声を聞くことができる</span>ため、<br/>
            ユーザーを意識した<br/>
            <span className="md:text-3xl text-xl underline-text">実践的な開発体験&nbsp;</span>を積むことができます！<br/>
            <br/>
        </p>
        <br/>
        <br/>
        <FormButton/>
    </div>
)
export default Appeal;