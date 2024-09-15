export function InputBox({
  label,
  amount,
  currencyOptions,
  onCurrencyChange,
  setCurrency,
  onAmountChange,
  amountDisabled = false,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        disabled={amountDisabled}
        className="w-full p-2 mb-2 border rounded"
      />
      <select
        value={setCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
