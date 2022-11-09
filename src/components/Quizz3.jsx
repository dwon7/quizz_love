import { useState } from "react";

const Quizz3 = () => {

    const [isWarn, setIsWarn] = useState(false);

    const [isRight, setIsRight] = useState(false)

    const handleOnClick = () =>{
        setIsWarn(!(isWarn));
        setIsRight(false)
    }

    const handleRightClick = () => {
        setIsRight(!(isRight))
        setIsWarn(false)
    }

    return (
        <>
            <div className="pt-[300px]">
                <h2 className="text-4xl font-bold">Câu 3: Ai là trụ cột và nóc nhà?</h2>
                
                <div className="mt-[50px]">
                    <button className={`bg-white text-black text-xl font-bold w-[350px] h-[50px] rounded-xl hover:bg-red-500 mr-[20px]
                                ${(isRight === true) ? 'bg-blue-500' : 'bg-white'}`}
                            onClick={handleRightClick}
                    >
                        Mình!
                    </button>

                    <button className={`bg-white text-black text-xl font-bold w-[350px] h-[50px] rounded-xl hover:bg-red-500
                                ${(isWarn === true) ? 'bg-red-500' : 'bg-white'}`}
                        onClick={handleOnClick}
                    >
                        Bạn!
                    </button>
                </div>
            </div>

            <div className={` mt-[50px]
                ${(isWarn === true) ? 'block' : 'hidden'}`}>
                <h2 className="text-red-500 text-2xl font-bold">Sai rồi chọn lại đê!</h2>
            </div>

            <div className={`mt-[50px] ${(isRight === true) ? 'block' : 'hidden'}`}>
                <h2 className="text-green-500 text-2xl font-bold">
                    Sai hả?
                </h2>

                <h2 className="text-green-500 text-2xl font-bold">
                    Ý kiến về ý kiến nhá!
                </h2>

                <h2 className="text-green-500 text-2xl font-bold">
                    Với cả, xem phim ít thôi! Ảo phim quá!
                </h2>
                <button className="mt-[30px] bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-blue-500 mr-[20px]"> 
                    <a href='/gift'> Phần thưởng </a>
                </button>
            </div>
        </>
    );
}
 
export default Quizz3;