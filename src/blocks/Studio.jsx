import { useState } from 'react';
import '../styles/Studio.css';

import plus from '/plus.svg';
import wPlus from '/wPlus.svg';

function Studio({theme}) {

    const [open, setOpen] = useState(null);

    const toggleAccordion = (id) => {
        setOpen(open === id ? null : id);
    };

    const data = [
        { id: 1, title: "Веб", content: "Комплексный подход к созданию сайтов: от идеи и дизайна до полной разработки и запуска. Делаем удобные, быстрые и адаптивные сайты, которые работают на результат." },
        { id: 2, title: "Дизайн", content: "Разрабатываем UI/UX-дизайн, который не только привлекателен, но и эффективен. Вникаем в специфику бизнеса, создаем продуманные интерфейсы и визуальный стиль, который выделит ваш продукт на рынке." },
        { id: 3, title: "Разработка", content: "Мы создаем надежные и масштабируемые веб-решения: от лендингов до сложных веб-приложений, Telegram-ботов и нейросетей. Работаем с современными технологиями, обеспечивая высокую скорость, безопасность и удобство использования." },
      ];

    return (
        <>
            <div className='studio-wrapper'>
                <div className='studio-text'>
                    <p>
                        Мы сосредоточены на создании веб-сайтов, что позволяет нам постоянно становиться лучше в этой нише и делать каждый ваш проект на максимально высоком уровне
                    </p>
                </div>

                <div className='studio-accordion-wrapper'>
                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                    {data.map((item, index) => (
                        <>
                        <div key={index}>
                            <div className='accordion-item'
                                onClick={() => toggleAccordion(item.id)}
                                >
                                
                                <p>{item.title}</p>
                                
                                <img src={theme ? plus : wPlus} alt="" 
                                    className={`${open === item.id ? 'rotation' : ''}`}
                                    />
                            
                            </div>
                            
                            <div
                                className={`accordion-content ${
                                    open === item.id ? "open" : "closed"
                                } ${theme ? 'accordion-contentPL' : 'accordion-contentPD'}`}
                                >
                                <p>{item.content}</p>
                            </div>
                        </div>
                        <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>
                        </>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Studio
