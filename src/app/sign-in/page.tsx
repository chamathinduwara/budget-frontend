"use client"



export default function SignIn(){
    return(
        <div className="flex items-center justify-center w-full h-5/6 mt-10 pt-10">
            <form className="bg-gray-50 shadow-md rounded w-2/5 h-4/5 flex justify-center items-center flex-col pt-10">
                <div className="form_div">
                <label htmlFor="gmail" className="form_label ">Gmail</label>
                <input className="form_input" id="gmail" type="text" placeholder="gmail"/>
                </div>

                <div className="form_div">
                <label htmlFor="password" className="form_label">Password</label>
                <input className="form_input" id="password" type="password" placeholder="password"/>
                </div>

                <div className="form_div">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
            </form>

        </div>
    )
}