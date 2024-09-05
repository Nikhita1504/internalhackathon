const ResultsView = ({ results }) => {
    return (
      <div>
        <h3>Scheme Results for Selected Village</h3>
        <ul>
        <li>Senior Citizens Savings Scheme Account: {(results.SCSS * 100).toFixed(2)} %</li>
<li>Sukanya Samriddhi Account: {(results.SSA * 100).toFixed(2)} %</li>
<li>Kisan Vikas Patra: {(results.KVP * 100).toFixed(2)} %</li>
<li>Mahila Samman Savings Certificate: {(results.Mahila_Samman * 100).toFixed(2)} %</li>

        </ul>
      </div>
    );
  };
  
  export default ResultsView;
  