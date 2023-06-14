import * as React from 'react';

export default function App() {
  let data = [
    {
      idProd: 34,
      prodName: 'adaptater',
      pordDesc: 'This is Adaptater',
      prodImg: 'public/username_1/BhnB3PqpWjd4ZpApTl7ukSHqKsOwATB5Ux5EPJVb.jpg',
      prodPrice: 30,
      prodQt: 200,
      idCat: 3,
      created_at: '2023-05-22 20:36:55',
      updated_at: '2023-05-22 20:36:55',
      user_id: 2,
    },
    {
      idProd: 35,
      prodName: 'smart phone',
      pordDesc: 'smart phone infix 8gb RAM, 128gb ROM, CPU snap dragon 22x',
      prodImg: 'public/username_1/xuKBxpePoiQAEkN87udLXBmRmRhaBvFXkO6nms6e.jpg',
      prodPrice: 600,
      prodQt: 32,
      idCat: 3,
      created_at: '2023-05-22 20:41:04',
      updated_at: '2023-05-22 20:41:04',
      user_id: 2,
    },
    {
      idProd: 36,
      prodName: 'clavier',
      pordDesc: 'clavier special pour les jeux \r\nconfore a long terme',
      prodImg: 'public/username_1/P9WMw07iwjdB8pf2uyDGyhXsk3SuJlzVuFM7LULG.jpg',
      prodPrice: 50,
      prodQt: 40,
      idCat: 4,
      created_at: '2023-05-22 20:45:19',
      updated_at: '2023-05-22 20:45:19',
      user_id: 2,
    },
    {
      idProd: 37,
      prodName: 'protection',
      pordDesc:
        'accessoires pour votre affaire \r\net te carreier proficionnel gamer',
      prodImg: 'public/username_1/ZLwrQIza5M9lw9wNLutMS4Tp8R2pttCzlWn2sT1E.jpg',
      prodPrice: 300,
      prodQt: 3,
      idCat: 4,
      created_at: '2023-05-22 20:48:32',
      updated_at: '2023-05-22 20:48:32',
      user_id: 2,
    },
    {
      idProd: 39,
      prodName: 'fours',
      pordDesc: 'un bon qualite de fours perfect choix pour une votre cuisine',
      prodImg: 'public/username_1/oxlIHZPp5tJB3CIwsQ31Vg82HWa3CcpQfP4zRUGc.jpg',
      prodPrice: 240,
      prodQt: 20,
      idCat: 2,
      created_at: '2023-05-22 20:58:39',
      updated_at: '2023-05-22 20:58:39',
      user_id: 2,
    },
    {
      idProd: 40,
      prodName: 'Stickers',
      pordDesc: 'Stickers pour votre cuisine pour faire un bon extchange',
      prodImg: 'public/username_1/rirw29WPk2HtG0oSrNPJtv0GIHqbvYT6zUxc2oxU.jpg',
      prodPrice: 20,
      prodQt: 320,
      idCat: 2,
      created_at: '2023-05-22 21:01:28',
      updated_at: '2023-05-22 21:01:28',
      user_id: 2,
    },
    {
      idProd: 42,
      prodName: 'courde',
      pordDesc: 'un courde pour les gens qui aime la movent',
      prodImg: 'public/username_1/pBk0pieh4YCRWpRGXVwtkjPwlw0igWzywCOchjV1.jpg',
      prodPrice: 2.39,
      prodQt: 32,
      idCat: 1,
      created_at: '2023-05-22 21:07:02',
      updated_at: '2023-05-22 21:07:02',
      user_id: 2,
    },
    {
      idProd: 43,
      prodName: 'velo',
      pordDesc: 'velo pour les gens qui aime la movent',
      prodImg: 'public/username_1/doXRU6RVh1wT7vnTKbxetD3sKEraTrdVSbXZw4SZ.jpg',
      prodPrice: 500.33,
      prodQt: 30,
      idCat: 1,
      created_at: '2023-05-22 21:08:40',
      updated_at: '2023-05-22 21:08:40',
      user_id: 2,
    },
    {
      idProd: 44,
      prodName: 'smart watch',
      pordDesc: 'smart watch 30:20 tille avec un bon experience de ui',
      prodImg:
        'public/usernameutf-8_4/G5AwFIitefW6d9NQ0a3BSs1ywPHyHq29AHsfN2Hb.jpg',
      prodPrice: 29,
      prodQt: 200,
      idCat: 3,
      created_at: '2023-05-22 21:14:16',
      updated_at: '2023-05-22 21:14:16',
      user_id: 7,
    },
    {
      idProd: 45,
      prodName: 'cart memoire',
      pordDesc: 'cart memoire pour les bon memoire et les suvenire  16gb',
      prodImg:
        'public/usernameutf-8_4/XlVUKy8p5CxHwcU1Tkzm7JyW8QAwPU7uwH4eJs9F.jpg',
      prodPrice: 10,
      prodQt: 200,
      idCat: 3,
      created_at: '2023-05-22 21:16:16',
      updated_at: '2023-05-22 21:16:16',
      user_id: 7,
    },
    {
      idProd: 46,
      prodName: 'support voiture',
      pordDesc: 'laison votre voiture avec support accessoire ou un bell vue',
      prodImg:
        'public/usernameutf-8_4/h9rqNWkbEZLkpvYSTRyf9qnDg5uOxpFESow120tH.jpg',
      prodPrice: 20,
      prodQt: 300,
      idCat: 3,
      created_at: '2023-05-22 21:18:23',
      updated_at: '2023-05-22 21:18:23',
      user_id: 7,
    },
    {
      idProd: 47,
      prodName: 'cv gravier fifa',
      pordDesc: 'fifa 2023 la nouvel version cd grave',
      prodImg:
        'public/usernameutf-8_4/dikcQ8iUjqjKL0JAgnTXK8YKfh1JQfNT30rFqbUu.jpg',
      prodPrice: 13.99,
      prodQt: 20,
      idCat: 4,
      created_at: '2023-05-22 21:19:52',
      updated_at: '2023-05-22 21:19:52',
      user_id: 7,
    },
    {
      idProd: 48,
      prodName: 'mannet',
      pordDesc: 'un mannet support usb type c, bluetooth',
      prodImg:
        'public/usernameutf-8_4/oE2zN7z41V3EWuY2fJukRYHVPrxV8eJNxqDgDOGE.jpg',
      prodPrice: 9,
      prodQt: 33,
      idCat: 4,
      created_at: '2023-05-22 21:22:10',
      updated_at: '2023-05-22 21:22:10',
      user_id: 7,
    },
    {
      idProd: 49,
      prodName: 'machine alave',
      pordDesc: 'un bon machine alave avec un bon qualite lg garenty 3ans',
      prodImg:
        'public/usernameutf-8_4/L3tCxAKXfqIz0b96936BJQJlZJqsAqSxZarvmhfE.jpg',
      prodPrice: 999,
      prodQt: 200,
      idCat: 2,
      created_at: '2023-05-22 21:24:09',
      updated_at: '2023-05-22 21:24:09',
      user_id: 7,
    },
    {
      idProd: 50,
      prodName: 'balance electronique',
      pordDesc: 'un balance electronique avec max 30kg\r\navec un garantie',
      prodImg:
        'public/usernameutf-8_4/1Hf58HCV1JfFb7uW4uO1C4fFSpZXMva85GzGg4YL.jpg',
      prodPrice: 29.99,
      prodQt: 20,
      idCat: 2,
      created_at: '2023-05-22 21:36:05',
      updated_at: '2023-05-22 21:36:05',
      user_id: 7,
    },
    {
      idProd: 51,
      prodName: 'refrigirateur',
      pordDesc: 'un refirgirateur avec un garantie bon qulite',
      prodImg:
        'public/usernameutf-8_4/mCIktYCgWriI9Ga76yjqWw1IkcqjPdLSVdSQOMxx.jpg',
      prodPrice: 1599,
      prodQt: 33,
      idCat: 2,
      created_at: '2023-05-22 21:37:53',
      updated_at: '2023-05-22 21:37:53',
      user_id: 7,
    },
    {
      idProd: 52,
      prodName: 'barre fix',
      pordDesc: 'barre fix pour votre maison ou votre sall de sport',
      prodImg:
        'public/usernameutf-8_4/rGltolZu1MDS1k0SHcbbKiCgmEHH0XYGroiGgwTf.jpg',
      prodPrice: 59.99,
      prodQt: 32,
      idCat: 1,
      created_at: '2023-05-22 21:41:20',
      updated_at: '2023-05-22 21:41:20',
      user_id: 7,
    },
    {
      idProd: 53,
      prodName: 'confore mesuclaire',
      pordDesc: 'la confortation nessicere pour un bon vis',
      prodImg:
        'public/usernameutf-8_4/4mfqer6bmQPj1XqTlqAVq7U6m5hoyePG3QuiYATt.jpg',
      prodPrice: 33.3,
      prodQt: 100,
      idCat: 1,
      created_at: '2023-05-22 21:43:28',
      updated_at: '2023-05-22 21:43:28',
      user_id: 7,
    },
    {
      idProd: 54,
      prodName: 'lokit',
      pordDesc: 'tolkit pour un bon experience de votre jeux',
      prodImg:
        'public/usernameutf-8_4/SnS7rsriaE7VSSWIL9LgH4oBDB2ET529YU3STZYz.jpg',
      prodPrice: 30,
      prodQt: 3,
      idCat: 4,
      created_at: '2023-05-22 21:46:08',
      updated_at: '2023-05-22 21:46:08',
      user_id: 7,
    },
    {
      idProd: 55,
      prodName: 'paire con',
      pordDesc: 'paire con est bon experience de jeux avec votre telephone',
      prodImg:
        'public/usernameutf-8_4/jLqaYzqRhhBcNy7S7h2k9GsfVL1TpCl0XU6UZtjz.jpg',
      prodPrice: 5,
      prodQt: 2000,
      idCat: 4,
      created_at: '2023-05-22 21:48:39',
      updated_at: '2023-05-22 21:48:39',
      user_id: 7,
    },
    {
      idProd: 56,
      prodName: 'support jeux',
      pordDesc: 'un bon experience avec votre telephone jeux',
      prodImg:
        'public/salah.said_7/Ke0bCCHfBzuNFw5U8baX2e386j5VcEYJ5J3sb28m.jpg',
      prodPrice: 30.99,
      prodQt: 200,
      idCat: 4,
      created_at: '2023-05-22 21:55:50',
      updated_at: '2023-05-22 21:55:50',
      user_id: 8,
    },
    {
      idProd: 57,
      prodName: 'protege jeux',
      pordDesc: 'un bon experience jeux avec votre telephone',
      prodImg:
        'public/salah.said_7/J1wBadZTRQC6MxQPAGqDY4r8aYjD3M88X9eaeTmO.jpg',
      prodPrice: 33.99,
      prodQt: 30,
      idCat: 4,
      created_at: '2023-05-22 21:59:34',
      updated_at: '2023-05-22 21:59:34',
      user_id: 8,
    },
    {
      idProd: 58,
      prodName: 'pc gamer msi',
      pordDesc: 'pc gamer pour 8gb RAM upgardable 500gb ssd',
      prodImg:
        'public/salah.said_7/K5Qs3mwcYN9JNCyfEiWamcXaw95CEjf71P3VxFdd.jpg',
      prodPrice: 3000,
      prodQt: 20,
      idCat: 4,
      created_at: '2023-05-22 22:13:10',
      updated_at: '2023-05-22 22:13:10',
      user_id: 8,
    },
    {
      idProd: 59,
      prodName: 'playstation5',
      pordDesc: 'playstation5 un bon qualite international',
      prodImg:
        'public/salah.said_7/sheLaHIPZ0MCeELx465TNYChxCp6sylZXdYWE5wk.jpg',
      prodPrice: 2000,
      prodQt: 32,
      idCat: 4,
      created_at: '2023-05-22 22:17:59',
      updated_at: '2023-05-22 22:17:59',
      user_id: 8,
    },
    {
      idProd: 60,
      prodName: 'gta_gravier',
      pordDesc: 'gta salondrass cd gravier un bon experience avec un bon jeux',
      prodImg:
        'public/salah.said_7/u9TBqYjo6Vqdxe4tPWBpg0NX3USHXAu7mYDkT0SC.jpg',
      prodPrice: 30,
      prodQt: 300,
      idCat: 4,
      created_at: '2023-05-22 22:19:38',
      updated_at: '2023-05-22 22:19:38',
      user_id: 8,
    },
    {
      idProd: 61,
      prodName: 'vertual game',
      pordDesc: 'bon experience avec 3d game',
      prodImg:
        'public/salah.said_7/blaaEUq2RuoMwVf0YZ0WzCpoITVzcAr8EnaxzHS0.jpg',
      prodPrice: 5000,
      prodQt: 33,
      idCat: 4,
      created_at: '2023-05-22 22:21:13',
      updated_at: '2023-05-22 22:21:13',
      user_id: 8,
    },
    {
      idProd: 62,
      prodName: 'converts',
      pordDesc: 'un accesoire convert un bell vue dans votre cuisine',
      prodImg:
        'public/salah.said_7/lZy7xLxCnqjW42S9IM76r9rgyPdSq5kcFh2WHAbf.jpg',
      prodPrice: 33,
      prodQt: 34,
      idCat: 2,
      created_at: '2023-05-22 22:28:27',
      updated_at: '2023-05-22 22:28:27',
      user_id: 8,
    },
    {
      idProd: 63,
      prodName: 'tablette',
      pordDesc:
        'un tablette pour les enfant pour etudier avec un nouvelle system',
      prodImg:
        'public/salah.said_7/AEgwV0jq3bsjQqLmZUhtwoAmX4IXJNbpzzYVseuC.jpg',
      prodPrice: 304,
      prodQt: 32,
      idCat: 3,
      created_at: '2023-05-22 22:44:37',
      updated_at: '2023-05-22 22:44:37',
      user_id: 8,
    },
    {
      idProd: 64,
      prodName: 'chargeur',
      pordDesc: 'chargeur rapide  2A, 33w',
      prodImg:
        'public/salah.said_7/rVmnUImzngQlomObGgLGDYrAUjHnB0UKO9LRgVPU.jpg',
      prodPrice: 13,
      prodQt: 30,
      idCat: 3,
      created_at: '2023-05-22 22:46:53',
      updated_at: '2023-05-22 22:46:53',
      user_id: 8,
    },
    {
      idProd: 65,
      prodName: 'liminusite controller',
      pordDesc: 'limunisite controller pour amilore votre vie proficinelle',
      prodImg:
        'public/salah.said_7/rujwFCkz2X5zqVK1RUS9feVpTDW4HKgmLpALSYdG.jpg',
      prodPrice: 400,
      prodQt: 33,
      idCat: 3,
      created_at: '2023-05-22 22:48:53',
      updated_at: '2023-05-22 22:48:53',
      user_id: 8,
    },
    {
      idProd: 66,
      prodName: 'accessoire cuisine',
      pordDesc: 'accessoire cuisine pour un bell vue de votre cuisine',
      prodImg:
        'public/salah.said_7/Dxx7IvRL0adTW5pdYMv2KDZ136TOAAUiqtzyNQbz.jpg',
      prodPrice: 33,
      prodQt: 32,
      idCat: 2,
      created_at: '2023-05-22 22:53:26',
      updated_at: '2023-05-22 22:53:26',
      user_id: 8,
    },
    {
      idProd: 67,
      prodName: 'ajitateur electirque',
      pordDesc: 'ajitateur electrique',
      prodImg:
        'public/salah.said_7/cYg42bnYpgou91DBpuWT287IbUGYK2viKdorGhew.jpg',
      prodPrice: 20,
      prodQt: 30,
      idCat: 2,
      created_at: '2023-05-22 22:54:44',
      updated_at: '2023-05-22 22:54:44',
      user_id: 8,
    },
    {
      idProd: 69,
      prodName: 'vetement tunisie',
      pordDesc: "pour les tunisien qui aime l'equipe internationnal",
      prodImg:
        'public/salah.said_7/Mh8Z9NB3DYAmenOB5McOljD1Hq2KvojGsJpypGtr.jpg',
      prodPrice: 33.44,
      prodQt: 33,
      idCat: 1,
      created_at: '2023-05-22 23:10:15',
      updated_at: '2023-05-22 23:10:15',
      user_id: 8,
    },
    {
      idProd: 70,
      prodName: 'grip adjiustable',
      pordDesc: 'pour un entraiment les triseps, bisepse',
      prodImg:
        'public/salah.said_7/5C5iwaRytA0UryRiNHuGe7kqeRGmMUZ6LGmtatA5.jpg',
      prodPrice: 30,
      prodQt: 200,
      idCat: 1,
      created_at: '2023-05-22 23:12:27',
      updated_at: '2023-05-22 23:12:27',
      user_id: 8,
    },
    {
      idProd: 71,
      prodName: 'arrter',
      pordDesc: 'un bon experience de entraiment avec arrter',
      prodImg:
        'public/salah.said_7/eey5kyqhivRDuOqJBd42oiUxRZo3iOO5lZ5sTuiP.png',
      prodPrice: 33,
      prodQt: 20,
      idCat: 1,
      created_at: '2023-05-22 23:13:47',
      updated_at: '2023-05-22 23:13:47',
      user_id: 8,
    },
    {
      idProd: 72,
      prodName: 'decathlon cartable',
      pordDesc:
        'style decathlon cartable tres faible cous avec un confortation',
      prodImg:
        'public/salah.said_7/nPNKBW1UEqOoKBZFkk4nHUIogle3Z5IQFWwdO5t3.jpg',
      prodPrice: 32,
      prodQt: 300,
      idCat: 1,
      created_at: '2023-05-22 23:15:24',
      updated_at: '2023-05-22 23:15:24',
      user_id: 8,
    },
    {
      idProd: 73,
      prodName: 'mini bisclette',
      pordDesc: 'mini biscletter pour les enfaint',
      prodImg:
        'public/salah.said_7/wr8dhdmGMPky8RW1recjGul96bJWdODqoSI1zqCj.jpg',
      prodPrice: 200,
      prodQt: 323,
      idCat: 1,
      created_at: '2023-05-22 23:16:42',
      updated_at: '2023-05-22 23:16:42',
      user_id: 8,
    },
    {
      idProd: 74,
      prodName: 'prod',
      pordDesc: 'this is a pord',
      prodImg: 'public/username_1/2oJdkqPIPIstYDgcQP4V8upr85761d2Vc76lCmdX.png',
      prodPrice: 21.3,
      prodQt: 90,
      idCat: 1,
      created_at: '2023-05-23 10:37:39',
      updated_at: '2023-05-23 10:37:39',
      user_id: 2,
    },
  ];

  let catIds = [1, 2, 3, 4];

  let ourDect = {};

  catIds.forEach((value) => {
    ourDect[value] = false;
  });

  let ref_val = React.useRef(ourDect);
  let [data_, setData_] = React.useState(catIds);

  let datafilter = function (e) {
    let target = e.target;
    let current_status = ref_val.current;
    current_status[target.value] = target.checked;
    let newStatArray = [];
    for (let i in current_status) {
      if (current_status[i]) newStatArray.push(parseInt(i));
    }
    if (newStatArray.length > 0) setData_(newStatArray);
  };

  return (
    <div>
      <div>
        {catIds.map((value) => (
          <div>
            <input type="checkbox" value={value} onChange={datafilter} />
            {value}
          </div>
        ))}
      </div>
      {data_.map((value) => (
        <div>
          <h1> catid = {value} </h1>
          {data.map(
            (product) => value == product.idCat && <h1> {product.prodName} </h1>
          )}
        </div>
      ))}
    </div>
  );
}
