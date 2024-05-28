# indirect-cashflow-analyzer

Create Indirect Cash Flow Statement Calculation using prompt below

Information Required:
•	Income Statement: You'll need the net income figure and details of non-cash expenses (e.g., depreciation, amortization).
•	Balance Sheet (Comparative): You'll need the beginning and ending balances for specific accounts, including: 
o	Current Assets (e.g., cash, accounts receivable, inventory)
o	Current Liabilities (e.g., accounts payable, accrued expenses)
o	Non-Current Assets (for significant purchases or sales)
o	Equity (for issuance or repurchase of stock)
o	Long-Term Debt (for issuance or repayment of debt)
Steps:
1.	Cash Flow from Operating Activities:
o	Start with Net Income from the Income Statement.
o	Adjust for Non-Cash Expenses: Add back depreciation, amortization, and any other non-cash expenses included in the net income calculation.
o	Adjust for Changes in Working Capital: 
	Analyze the changes in current asset and liability accounts between the beginning and ending balance sheets. 
	Current Assets: 
				- Increase in accounts receivables will be subtracted 					from net income.
				- Increase in Inventory will be subtracted from net 					income.
				- Increase in prepaid expenses will be subtracted from 				net income.
				- Decrease in accounts receivables will be added from 				net income.
				- Decrease in Inventory will be added to net income.
				- Decrease in prepaid expenses will be added to net 					income.
	Current Liabilities: 
-	Increase in accounts payable will be added to the net income.
-	Increase in expense payables will be added to the net income.
-	Increase in the current portion of long-term debt will be added to the net income.
-	Decrease in accounts payable will be subtracted from net income.
-	Decrease in expense payables will be subtracted from the net income.
-	Decrease in the current portion of long-term debt will be subtracted from the net income.
2.	Cash Flow from Investing Activities:
o	Identify cash inflows from selling investments or property, plant, and equipment (PPE).
o	Identify cash outflows from purchasing investments or PPE.
o	Calculate Cash Flow from Investing Activities by subtracting cash outflows from cash inflows.
3.	Cash Flow from Financing Activities:
o	Identify cash inflows from issuing stock or taking on long-term debt.
o	Identify cash outflows from repurchasing stock or repaying long-term debt.
o	Calculate Cash Flow from Financing Activities by subtracting cash outflows from cash inflows.
4.	Total Cash Flow:
o	Sum the cash flow from operating activities, investing activities, and financing activities.
Remember:
•	Analyze the changes in accounts carefully to determine if they represent cash inflows or outflows.
•	Consider using a spreadsheet to organize your calculations for better clarity.
Additional Notes:
•	You may encounter other non-cash items that require adjustments. Research specific scenarios if needed.
•	This prompt provides a general framework. Specific financial statements might require additional considerations.
By following these steps and using the provided information, you can calculate a company's cash flow statement using the indirect method.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/indirect-cashflow-analyzer.git
cd indirect-cashflow-analyzer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
