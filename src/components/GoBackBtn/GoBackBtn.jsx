import { Link } from 'react-router-dom';
import s from './GoBackBtn.module.css';

export const GoBackBtn = ({ path, children }) => {
  return (
    <Link to={path} className={s.link}>
      {children}
    </Link>
  );
};
