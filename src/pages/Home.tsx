import KhojoLogo from "../assets/KhojoLogo.svg";
function Home() {
  return (
    <>
      <div className="flex px-2 justify-between w-full items-center -mt-16">
        <div className="flex-grow flex flex-col items-center w-full lg:w-2/3 whitespace-normal gap-8">
          <span className="w-4/5">
            <h1 className="lg:text-7xl md:text-6xl text-5xl font-extrabold break-line">
              EVEN THE&nbsp;
              <div className="text-cyan-300 break-words lg:inline">
                BEST&nbsp;
              </div>
              <div className="whitespace-normal">OF US CAN'T ESCAPE&nbsp;</div>
              <div className="text-red-500">DEPRESSION</div>
            </h1>
          </span>
          <div className="w-4/5 md:text-2xl lg:pr-16 text-xl leading-relaxed text-slate-200">
            Life can be tough for everyone, even for the best of us at Team Khojo.
            But don't let that crippling
            <span className="text-red-500">{" depression "}</span>
            dull your inner spark. Find motivation from the experienced
            motivational
            <span className="text-[#FFD700] font-bold">{" LEGENDS "}</span>
            within Team Khojo who haven't overcome depression yet. And always
            remember, you are still worthy
            <span className="text-cyan-400 font-bold">{" WORTHY "}</span>.
          </div>
        </div>
        <div className="hidden md:block w-1/3">
          <img
            src={KhojoLogo}
            alt="Khojo, kisu paile boilo"
            className="h-96 w-96"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
