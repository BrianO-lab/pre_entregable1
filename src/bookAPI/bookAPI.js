const data = [
  {
    id: 1,
    titulo: 'libro 1',
    categoria: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 1200,
    autor: 'autor 1',
    img: '../../Images/Books/Attack_on_Titan_Lost_Girls_(novel).jpg'
  },
  {
    id: 2,
    titulo: 'libro 2',
    categoria: 'manga',
    stock: 10,
    desc: 'Desc',
    precio: 1100,
    autor: 'autor 2',
    img: '../../Images/Books/Back_When_You_Called_Us_Devils_Volume_13.jpg'
  },
  {
    id: 3,
    titulo: 'libro 3',
    categoria: 'artbook',
    stock: 10,
    desc: 'Desc',
    precio: 1200,
    autor: 'autor 3',
    img: '../../Images/Books/Cardcaptor_Sakura_Clear_Card_Volume_11.jpg'
  },
  {
    id: 4,
    titulo: 'libro 4',
    categoria: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 1400,
    autor: 'autor 4',
    img: '../../Images/Books/DAYS_Volume_29.jpg'
  },
  {
    id: 5,
    titulo: 'libro 5',
    categoria: 'manga',
    stock: 10,
    desc: 'Desc',
    precio: 1200,
    autor: 'autor 1',
    img: '../../Images/Books/Hagakure.jpg'
  },
  {
    id: 6,
    titulo: 'libro 6',
    categoria: 'artbook',
    stock: 10,
    desc: 'Desc',
    precio: 1500,
    autor: 'autor 2',
    img: '../../Images/Books/Harem_Marriage_Volume_17.jpg'
  },
  {
    id: 7,
    titulo: 'libro 7',
    categoria: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 500,
    autor: 'autor 3',
    img: '../../Images/Books/Koigakubo-kun_Stole_My_First_Time_Volume_1.jpg'
  },
  {
    id: 8,
    titulo: 'libro 8',
    categoria: 'manga',
    stock: 10,
    desc: 'Desc',
    precio: 500,
    autor: 'autor 4',
    img: '../../Images/Books/Musashi.jpg'
  },
  {
    id: 9,
    titulo: 'libro 9',
    categoria: 'artbook',
    stock: 10,
    desc: 'Desc',
    precio: 500,
    autor: 'autor 1',
    img: '../../Images/Books/Nighttime_for_Just_Us_Two_Volume_2.jpg'
  },
  {
    id: 10,
    titulo: 'libro 10',
    categoria: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 700,
    autor: 'autor 2',
    img: '../../Images/Books/OTOMO_A_Global_Tribute_to_the_Mind_Behind_Akira.jpg'
  },
  {
    id: 11,
    titulo: 'libro 11',
    categoria: 'manga',
    stock: 10,
    desc: 'Desc',
    precio: 700,
    autor: 'autor 3',
    img: '../../Images/Books/Seraph_of_the_End_Guren_Ichinose_Resurrection_at_Nineteen_Volume_1.jpg'
  },
  {
    id: 12,
    titulo: 'libro 12',
    categoria: 'artbook',
    stock: 10,
    desc: 'Desc',
    precio: 700,
    autor: 'autor 4',
    img: '../../Images/Books/Taiko.jpg'
  },
  {
    id: 13,
    titulo: 'libro 13',
    categoria: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 900,
    autor: 'autor 1',
    img: '../../Images/Books/The_Blade_of_the_Courtesans.jpg'
  },
  {
    id: 14,
    titulo: 'libro 14',
    categoria: 'manga',
    stock: 10,
    desc: 'Desc',
    precio: 1400,
    autor: 'autor 2',
    img: '../../Images/Books/The_Seven_Deadly_Sins_Seven-Colored_Recollections.jpg'
  },
  {
    id: 15,
    titulo: 'libro 15',
    categoria: 'artbook',
    stock: 10,
    desc: 'Desc',
    precio: 7000,
    autor: 'autor 3',
    img: '../../Images/Books/Your_Lie_in_April_A_Six-Person_Etude.jpg'
  },
  {
    id: 16,
    titulo: 'libro 16',
    categoria: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 777,
    autor: 'autor 4',
    img: '../../Images/Books/Ring.jpg'
  },
  {
    id: 17,
    titulo: 'libro 17',
    categoria: 'manga',
    stock: 10,
    desc: 'Desc',
    precio: 234,
    autor: 'autor 4',
    img: '../../Images/Books/Shield_of_Straw.jpg'
  },
  {
    id: 18,
    titulo: 'libro 18',
    categoria: 'artbook',
    stock: 10,
    desc: 'Desc',
    precio: 155600,
    autor: 'autor 1',
    img: '../../Images/Books/The_Eternal_Zero.jpg'
  },
  {
    id: 19,
    titulo: 'libro 19',
    categoria: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 1600,
    autor: 'autor 2',
    img: '../../Images/Books/Lala_Pipo.jpg'
  },
  {
    id: 20,
    titulo: 'libro 20',
    categoria: 'manga',
    stock: 10,
    desc: 'Desc',
    precio: 3200,
    autor: 'autor 3',
    img: '../../Images/Books/Lala_Pipo.jpg'
  },
  {
    id: 21,
    titulo: 'libro 21',
    categoria: 'artbook',
    stock: 10,
    desc: 'Desc',
    precio: 2300,
    autor: 'autor 4',
    img: '../../Images/Books/DAYS_Volume_29.jpg'
  },
  {
    id: 22,
    titulo: 'libro 22',
    categoria: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 5600,
    autor: 'autor 1',
    img: '../Images/Books/Cardcaptor_Sakura_Clear_Card_Volume_11.jpg'
  },
  {
    id: 23,
    titulo: 'libro 23',
    categoria: 'manga',
    stock: 10,
    desc: 'Desc',
    precio: 1700,
    autor: 'autor 2',
    img: '../../Images/Books/Back_When_You_Called_Us_Devils_Volume_13.jpg'
  },
  {
    id: 24,
    titulo: 'libro 24',
    categoria: 'artbook',
    stock: 10,
    desc: 'Desc',
    precio: 800,
    autor: 'autor 3',
    img: '../Images/Books/Hagakure.jpg'
  }
];
export function getBooks() {
  return new Promise((resolver) => {
    setTimeout(() => resolver(data), 0)
  })
}
export function getUnLibro(idParams) {
  return new Promise((resolve) => {
    let bookReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => resolve(bookReq), 0);
  });
}

export function getBookByCategoria(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterLibros = data.filter(
      (item) => item.categoria === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterLibros), 0);
  });
}