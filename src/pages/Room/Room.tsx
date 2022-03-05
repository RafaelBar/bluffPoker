import './Room.scss';
import Card from '../../components/Card/Card';

const Room: React.FC = () => {
  return (
    <div className='room'>
        <Card id='1' group='hearts' label='K' />
        <Card id='2' group='diams' label='2' />
        <Card id='3' group='clubs' label='J' />
        <Card id='4' group='spades' label='A' />
        <Card id='5' group='clubs' label='7' />
    </div>
  );
};

export default Room;
