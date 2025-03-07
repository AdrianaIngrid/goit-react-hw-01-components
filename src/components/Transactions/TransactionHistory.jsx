import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
function TransactionHistory ({ items }) {
return (
    <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

        <tbody>
            {items.map(item=> (
                <tr key={item.id} >
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>))
           }
    </tbody>
  </table>
);

    
}
TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
export default TransactionHistory;