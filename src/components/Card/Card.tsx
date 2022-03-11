import './Card.scss';
import classnames from 'classnames';

interface cardProps {
    id: string,
    group: 'hearts' | 'clubs' | 'diams' | 'spades',
    label: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'
}

const Card: React.FC<cardProps> = ({
    id,
    group,
    label
}) => {
  return (
    <div className='card'>

        <label className={classnames(
          'small float',
          group
        )}>{label}
          {group === 'hearts' && <span>&hearts;</span>}
          {group === 'diams' && <span>&diams;</span>}
          {group === 'clubs' && <span>&clubs;</span>}
          {group === 'spades' && <span>&spades;</span>}
        </label>

        <label className={classnames(
          'large main',
          group
        )}>{label}</label>

        <label className={classnames(
          'small float mirror',
          group
        )}>{label}
            {group === 'hearts' && <span>&hearts;</span>}
            {group === 'diams' && <span>&diams;</span>}
            {group === 'clubs' && <span>&clubs;</span>}
            {group === 'spades' && <span>&spades;</span>}
        </label>

    </div>
  );
};

export default Card;