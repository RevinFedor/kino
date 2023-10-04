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
];

const Items = () => {
  const [items, setItem] = useState(array);

  const [img, setImg] = useState();
  const [title, settitle] = useState();
  const [total, settotal] = useState();
  const [description, setdescription] = useState();

  const hundleClick = () => {
    const item = { img: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000018ab1e840a3746a3022fc80bc6293/340x510", title, total, description };
    setItem((items) => [...items, item]);
    settitle('')
    settotal('')
    setdescription('')
  };
  console.log(items);
  return (
    <div className="text-white mt-16  w-[1200px] mx-auto ">
      <div className="text-[24px] pb-2 border-b-2 mb-14">НОВИНКИ</div>
      <div className=" grid grid-cols-4 gap-4">
        {items.map((item) => (
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
          className="text-black"
          onChange={(e) => settitle(e.target.value)}
          type="text"
          value={title}
        />
        --- Циферка оценка
        <input
          className="text-black"
          onChange={(e) => settotal(e.target.value)}
          type="text"
          value={total}
        />
        --- Описание
        <input
          className="text-black"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          type="text"
        />
        <button onClick={(e) => hundleClick()}>Добавить</button>
      </div>
    </div>
  );
};

export default Items;
