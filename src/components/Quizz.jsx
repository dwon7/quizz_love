import { useState } from "react";

const Quizz = () => {

    const [warn, setWarn] = useState(false);

    const handleOnClick = () =>{
        console.log("right")
        setWarn(!warn);
    }

    return (
        <>
            <div className="pt-[300px]">
                <h2 className="text-4xl font-bold">Câu 1: Ai đẹp trai nhất trong những đáp án sau?</h2>
                
                <div className="mt-[50px]">
                    <button className="bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500"
                            onClick={handleOnClick}
                    >
                        V
                    </button>

                    <button className="bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500 mx-[20px]">
                        Jungkook
                    </button>

                    <button className="bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500 mr-[20px]">
                        Dương Dương
                    </button>

                    <button className="bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500">
                        Mình
                    </button>
                </div>
            </div>

            <div className={`text-red-500 `}>
                <h2>Sai rồi chọn lại đê!</h2>
            </div>
        </>
    );
}
 
export default Quizz;