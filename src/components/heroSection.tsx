
import { LightBulbIcon } from '@heroicons/react/24/outline'

type HeroProps = {
    mainheading?: string,
    colorheading?: string,
    thirdheading?: string,
    text?: string,
    goto?: string,
    more?: string,
    img?: string,
    img_alt?: string
}


const HeroSection = ({mainheading, colorheading, thirdheading, text, goto, more, img, img_alt}: HeroProps) =>  {    

    return(
    <section id='hero' className="pt-24 bg-white">
            <div className="px-12 mx-auto max-w-7xl flex flex-col md:flex-row">
                <div className='w-100 md:max-w-1/3 h-2 mr-8' >
                    <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat shadow-xl shadow-gray-700 transition duration-300 ease-in-out hover:shadow-black rounded-3xl'>
                        {img ? <img src={img} alt={img_alt} className='hidden md:flex max-h-96 transform -scale-x-100 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:transform hover:-scale-x-110  '/> : ""}
                    </div>
                </div>
                <div className="mx-auto text-left w-100 md:w-11/12 xl:w-2/3 md:text-center">
                    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span>
                            {mainheading}
                        </span> 
                        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-lime-600 to-green-500 lg:inline">
                            {colorheading}
                        </span> 
                        <span>
                            {thirdheading}
                        </span>
                    </h1>
                    <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                        {text}
                    </p>
                    <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                        <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-gray-900 bg-lime-500 rounded-2xl sm:w-auto sm:mb-0">
                            {goto}
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                            {more}
                            <LightBulbIcon className='ml-1 h-5'/>
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default HeroSection