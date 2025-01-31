const { trimStr } = require("./utils");

// Normally we would use a DB
const users = [
  {
    username: "Anna Conroy",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/madcampos/128.jpg",
    id: 0,
  },
  {
    username: "Britney Spinka",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/michaelcolenso/128.jpg",
    id: 1,
  },
  {
    username: "Jammie Jacobs V",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gseguin/128.jpg",
    id: 2,
  },
  {
    username: "Hans Sawayn",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/txcx/128.jpg",
    id: 3,
  },
  {
    username: "Mrs. Michele Pfeffer",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/joetruesdell/128.jpg",
    id: 4,
  },
  {
    username: "Wade Ward",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg",
    id: 5,
  },
  {
    username: "Al Brekke",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/joetruesdell/128.jpg",
    id: 6,
  },
  {
    username: "Theresa Hayes",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/n_tassone/128.jpg",
    id: 7,
  },
  {
    username: "Jamison Will",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/thierrymeier_/128.jpg",
    id: 8,
  },
  {
    username: "Sonny Macejkovic",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/luxe/128.jpg",
    id: 9,
  },
  {
    username: "Rafaela Grimes",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg",
    id: 10,
  },
  {
    username: "Virgil Bayer DDS",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/irae/128.jpg",
    id: 11,
  },
  {
    username: "Yazmin Kuphal",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marrimo/128.jpg",
    id: 12,
  },
  {
    username: "Carlotta Nikolaus",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ionuss/128.jpg",
    id: 13,
  },
  {
    username: "Gus Schiller",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/andrewarrow/128.jpg",
    id: 14,
  },
  {
    username: "Helmer Mitchell",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kirillz/128.jpg",
    id: 15,
  },
  {
    username: "Kylie Keeling",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/eugeneeweb/128.jpg",
    id: 16,
  },
  {
    username: "Anna Zboncak",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kolsvein/128.jpg",
    id: 17,
  },
  {
    username: "Easter Walsh",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ainsleywagon/128.jpg",
    id: 18,
  },
  {
    username: "Miss Jameson Mertz",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/abdulhyeuk/128.jpg",
    id: 19,
  },
  {
    username: "Hunter Bashirian",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/id835559/128.jpg",
    id: 20,
  },
  {
    username: "Weldon Corwin",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nellleo/128.jpg",
    id: 21,
  },
  {
    username: "Arnaldo Funk PhD",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bcrad/128.jpg",
    id: 22,
  },
  {
    username: "Javon Cummerata",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg",
    id: 23,
  },
  {
    username: "Clint Kautzer",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/looneydoodle/128.jpg",
    id: 24,
  },
  {
    username: "Carleton Pfeffer",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/orkuncaylar/128.jpg",
    id: 25,
  },
  {
    username: "Mr. Linnea Borer",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg",
    id: 26,
  },
  {
    username: "Marcelo Walker",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brandclay/128.jpg",
    id: 27,
  },
  {
    username: "Helen King",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mvdheuvel/128.jpg",
    id: 28,
  },
  {
    username: "Andy McLaughlin",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg",
    id: 29,
  },
  {
    username: "Delia Konopelski DVM",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/strikewan/128.jpg",
    id: 30,
  },
  {
    username: "Chaz Kling",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/lososina/128.jpg",
    id: 31,
  },
  {
    username: "Coby Kautzer DVM",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/enricocicconi/128.jpg",
    id: 32,
  },
  {
    username: "Alia Baumbach III",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/doronmalki/128.jpg",
    id: 33,
  },
  {
    username: "Ruby Bashirian Jr.",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/juangomezw/128.jpg",
    id: 34,
  },
  {
    username: "Jacquelyn Bechtelar",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/justinrhee/128.jpg",
    id: 35,
  },
  {
    username: "Dr. Rowena Kreiger",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/martinansty/128.jpg",
    id: 36,
  },
  {
    username: "Adriel Marvin",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/balakayuriy/128.jpg",
    id: 37,
  },
  {
    username: "Maiya Emmerich",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dixchen/128.jpg",
    id: 38,
  },
  {
    username: "Scotty Jacobson",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg",
    id: 39,
  },
  {
    username: "Emie Fritsch",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/hai_ninh_nguyen/128.jpg",
    id: 40,
  },
  {
    username: "Travis Hackett",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/baluli/128.jpg",
    id: 41,
  },
  {
    username: "Brad Conn",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kirangopal/128.jpg",
    id: 42,
  },
  {
    username: "Mr. Jarrett Conroy",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jwalter14/128.jpg",
    id: 43,
  },
  {
    username: "Nora Hagenes",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/areus/128.jpg",
    id: 44,
  },
  {
    username: "Jillian Johnston",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mocabyte/128.jpg",
    id: 45,
  },
  {
    username: "Edgardo Wehner",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg",
    id: 46,
  },
  {
    username: "Kellen Keeling",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/sebashton/128.jpg",
    id: 47,
  },
  {
    username: "Audreanne Parisian",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ainsleywagon/128.jpg",
    id: 48,
  },
  {
    username: "Jaleel Dietrich",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/megdraws/128.jpg",
    id: 49,
  },
  {
    username: "Vince Predovic",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/traneblow/128.jpg",
    id: 50,
  },
  {
    username: "Hollie Stroman",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/borges_marcos/128.jpg",
    id: 51,
  },
  {
    username: "Michale Bashirian",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/andresenfredrik/128.jpg",
    id: 52,
  },
  {
    username: "April Blick",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ddggccaa/128.jpg",
    id: 53,
  },
  {
    username: "Eldred Williamson",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg",
    id: 54,
  },
  {
    username: "Ms. Savannah Weber",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg",
    id: 55,
  },
  {
    username: "Kurtis Goyette",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg",
    id: 56,
  },
  {
    username: "Elwin Lang",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/doronmalki/128.jpg",
    id: 57,
  },
  {
    username: "Mrs. Kyla Tremblay",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/a_harris88/128.jpg",
    id: 58,
  },
  {
    username: "Mabelle Wisoky",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg",
    id: 59,
  },
  {
    username: "Ms. Janelle Berge",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/commadelimited/128.jpg",
    id: 60,
  },
  {
    username: "Tito Crist DVM",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/low_res/128.jpg",
    id: 61,
  },
  {
    username: "Adele Beahan",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/nathalie_fs/128.jpg",
    id: 62,
  },
  {
    username: "Stanford Bartoletti",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/madcampos/128.jpg",
    id: 63,
  },
  {
    username: "Bulah Donnelly",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bennyjien/128.jpg",
    id: 64,
  },
  {
    username: "Ila Tromp",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/perretmagali/128.jpg",
    id: 65,
  },
  {
    username: "Freddie Schimmel",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/guillemboti/128.jpg",
    id: 66,
  },
  {
    username: "Kelsie Heidenreich",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/laasli/128.jpg",
    id: 67,
  },
  {
    username: "Orrin Mertz I",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/aaronkwhite/128.jpg",
    id: 68,
  },
  {
    username: "Eleonore Stanton",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/chanpory/128.jpg",
    id: 69,
  },
  {
    username: "Enrique Johnson",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/nelsonjoyce/128.jpg",
    id: 70,
  },
  {
    username: "Westley Muller",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/antonyryndya/128.jpg",
    id: 71,
  },
  {
    username: "Abigail Dare PhD",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",
    id: 72,
  },
  {
    username: "Nadia Reynolds",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bcrad/128.jpg",
    id: 73,
  },
  {
    username: "Loma O'Connell",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mutlu82/128.jpg",
    id: 74,
  },
  {
    username: "Theo Altenwerth",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/svenlen/128.jpg",
    id: 75,
  },
  {
    username: "Tito Mayert",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/louis_currie/128.jpg",
    id: 76,
  },
  {
    username: "Foster Huels",
    room: "",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/geran7/128.jpg",
    id: 77,
  },
  {
    username: "Tre Murray",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/vijaykarthik/128.jpg",
    id: 78,
  },
  {
    username: "Cornelius Emard",
    room: "",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/themikenagle/128.jpg",
    id: 79,
  },
];

const findUser = (user) => {
  const userName = trimStr(user.username);
  const userRoom = trimStr(user.room);

  return users.find(
    (u) => trimStr(u.username) === userName && trimStr(u.room) === userRoom
  );
};

const addUser = (user) => {
  const isExist = findUser(user);

  !isExist && users.push(user);

  const currentUser = isExist || user;

  return { isExist: !!isExist, user: currentUser };
};

const getRoomUsers = (room) => {
  return users.filter((u) => u.room === room);
};

const removeUser = (user) => {
  let found = findUser(user);

  if (found) {
   let  newUsers = users.filter(
      ({ room, username }) => room === found.room && username !== found.username
    );
  }

  return found;
};

module.exports = { addUser, findUser, getRoomUsers, removeUser, users };
