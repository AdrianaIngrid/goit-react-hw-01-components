import data from './data.json';
function Statistics() {
  return (
    <>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
          <li className="item">
            <span className="label">{data[0].label}</span>
            <span className="percentage">{data[0].percentage} %</span>
          </li>
          <li className="item">
            <span className="label">{data[1].label}</span>
            <span className="percentage">{data[1].percentage} %</span>
          </li>
          <li className="item">
            <span className="label">{data[2].label}</span>
            <span className="percentage">{data[2].percentage} %</span>
          </li>
          <li className="item">
            <span className="label">{data[3].label}</span>
            <span className="percentage">{data[3].percentage} %</span>
          </li>
          <li className="item">
            <span className="label">{data[4].label}</span>
            <span className="percentage">{data[4].percentage} %</span>
          </li>
        </ul>
      </section>
    </>
  );
}
export default Statistics;
