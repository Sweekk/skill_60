export default function Home() {
    return <div className = "bg-gray-100 min-h-screen ">
        <div className = "flex flex-col  mt-10 rounded-[50px] bg-black shadow-lg p-4 min-h-160 w-full md:w-auto">
            <section className = "flex flex-col md:flex-row">
                <div>
                    <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png"
                    alt="Next.js Logo" width={150} height={37} priority 
                    className = "ml-30 "
                    />
                </div>
                    <div className="flex flex-col md:flex-row">
                        <div className = " text-white pl-20 pt-3.5 ml-75">Home</div>
                        <div className = "hidden md:block text-white pl-5 pt-3.5 ">About Us</div>
                        <div className = "hidden md:block text-white pl-5 pt-3.5 ">Services</div>
                        <div className = "hidden md:block text-white pl-5 pt-3.5 ">Pages</div>
                        <div className = "hidden md:block text-white pl-5 pt-3.5 ">Blog</div>
                        <div className = "hidden md:block text-white pl-5 pt-3.5 ">Contact</div>
                        <div className = "hidden md:block ml-10 pl- 5 bg-white rounded-full h-[50px] w-[50px]"><div className="pl-5 pt-3 text-red-500">F</div></div>
                        <div className = "hidden md:block ml-10 pl- 5 bg-white rounded-full h-[50px] w-[50px]"><div className="pl-5 pt-3 text-red-500">W</div></div>
                        <div className = "hidden md:block ml-10 pl- 5 bg-white rounded-full h-[50px] w-[50px]"><div className="pl-5 pt-3 text-red-500">I</div></div>
                        <div className = "hidden md:block ml-10 pl- 5 bg-white rounded-full h-[50px] w-[50px]"><div className="pl-5 pt-3 text-red-500">T</div></div>
                    </div>    
            </section>
            <div className = "flex flex-col md:flex-row">   
             <div className = "font-bold text-[50px] ml-15 pr-20 w-[45%] mt-20"> Where Quality Is A Service Meets The Open Road</div>
                 <div> 
                    <img
                    src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-1.jpg"
                    className = "flex flex-col md:flex-row rounded-[50px] mt-20 mb-10 h-[80%] w-[60%] ml-40 "
                    />
              </div>
                </div>  
                  <div className = "flex flex-col">
                     <div className = "text-white ml-15 text-lg w-[35%]" >Car maintainance is essential to keep the performance of the car at all time high</div>
                 <div className = "text-white border-4 border-red-600 rounded-full h-[70px] w-[200px] text-center pt-4 ml-15 font-bold text-[20px] ">
                    Get Started
                </div>
            </div>
        </div> 

        <div className= "flex flex-row  mt-70 rounded-[50px] bg-white shadow-lg p-4 min-h-200">
            <section className= "flex flex-col">
                <div className= "text-red-500 font-bold text-xl ml-160 pt-20">Lastest Service</div>
                <div className ="text-md text-black font-bold text-[40px] pt-5 ml-120">Your Trusted Car Provider</div>
                <div className ="text-md text-black font-bold text-[40px]  ml-130">keeping your vehicle</div>
               <div className= "flex flex-col md:flex-row">
                  <button className = "border-2 border-black rounded-[5px] bg-white h-80 w-80 mt-30 ml-20 hover:bg-gradient-to-r from-emerald-600 to-lime-300 pt-10 ease-in-out ">
                        <div className ="flex flex-col text-black font-bold text-[20px] hover:text-white mb-10">
                            <div className = " ml-28 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full h-[90px] w-[90px]" ></div>
                                <div className="text-[15px] pb-17  "><div className="">Transformation Advising</div><br></br><div className="">Car service is essential for maintaining the performance and longevity of your vehicle.<br></br> From oil changes Car service</div></div>
                        </div>
                  </button>
                   <button className = "border-2 border-black rounded-[5px] bg-white h-80 w-80 mt-30 ml-40 hover:bg-gradient-to-r from-emerald-600 to-lime-300">
                         <div className ="flex flex-col text-black font-bold text-[20px] hover:text-white mb-10">
                            <div className = " ml-28 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full h-[90px] w-[90px] mt-10" ></div>
                                <div className="text-[15px] pb-17  "><div className="text-[25px]">Easy Drive Maintenance</div><br></br><div className="">Car service is essential for maintaining the performance and longevity of your vehicle.<br></br> From oil changes Car service</div></div>
                        </div>
                   </button>
                   <button className = "border-2 border-black rounded-[5px] bg-white h-80 w-80 mt-30 ml-40  hover:bg-gradient-to-r from-emerald-600 to-lime-300">
                         <div className ="flex flex-col text-black font-bold text-[20px] hover:text-white mb-10">
                            <div className = " ml-28 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full h-[90px] w-[90px] mt-10" ></div>
                                <div className="text-[15px] pb-17  "><div className="text-[25px]">Elite Auto Services</div><br></br><div className="">Car service is essential for maintaining the performance and longevity of your vehicle.<br></br> From oil changes Car service</div></div>
                        </div>
                   </button>
                </div>
            </section>
        </div>
        <div className = "flex flex-col  min-h-160">
            <section className = "flex flex-col">
                <div className = "text-red-500 text-[20px] ml-30 pt-30">ABOUT US</div>
                    <div className ="text-md text-black font-bold text-[40px] pt-5 ml-30">Fast and Reliable Car Care<br></br>Your Car Our Priority</div>
                        <div className = "w-[40%] text-black text-lg pt-5 ml-30">
                            Car service is essential for maintaining the performance andlongevity of your vehicle. From oil changes</div>
                            <div className = "flex flex-row">
                                <ui>
                                    <li className = "pt-15 ml-30 text-black text-[20px] font-bold font-stretch-expanded ">Fast and Reliable Car Care Your Car Our Priority</li>
                                    <li className = "pt-4 ml-30 text-black text-[20px] font-bold ">Free with Our Services Care for Your Car</li>
                                    <li className = "pt-4 ml-30 text-black text-[20px] font-bold ">Top-notch Care for Your Vehicle Your Vehicle</li>
                                    <li className = "pt-4 ml-30 text-black text-[20px] font-bold ">Expert Service for Your Vehicle Drive Stress</li>
                                    <li className = "pt-4 ml-30 text-black text-[20px] font-bold">Your Trusted Car Service Provider Keeping</li>
                                </ui>
                                    <div className = "">
                                        <img
                                        src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
                                        width = {550} height = {200}
                                        className = "  rounded-[30px] pl-40 pr-6 "
                                        />
                                    </div>
                        </div>
                        <br></br>
                        <div className="flex flex-col md:flex-row">
                             <div className = "flex flex-row  mt-10 rounded-[30px] bg-black shadow-lg p-4 min-h-30 ml-20 mr-20">
                                <div className = "text-white text-[30px] font-bold pl-20 pt-6">Dropbox</div>
                                <div className = "text-white text-[30px] font-bold  pl-30 pt-6">Spotify</div>
                                <div className = "text-white text-[30px] font-bold  pl-30 pt-6">GIZMODO</div>
                                <div className = "text-white text-[30px] font-bold  pl-30 pt-6">coinbase</div>
                                <div className = "text-white text-[30px] font-bold  pl-30 pr-20 pt-6 mb-10">slack</div>
                             </div>
                        </div>
                    </section>
        </div>
    </div>
}