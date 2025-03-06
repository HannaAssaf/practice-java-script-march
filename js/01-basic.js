const user = {
  username: 'Jacob name',
  skills: {
    html: true,
    css: false,
    js: true,
  },
  friends: {
    poly: {
      name: 'Poly',
      isOnline: false,
    },
    ajax: {
      name: 'Ajax',
      isOnline: true,
    },
  },
};

const pers = {
  nickname: 'Pers',
  skills: {
    fireball: 100,
    elixir: 30,
  },
};

// console.log(user.username);
// console.log(user.skills.js);

// const { username } = user;
// console.log(username);

// const { skills } = user;
// console.log(skills);

// Глибока деструктуризація об'єкта

const { skills: newSkills } = user;
// console.log(newSkills);

const {
  skills: { html, css, js },
  friends: {
    poly: { name, isOnline },
  },
} = user;

// console.log('html', html);
// console.log('css', css);
// console.log("js", js);
// console.log('isOnline:', isOnline);
// console.log("name:", name);

/**
 * Деструктуризація масива
 */
const arr = [1, 2, 3, 4, 5];

// const [, , , , value] = arr;
// console.log(' value:', value);
// console.log(rest);

const [first, second] = arr;
console.log('first:', first);
console.log('second:', second);

const car = {
  model: 'Honda',
  price: 10_000,
  passengers: [
    {
      maxWeight: 100,
    },
    {
      maxWeight: 200,
    },
    {
      maxWeight: 400,
    },
    {
      maxWeight: 300,
    },
  ],
};

const {
  passengers: [{ maxWeight: firstElement }, { maxWeight: secondElement }],
} = car;
// console.log(' one:', firstElement);
// console.log(' two:', secondElement);
