import { useState } from "react";

const Quizz2 = () => {

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
                <h2 className="text-4xl font-bold">Câu 2: Ai luôn đúng và ai luôn sai?</h2>
                
                <div className="mt-[50px]">
                    <button className={`bg-white text-black text-xl font-bold w-[350px] h-[50px] rounded-xl hover:bg-red-500 mr-[20px]
                                ${(isRight === true) ? 'bg-blue-500' : 'bg-white'}`}
                            onClick={handleRightClick}
                    >
                        Mình luôn đúng, bạn luôn sai!
                    </button>

                    <button className={`bg-white text-black text-xl font-bold w-[350px] h-[50px] rounded-xl hover:bg-red-500
                                ${(isWarn === true) ? 'bg-red-500' : 'bg-white'}`}
                        onClick={handleOnClick}
                    >
                        Bạn luôn đúng, mình luôn sai!
                    </button>
                </div>
            </div>

            <div className={` mt-[50px]
                ${(isWarn === true) ? 'block' : 'hidden'}`}>
                <h2 className="text-red-500 text-2xl font-bold">Sai rồi chọn lại đê!</h2>
            </div>

            <div className={`mt-[50px] ${(isRight === true) ? 'block' : 'hidden'}`}>
                <h2 className="text-green-500 text-2xl font-bold">
                    Bạn luôn sai mình nấu cơm, quét nhà, lau nhà
                </h2>

                <h2 className="text-green-500 text-2xl font-bold">
                    Mình luôn đúng giờ nấu cơm, quét nhà, lau nhà, đón bạn đi làm, đón bạn về,...
                </h2>
                <button className="mt-[30px] bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-blue-500 mr-[20px]"> 
                    <a href='/quizz3'> Câu 3 </a>
                </button>
            </div>
        </>
    );
}
 
export default Quizz2;