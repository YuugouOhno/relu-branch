import Image from "next/image";

const Schedule = () => (
    <>
        <Image
            className="md:block hidden"
            src="/スケジュール(PC).png"
            alt="schedule"
            width={600}
            height={300}
        />
        <Image
            className="md:hidden block"
            src="/スケジュール(モバイル).png"
            alt="schedule"
            width={600}
            height={300}
        />
    </>
)

export default Schedule