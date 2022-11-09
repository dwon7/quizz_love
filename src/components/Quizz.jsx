import { useState } from "react";

const Quizz = () => {

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
                <h2 className="text-4xl font-bold">Câu 1: Ai đẹp trai nhất trong những đáp án sau?</h2>
                
                <div className="mt-[50px]">
                    <button className={`bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500`}
                            onClick={handleOnClick}
                    >
                        V
                    </button>

                    <button className="bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500 mx-[20px]"
                        onClick={handleOnClick}
                    >
                        Jungkook
                    </button>

                    <button className="bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500 mr-[20px]"
                        onClick={handleOnClick}
                    >
                        Dương Dương
                    </button>

                    <button className={`bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500
                                        ${(isRight === true) ? 'bg-blue-500' : 'bg-white'}`}
                        onClick={handleRightClick}
                    >
                        Mình
                    </button>
                </div>
            </div>

            <div className={` mt-[50px]
                ${(isWarn === true) ? 'block' : 'hidden'}`}>
                <h2 className="text-red-500 text-2xl font-bold">Sai rồi chọn lại đê!</h2>
            </div>

            <div className={`mt-[50px] ${(isRight === true) ? 'block' : 'hidden'}`}>
                <h2 className="text-green-500 text-2xl font-bold">Đẹp trai nhất tất nhiên là Trần Hải Dương rồi !</h2>
                <button className="mt-[30px] bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-blue-500 mr-[20px]"> 
                    <a href='/quizz2'> Câu 2 </a>
                </button>
            </div>
        </>
    );
}
 
export default Quizz;