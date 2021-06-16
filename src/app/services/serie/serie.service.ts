import { Comment } from './../../models/comment.model';
import { Injectable } from '@angular/core';
import { Serie } from './../../models/serie.model';

/**
 * in this files we put all of our data and we create our crud from there , to bad i wasn't able to link the comment to serie properly
 */

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  series: Array<any>;

  constructor() {

    this.series = [];


    this.series.push({
      id: 1,
      name: 'Penny Dreadful',
      releasedAt: new Date(),
      seasonNumber: '3',
      description: 'Dans le Londres de l\'époque Victorienne, Vanessa Ives, une jeune femme puissante aux pouvoirs hypnotiques, allie ses forces à celles dEthan, un garçon rebelle et violent aux allures de cowboy, et de Sir Malcolm, un vieil homme riche aux ressources inépuisables. Ensemble, ils combattent un ennemi inconnu, presque invisible, qui ne semble pas humain et qui massacre la population',
      critic: 'Penny Dreadful nous plonge dans l\'univers de l\'Angleterre de l\'époque victorienne avec une qualité d\'image remarquable. L\'esthétique est superbe. ',
      picture: 'L_1',
      comment: [{
        author: 'Paul',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 1,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 2,
      name: 'Peaky Blinders',
      releasedAt: new Date(),
      seasonNumber: '5',
      description: 'En 1919, à Birmingham, soldats, révolutionnaires politiques et criminels combattent pour se faire une place dans le paysage industriel de l\'après- Guerre.Le Parlement s\'attend à une violente révolte, et Winston Churchill mobilise des forces spéciales pour contenir les menaces.',
      critic: 'Un Classique Instantané. Steven Knight livre un véritable Tour de Force avec ce Drame Historique Électrisant et Percutant qui reste un mixage parfait entre Gangs Of New York et BoardwalK Empire dont on en ressort totalement satisfait.',
      picture: 'l_2',
      comment: [{
        author: 'Kevin',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 2,
        date: Date()
      }
      ]
    });

    this.series.push({
      id: 3,
      name: 'Game Of Thrones',
      releasedAt: new Date(),
      seasonNumber: '8',
      description: 'Il y a très longtemps, à une époque oubliée, une force a détruit l\'équilibre des saisons.Dans un pays où l\'été peut durer plusieurs années et l\'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes.',
      critic: 'Au fil des années, "Game of thrones" se sera imposé comme un monument grâce à un art extrêmement habile du rebondissement, bousculant un genre très codé.',
      picture: 'l_3',
      comment: [{
        author: 'jo',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 3,
        date: Date()
      }
      ]
    });

    this.series.push({
      id: 4,
      name: 'Westworld',
      releasedAt: new Date(),
      seasonNumber: '4',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_4',
      comment: [{
        author: 'yolande',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 4,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 5,
      name: 'The Witcher',
      releasedAt: new Date(),
      seasonNumber: '1',
      description: 'Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.',
      critic: 'L\'Univers de The Wicher avec ses nations, ses créatures surnaturelles,',
      picture: 'l-5',
      comment: [{
        author: 'emelyne',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 5,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 6,
      name: 'American God',
      releasedAt: new Date(),
      seasonNumber: '3',
      description: 'Un homme sortant de prison rencontre un vieil escroc qui l\'embauche comme garde du corps, et l\'entraîne dans un long périple à travers les Etats-Unis',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_6',
      comment: [{
        author: 'yvon',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 6,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 7,
      name: 'Stranger Thing',
      releasedAt: new Date(),
      seasonNumber: '3',
      description: 'Aun parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_7',
      comment: [{
        author: 'varte',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 7,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 8,
      name: 'Exorcist',
      releasedAt: new Date(),
      seasonNumber: '2',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_8',
      comment: [{
        author: 'chrys',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 9,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 9,
      name: 'Ozark',
      releasedAt: new Date(),
      seasonNumber: '5',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_9',
      comment: [{
        author: 'aurianna',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 9,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 10,
      name: 'MindHunter',
      releasedAt: new Date(),
      seasonNumber: '2',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_10',
      comment: [{
        author: 'provi',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 10,
        date: Date()
      }
      ]

    });


    this.series.push({
      id: 11,
      name: 'The Mandalorian',
      releasedAt: new Date(),
      seasonNumber: '2',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_11',
      comment: [{
        author: 'bervie',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 11,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 12,
      name: 'Wandavision',
      releasedAt: new Date(),
      seasonNumber: '1',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_12',
      comment: [{
        author: 'lody',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 12,
        date: Date()
      }
      ]

    });


    this.series.push({
      id: 13,
      name: 'Raise By Wolves',
      releasedAt: new Date(),
      seasonNumber: '1',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_13',
      comment: [{
        author: 'pierre',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 13,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 14,
      name: 'Mr Robot',
      releasedAt: new Date(),
      seasonNumber: '3',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_14',
      comment: [{
        author: 'josé',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 14,
        date: Date()
      }
      ]
    });


    this.series.push({
      id: 15,
      name: 'Vikings',
      releasedAt: new Date(),
      seasonNumber: '6',
      description: 'A Westworld, un parc d\'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l\'Ouest. Dolores, Teddy et bien d\'autres sont des androïdes à apparence humaine créés pour donner l\'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l\'occasion de laisser libre-cours à leurs fantasmes.',
      critic: 'Une Véritable Perle. Après l\'exaltant Person Of Interest, Jonathan Nolan en collaboration avec Lisa Joy et la chaine HBO parviennent a livrer une série de SF',
      picture: 'l_15',
      comment: [{
        author: 'dan',
        content: 'J\'adore cette série enfin j\'adore Eva Green surtout c\'est vraiment une actrice remarquable avec un talent fou. À elle toute seule, Elle donne ses lettres de noblesse à cette série qui a une histoire de fonds de tiroir,',
        id: 15,
        date: Date()
      }
      ]
    });

}
  /**
   * Method for retrieve one serie by his id
   * @param serieId
   */
  getSerieById(serieId: number) {
    for (const serie of this.series) {
      if (serie.id === serieId) {
        return serie;
      }
    }
  }

  

  /**
   * Method for adding a fresh new serie on the serie array
   * @param newSerie
   */
  addSerie(newSerie: Serie) {
    this.series.push(newSerie);

  }

  /**
   * Method for edit a serie on the series array
   * @param editSerie
   */
  editSerie(editDeal: Serie) {
    for (let i = 0; i < this.series.length - 1; i++) {
      if (this.series[i].id === editDeal.id) {
        this.series[i] = editDeal;
      }
    }
  }


  /**
   * Method for delete a serie on the series array
   * @param serieId
   */
  deleteSerie(serieId: number) {
    for (let i = 0; i < this.series.length - 1; i++) {
      if (this.series[i].id === serieId) {
        this.series.splice(i, 1);
      }
    }
  }

  
}
