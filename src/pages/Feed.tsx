import KhojoBird from "../assets/KhojoBird.svg";
function Feed() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 bg-slate-600 h-max p-4 rounded shadow shadow-slate-300">
        <div className="rounded-full border-2 border-blue-400 h-10 w-10 flex items-center justify-center bg-red-300">
          <img
            src={KhojoBird}
            alt="Khojo, kisu paile boilo"
            className="h-8 w-8"
          />
        </div>
        <div>
          <h2 className="font-bold">I Lost my motivation</h2>
          <p>
            After sharing my generation breaking startup idea with a guy on
            discord, he stole the idea and trademarked it. I lost my motivation,
            but gained it back after visiting motivation khojo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feed;
