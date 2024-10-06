import data from './data';
import cx from './cx';
import { useState } from 'react';

interface ITabItemProps {
  id: string;
  title: string;
  current: boolean;
  toggleItem: (id: string) => void;
}

const TabItem = ({ id, title, current, toggleItem }: ITabItemProps) => {
  return (
    <li className={cx('tab', { current })} onClick={() => toggleItem(id)}>
      {title}
    </li>
  );
};

const TabMenu1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const toggleItem = (id: string) => {
    setCurrentId((prev) => (prev === id ? null : id));
  };
  const currentData =
    data.find((item) => item.id === currentId)?.description || '';

  return (
    <>
      <h3>
        #1. React <sub>현재 desc만 html로 그리기</sub>
      </h3>
      <div className={cx('container')}>
        <ul className={cx('tabList')}>
          {data.map((d) => (
            <TabItem
              {...d}
              key={d.id}
              current={currentId === d.id}
              toggleItem={toggleItem}
            />
          ))}
        </ul>
        <div className={cx('description')}>{currentData}</div>
      </div>
    </>
  );
};

export default TabMenu1;
