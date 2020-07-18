import NoobCard from '../assets/images/noobCard.png';
import VeteranCard from '../assets/images/veteranCard.png';
import MonitorCard from '../assets/images/monitorCard.png';
import MainCard from '../assets/images/mainCard.png';

export const calculateAge = (dateBirth) => {
  var [day, month, year] = dateBirth.split('/');
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);
  let currentMonth = new Date().getMonth() + 1;
  let currentDay = new Date().getDate();
  var res = new Date().getFullYear() - year;

  if (currentMonth < month || (currentMonth == month && currentDay < day)) {
    res--;
  }

  return res < 0 ? 0 : res;
};

export const getAllClasses = (course) => {
  const classCount = {
    CC: new Date().getFullYear() - 2013,
    BIO: new Date().getFullYear() - 2012,
  };
  return [...Array(classCount[course]).keys()]
    .filter((index) => {
      return classCount[course] - 7 < index;
    })
    .map((index) => {
      index = index + 1;
      if (index < 10) index = '0' + index;
      return course + index;
    });
};

export const getPostStyle = (user) => {
  var postStyle = {};
  if (user.post == 'monitor') {
    postStyle.color = '#2D2C2B';
    postStyle.card = MonitorCard;
  } else if (user.post == 'director') {
    postStyle.color = '#97007F';
    postStyle.card = MainCard;
  } else {
    const allClasses = getAllClasses(user.class.replace(/[0-9]/g, ''));
    if (allClasses[allClasses.length - 1] == user.class) {
      postStyle.color = '#2242A7';
      postStyle.card = VeteranCard;
    } else {
      postStyle.color = '#38B124';
      postStyle.card = NoobCard;
    }
  }
  return postStyle;
};
