import Image from "next/image";

const Schedule = () => (
    <div className="text-4xl text-center items-center justify-center md:h-2/3screen h-screen z-10 relative">
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
    </div>
)

export default Schedule