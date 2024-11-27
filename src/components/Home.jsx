import ProfileImage from './../assets/Sagar_CM.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section id="profile" className="flex flex-col md:flex-row md:space-x-24 items-center justify-center py-16 bg-white h-screen">
                <div className="section__pic-container mb-8">
                    <img src={ProfileImage} alt="profile picture" className=" w-52 h-52 md:w-[500px] md:h-[500px]" />
                </div>
                <div className="text-center items-center">
                    <p className="text-gray-600 mb-2 text-2xl">Hello, I&apos;m</p>
                    <h1 className="text-5xl font-bold text-gray-800 mb-2">Sagar C Mannannavar</h1>
                    <p className="text-gray-600 mb-4 text-xl">Final Year Computer Science Student | BMSCE</p>
                    <p className="text-gray-600 mb-4 text-xl">Upcoming Intern at HPE</p>
                    <div className="flex justify-center space-x-4 mb-4">
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => window.location.href = 'https://drive.google.com/file/d/1zrru6onNMamfZd1PQPLTfG7Cxqsmy0h5/view?usp=sharing'}
                        >
                            Download CV
                        </button>
                        <Link to='/about'className="bg-gray-800 text-white px-4 py-2 rounded">Contact Info</Link>
                    </div>

                    <div id="socials-container" className="flex justify-center space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/sagar-c-mannannavar-08a002251" className="text-gray-800 hover:text-gray-500">
                            <i className="fab fa-linkedin-in text-3xl"></i>
                        </a>
                        <a href="https://github.com/sagarcm13/" className="text-gray-800 hover:text-gray-500">
                            <i className="fab fa-github text-3xl"></i>
                        </a>
                        <a href="https://leetcode.com/u/sagar_c_mannannavar/" className="text-gray-800 hover:text-gray-500">
                            <SimpleIconsLeetcode />
                        </a>
                        <a href="https://www.instagram.com/sagar_cm6/" className="text-gray-800 hover:text-gray-500">
                            <i className="fab fa-instagram text-3xl"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Home;
export function SimpleIconsLeetcode(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"></path></svg>);
}