const data = [
  {
    id: 1,
    titulo: 'libro 1',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 1200,
    autor: 'autor 1',
    img: '../../Images/Books/Attack_on_Titan_Lost_Girls_(novel).jpg',
    categoria: 'a'
  },
  {
    id: 2,
    titulo: 'libro 2',
    tipo: 'libro',
    stock: 10,
    desc: 'Desc',
    precio: 1100,
    autor: 'autor 2',
    img: '../../Images/Books/Back_When_You_Called_Us_Devils_Volume_13.jpg',
    categoria: 'a'
  },
  {
    id: 3,
    titulo: 'libro 3',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 1200,
    autor: 'autor 3',
    img: '../../Images/Books/Cardcaptor_Sakura_Clear_Card_Volume_11.jpg',
    categoria: 'a'
  },
  {
    id: 4,
    titulo: 'libro 4',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 1400,
    autor: 'autor 4',
    img: '../../Images/Books/DAYS_Volume_29.jpg',
    categoria: 'b'
  },
  {
    id: 5,
    titulo: 'libro 5',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 1200,
    autor: 'autor 1',
    img: '../../Images/Books/Hagakure.jpg',
    categoria: 'b'
  },
  {
    id: 6,
    titulo: 'libro 6',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 1500,
    autor: 'autor 2',
    img: '../../Images/Books/Harem_Marriage_Volume_17.jpg',
    categoria: 'c'
  },
  {
    id: 7,
    titulo: 'libro 7',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 500,
    autor: 'autor 3',
    img: '../../Images/Books/Koigakubo-kun_Stole_My_First_Time_Volume_1.jpg',
    categoria: 'c'
  },
  {
    id: 8,
    titulo: 'libro 8',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 500,
    autor: 'autor 4',
    img: '../../Images/Books/Musashi.jpg',
    categoria: 'd'
  },
  {
    id: 9,
    titulo: 'libro 9',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 500,
    autor: 'autor 1',
    img: '../../Images/Books/Nighttime_for_Just_Us_Two_Volume_2.jpg',
    categoria: 'd'
  },
  {
    id: 10,
    titulo: 'libro 10',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 700,
    autor: 'autor 2',
    img: '../../Images/Books/OTOMO_A_Global_Tribute_to_the_Mind_Behind_Akira.jpg',
    categoria: 'e'
  },
  {
    id: 11,
    titulo: 'libro 11',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 700,
    autor: 'autor 3',
    img: '../../Images/Books/Seraph_of_the_End_Guren_Ichinose_Resurrection_at_Nineteen_Volume_1.jpg',
    categoria: 'e'
  },
  {
    id: 12,
    titulo: 'libro 12',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 700,
    autor: 'autor 4',
    img: '../../Images/Books/Taiko.jpg',
    categoria: 'f'
  },
  {
    id: 13,
    titulo: 'libro 13',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 900,
    autor: 'autor 1',
    img: '../../Images/Books/The_Blade_of_the_Courtesans.jpg',
    categoria: 'f'
  },
  {
    id: 14,
    titulo: 'libro 14',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 1400,
    autor: 'autor 2',
    img: '../../Images/Books/The_Seven_Deadly_Sins_Seven-Colored_Recollections.jpg',
    categoria: 'g'
  },
  {
    id: 15,
    titulo: 'libro 15',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 7000,
    autor: 'autor 3',
    img: '../../Images/Books/Your_Lie_in_April_A_Six-Person_Etude.jpg',
    categoria: 'g'
  },
  {
    id: 16,
    titulo: 'libro 16',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 777,
    autor: 'autor 4',
    img: '../../Images/Books/Ring.jpg',
    categoria: 'h'
  },
  {
    id: 17,
    titulo: 'libro 17',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 234,
    autor: 'autor 4',
    img: '../../Images/Books/Shield_of_Straw.jpg',
    categoria: 'h'
  },
  {
    id: 18,
    titulo: 'libro 18',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 155600,
    autor: 'autor 1',
    img: '../../Images/Books/The_Eternal_Zero.jpg',
    categoria: 'i'
  },
  {
    id: 19,
    titulo: 'libro 19',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 1600,
    autor: 'autor 2',
    img: '../../Images/Books/Lala_Pipo.jpg',
    categoria: 'i'
  },
  {
    id: 20,
    titulo: 'libro 20',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 3200,
    autor: 'autor 3',
    img: '../../Images/Books/Lala_Pipo.jpg',
    categoria: 'j'
  },
  {
    id: 21,
    titulo: 'libro 21',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 2300,
    autor: 'autor 4',
    img: '../../Images/Books/DAYS_Volume_29.jpg',
    categoria: 'j'
  },
  {
    id: 22,
    titulo: 'libro 22',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 5600,
    autor: 'autor 1',
    img: '../Images/Books/Cardcaptor_Sakura_Clear_Card_Volume_11.jpg',
    categoria: 'k'
  },
  {
    id: 23,
    titulo: 'libro 23',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 1700,
    autor: 'autor 2',
    img: '../../Images/Books/Back_When_You_Called_Us_Devils_Volume_13.jpg',
    categoria: 'k'
  },
  {
    id: 24,
    titulo: 'libro 24',
    tipo: 'libro',
    stock: 1,
    desc: 'Desc',
    precio: 800,
    autor: 'autor 3',
    img: '../Images/Books/Hagakure.jpg',
    categoria: 'l'
  }
];
export function getBooks() {
  return new Promise((resolver) => {
    setTimeout(() => resolver(data), 1500)
  })
}
export function getUnlibro(idParams) {
  return new Promise((resolve) => {
    let bookReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => resolve(bookReq), 1000);
  });
}

export function getBookByCategoria(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterLibro = data.filter(
      (item) => item.category === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterLibro), 1000);
  });
}