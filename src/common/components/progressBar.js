import '../../assets/css/progress-banner.css';

function ProgressBanner({step}) {
  return (
    <ul id="progressbanner">
        <li className={step > 0 ? 'active' : ''}></li>
        <li className={step > 1 ? 'active' : ''}></li>
        <li className={step > 2 ? 'active' : ''}></li>
        <li className={step > 3 ? 'active' : ''}></li>
    </ul>
  );
}

export default ProgressBanner;
