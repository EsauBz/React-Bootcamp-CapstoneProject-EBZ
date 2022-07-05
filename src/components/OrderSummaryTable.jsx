function OrderSummaryTable({ items }) {
    const total = items.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                {Object.keys(items).length !== 0 ? (
                    <>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>$ {item.price * item.qty}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" style={{textAlign: "end"}}>Total</td>
                                <td>$ {total}</td>
                            </tr>
                        </tfoot>
                    </>
                ) : (
                    <p> No items in the cart </p>
                )}
            </table>
        </>
    );
};


export default OrderSummaryTable;