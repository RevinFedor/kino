import React, { useState } from "react";

const array = [
  {
    img: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000018ab1e840a3746a3022fc80bc6293/340x510",
    title: "Название фильма",
    total: "4",
    description:
      "Плюс Мульти с Амедиатекой — это фильмы и сериалы more.tv, фильмы, сериалы и каналы Амедиатеки, а также бесплатный доступ к дополнительной опции Детям.",
  },
  {
    img: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000018ab1e840a3746a3022fc80bc6293/340x510",
    title: "Название фильма",
    total: "4",
    description:
      "Плюс Мульти с Амедиатекой — это фильмы и сериалы more.tv, фильмы, сериалы и каналы Амедиатеки, а также бесплатный доступ к дополнительной опции Детям.",
  },
  {
    img: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000018ab1e840a3746a3022fc80bc6293/340x510",
    title: "Название фильма",
    total: "4",
    description:
      "Плюс Мульти с Амедиатекой — это фильмы и сериалы more.tv, фильмы, сериалы и каналы Амедиатеки, а также бесплатный доступ к дополнительной опции Детям.",
  },
  {
    img: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000018ab1e840a3746a3022fc80bc6293/340x510",
    title: "Название фильма",
    total: "4",
    description:
      "Плюс Мульти с Амедиатекой — это фильмы и сериалы more.tv, фильмы, сериалы и каналы Амедиатеки, а также бесплатный доступ к дополнительной опции Детям.",
  },
  {
    img: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000018ab1e840a3746a3022fc80bc6293/340x510",
    title: "Название фильма",
    total: "4",
    description:
      "Плюс Мульти с Амедиатекой — это фильмы и сериалы more.tv, фильмы, сериалы и каналы Амедиатеки, а также бесплатный доступ к дополнительной опции Детям.",
  },
  {
    img: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000018ab1e840a3746a3022fc80bc6293/340x510",
    title: "Название фильма",
    total: "4",
    description:
      "Плюс Мульти с Амедиатекой — это фильмы и сериалы more.tv, фильмы, сериалы и каналы Амедиатеки, а также бесплатный доступ к дополнительной опции Детям.",
  },
];

const itemsPerPage = 4;

const Items = () => {
  const [items, setItem] = useState(array);

  const [img, setImg] = useState();
  const [title, settitle] = useState();
  const [total, settotal] = useState();
  const [description, setdescription] = useState();

  const hundleClick = () => {
    const item = {
      img: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000018ab1e840a3746a3022fc80bc6293/340x510",
      title,
      total,
      description,
    };
    setItem((items) => [...items, item]);
    settitle("");
    settotal("");
    setdescription("");
  };

  // Разделение элементов на страницы
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Обработчик смены страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Обработчик для кнопки "Следующая страница"
  const handleNextPage = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Обработчик для кнопки "Предыдущая страница"
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

   const [searchTerm, setSearchTerm] = useState("");
  // Обработчик для поля поиска
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Сброс текущей страницы при изменении поискового запроса
  };

  return (
    <div className="text-white mt-16  w-[1200px] mx-auto ">
      <div className="text-[24px] pb-2 border-b-2 mb-14 flex justify-between">
        <span>НОВИНКИ</span>
        <input
          value={searchTerm}
          onChange={handleSearchChange}
          type="search"
          placeholder="Поиск"
          className="px-4 rounded-full text-[18px] text-black"
        />
      </div>
      <div className="flex justify-between ">
        <button
          onClick={handlePrevPage}
          className="rounded-full h-12 w-34 px-4 bg-yellow-400 text-xl text-black"
        >
          Предыдущая страница
        </button>
        <div className="flex justify-center items-center text-2xl gap-3 mb-10">
          {Array.from(
            { length: Math.ceil(items.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`rounded-full h-12 w-12 ${
                  currentPage === index + 1 ? "bg-yellow-400 text-black" : ""
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
        <button
          onClick={handleNextPage}
          className="rounded-full h-12 w-34 px-4 bg-yellow-400 text-xl text-black"
        >
          Следущая страница
        </button>
      </div>
      <div className=" grid grid-cols-4 gap-4">
        {items.slice(indexOfFirstItem, indexOfLastItem).map((item) => (
          <div className="w-[280px] bg-[#232323] px-4 py-4 rounded-2xl">
            <img className="rounded-2xl" src={item.img} alt="" />
            <div className="">{item.title}</div>
            <div className="">Оценка - {item.total}</div>
            <div className="">{item.description}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 mt-10 pb-24">
        --- Заголовок
        <input
          className="input_form"
          onChange={(e) => settitle(e.target.value)}
          type="text"
          value={title}
        />
        --- Циферка оценка
        <input
          className="input_form"
          onChange={(e) => settotal(e.target.value)}
          type="text"
          value={total}
        />
        --- Описание
        <input
          className="input_form"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          type="text"
        />
        <button onClick={hundleClick}>Добавить</button>
      </div>
    </div>
  );
};

export default Items;
