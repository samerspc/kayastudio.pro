import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from './blocks/Title'
import Heading from './components/Heading'
import Studio from './blocks/Studio'
import ClientsList from './blocks/ClientsList'
import CaseList from './blocks/CaseList'
import Footer from './blocks/Footer'
import StickyMenu from './components/StickyMenu'

function App() {

  const [theme, setTheme] = useState(true);
  document.body.classList.add("bodyL");

  const handleSetTheme = () => {
    if (theme) {
      setTheme(false);
      document.body.classList.add("bodyD");
      document.body.classList.remove("bodyL");
      document.documentElement.classList.add("htmlBgD");
      document.documentElement.classList.remove("htmlBgL");
    } else {
      setTheme(true);
      document.body.classList.add("bodyL");
      document.body.classList.remove("bodyD");
      document.documentElement.classList.add("htmlBgL");
      document.documentElement.classList.remove("htmlBgD");
    }
  }

  const show = () => {
    console.log(theme)
  }

  const clients = [
    './stk_logo.svg',
    './client.svg',
    './client.svg',
    './client.svg',
    './client.svg',
  ]

  const cases = [
    {
      name: 'Гумеров и Решетников',
      short: 'Корпоративный сайт для проектно-инжиниринговой компании',
      img: './casegir.png',
      long: 'Обновили дизайн и разработали сайт для одной из ведущих проектно-инжиниринговных компаний в стране. Улучшили навигацию, структуру и функциональность для удобства клиентов и партнеров. Разработали админ-панель для редактирования контента сайта без вмешательства разработчиков.',
      link: 'girproject.ru'
    },
    {
      name: 'Art in PEC',
      short: 'Корпоративный сайт для компании-производителя строительных технологий',
      img: './artinpec.png',
      long: "Перенесли сайт с хостинга Tilda на сервер, интегрировали нейронную сеть, которая создает визуализацию фотобетона по вашей картинке, перевели сайт на 3 дополнительных языка.",
      link: 'art-in-pec.com'
    },
    {
      name: 'СТК',
      short: 'Разрабатываем корпоративный сайт и новую айдентику для логистической компании',
      img: './stk.png',
      long: 'Создаем корпоративный сайт и обновляем айдентику логистической компании.',
      link: '*в разработке'
    },
    {
      name: 'Полина Митютнева',
      short: 'Большой личный сайт для бизнес-коуча',
      img: './pm.png',
      long: 'Разработали масштабный личный сайт для бизнес-коуча с удобной структурой и интерактивными инструментами.',
      link: 'polina-mitut.ru'
    },
    {
      name: 'Knitted',
      short: 'С нуля создаем интернет-магазин винтажной одежды.',
      img: './knitted.png',
      long: 'Разрабатываем интернет-магазин винтажной одежды с атмосферным дизайном и интуитивной навигацией.',
      link: '*в разработке'
    },
    {
      name: 'Чат-бот для онлайн-школы дизайна',
      short: 'Создали бота, который собирает вакансии для дизайнеров.',
      img: './vb.png',
      long: 'Создали бота, который собирает вакансии для дизайнеров. Бот собирает вакансии и заказы из десятков телеграм-каналов, фильтрует их через нейросеть Llama-2-70B и отправляет в личные сообщения.',
      link: null
    },
  ]

  return (
    <>
      <StickyMenu handleSetTheme={handleSetTheme} theme={theme}/>
      <Title theme={theme} />
      
      <Heading text={'Студия'} count={'3'} id={'studio'} text_2={false} theme={theme}/>
      <Studio theme={theme}/>
      
      <Heading text={'Партнеры'} count={'3'} id={'clients'} text_2={'Нашим решениям доверяют топовые компании страны'} theme={theme}/>
      <ClientsList theme={theme}/>

      <Heading text={'Проекты'} count={'6'} id={'projects'} text_2={false} theme={theme}/>
      <CaseList cases={cases} theme={theme}></CaseList>

      <Footer theme={theme}/>
    </>
  )
}

export default App
