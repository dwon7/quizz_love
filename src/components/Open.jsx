

const Open = () => {
    return (
        <div className="">
            <div className="pt-[300px]">
                <h2 className="text-4xl font-bold">Chào mừng bạn Tâm thân yêu đến với trò chơi câu hỏi có vui không có thưởng</h2>
                <div className="mt-[50px]">
                    <p className="text-xl text-red-500">Luật chơi: Bạn sẽ trả lời từng câu hỏi và trả lời đúng mới được sang câu kế tiếp và phần thưởng sẽ chỉ xuất hiện nếu trả đúng hết câu hỏi</p>
                </div>

                <div className="mt-[50px]">
                    <h2 className="text-4xl font-bold mb-[50px]">Are You Ready?</h2>
                    <button className="bg-white text-black text-xl font-bold w-[150px] h-[50px] rounded-xl hover:bg-red-500">
                        <a href="/quizz">Ready</a>
                    </button>
                </div>
            </div>

        </div>
    );
}
 
export default Open;