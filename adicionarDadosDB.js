const { saveFile, openFile } = require('./api/utils/utils');

const categoriasDB = 'categorias';
const postagensDB = 'postagens';


const adicionarDados = async (req, res, next) => {

  var categorias = await openFile(categoriasDB);
  var postagens = await openFile(postagensDB);
  
  const resultCategoria = [
    {
      id: 1,
      descricao: 'Ação'
    },
    {
      id: 2,
      descricao: 'Aventura'
    },
    {
      id: 3,
      descricao: 'Comédia'
    },
    {
      id: 4,
      descricao: 'Drama'
    },
    {
      id: 5,
      descricao: 'Romance'
    },
    {
      id: 6,
      descricao: 'Suspense'
    },
    {
      id: 7,
      descricao: 'Terror'
    }
  ];
  const resultPostagem = [
    {
      id: 1,
      idCategoria: 2,
      titulo: 'Harry Potter e o Cálice de Fogo',
      imagem:
        'https://3.bp.blogspot.com/-HKtIyOnPRJ0/XuN7K-yzr5I/AAAAAAAA5_E/qKYOhrGwBe4WLHVBekv8sBQqshIcPYgMwCPcBGAsYHg/w500/en-674-post-0.jpg',
      dataPostagem: '25/09/2020',
      sinopse:
        'Harry retorna para seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, junto com os seus amigos Ron e Hermione. Desta vez, acontece um torneio entre as três maiores escola de magia, com um participante selecionado de cada escola, pelo Cálice de Fogo. O nome de Harry aparece, mesmo não tendo se inscrito, e ele precisa competir.',
      atoresPrincipais:
        'Daniel Radcliffe, Emma Watson, Robert Pattinson, Rupert Grint e etc.',
      diretor: 'Mike Newell',
      lançamento: '25/11/2005',
      descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum suscipit bibendum. Mauris at enim quis sem scelerisque euismod. Duis sollicitudin ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et risus in dolor eleifend efficitur. Vestibulum ut scelerisque quam. Nunc faucibus elit sed odio pharetra dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      nota: 8.5,
      imagemCarousel: [
        'https://i.ytimg.com/vi/obpgmYE5kSI/maxresdefault.jpg',
        'https://4.bp.blogspot.com/-Bj6zkBrwYw0/Xbx4YPTGfKI/AAAAAAADCu4/Z0V8oWWGegU_laHpqAdSm6-nipeJ7PCVQCLcBGAsYHQ/s640/Telecine-HP4.jpg',
        'https://cenasdecinema.com/wp-content/uploads/2007/08/Harry-potter-e-o-calice-de-fogo_destaque.jpg'
      ]
    },
    {
      id: 2,
      idCategoria: 2,
      titulo: 'Interestelar',
      imagem:
        'https://images-na.ssl-images-amazon.com/images/I/A1JVqNMI7UL._AC_SY550_.jpg',
      dataPostagem: '14/04/2021',
      sinopse:
        'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
      atoresPrincipais:
        ' Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine e etc.',
      diretor: 'Christopher Nolan',
      lançamento: '06/11/2014',
      descricao:
        'Cras accumsan nibh cursus placerat sagittis. Nam imperdiet mauris eget ornare vulputate. Aliquam sed dignissim mauris. Cras ac consectetur nisl. Sed semper bibendum est at interdum. Mauris id libero vestibulum dui ullamcorper blandit vel eu massa. Sed placerat dapibus ex, et consequat augue. Maecenas vitae orci volutpat, aliquet massa eget, tincidunt mi.',
      nota: 10,
      imagemCarousel: [
        'https://image.tmdb.org/t/p/original/xnAdZe8wg9aeRSxcJksPlGk68cL.jpg',
        'https://images5.alphacoders.com/542/thumb-1920-542019.jpg',
        'https://www.justwatch.com/images/backdrop/8704173/s1920/interestelar'
      ]
    },
    {
      id: 3,
      idCategoria: 2,
      titulo: 'O Senhor dos Anéis: O Retorno do Rei',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/0/0d/EsdlaIII.jpg',
      dataPostagem: '20/12/2019',
      sinopse:
        'O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.',
      atoresPrincipais:
        'Ian McKellen, Elijah Wood, Viggo Mortensen, Sean Astin e etc.',
      diretor: 'Peter Jackson',
      lançamento: '25/12/2003',
      descricao:
        'Aenean pretium diam arcu, eu tincidunt risus vestibulum sit amet. Nulla fringilla tempor felis, vitae faucibus velit ultricies at. Aliquam erat volutpat. Praesent dictum, augue in tempus pretium, tellus risus laoreet arcu, vel semper quam elit non sapien. Aliquam erat volutpat. Aliquam vitae eros sed mauris ultricies ultrices id non nunc. Aenean ut lectus mi. Donec bibendum augue leo, vel ornare risus malesuada vel. Nam et ultrices magna, in rhoncus lacus. Maecenas vel purus nibh. Nullam fermentum faucibus felis venenatis finibus.',
      nota: 9.9,
      imagemCarousel: [
        'https://image.tmdb.org/t/p/w500/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg',
        'https://www.magazine-hd.com/apps/wp/wp-content/uploads/2018/03/gollum.jpg',
        'https://s1.1zoom.me/b5050/199/256293-Sepik_1366x768.jpg'
      ]
    },
    {
      id: 4,
      idCategoria: 7,
      titulo: 'Invocação do mal',
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52yexdn-kxN_qPo9y6O_DUHnugikNGtMGkl7HMtY5DnDQ_HRg',
      dataPostagem: '21/01/2021',
      sinopse:
        'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.',
      atoresPrincipais: 'Vera Farmiga, Patrick Wilson, Lili Taylor e etc.',
      diretor: 'James Wan',
      lançamento: '13/09/2013',
      descricao:
        'Sed ultrices, odio vitae feugiat malesuada, sapien felis congue orci, at eleifend erat ipsum id lacus. Duis sit amet viverra turpis. Quisque cursus arcu ac tristique laoreet. Cras mi sapien, suscipit a erat sed, feugiat fermentum erat. Etiam tempor, metus quis auctor mollis, urna risus cursus nulla, non laoreet odio risus vel velit. Cras eu accumsan diam. Sed finibus ligula viverra tortor molestie, nec rutrum lectus suscipit.',
      nota: 9.5,
      imagemCarousel: [
        'https://img.ibxk.com.br/2021/04/22/22130753190166.jpg?w=1120&h=420&mode=crop&scale=both',
        'https://cenasdecinema.com/wp-content/uploads/2013/09/Invocacao-do-mal_destaque2.jpg',
        'http://images.allocine.fr/medias/nmedia/18/96/73/76/20492452.jpg'
      ]
    },
    {
      id: 5,
      idCategoria: 3,
      titulo: 'Se beber, não case! Parte 3',
      imagem:
        'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Hangover_Part_3.JPG/220px-The_Hangover_Part_3.JPG',
      dataPostagem: '13/02/2021',
      sinopse:
        'Depois da morte do pai, Alan decide ir para New Horizons com Phil, Stu e Doug, mas a viagem acaba sendo bruscamente interrompida pelos capangas de Marshall.',
      atoresPrincipais: 'Zach Galifianakis, Bradley Cooper, Ed Helms e etc.',
      diretor: 'Todd Phillips',
      lançamento: '31/05/2013',
      descricao:
        'Donec et posuere augue. Nunc lacinia sed nisl ut viverra. Nullam pellentesque ipsum varius, malesuada augue lobortis, efficitur ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum metus et nisi vestibulum tincidunt. Mauris aliquet, tortor in placerat pulvinar, magna urna dignissim mauris, et aliquet leo eros et urna. Integer nunc tortor, posuere ac ullamcorper et, aliquam quis massa. Etiam placerat mi facilisis ex fermentum, elementum sagittis magna vulputate. Aenean et risus non erat lobortis malesuada. Morbi et libero vel felis aliquet porta. Fusce dignissim neque et mauris vehicula, sit amet iaculis tortor convallis. Duis non ligula magna.',
      nota: 8.5,
      imagemCarousel: [
        'https://www.heyuguys.com/images/2013/02/Bradley-Cooper-Zach-Galifianakis-and-Ed-Helms-in-The-Hangover-Part-III.jpg',
        'https://static.rogerebert.com/uploads/review/primary_image/reviews/the-hangover-part-iii-2013/HangoverPartIII-2013-1.jpg',
        'https://i.ytimg.com/vi/PA8TdaBKNG4/maxresdefault.jpg'
      ]
    },
    {
      id: 6,
      idCategoria: 5,
      titulo: 'Como Eu Era Antes de Você',
      imagem:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCmzy3-MqWaI0a9rBMxmpJQoEImCkWjyt12v_zIPJPQ9t4olQB',
      dataPostagem: '16/10/2020',
      sinopse:
        'De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.',
      atoresPrincipais: 'Emilia Clarke, Sam Claflin, Matthew Lewis e etc.',
      diretor: 'Thea Sharrock',
      lançamento: '16/06/2016',
      descricao:
        'Sed luctus mauris aliquam felis lacinia, eu viverra nisi dictum. Pellentesque ac enim faucibus, commodo urna eget, accumsan mi. Duis congue condimentum convallis. Integer mollis dolor vel metus commodo, at iaculis magna dapibus. Nulla vitae pulvinar nisl, vel vestibulum tellus. Nam vel fringilla turpis. Maecenas fermentum urna mi, dignissim eleifend augue hendrerit id. Proin bibendum, nisl at euismod placerat, lectus urna faucibus est, at tincidunt mauris leo sed sapien.',
      nota: 7.5,
      imagemCarousel: [
        'https://i2.wp.com/4.bp.blogspot.com/-_Ccws-uBrdc/WHeL3qzYV_I/AAAAAAAAIGo/0d9x1-G2RTUuxTpK8QYy-L--5BLPEBySgCLcB/s1600/maxresdefault.jpg?ssl=1',
        'https://temalguemassistindo.com.br/wp-content/uploads/2019/11/como-eu-era-antes-de-voce.jpg',
        'https://wp.pt.aleteia.org/wp-content/uploads/sites/5/2016/06/me-before-you_vhz0yn-1024x682.jpg'
      ]
    },
    {
      id: 7,
      idCategoria: 1,
      titulo: 'John Wick: Um Novo Dia Para Matar',
      imagem:
        'https://images-na.ssl-images-amazon.com/images/I/91xz-9LZBNL._RI_.jpg',
      dataPostagem: '31/07/2020',
      sinopse:
        'John Wick é forçado a deixar a aposentadoria mais uma vez por causa de uma promessa antiga e viaja para Roma, com o objetivo de ajudar um velho amigo a derrubar uma organização secreta, perigosa e mortal de assassinos procurados em todo o mundo.',
      atoresPrincipais: 'Keanu Reeves, Ruby Rose, Ian McShane e etc.',
      diretor: 'Chad Stahelski',
      lançamento: '16/02/2017',
      descricao:
        'Integer rutrum erat ultricies nisl luctus, et finibus ex placerat. Cras pretium nunc sit amet gravida tincidunt. Suspendisse sodales massa iaculis hendrerit pharetra. Integer dictum ac ex a auctor. Proin tempor tellus ac nibh porta, eu sagittis lectus varius. Etiam ac urna ac nibh volutpat gravida. Fusce viverra sollicitudin augue, eu bibendum justo commodo non. Nunc nec turpis egestas, eleifend massa et, aliquam sapien. Maecenas eleifend turpis sit amet odio convallis, sed rutrum urna elementum. Vivamus euismod ultrices pharetra. Integer aliquam luctus orci, non blandit lorem fringilla sit amet. Fusce pretium neque eget aliquam vulputate. Proin pellentesque lectus vitae diam dignissim vestibulum nec a leo. Nullam eget fringilla elit.',
      nota: 8,
      imagemCarousel: [
        'https://images.justwatch.com/backdrop/9346476/s1920/john-wick-2',
        'https://static.onecms.io/wp-content/uploads/sites/6/2017/02/john-wick-2-2000.jpg',
        'https://radiosolaris.com.br/wp-content/uploads/2020/04/blogib_john-wick-2_feat-1024x668.jpg'
      ]
    },
    {
      id: 8,
      idCategoria: 6,
      titulo: 'Se7en - Os Sete Crimes Capitais',
      imagem:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRurZzF2BSrE4P7JWS-bwg22tTp92Slh3XZswAE6bJggRQsHtb9',
      dataPostagem: '05/08/2020',
      sinopse:
        'A ponto de se aposentar, o detetive William Somerset pega um último caso, com a ajuda do recém-transferido David Mills. Juntos, descobrem uma série de assassinatos e logo percebem que estão lidando com um assassino que tem como alvo pessoas que ele acredita representar os sete pecados capitais.',
      atoresPrincipais: 'Brad Pitt, Morgan Freeman, Kevin Spacey e etc.',
      diretor: 'David Fincher',
      lançamento: '15/12/1995',
      descricao:
        'Nunc quis efficitur dolor. Fusce id erat nulla. Donec a venenatis mi. Curabitur eu commodo arcu. Maecenas laoreet tempor ante in egestas. Mauris velit est, sollicitudin a semper ut, cursus nec odio. Fusce cursus lobortis magna eget pretium. Fusce ullamcorper porta sem rhoncus gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus, ligula eu tempor maximus, elit diam bibendum libero, et dignissim purus felis at mi. Sed vitae egestas ligula, ac volutpat orci. Vivamus mattis scelerisque pulvinar. Quisque quis tincidunt leo. Ut molestie ligula non ipsum eleifend, hendrerit eleifend turpis rutrum. Etiam varius eu purus eget eleifend. Fusce eu finibus urna.',
      nota: 9.5,
      imagemCarousel: [
        'https://sessaodastres.files.wordpress.com/2018/10/thumb-post1.png',
        'https://http2.mlstatic.com/D_NQ_NP_883102-MLB29322915230_022019-O.jpg',
        'https://image.tmdb.org/t/p/w780/4U4q1zjIwCZTNkp6RKWkWPuC7uI.jpg'
      ]
    },
    {
      id: 9,
      idCategoria: 4,
      titulo: 'Coringa',
      imagem:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3kEFg8g-cdpamz5o28Ipv1eQ8Hez7aq4YC5cP9uCkZYAjefWR',
      dataPostagem: '15/04/2021',
      sinopse:
        'Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. ',
      atoresPrincipais: 'Joaquin Phoenix, Zazie Beetz, Frances Conroy e etc.',
      diretor: 'Todd Phillips',
      lançamento: '03/10/2019',
      descricao:
        'In ac efficitur mauris, vitae facilisis justo. Nunc tempor iaculis leo, quis imperdiet nulla efficitur in. Integer mattis augue a fringilla commodo. Nam mollis arcu in pharetra sagittis. Aliquam finibus pellentesque varius. Vivamus nec massa pharetra dolor accumsan faucibus id vitae felis. Morbi et quam odio. Donec aliquet eu quam a mattis. Suspendisse at eros pulvinar, laoreet nisi eget, pulvinar leo. Duis ac interdum massa.',
      nota: 10,
      imagemCarousel: [
        'https://www.magazine-hd.com/apps/wp/wp-content/uploads/2019/04/joker.jpg',
        'https://m.media-amazon.com/images/M/MV5BZGUzMWI4ZDktNTEzYi00ZmNiLThhNzItZDkwZDk2NTg5ZGNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        'https://images.moviesanywhere.com/1f958f5112c66c866eb425b7c8bb3691/e6c13088-a2f5-4cbf-ae6d-fd3fa5c6c592.jpg?w=2560&r=16x9'
      ]
    }
  ];

  await saveFile(categoriasDB, resultCategoria);
  await saveFile(postagensDB, resultPostagem);
};

adicionarDados();
