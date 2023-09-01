
export default function Signup() {
    return(
        <div className="flex items-center justify-center w-full h-5/6 mt-10 pt-10">
            <form className="bg-gray-50 shadow-md rounded w-2/5 h-4/5 flex justify-center items-center flex-col pt-10">
                <div className="form_div">
                <label htmlFor="firstname" className="form_label ">Firstname</label>
                <input className="form_input" id="firstname" type="text" placeholder="firstname"/>
                </div>

                <div className="form_div">
                <label htmlFor="lastname" className="form_label ">Lastname</label>
                <input className="form_input" id="lastname" type="text" placeholder="lastname"/>
                </div>

                <div className="form_div">
                <label htmlFor="gmail" className="form_label ">Gmail</label>
                <input className="form_input" id="gmail" type="text" placeholder="gmail"/>
                </div>

                <div className="form_div">
                <label htmlFor="password" className="form_label">Password</label>
                <input className="form_input" id="password" type="password" placeholder="passname"/>
                </div>

                <div className="form_div">
                <label htmlFor="confirmpassword" className="form_label">Confirm Password</label>
                <input className="form_input" id="confirmpassword" type="password" placeholder="confirm username"/>
                </div>

                <div className="form_div">
                    <button className="bg-green-600 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Register
                    </button>
                </div>
            </form>

        </div>
    )
}