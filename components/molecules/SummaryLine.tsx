interface SummaryLineProps{
  name: string;
  amount: number;
  [props: string]: unknown;
  grandTotal?: boolean;
};

const SummaryLine:React.FC<SummaryLineProps> = (props): JSX.Element=> {
    const {name, amount, grandTotal, ...other} = props
  return (
      <div className="summary_line-content">
          <h3>
              {name}
          </h3>
          <p>
              $ {amount.toLocaleString("en-US")}
          </p>
      </div>
  )
};
export default SummaryLine;
