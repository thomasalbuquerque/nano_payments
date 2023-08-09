import { User } from "./User";
import { Transaction } from "./Transaction";
import { Payable } from "./Payable";

Transaction.belongsTo(User, { as: 'fromUser', foreignKey: 'fromUserId' });
Transaction.belongsTo(User, { as: 'toUser', foreignKey: 'toUserId' });

Payable.belongsTo(User, { as: 'fromUser', foreignKey: 'fromUserId' });
Payable.belongsTo(User, { as: 'toUser', foreignKey: 'toUserId' });

User.hasMany(Transaction, { as: 'sentTransactions', foreignKey: 'fromUserId' });
User.hasMany(Transaction, { as: 'receivedTransactions', foreignKey: 'toUserId' });

User.hasMany(Payable, { as: 'sentPayables', foreignKey: 'fromUserId' });
User.hasMany(Payable, { as: 'receivedPayables', foreignKey: 'toUserId' });

export { User, Transaction, Payable };
