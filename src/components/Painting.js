import PropTypes from 'prop-types';
import defaultImg from './default.png';

export default function Painting({
  url = defaultImg,
  title,
  profileUrl,
  authorName = 'невідомо',
  price,
  quantity,
}) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Ціна: {price} кредитів</p>
      <p>Доступність: {quantity < 10 ? 'закінчується' : 'є в наявності'}</p>
      <button type="button">Додати в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
