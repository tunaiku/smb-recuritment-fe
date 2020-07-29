const casual = require("casual");
const INTER_BANK_TCODE = "T002";
const INTER_ACCOUNT_TCODE = "T001";

const pickSample = (array = []) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateTransactionTypes = () => {
  return [
    {
      id: 1,
      code: INTER_ACCOUNT_TCODE,
      description: "Inter Account Transaction",
    },
    {
      id: 2,
      code: INTER_BANK_TCODE,
      description: "Inter Bank Transaction",
    },
  ];
};

const generateAccounts = () => {
  return [
    {
      id: casual.uuid,
      accountNumber: casual.card_number(),
      balance: casual.integer(20000, 10000000),
      currency: "IDR",
    },
    {
      id: casual.uuid,
      accountNumber: casual.card_number(),
      balance: casual.integer(20000, 10000000),
      currency: "IDR",
    },
  ];
};

const generateTransactions = (
  sampleSize = 1000,
  transactionTypes = [],
  accounts = []
) => {
  const transactionCodes = transactionTypes.map((t) => t.code);
  const sourceAccounts = accounts.map((acc) => acc.accountNumber);
  const transactions = [];
  for (let i = 0; i < sampleSize; i++) {
    const transaction = {
      id: casual.uuid,
      date: casual.date("DD-MM-YYYY HH:mm:ss"),
      amount: casual.integer(20000, 10000000),
      currency: "IDR",
      transactionCode: pickSample(transactionCodes),
      accountNumber: pickSample(sourceAccounts),
    };

    const receiverOrSenderBase = {};

    if (transaction.transactionCode == INTER_BANK_TCODE) {
      receiverOrSenderBase.bankCode = casual.integer(100, 200);
    }

    if (i % 3 == 0) {
      transaction.sender = {
        ...receiverOrSenderBase,
        accountNumber: casual.card_number(),
        accountHolderName: casual.name,
      };
    } else {
      transaction.receiver = {
        ...receiverOrSenderBase,
        accountNumber: casual.card_number(),
        accountHolderName: casual.name,
      };
    }
    transactions.push(transaction);
  }
  return transactions;
};

module.exports = (sampleSize) => {
  const transactionTypes = generateTransactionTypes();
  const accounts = generateAccounts();
  return {
    transactionTypes: transactionTypes,
    accounts: accounts,
    transactions: generateTransactions(sampleSize, transactionTypes, accounts),
  };
};
