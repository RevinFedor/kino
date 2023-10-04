
import "./App.css";
import Items from "./components/Items";

function App() {
  return (
    <div className="bg-[#383838]">
      <header className="bg-[#292929]  ">
        <section className=" w-[1200px] mx-auto py-4 text-[24px] text-white flex justify-between">
          <button className="flex justify-between items-center">
            KINO
            <span className="w-[100px] h-[40px] bg-yellow-400 text-black text-center rounded-full ml-3">
              HUB
            </span>
          </button>
          <button
            onClick={(e) => {
              alert(
                "Разработан при поддержке Министерство науки и высшего образования РФ на проект выделено 100 млн"
              );
            }}
          >
            нажми на меня!!
          </button>
          <div className="btn-center">
            <button className="w-[140px] h-[40px] border-2 rounded-full">ВОЙТИ</button>
            <button className="w-[120px] h-[40px] bg-yellow-400 text-black text-[14px]  rounded-full ml-3 font-semibold leading-4 ">
              СОЗДАТЬ АККАУНТ
            </button>
          </div>
        </section>
      </header>

      <Items />
    </div>
  );
}

export default App;
